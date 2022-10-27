import React from 'react';

const SuccessPage = () => {
  const handleClickRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-screen-lg mx-5 my-10 py-10 px-6 rounded-2xl shadow-xl bg-white">
        <p className="text-8xl text-center mt-10">🙏</p>
        <h1 className="text-4xl font-bold text-center mt-5">Thank you!</h1>
        <p className="text-xl text-center mt-1">
          ขอบคุณที่ร่วมเป็นส่วนหนึ่งในงานกรรมกรข้อมูล
        </p>
        <div className="mt-10">
          <p className="mb-2 text-center">มีเวลาอีกสักหน่อยมั้ย?</p>
          <button
            onClick={handleClickRefresh}
            type="button"
            className="border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full mb-5 px-4 py-2 transition duration-500 ease select-none"
          >
            ช่วยอีกครั้ง
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
