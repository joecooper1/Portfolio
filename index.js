const wrapper = document.querySelector(".wrapper");
const hexy = document.querySelector("#hexy");
const a = document.querySelectorAll(".normal");

//Making squares

const baseNum = Math.random() * 150;
const baseNum2 = Math.random() * 150;
const baseNum3 = Math.random() * 150;

let oppNum1 = baseNum + 127;
if (oppNum1 > 255) oppNum1 = oppNum1 - 255;
let oppNum2 = baseNum2 + 127;
if (oppNum2 > 255) oppNum2 = oppNum2 - 255;
let oppNum3 = baseNum3 + 127;
if (oppNum3 > 255) oppNum3 = oppNum3 - 255;

a.forEach(link => {
  // link.style.backgroundColor = `rgb(${oppNum1}, ${baseNum2}, ${oppNum3})`;
  link.style.backgroundColor = "black";
  color = "white";
});

const sqArray = [[]];

for (let i = 1; i < 30; i++) {
  for (let j = 1; j < 13; j++) {
    sqArray.push(["hi"]);
    sqArray[i].push(hexy.cloneNode(true));
    let newSq = sqArray[i][j];
    newSq.style.zIndex = `${i}`;
    newSq.style.gridRow = `${i}, ${i}`;
    newSq.style.gridColumn = `${j}, ${j}`;
    newSq.style.fontSize = "300px";
    newSq.style.textAlign = "center";
    if (i % 2 === 0) {
      newSq.style.color = "black";
      newSq.style.opacity = "20%";
    } else {
      const num = Math.random();
      newSq.style.color = `rgb(
          ${Math.floor(baseNum + num * 80)},
          ${Math.floor(baseNum2 + num * 80)},
          ${Math.floor(baseNum3 + num * 80)})`;
    }
    if (i % 4 !== 0 && (i - 1) % 4 !== 0) {
      newSq.style.position = "relative";
      newSq.style.left = "50%";
    }
    wrapper.appendChild(newSq);
  }
}

hexy.remove();
