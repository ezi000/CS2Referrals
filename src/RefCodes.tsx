import RefCodesArray from "./RefCodesArray";
import styled from "styled-components";
import RefCard from "./RefCard";

type GroupedRefCards = {
  [key: string]: RefCard[];
};
type CategoryHeaders = {
  [key: string]: string;
};

type RefCard = {
  codeURL: string;
  category: string;
  description: string;
  img: string;
};

const RefCodes = () => {
  const groupedRefCards: GroupedRefCards = RefCodesArray.reduce(
    (acc: GroupedRefCards, refCard: RefCard) => {
      if (!acc[refCard.category]) {
        acc[refCard.category] = [];
      }
      acc[refCard.category].push(refCard);
      return acc;
    },
    {}
  );

  const categoryHeaders: CategoryHeaders = {
    gambling: "🎲 GAMBLE 🎲",
    trading: "🔄 TRADE SKINS 🔄",
    cases: "📦 OPEN CASES 📦",
    market: "💰 BUY & SELL SKINS 💰",
    other: "🌐 OTHER SITES 🌐",
    giveaways: "🎁 GIVEAWAYS 🎁",
    selling: "💵 CASH-OUT SKINS 💵",
    rust: "🔨🛠️ RUST 🔨🛠️",
  };

  return (
    <>
      {Object.keys(groupedRefCards).map((category, index) => (
        <Body key={index}>
          <SiteCategoryHeader>{categoryHeaders[category]}</SiteCategoryHeader>
          <RefCardsBody id={category}>
            {groupedRefCards[category].map((refCard, index) => (
              <RefCard key={index} index={index} refCard={refCard} />
            ))}
          </RefCardsBody>
        </Body>
      ))}
    </>
  );
};

const Body = styled.div`
  margin-top: 5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SiteCategoryHeader = styled.h1`
  font-family: "Oswald", sans-serif;
  color: white;
  font-size: 3rem;
  margin: 0;
  text-align: center;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
const RefCardsBody = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: start;
  max-width: 1200px;
  width: 100%;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default RefCodes;
