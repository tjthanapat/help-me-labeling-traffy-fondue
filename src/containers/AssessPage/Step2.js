import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';

const AssessStep2 = () => {
  const [ticketType,setTicketType] = useState(null)
  const onChangeTicketType = (event) => {
    setTicketType(event.target.value)
  }
  return (
    <section className="my-5">
      <h2 className="text-3xl font-bold">2. เลือกประเภท</h2>
      <p>ข้อความข้างต้นเป็น ข้อร้องเรียน หรือ ข้อเสนอแนะ</p>

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
            label="ข้อร้องเรียน"
          />
          <FormControlLabel
            value="เสนอแนะ"
            control={<Radio />}
            label="ข้อเสนอแนะ"
          />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" color="error" fullWidth>ไม่ใช่ทั้งสอง</Button>

    </section>
  );
};

export default AssessStep2;
