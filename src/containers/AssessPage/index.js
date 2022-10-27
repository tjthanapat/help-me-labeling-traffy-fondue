import React, { useState } from 'react';
import AssessStep2 from './Step2';
import AssessStep3 from './Step3';
import AssessStep4 from './Step4';
import Modal from '@mui/material/Modal';

import { standardTags, customTags } from './tags';
import saveAssessment from '../../functions/saveAssessment';

const AssessPage = (props) => {
  const { ticket, setSuccess, setError } = props;
  const [openConfirmBox1, setOpenConfirmBox1] = useState(false);
  const [openConfirmBox2, setOpenConfirmBox2] = useState(false);

  const [ticketType, setTicketType] = useState(null);
  const [selectedTags, setSelectedTags] = useState({
    standard: standardTags(),
    custom: customTags,
  });

  const [saving, setSaving] = useState(false);

  const handleSubmit = async (assessedTicket) => {
    setSaving(true);
    setOpenConfirmBox1(false);
    setOpenConfirmBox2(false);
    try {
      const assessment = {
        ticketId: ticket['id'],
        ...assessedTicket
      };
      console.log(assessment);
      await saveAssessment(assessment);
      setSuccess(true);
    } catch (err) {
      setError(err)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-screen-lg mx-5 my-10 p-6 rounded-2xl shadow-xl bg-white">
        <h1 className="hidden">
          Help Me Labeling Traffy Fondue
        </h1>
        <div className="text-center mt-10">
          <p className="text-5xl font-bold">HELP ME</p>
          <p className="text-3xl font-bold">Labeling Traffy Fondue</p>
        </div>
        <p className="text-center text-xl mt-5">
          ทำเพียง 3 ขั้นตอนง่ายๆ คุณก็จะได้ร่วมเป็นส่วนหนึ่งในงานกรรมกรข้อมูล!
        </p>
        <section className="my-10">
          <h2 className="text-3xl font-bold">1. อ่านข้อความ</h2>
          <p className="my-2">อ่านข้อความต่อไปนี้</p>
          <div className="border p-6 rounded-xl">
            <p>{ticket['content']}</p>
          </div>
        </section>
        <AssessStep2
          ticketType={ticketType}
          setTicketType={setTicketType}
          openConfirmBox1={openConfirmBox1}
          setOpenConfirmBox1={setOpenConfirmBox1}
          handleSubmit={handleSubmit}
        />
        <AssessStep3
          show={!!ticketType}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <AssessStep4
          ticketType={ticketType}
          selectedTags={selectedTags}
          openConfirmBox2={openConfirmBox2}
          setOpenConfirmBox2={setOpenConfirmBox2}
          handleSubmit={handleSubmit}
        />
        <footer className="my-5">
          <p className="text-sm text-gray-500 text-center">
            Created by TJTHANAPAT
          </p>
        </footer>
      </div>
      <Modal open={saving}>
        <div className="flex min-h-screen justify-center items-center">
          <p className="text-white text-md">กำลังบันทึกข้อมูล</p>
        </div>
      </Modal>
    </div>
  );
};

export default AssessPage;
