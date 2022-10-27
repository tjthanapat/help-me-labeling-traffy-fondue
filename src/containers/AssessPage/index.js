import React, { useState } from 'react';
import AssessStep2 from './Step2';
import AssessStep3 from './Step3';
import AssessStep4 from './Step4';

import { standardTags, customTags } from './tags';

const AssessPage = () => {
  const [ticketType, setTicketType] = useState(null);
  const [selectedTags, setSelectedTags] = useState({
    standard: standardTags(),
    custom: customTags,
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-screen-lg mx-5 my-10 p-6 rounded-2xl shadow-xl bg-white">
        <h1 className="text-5xl font-bold mt-10">
          Help Me Labeling Traffy Fondue
        </h1>
        <p className="text-xl mt-5">
          ทำเพียง 3 ขั้นตอนง่ายๆ คุณก็จะได้ร่วมเป็นส่วนหนึ่งในงานกรรมกรข้อมูล!
        </p>
        <section className="my-10">
          <h2 className="text-3xl font-bold">1. อ่านข้อความ</h2>
          <p className="my-2">อ่านข้อความต่อไปนี้</p>
          <div className="border p-6 rounded-xl">
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
        <AssessStep2 ticketType={ticketType} setTicketType={setTicketType} />
        <AssessStep3
          show={!!ticketType}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <AssessStep4 ticketType={ticketType} selectedTags={selectedTags} />
      </div>
    </div>
  );
};

export default AssessPage;
