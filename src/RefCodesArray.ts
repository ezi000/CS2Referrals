const categories = {
  cases: "cases",
  trading: "trading",
  gambling: "gambling",
  selling: "selling",
  market: "market",
  giveaways: "giveaways",
  other: "other",
};

type RefCardType = {
  codeURL: string;
  category: string;
  description: string;
  img: string;
};

const RefCodesArray: RefCardType[] = [
  {
    codeURL: "https://csgo-skins.com",
    category: categories.cases,
    description: "$0.50 for free and 5% deposit bonus",
    img: "/csgoskins.png",
  },
  {
    codeURL: "https://dmarket.com?ref=Sta3G1LmEH",
    category: categories.market,
    description: "???",
    img: "/dmarket.svg",
  },
  {
    codeURL: "http://waxpeer.com/r/picek",
    category: categories.market,
    description: "???",
    img: "/waxpeer.png",
  },
  {
    codeURL: "https://shadowpay.com/?utm_campaign=u4jPTIdJ93l24aE",
    category: categories.market,
    description: "???",
    img: "/shadowpay.svg",
  },
  {
    codeURL: "https://avan.market/?r=picek",
    category: categories.market,
    description: "???",
    img: "/avanmarket.svg",
  },
  {
    codeURL: "https://tradeit.gg/?aff=PICEK",
    category: categories.trading,
    description: "Get $5 for Free in a balance and a 35% topup bonus",
    img: "/tradeit.svg",
  },
  {
    codeURL: "https://skinswap.com/r/picek",
    category: categories.trading,
    description: "???",
    img: "/skinswap.png",
  },
  {
    codeURL: "https://swap.gg/?r=ROkmIEOQRK",
    category: categories.trading,
    description: "???",
    img: "/swapgg.png",
  },
  {
    codeURL: "https://rapidskins.com/a/picek",
    category: categories.trading,
    description: "???",
    img: "/rapidskins.png",
  },
  {
    codeURL: "https://skins.cash/user/ref/76561198163192791",
    category: categories.selling,
    description: "???",
    img: "/skinscash.png",
  },
  {
    codeURL: "https://lis-skins.ru/?rf=2305931",
    category: categories.selling,
    description: "???",
    img: "/lisskins.svg",
  },
  {
    codeURL: "https://skincashier.com/r/PICEK",
    category: categories.selling,
    description: "???",
    img: "/skincashier.png",
  },
  {
    codeURL: "https://avan.market/?r=",
    category: categories.selling,
    description: "???",
    img: "/avanmarket.svg",
  },
  {
    codeURL: "https://swap.gg/?r=ROkmIEOQRK",
    category: categories.selling,
    description: "???",
    img: "/swapgg.png",
  },
  {
    codeURL: "https://csgoempire.com/r/Picekk",
    category: categories.gambling,
    description: "FREE CASE + VERY GOOD PRICE CS2 SKINS IN WITHDRAW",
    img: "/csgoempire.png",
  },
  {
    codeURL: "https://csgobig.com/r/picekk",
    category: categories.gambling,
    description: "3 free cases + 5% deposit",
    img: "/csgobig.png",
  },
  {
    codeURL: "http://clash.gg/r/PICEKKK",
    category: categories.gambling,
    description: "Instant RakeBack + 5% deposit",
    img: "/clashgg.png",
  },
  {
    codeURL: "https://www.webshare.io/?referral_code=qm9lknmneh31",
    category: categories.other,
    description: "10 proxies for free",
    img: "/webshare.svg",
  },
];

export default RefCodesArray;
