let cpu = [
  ["cpu", "intel", "core i3", "7100", 1_300_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "7700", 1_800_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "8700", 1_900_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "9100", 1_950_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "9700", 2_000_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "10600", 2_300_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "11700", 2_500_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "12700", 3_300_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i3", "13700", 4_300_000, "./item-picture/corei3.jpg"],
  ["cpu", "intel", "core i5", "8700", 5_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "9600", 6_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "10400", 7_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "10600", 8_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "11400", 9_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "11600", 10_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "12400", 11_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "12600", 12_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "13400", 13_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i5", "13600", 14_300_000, "./item-picture/corei5.jpg"],
  ["cpu", "intel", "core i7", "7700", 10_900_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i7", "8700", 11_300_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i7", "9700", 12_300_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i7", "10600", 12_600_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i7", "11600", 13_300_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i7", "12600", 13_700_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i7", "13600", 13_900_000, "./item-picture/corei7.jpg"],
  ["cpu", "intel", "core i9", "8700", 11_300_000, "./item-picture/corei9.jpg"],
  ["cpu", "intel", "core i9", "9700", 11_900_000, "./item-picture/corei9.jpg"],
  ["cpu", "intel", "core i9", "10600", 12_300_000, "./item-picture/corei9.jpg"],
  ["cpu", "intel", "core i9", "11600", 12_900_000, "./item-picture/corei9.jpg"],
  ["cpu", "intel", "core i9", "12600", 13_300_000, "./item-picture/corei9.jpg"],
  ["cpu", "intel", "core i9", "13600", 14_300_000, "./item-picture/corei9.jpg"],
];
let finalCpuCatArray = [];
for (let i = 0; i < cpu.length; i++) {
  let cpuProductObj = new Object();
  cpuProductObj.id = i + 1;
  cpuProductObj.name = cpu[i][0];
  cpuProductObj.brand = cpu[i][1];
  cpuProductObj.model = cpu[i][2];
  cpuProductObj.series = cpu[i][3];
  cpuProductObj.price = cpu[i][4];
  cpuProductObj.src = [i][5];
  console.log(finalCpuCatArray.length);
  finalCpuCatArray.push(cpuProductObj);
  cpuProductObj.description = function () {
    return ` ${this.brand} - ${this.model}`;
  };
}
console.log(finalCpuCatArray);
