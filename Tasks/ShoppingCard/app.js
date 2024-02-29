let main = document.getElementById("container");

let cd1 = {
  img: "./img/t-1.webp",
  name: "BULLMER",
  cap: "Oversized Cotton T-shirt",
  price: "Rs. 554",
  price2: "Rs. 1499",
  price3: "(63% OFF)",
};
let cd2 = {
  img: "./img/t-2.webp",
  name: "Stormborn",
  cap: "Pure Cotton Oversized T-shirt",
  price: "Rs. 679 ",
  price2: "Rs. 1699",
  price3: "(60% OFF)",
};
let cd3 = {
  img: "./img/t-3.webp",
  name: "HRX by Hrithik Roshan",
  cap: "Slim Rapid Dry Raglan T-shirt",
  price: "Rs. 539 ",
  price2: "Rs. 999",
  price3: "(46% OFF)",
};
let cd4 = {
  img: "./img/t-4.webp",
  name: "BULLMER",
  cap: "Printed Cotton T-shirt",
  price: "Rs. 499",
  price2: "Rs. 1299",
  price3: "(Rs. 800 OFF)",
};
let cd5 = {
  img: "./img/t-5.webp",
  name: " H&M",
  cap: "Regular Fit T-shirt",
  price: "Rs. 340 ",
  price2: "Rs. 1099",
  price3: "(69% OFF)",
};
let cd6 = {
  img: "./img/t-6.webp",
  name: "HERE&NOW",
  cap: "Printed Round Neck Pure Cotton T-shirt",
  price: "Rs. 359 ",
  price2: "Rs. 899",
  price3: "(60% OFF)",
};
let cd7 = {
  img: "./img/t-7.webp",
  name: "Urbano Fashion",
  cap: "Slim Tropical Printed Pure Cotton T-shirt",
  price: "Rs. 494 ",
  price2: "",
  price3: "",
};
let cd8 = {
  img: "./img/t-8.webp",
  name: "Stormborn",
  cap: "Pure Cotton Oversized T-shirt",
  price: "Rs. 539 ",
  price2: "Rs. 999",
  price3: "(60% OFF)",
};
let cd9 = {
  img: "./img/t-5.webp",
  name: " H&M",
  cap: "Regular Fit T-shirt",
  price: "Rs. 359 ",
  price2: "Rs. 999",
  price3: "(64% OFF)",
};
let cd10 = {
  img: "./img/t-10.webp",
  name: "Stormborn",
  cap: "Pure Cotton Oversized T-shirt",
  price: "Rs. 597 ",
  price2: "Rs. 1659",
  price3: "(Rs. 720 OFF)",
};

let arr = [cd1, cd2, cd3, cd4, cd5, cd6, cd7, cd8, cd9, cd10];
let i;
function add() {
  let card = `<img src="${arr[i].img}" alt="">
            <h4>${arr[i].name}</h4>
            <p>${arr[i].cap}</p>
            <span class='s-1'>${arr[i].price}</span>
            <span class='s-2'>${arr[i].price2}</span>
            <span class='s-3'>${arr[i].price3}</span>`;

  let box = document.createElement("div");
  box.className = "c-1";
  box.innerHTML = card;
  main.appendChild(box);
}

for (i = 0; i <= 10; i++) {
  add();
}
