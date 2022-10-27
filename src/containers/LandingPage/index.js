import React from 'react';

const LandingPage = (props) => {
  const { loadingTicket, isTicketLeft, setShowAssessPage } = props;
  const handleClickStart = () => {
    setShowAssessPage(true);
  };
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
        {isTicketLeft ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={handleClickStart}
              className="border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full px-4 py-2 transition duration-500 ease select-none disabled:bg-slate-400 disabled:border-slate-400 disabled:cursor-not-allowed"
              disabled={loadingTicket}
            >
              {loadingTicket ? 'กำลังโหลด' : 'เริ่มกันเลย!'}
            </button>
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-center text-lg">
              ตอนนี้ไม่ยังไม่มีข้อความที่รอติดแท็ก
              <br />
              ไว้เจอกันใหม่เร็วๆนี้
            </p>
          </div>
        )}
        <footer className="mt-5">
          <p className="text-sm text-gray-500 text-center">
            Created by TJTHANAPAT
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
