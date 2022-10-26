import React from "react";
import AssessStep2 from "./Step2";
import AssessStep3 from "./Step3";

const AssessPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-screen-lg mx-5 p-6 bg-white">
        <h1 className="text-5xl font-bold">Help Me Labeling Traffy Fondue</h1>
        <section className="my-5">
          <h2 className="text-3xl font-bold">1. อ่าน</h2>
          <p>อ่านข้อความต่อไปนี้</p>
          <div className="border p-3 rounded-xl">
            <p>
              สติกเกอร์ บึ้มแกงค์แพทยสภาแมชีนโดนัท มอบตัวแฟกซ์พาสต้า
              เบอร์รีเนอะเพียวแฟลชซูฮก เบิร์ดนพมาศเลิฟ ปาร์ตี้ซัมเมอร์
              สโตร์วิภัชภาคโมหจริตอัลไซเมอร์ เมาท์เซาท์สโลว์ ฮัลโหลโฟมมาร์คโฮป
              สะบึมส์โปรเจกต์จ๊อกกี้ บุ๋นมาม่าหม่านโถว ซามูไร
              ซิมโฟนี่ทรูโปรเจกเตอร์เจ็ต เพลซฟรังก์สามแยกดีพาร์ทเมนท์แพทยสภา
              เคลียร์ไฮกุนอมินีวิดีโอก่อนหน้า มอลล์
            </p>
          </div>
        </section>
        <AssessStep2/>
        <AssessStep3/>
      </div>
    </div>
  );
};

export default AssessPage;
