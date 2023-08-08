// ? computerPart & accessories
let monitors = [
  ["monitor", "benQ", 7_960_000, "./item-picture/GW2780.jpg", "GW2780"],
  ["monitor", "benQ", 20_300_000, "./item-picture/XL2740.jpg", "XL2740"],
  ["monitor", "benQ", 8_110_000, "./item-picture/EW2480.jpg", "EW2480"],
  ["monitor", "benQ", 30_600_000, "./item-picture/EW3280U.jpg", "EW3280U"],
  ["monitor", "ASUS", 6_200_000, "./item-picture/VZ24EHE.jpg", "VZ24EHE"],
  ["monitor", "ASUS", 7_780_000, "./item-picture/VP228HI.jpg", "VP228HI"],
  ["monitor", "SAMSUNG", 3_660_000, "./item-picture/S22A330.jpg", "S22A330"],
  ["monitor", "SAMSUNG", 6_900_000, "./item-picture/C310.jpg", "C310"],
  ["monitor", "Gplus", 4_860_000, "./item-picture/GDM-245LN.jpg", "GDM-245LN"],
  ["monitor", "Gplus", 4_380_000, "./item-picture/GW2780.jpg", "GDM-226LN"],
];
let idTag = "monitors";
let monitorsValuesArray = [];
for (let i = 0; i < monitors.length; i++) {
  let monitorNewObject = new Object();
  monitorNewObject.id = idTag + (i + 1);
  monitorNewObject.catName = monitors[i][1];
  monitorNewObject.brand = monitors[i][2];
  monitorNewObject.price = monitors[i][3];
  monitorNewObject.src = monitors[i][4];
  monitorNewObject.model = monitors[i][5];
  monitorNewObject.description = function () {
    return ` ${this.brand} - ${this.model}`;
  };
  monitorsValuesArray.push(monitorNewObject);
}
export { monitorsValuesArray };
