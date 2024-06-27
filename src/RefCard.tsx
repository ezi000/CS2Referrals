import { useState } from "react";
import styled from "styled-components";

type RefCardType = {
  code: string;
  category: string;
  description: string;
  img: string;
};

export const RefCard = ({
  refCard,
  index,
}: {
  refCard: RefCardType;
  index: number;
}) => {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  const handleCopyClick = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setVisibleTooltip(index.toString());
    setTimeout(() => {
      setVisibleTooltip(null);
    }, 1000);
  };

  return (
    <Card key={index}>
      <RefSiteImgDiv>
        <RefSiteImg src={refCard.img} alt="refsite" />
      </RefSiteImgDiv>
      <RefandCode>
        <RefDescription>{refCard.description}</RefDescription>
        <RefCode>
          <RefCodeCopyButton
            onClick={() => handleCopyClick(refCard.code, index)}
          >
            {refCard.code}
            <ButtonLabel>Click to copy</ButtonLabel>
          </RefCodeCopyButton>
          {visibleTooltip === index.toString() && (
            <Tooltip>Code copied</Tooltip>
          )}
        </RefCode>
      </RefandCode>
    </Card>
  );
};

const ButtonLabel = styled.div`
  position: absolute;
  background-color: #222;
  font-weight: bold;
  top: 0;
  font-size: 0.8rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: #555;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 99;
  opacity: 1;
  transition: opacity 0.3s;
`;

const RefSiteImgDiv = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RefSiteImg = styled.img`
  max-width: 90%;
  max-height: 100%;
  margin: auto;
`;

const RefandCode = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid lightblue;
  border-left: 1px solid lightblue;
  border-radius: 1rem;
`;

const RefCodeCopyButton = styled.button`
  background-color: #222;
  border: 1px dashed orange;
  border-radius: 1rem;
  justify-self: center;
  width: 90%;
  height: 80%;
  color: white;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    background-color: #3333332b;
  }
`;

const RefCode = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const RefDescription = styled.div`
  background-color: #111;
  width: calc(100% - 1rem);
  text-align: center;
  padding: 0.5rem;
  border: 1px solid lightblue;
`;

const Card = styled.div`
  background-color: #222;
  border-bottom: 1px solid lightblue;
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RefCard;
