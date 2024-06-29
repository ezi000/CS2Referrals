import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        If you want to list your site contact me: tszczesniak36@gmail.com
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0.5rem 0 0.5rem 0;
  height: 3rem;
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: 10;
  background-color: #1e1c1c;
`;
