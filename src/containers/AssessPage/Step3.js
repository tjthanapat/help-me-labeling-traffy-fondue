import React, { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { tagsLimit, standardTagNames } from './tags';

const AssessStep3 = (props) => {
  const { selectedTags, setSelectedTags } = props;

  const handleChangeStandardTagCheckbox = (event) => {
    const tagName = event.target.value;
    const tagUpdated = [
      !selectedTags['standard'][tagName][0],
      selectedTags['standard'][tagName][1],
    ];

    setSelectedTags({
      ...selectedTags,
      standard: { ...selectedTags['standard'], [tagName]: tagUpdated },
    });
  };

  const handleChangeCustomTagInput = (event) => {
    const tagId = event.target.name;
    const tagUpdated = [event.target.value, selectedTags['custom'][tagId][1]];

    setSelectedTags({
      ...selectedTags,
      custom: { ...selectedTags['custom'], [tagId]: tagUpdated },
    });
  };

  const [countSelectedTags, setCountSelectedTags] = useState(0);

  useEffect(() => {
    let count = 0;
    for (const tagName in selectedTags['standard']) {
      if (selectedTags['standard'][tagName][0]) {
        count += 1;
      }
    }
    for (const tagId in selectedTags['custom']) {
      if (selectedTags['custom'][tagId][0] != '') {
        count += 1;
      }
    }
    // console.log(`SelectedStandardTags: ${count}`);
    setCountSelectedTags(count);
  }, [selectedTags]);

  useEffect(() => {
    let selectedStandardTagsUpdated = selectedTags['standard'];
    let selectedCustomTagsUpdated = selectedTags['custom'];

    // Reached the limit case
    if (countSelectedTags == tagsLimit) {
      for (const tagName in selectedTags['standard']) {
        let disabledCheckbox = true;
        if (selectedTags['standard'][tagName][0]) {
          disabledCheckbox = false;
        }
        const tagUpdated = [
          selectedTags['standard'][tagName][0],
          disabledCheckbox,
        ];
        selectedStandardTagsUpdated = {
          ...selectedStandardTagsUpdated,
          [tagName]: tagUpdated,
        };
      }
      for (const tagId in selectedTags['custom']) {
        let disabledInput = true;
        if (selectedTags['custom'][tagId][0] != '') {
          disabledInput = false;
        }
        const tagUpdated = [selectedTags['custom'][tagId][0], disabledInput];
        selectedCustomTagsUpdated = {
          ...selectedCustomTagsUpdated,
          [tagId]: tagUpdated,
        };
      }

      // At least one available selection case.
    } else {
      for (const tagName in selectedTags['standard']) {
        const tagUpdated = [selectedTags['standard'][tagName][0], false];
        selectedStandardTagsUpdated = {
          ...selectedStandardTagsUpdated,
          [tagName]: tagUpdated,
        };
      }

      const customTag1Updated = [
        selectedTags['custom']['customTag1'][0],
        false,
      ];
      selectedCustomTagsUpdated = {
        ...selectedCustomTagsUpdated,
        customTag1: customTag1Updated,
      };

      if (selectedTags['custom']['customTag1'][0] != '') {
        const customTag2Updated = [
          selectedTags['custom']['customTag2'][0],
          false,
        ];
        selectedCustomTagsUpdated = {
          ...selectedCustomTagsUpdated,
          customTag2: customTag2Updated,
        };

        if (selectedTags['custom']['customTag2'][0] != '') {
          const customTag3Updated = [
            selectedTags['custom']['customTag3'][0],
            false,
          ];
          selectedCustomTagsUpdated = {
            ...selectedCustomTagsUpdated,
            customTag3: customTag3Updated,
          };
        }

        if (selectedTags['custom']['customTag3'][0] != '') {
          const customTag4Updated = [
            selectedTags['custom']['customTag4'][0],
            false,
          ];
          selectedCustomTagsUpdated = {
            ...selectedCustomTagsUpdated,
            customTag4: customTag4Updated,
          };
        }
      }
    }

    setSelectedTags({
      standard: selectedStandardTagsUpdated,
      custom: selectedCustomTagsUpdated,
    });
  }, [countSelectedTags]);

  return (
    <>
      <section className="my-5 relative">
        <div
          className={`${
            props.show ? 'hidden' : ''
          } absolute bg-white bg-opacity-50 h-full w-full z-50`}
        ></div>
        <div>
          <h2 className="text-3xl font-bold">3. เลือกหัวข้อ</h2>
          <p className="my-2">
            เลือกหัวข้อที่เกี่ยวข้องให้กับข้อความที่อ่านข้างต้น
            <span className="font-bold">
              อย่างน้อย 1 เรื่อง สามารถเลือกได้สูงสุด 4 เรื่อง
            </span>{' '}
            เพิ่มหัวข้อใหม่ในช่องอื่นๆ หากไม่มีในตัวเลือกที่ต้องการ
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {standardTagNames.map((tagName, i) => {
              return (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={selectedTags['standard'][tagName][0]}
                      onChange={handleChangeStandardTagCheckbox}
                      disabled={selectedTags['standard'][tagName][1]}
                      value={tagName}
                    />
                  }
                  label={tagName}
                />
              );
            })}
          </div>

          <TextField
            label="อื่น ๆ"
            name="customTag1"
            value={selectedTags['custom']['customTag1'][0]}
            onChange={handleChangeCustomTagInput}
            disabled={selectedTags['custom']['customTag1'][1]}
            sx={{
              ...(selectedTags['custom']['customTag1'][1] && {
                display: 'none',
              }),
              marginBottom: '12px',
            }}
            variant="standard"
            fullWidth
          />
          <TextField
            label="อื่น ๆ"
            name="customTag2"
            value={selectedTags['custom']['customTag2'][0]}
            onChange={handleChangeCustomTagInput}
            disabled={selectedTags['custom']['customTag2'][1]}
            sx={{
              ...(selectedTags['custom']['customTag2'][1] && {
                display: 'none',
              }),
              marginBottom: '12px',
            }}
            variant="standard"
            fullWidth
          />
          <TextField
            label="อื่น ๆ"
            name="customTag3"
            value={selectedTags['custom']['customTag3'][0]}
            onChange={handleChangeCustomTagInput}
            disabled={selectedTags['custom']['customTag3'][1]}
            sx={{
              ...(selectedTags['custom']['customTag3'][1] && {
                display: 'none',
              }),
              marginBottom: '12px',
            }}
            variant="standard"
            fullWidth
          />
          <TextField
            label="อื่น ๆ"
            name="customTag4"
            value={selectedTags['custom']['customTag4'][0]}
            onChange={handleChangeCustomTagInput}
            disabled={selectedTags['custom']['customTag4'][1]}
            sx={{
              ...(selectedTags['custom']['customTag4'][1] && {
                display: 'none',
              }),
              marginBottom: '12px',
            }}
            variant="standard"
            fullWidth
          />
        </div>
      </section>
    </>
  );
};

export default AssessStep3;
