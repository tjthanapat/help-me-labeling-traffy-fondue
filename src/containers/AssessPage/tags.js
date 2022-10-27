const tagsLimit = 4;
const standardTagNames = [
  'ความปลอดภัย',
  'ความสะอาด',
  'การเดินทาง',
  'จราจร',
  'อุบัติเหตุ',
  'ถนน',
  'ป้ายจราจร',
  'ไฟจราจร',
  'สะพาน',
  'น้ำท่วม',
  'ท่อระบายน้ำ',
  'ทางม้าลาย',
  'ทางเท้า',
  'สะพานลอย',
  'รถประจำทาง',
  'ขนส่งมวลชน',
  'แสงสว่าง',
  'กีดขวาง',
  'หาบเร่แผงลอย',
  'ป้าย',
  'เสาไฟฟ้า',
  'สายไฟ',
  'คนจรจัด',
  'สัตว์จรจัด',
  'คลอง',
  'ต้นไม้',
  'ขยะ',
  'เสียงรบกวน',
  'ห้องน้ำ',
  'เจ้าหน้าที่',
];

const standardTags = () => {
  let standardTagsDefault = {};
  standardTagNames.forEach((tagName) => {
    standardTagsDefault[tagName] = [false, false];
  });
  return standardTagsDefault;
};
const customTags = {
  customTag1: ['', false],
  customTag2: ['', true],
  customTag3: ['', true],
  customTag4: ['', true],
};

export { tagsLimit, standardTagNames, standardTags, customTags };
