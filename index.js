const wrapper = document.querySelector(".wrapper");
const hexy = document.querySelector("#hexy");
const a = document.querySelectorAll(".normal");

//Making squares

let baseNum = Math.random() * 150;
let baseNum2 = Math.random() * 150;
let baseNum3 = Math.random() * 150;

// let oppNum1 = baseNum + 127;
// if (oppNum1 > 255) oppNum1 = oppNum1 - 255;
// let oppNum2 = baseNum2 + 127;
// if (oppNum2 > 255) oppNum2 = oppNum2 - 255;
// let oppNum3 = baseNum3 + 127;
// if (oppNum3 > 255) oppNum3 = oppNum3 - 255;

a.forEach(link => {
  link.style.backgroundColor = "black";
  color = "white";
});

const sqArray = [[]];

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 13; j++) {
    baseNum4 = Math.abs(j - 4) + Math.abs(i - 5);
    const num = Math.random();
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
      newSq.style.color = `rgb(
          ${Math.floor(baseNum + num * 80)},
          ${Math.floor(baseNum2 + num * 80)},
          ${Math.floor(baseNum3 + num * 80)})`;
      newSq.style.filter = `brightness(200)`;
      const keyFrameChoose = ["colorChange", "colorChange2"];
      newSq.style.animationName = keyFrameChoose[Math.floor(num * 2)];
      newSq.style.animationDuration = `${30 + num * 70}s`;
      const direction = ["normal", "reverse"];
      newSq.style.animationDirection = direction[Math.floor(num * 2)];
      newSq.style.animationIterationCount = "infinite";
    }
    if (i % 4 !== 0 && (i - 1) % 4 !== 0) {
      newSq.style.position = "relative";
      newSq.style.left = "50%";
    }
    // newSq.innerText = `${newSq.style.color}`;
    // newSq.style.transform = "scaleY(1)";/
    // newSq.style.fontFamily = "DejaVuSerif, serif";
    wrapper.appendChild(newSq);
  }
}

//on scroll

// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   console.log(hexy.scrollTop);
// }
