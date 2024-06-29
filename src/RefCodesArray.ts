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
    codeURL: "https://dmarket.com?ref=Sta3G1LmEH",
    category: categories.market,
    description: "Trade, Market and Instant Sell",
    img: "/dmarket.svg",
  },
  {
    codeURL: "http://waxpeer.com/r/picek",
    category: categories.market,
    description: "TOP DISCOUNTS",
    img: "/waxpeer.png",
  },
  {
    codeURL: "https://shadowpay.com/?utm_campaign=u4jPTIdJ93l24aE",
    category: categories.market,
    description: "TOP DISCOUNTS",
    img: "/shadowpay.svg",
  },
  {
    codeURL: "https://white.market/invite/b72f80b75f28f99f",
    category: categories.market,
    description: "FACEIT & ESL Partner",
    img: "/whitemarket.png",
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
    description: "Trade, Market and Instant Sell",
    img: "/skinswap.png",
  },
  {
    codeURL: "https://swap.gg/?r=ROkmIEOQRK",
    category: categories.trading,
    description: "30% Deposit Bonus",
    img: "/swapgg.png",
  },
  {
    codeURL: "https://rapidskins.com/a/picek",
    category: categories.trading,
    description: "Trade, Market and Instant Sell",
    img: "/rapidskins.png",
  },
  {
    codeURL: "https://skins.cash/user/ref/76561198163192791",
    category: categories.selling,
    description: "7% Bonus",
    img: "/skinscash.png",
  },
  {
    codeURL: "https://lis-skins.ru/?rf=2305931",
    category: categories.selling,
    description: "3% Bonus",
    img: "/lisskins.svg",
  },
  {
    codeURL: "https://skincashier.com/r/PICEK",
    category: categories.selling,
    description: "3% Bonus",
    img: "/skincashier.png",
  },
  {
    codeURL: "https://avan.market/?r=",
    category: categories.selling,
    description: "2% Bonus",
    img: "/avanmarket.svg",
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
    codeURL: "https://plg.bet/?r=PICEKK",
    category: categories.gambling,
    description: "5000 coins for the first invited user every day",
    img: "/csgopolygon.png",
  },
  {
    codeURL: "https://casehug.com/r/PICEK",
    category: categories.cases,
    description: "3 FREE CASE + Daily Bonus",
    img: "/casehug.svg",
  },
  {
    codeURL: "https://insane.gg/ref/picek",
    category: categories.cases,
    description: "3,1zł FREE  + 10% deposit",
    img: "/csgocases.svg",
  },
  {
    codeURL: "https://farmskins.com/ref-picek",
    category: categories.cases,
    description: "0,9$ FREE",
    img: "/farmskins.png",
  },
  {
    codeURL: "https://key-drop.com/?code=T7VSPEAM",
    category: categories.cases,
    description: "0,5$ FREE + 10% deposit",
    img: "/keydrop.png",
  },
  {
    codeURL: "https://www.webshare.io/?referral_code=qm9lknmneh31",
    category: categories.other,
    description: "10 proxies for free",
    img: "/webshare.svg",
  },
];

export default RefCodesArray;
