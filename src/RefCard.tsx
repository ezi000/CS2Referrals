import styled from "styled-components";

type RefCardType = {
  codeURL: string;
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
  return (
    <Card key={index}>
      <RefSiteImgDiv>
        <RefSiteImg src={refCard.img} alt="refsite" />
      </RefSiteImgDiv>
      <RefandCode>
        <RefDescription>{refCard.description}</RefDescription>
        <RefCode>
          <RefCodeCopyButton
            onClick={() => {
              window.open(refCard.codeURL, "_blank");
            }}
          >
            CLICK TO CLAIM
          </RefCodeCopyButton>
        </RefCode>
      </RefandCode>
    </Card>
  );
};

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
  /* border-right: 1px solid rgba(0, 255, 255, 0.7);
  border-left: 1px solid rgba(0, 255, 255, 0.7); */
  border-radius: 1rem;
`;

const RefCodeCopyButton = styled.button`
  background-color: #222;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px dashed orange;
  border-radius: 1rem;
  justify-self: center;
  width: 90%;
  height: 80%;
  color: orange;
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
  text-transform: uppercase;
  background-color: #111;
  width: calc(100% - 1rem);
  text-align: center;
  padding: 0.5rem;
  font-weight: 600;
  border: 1px solid rgba(0, 255, 255, 0.7);
`;

const Card = styled.div`
  background-color: #222;
  border-bottom: 1px solid rgba(0, 255, 255, 0.7);
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 8px 0px rgba(0, 255, 255, 0.7);
`;

export default RefCard;
