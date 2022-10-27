import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AssessStep4 = (props) => {
  const {
    ticketType,
    selectedTags,
    openConfirmBox2,
    setOpenConfirmBox2,
    handleSubmit,
  } = props;

  const [allowSubmit, setAllowSubmit] = useState(false);
  const [confirmedTags, setConfirmedTags] = useState({
    standardTags: [],
    customTags: [],
  });

  useEffect(() => {
    let count = 0;
    let standardTags = [];
    let customTags = [];
    for (const tagName in selectedTags['standard']) {
      if (selectedTags['standard'][tagName][0]) {
        count += 1;
        standardTags.push(tagName);
      }
    }
    for (const tagId in selectedTags['custom']) {
      if (selectedTags['custom'][tagId][0] !== '') {
        count += 1;
        customTags.push(selectedTags['custom'][tagId][0]);
      }
    }
    setConfirmedTags({ standardTags, customTags });
    if (count >= 1) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  }, [selectedTags]);

  const handleClickConfirm = () => {
    handleSubmit({
      ticketType: ticketType,
      ...confirmedTags,
    });
  };

  const handleClickOpen = () => {
    setOpenConfirmBox2(true);
  };
  const handleClose = () => {
    setOpenConfirmBox2(false);
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        type="button"
        className="border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full my-5 px-4 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
        disabled={!allowSubmit}
      >
        เรียบร้อย!
      </button>
      <Dialog open={openConfirmBox2} onClose={handleClose}>
        <DialogTitle>ตรวจสอบอีกครั้ง</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ประเภทที่เลือก คือ {ticketType}
            <br />
            หัวข้อที่เลือก คือ{' '}
            {confirmedTags['standardTags']
              .concat(confirmedTags['customTags'])
              .join(', ')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>กลับไปแก้ไข</Button>
          <Button onClick={handleClickConfirm}>ยืนยัน</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AssessStep4;
