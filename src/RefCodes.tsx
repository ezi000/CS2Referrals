import RefCodesArray from "./RefCodesArray";
import styled from "styled-components";
import { useState } from "react";

const RefCodes = () => {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  const handleCopyClick = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setVisibleTooltip(index.toString());
    setTimeout(() => {
      setVisibleTooltip(null);
    }, 1000);
  };

  return (
    <RefCardsBody>
      {RefCodesArray.map((refCard, index) => (
        <RefCard key={index}>
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
        </RefCard>
      ))}
    </RefCardsBody>
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
  border-right: 1px solid green;
  border-left: 1px solid green;
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
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  border: 1px solid green;
`;

const RefCardsBody = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: flex-start;
  width: 60%;
  @media screen and (max-width: 716px) {
    width: 90%;
  }
`;

const RefCard = styled.div`
  background-color: #222;
  border-bottom: 1px solid green;
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RefCodes;
