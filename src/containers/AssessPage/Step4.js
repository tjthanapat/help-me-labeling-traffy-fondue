import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AssessStep4 = (props) => {
  const { ticketType, selectedTags } = props;
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [confirmedTags, setConfirmedTags] = useState({
    standard: [],
    custom: [],
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
      if (selectedTags['custom'][tagId][0] != '') {
        count += 1;
        customTags.push(selectedTags['custom'][tagId][0]);
      }
    }
    setConfirmedTags({ standard: standardTags, custom: customTags });
    if (count >= 1) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  }, [selectedTags]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{ marginTop: '28px', marginBottom: '36px' }}
        fullWidth
        disabled={!allowSubmit}
      >
        ส่ง
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ตรวจสอบอีกครั้ง</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ประเภทที่เลือก คือ {ticketType}
            <br />
            หัวข้อที่เลือก คือ{' '}
            {confirmedTags['standard'].concat(confirmedTags['custom']).join(', ')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>กลับไปแก้ไข</Button>
          <Button onClick={handleClose}>ยืนยัน</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AssessStep4;
