let motherBoard = [
  [
    "motherboard",
    "ASUS",
    "A520M",
    3_800_000,
    "./item-picture/A520M.jpg",
    "motherboard",
    "ASUS",
    "Z490",
    8_500_000,
    "./item-picture/Z490.jpg",
    "motherboard",
    "ASUS",
    "Z590-A",
    8_450_000,
    "./item-picture/Z590-A.jpg",
    "motherboard",
    "ASUS",
    "B560M-A",
    5_800_000,
    "./item-picture/B550.jpg",
    "motherboard",
    "ASUS",
    "B550",
    7_300_000,
    "./item-picture/B550.jpg",
    "motherboard",
    "ASUS",
    "H510M-K",
    4_700_000,
    "./item-picture/H510M.jpg",
    "motherboard",
    "ASUS",
    "Z690-P",
    10_100_000,
    "./item-picture/Z690.jpg",
    "motherboard",
    "ASUS",
    "X670E",
    32_800_000,
    "./item-picture/X670E.jpg",
  ],
];
let finalMbCatArray = [];
for (let i = 0; i < motherBoard.length; i++) {
  let mbProductObj = new Object();
  mbProductObj.id = i + 1;
  mbProductObj.name = motherBoard[i][0];
  mbProductObj.brand = motherBoard[i][1];
  mbProductObj.model = motherBoard[i][2];
  mbProductObj.price = motherBoard[i][3];
  mbProductObj.src = motherBoard[i][4];
  finalMbCatArray.push(mbProductObj);
  mbProductObj.description = function () {
    return ` ${this.brand} - ${this.model}`;
  };
}
console.log(finalMbCatArray);
