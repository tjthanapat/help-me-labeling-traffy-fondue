import { db } from '../firebase';
import { doc, collection, addDoc, updateDoc } from 'firebase/firestore';

const updateTicketStatus = async (ticketId) => {
  try {
    const ticketRef = doc(db, 'tickets', ticketId);
    await updateDoc(ticketRef, {
      isAssessed: true,
    });
  } catch (err) {
    throw err;
  }
};

const saveAssessment = async (assessment) => {
  try {
    const { ticketId, ticketType, standardTags, customTags } = assessment;
    await addDoc(collection(db, 'assessments'), {
      ticketId,
      ticketType,
      standardTags,
      customTags,
    });
    await updateTicketStatus(ticketId);
  } catch (err) {
    throw err;
  }
};

export default saveAssessment;
