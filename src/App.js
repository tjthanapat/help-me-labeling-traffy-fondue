import React, { useEffect, useState } from 'react';
import AssessPage from './containers/AssessPage';
import LandingPage from './containers/LandingPage';
import SuccessPage from './containers/SuccessPage';
import getTicket from './functions/getTicket';

const App = () => {
  const [error, setError] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [loadingTicket, setLoadingTicket] = useState(true);
  const [isTicketLeft, setIsTicketLeft] = useState(true);
  const [showAssessPage, setShowAssessPage] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const random_ticket = await getTicket();
        if (!!random_ticket['noTicketLeft']) {
          setIsTicketLeft(false);
          console.log('There is no ticket left to assess.');
        } else {
          setTicket(random_ticket);
          console.log(random_ticket);
        }
        setLoadingTicket(false);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    fetchData();
  }, []);

  if (success) {
    return <SuccessPage />;
  } else if (!!error) {
    return <p>{error.message}</p>;
  } else if (showAssessPage) {
    return (
      <>
        <AssessPage
          ticket={ticket}
          setSuccess={setSuccess}
          setError={setError}
        />
      </>
    );
  } else {
    return (
      <LandingPage
        loadingTicket={loadingTicket}
        setShowAssessPage={setShowAssessPage}
        isTicketLeft={isTicketLeft}
      />
    );
  }
};

const AppNoTicket = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-screen-md mx-5 my-10 py-10 px-6 rounded-2xl">
        <h1 className="hidden">Help Me Labeling Traffy Fondue</h1>
        <div className="text-center">
          <p className="text-5xl font-bold">HELP ME</p>
          <p className="text-3xl font-bold">Labeling Traffy Fondue</p>
        </div>
        <p className="text-xl text-center mt-5">
          มาร่วมเป็นส่วนหนึ่งในงานกรรมกรข้อมูลกันเถอะ!
        </p>
        <p className="text-md mt-1">
          ช่วยติดแท็ก (labeling) ให้กับข้อมูลปัญหาที่ถูกแจ้งเข้ามาในระบบ Traffy
          Fondue
          เนื่องจากผู้ใช้ส่งเรื่องเข้ามาในระบบจำนวนมากโดยไม่แยกประเภทมาให้
          ซึ่งทำให้การส่งต่อเรื่องนั้นๆไปยังหน่วยงานที่รับผิดชอบล่าช้า
          <i>
            เราจึงอยากจะสร้างโมเดลเพื่อแยกข้อมูลปัญหาที่ไม่ถูกจัดประเภทและทำให้สามารถจัดการหรือแก้ไขปัญหาได้อย่างรวดเร็วและทันเวลา
          </i>
        </p>

        <div className="mt-10">
          <p className="text-center text-lg">
            ตอนนี้ข้อความติดแท็กครบหมดแล้ว
            <br />
            ขอบคุณค้าบ
          </p>
        </div>
        <footer className="mt-5">
          <p className="text-sm text-gray-500 text-center">
            Created by tjthanapat
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AppNoTicket;
