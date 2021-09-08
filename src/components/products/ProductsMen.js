import React from "react";

const ProductsMen = [
  {
    id: 1,
    productName: "Men Jacket",
    description: "Men Jacket|Collection Autumn 2021",
    price: "150€",

    thumb: {
      pic1: require("../Images/menJacket.jpg").default,
      pic2: require("../Images/menJacket1.jpg").default,
      pic3: require("../Images/menJacket2.jpg").default,
      pic4: require("../Images/menJacket3.jpg").default,
    },
  },
  {
    id: 2,
    productName: "Men`s Jogging Top",
    description: "Men`s Jogging Top|Collection Autumn 2021",
    price: "250€",

    thumb: {
      pic1: require("../Images/menJoggingTop.jpg").default,
      pic2: require("../Images/menJoggingTop1.jpg").default,
      pic3: require("../Images/menJoggingTop2.jpg").default,
      pic4: require("../Images/menJoggingTop3.jpg").default,
    },
  },
  {
    id: 3,
    productName: "Men Pants",
    description: "Men Pants|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menPants.jpg").default,
      pic2: require("../Images/menPants1.jpg").default,
      pic3: require("../Images/menPants2.jpg").default,
      pic4: require("../Images/menPants3.jpg").default,
    },
  },
  {
    id: 4,
    productName: "Men Sweater",
    description: "Men Sweater|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menSweater.jpg").default,
      pic2: require("../Images/menSweater1.jpg").default,
      pic3: require("../Images/menSweater2.jpg").default,
      pic4: require("../Images/menSweater3.jpg").default,
    },
  },
  {
    id: 5,
    productName: "Men Jacket",
    description: "Men Jacket|Collection Autumn 2021",
    price: "150€",

    thumb: {
      pic1: require("../Images/menJacket.jpg").default,
      pic2: require("../Images/menJacket1.jpg").default,
      pic3: require("../Images/menJacket2.jpg").default,
      pic4: require("../Images/menJacket3.jpg").default,
    },
  },
  {
    id: 6,
    productName: "Men`s Jogging Top",
    description: "Men`s Jogging Top|Collection Autumn 2021",
    price: "250€",

    thumb: {
      pic1: require("../Images/menJoggingTop.jpg").default,
      pic2: require("../Images/menJoggingTop1.jpg").default,
      pic3: require("../Images/menJoggingTop2.jpg").default,
      pic4: require("../Images/menJoggingTop3.jpg").default,
    },
  },
  {
    id: 7,
    productName: "Men Pants",
    description: "Men Pants|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menPants.jpg").default,
      pic2: require("../Images/menPants1.jpg").default,
      pic3: require("../Images/menPants2.jpg").default,
      pic4: require("../Images/menPants3.jpg").default,
    },
  },
  {
    id: 8,
    productName: "Men Sweater",
    description: "Men Sweater|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menSweater.jpg").default,
      pic2: require("../Images/menSweater1.jpg").default,
      pic3: require("../Images/menSweater2.jpg").default,
      pic4: require("../Images/menSweater3.jpg").default,
    },
  },
  {
    id: 9,
    productName: "Men Jacket",
    description: "Men Jacket|Collection Autumn 2021",
    price: "150€",

    thumb: {
      pic1: require("../Images/menJacket.jpg").default,
      pic2: require("../Images/menJacket1.jpg").default,
      pic3: require("../Images/menJacket2.jpg").default,
      pic4: require("../Images/menJacket3.jpg").default,
    },
  },
  {
    id: 10,
    productName: "Men`s Jogging Top",
    description: "Men`s Jogging Top|Collection Autumn 2021",
    price: "250€",

    thumb: {
      pic1: require("../Images/menJoggingTop.jpg").default,
      pic2: require("../Images/menJoggingTop1.jpg").default,
      pic3: require("../Images/menJoggingTop2.jpg").default,
      pic4: require("../Images/menJoggingTop3.jpg").default,
    },
  },
  {
    id: 11,
    productName: "Men Pants",
    description: "Men Pants|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menPants.jpg").default,
      pic2: require("../Images/menPants1.jpg").default,
      pic3: require("../Images/menPants2.jpg").default,
      pic4: require("../Images/menPants3.jpg").default,
    },
  },
  {
    id: 12,
    productName: "Men Sweater",
    description: "Men Sweater|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menSweater.jpg").default,
      pic2: require("../Images/menSweater1.jpg").default,
      pic3: require("../Images/menSweater2.jpg").default,
      pic4: require("../Images/menSweater3.jpg").default,
    },
  },
  {
    id: 13,
    productName: "Men Jacket",
    description: "Men Jacket|Collection Autumn 2021",
    price: "150€",

    thumb: {
      pic1: require("../Images/menJacket.jpg").default,
      pic2: require("../Images/menJacket1.jpg").default,
      pic3: require("../Images/menJacket2.jpg").default,
      pic4: require("../Images/menJacket3.jpg").default,
    },
  },
  {
    id: 14,
    productName: "Men`s Jogging Top",
    description: "Men`s Jogging Top|Collection Autumn 2021",
    price: "250€",

    thumb: {
      pic1: require("../Images/menJoggingTop.jpg").default,
      pic2: require("../Images/menJoggingTop1.jpg").default,
      pic3: require("../Images/menJoggingTop2.jpg").default,
      pic4: require("../Images/menJoggingTop3.jpg").default,
    },
  },
  {
    id: 15,
    productName: "Men Pants",
    description: "Men Pants|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menPants.jpg").default,
      pic2: require("../Images/menPants1.jpg").default,
      pic3: require("../Images/menPants2.jpg").default,
      pic4: require("../Images/menPants3.jpg").default,
    },
  },
  {
    id: 16,
    productName: "Men Sweater",
    description: "Men Sweater|Collection Autumn 2021",
    price: "100€",

    thumb: {
      pic1: require("../Images/menSweater.jpg").default,
      pic2: require("../Images/menSweater1.jpg").default,
      pic3: require("../Images/menSweater2.jpg").default,
      pic4: require("../Images/menSweater3.jpg").default,
    },
  },
];

export default ProductsMen;
