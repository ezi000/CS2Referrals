const categories = {
  cases: "cases",
  trading: "trading",
  gambling: "gambling",
  selling: "selling",
  other: "other",
};

type RefCardType = {
  code: string;
  category: string;
  description: string;
  img: string;
};

const RefCodesArray: RefCardType[] = [
  {
    code: "CODE",
    category: categories.cases,
    description: "DARMOWA SKRZYNKA",
    img: "/casedrop.png",
  },
  {
    code: "CODE",
    category: categories.cases,
    description: "0.3$ ZA DARMO",
    img: "/csgolive.png",
  },
  {
    code: "CODE",
    category: categories.cases,
    description: "5% DEPOZYT BONUS",
    img: "/datdrop.png",
  },
  {
    code: "CODE",
    category: categories.cases,
    description: "10% DEPOZYT BONUS I 0.7$ ZA DARMO",
    img: "/hellcase.png",
  },
  {
    code: "CODE",
    category: categories.cases,
    description: "1$ ZA DARMO",
    img: "/farmskins.png",
  },
  {
    code: "CODE",
    category: categories.cases,
    description: "5% DEPOZYT BONUS",
    img: "/g4skins.svg",
  },
  {
    code: "CODE",
    category: categories.cases,
    description: "5% DEPOZYT BONUS I 0.5$ ZA DARMO",
    img: "/csgoskins.png",
  },
  {
    code: "CODE",
    category: categories.gambling,
    description: "0.25$ ZA DARMO",
    img: "/wtfskins.png",
  },
  {
    code: "CODE",
    category: categories.selling,
    description: "???",
    img: "/shadowpay.svg",
  },
  {
    code: "CODE",
    category: categories.selling,
    description: "???",
    img: "/bitskins.png",
  },
  {
    code: "CODE",
    category: categories.trading,
    description: "???",
    img: "/tradeit.svg",
  },
];

export default RefCodesArray;
