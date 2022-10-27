import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const minTicketKey = 0;
const maxTicketKey = 673;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getTicket = async () => {
  const randomKey = getRandomInt(minTicketKey, maxTicketKey);
  console.log(randomKey);
  try {
    const q1 = query(
      collection(db, 'tickets'),
      where('isAssessed', '==', false),
      where('key', '>=', randomKey)
    );
    const snapshot1 = await getDocs(q1);
    if (snapshot1.empty) {
      const q2 = query(
        collection(db, 'tickets'),
        where('isAssessed', '==', false),
        where('key', '<', randomKey)
      );
      const snapshot2 = await getDocs(q2);
      if (snapshot2.empty) {
        return { noTicketLeft: true };
      } else {
        return { id: snapshot2.docs[0].id, ...snapshot2.docs[0].data() };
      }
    } else {
      return { id: snapshot1.docs[0].id, ...snapshot1.docs[0].data() };
    }
  } catch (err) {
    throw err;
  }
};

export default getTicket;
