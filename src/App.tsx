import styled from "styled-components";
import { Logo } from "./Logo";
import RefCodes from "./RefCodes";
function App() {
  return (
    <>
      <Body>
        <Logo />
        <RefCodes />
      </Body>
    </>
  );
}

const Body = styled.div`
  background-image: url("/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export default App;
