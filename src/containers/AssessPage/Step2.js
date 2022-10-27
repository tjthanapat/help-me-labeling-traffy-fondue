import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AssessStep2 = (props) => {
  const { ticketType, setTicketType, handleSubmit } = props;
  const onChangeTicketType = (event) => {
    setTicketType(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickConfirmNoneType = () => {
    handleSubmit({
      ticketType: '',
      standardTags: [],
      customTags: [],
    });
  };

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold">2. เลือกประเภท</h2>
      <p className="my-2">ข้อความข้างต้นจัดอยู่ในประเภทใด</p>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          row
          value={ticketType}
          onChange={onChangeTicketType}
        >
          <FormControlLabel
            value="ร้องเรียน"
            control={<Radio />}
            label="เรื่องร้องเรียน"
          />
          <FormControlLabel
            value="เสนอแนะ"
            control={<Radio />}
            label="ข้อเสนอแนะ"
          />
          <FormControlLabel
            value="สอบถาม"
            control={<Radio />}
            label="เรื่องสอบถาม"
          />
        </RadioGroup>
      </FormControl>
      <div className="mt-2">
        <button
          onClick={handleClickOpen}
          type="button"
          className="border border-red-500 bg-red-500 text-white rounded-md w-32 px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 "
        >
          ไม่ใช่ทั้งหมด
        </button>
        <p className="text-gray-500 mt-2">
          กดปุ่มนี้หากข้อความไม่ใช่ทั้งเรื่องร้องเรียน ข้อเสนอแนะ
          หรือเรื่องสอบถาม
        </p>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>โปรดยืนยัน</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ข้อความที่อ่านไม่ใช่ทั้งเรื่องร้องเรียน ข้อเสนอแนะ
              หรือเรื่องสอบถาม
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ย้อนกลับ</Button>
            <Button onClick={handleClickConfirmNoneType}>ยืนยัน</Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default AssessStep2;
