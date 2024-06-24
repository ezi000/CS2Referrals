import RefCodesArray from "./RefCodesArray";
import styled from "styled-components";
const RefCodes = () => {
  return (
    <>
      <RefCardsBody>
        {RefCodesArray.map((refCard, index) => {
          return (
            <RefCard key={index}>
              <RefSiteImgDiv>
                <RefSiteImg src={refCard.img} alt="refsite" />
              </RefSiteImgDiv>
              <RefandCode>
                <RefDescription>{refCard.description}</RefDescription>
                <RefCode>
                  <RefCodeCopyButton
                    onClick={() => {
                      navigator.clipboard.writeText(refCard.code);
                    }}
                  >
                    {refCard.code}
                  </RefCodeCopyButton>
                </RefCode>
              </RefandCode>
            </RefCard>
          );
        })}
      </RefCardsBody>
    </>
  );
};

const RefSiteImgDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RefSiteImg = styled.img`
  max-width: 90%;
  max-height: 100%;
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
`;

const RefCode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RefDescription = styled.div`
  background-color: #111;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0 0.5rem 0;
  border: 1px solid green;
`;

const RefCardsBody = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 60%;
`;

const RefCard = styled.div`
  background-color: #222;
  border-bottom: 1px solid green;
  border-radius: 1rem;
  color: white;
  width: calc(25% - 3rem);
  @media screen and (max-width: 768px) {
    width: calc(50% - 1rem);
  }
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default RefCodes;
