import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

const tags = [
  "ถนน",
  "น้ำท่วม",
  "ทางเท้า",
  "แสงสว่าง",
  "ความสะอาด",
  "ความปลอดภัย",
  "ท่อระบายน้ำ",
  "สะพาน",
  "สายไฟ",
  "กีดขวาง",
  "คลอง",
  "ต้นไม้",
  "เสียงรบกวน",
  "สัตว์จรจัด",
  "คนจรจัด",
  "การเดินทาง",
  "สอบถาม",
  "ป้าย",
  "ห้องน้ำ",
  "ป้ายจราจร",
];

const AssessStep3 = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <section className="my-5">
      <h2 className="text-3xl font-bold">3. เลือกหมวดหมู่</h2>
      <p>เลือกหมวดหมู่อย่างน้อย 1 เรื่อง</p>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={true} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
        </FormGroup>
      </FormControl>
      {tags.map((tag, i) => {
        return <p key={i}>{tag}</p>;
      })}
    </section>
  );
};

export default AssessStep3;
