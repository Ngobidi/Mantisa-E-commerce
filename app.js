const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "MANTISA SQUARE",
    price: 300,
    colors: [
      {
        code: "PALE GREEN",
        img: "./img/MANTISA.png",
      },
      {
        code: "lightblue",
        img: "./img/MANTISA.png",
      },
    ],
  },
  {
    id: 2,
    title: "MALL",
    price: 305,
    colors: [
      {
        code: "YELLOW",
        img: "./img/MANTISA3.png",
      },
      {
        code: "BROWN",
        img: "./img/MANTISA4.png",
      },
    ],
  },
  {
    id: 3,
    title: "HALL 1",
    price: 310,
    colors: [
      {
        code: "PURPLE",
        img: "./img/MANTISA 5.png",
      },
      {
        code: "INDIGO",
        img: "./img/Mantisa 6.png",
      },
    ],
  },
  {
    id: 4,
    title: "hall 2",
    price: 313,
    colors: [
      {
        code: "red",
        img: "./img/Mantisa 7.png",
      },
      {
        code: "light black",
        img: "./img/Mantisa 9.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hall 6",
    price: 315,
    colors: [
      {
        code: "grey",
        img: "./img/Mantisa a.png",
      },
      {
        code: "pale blue",
        img: "./img/Mantisa b.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "green";
      size.style.color = "pale green";
    });
    size.style.backgroundColor = "pale green";
    size.style.color = "green";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
