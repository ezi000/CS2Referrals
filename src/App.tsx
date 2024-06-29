import styled from "styled-components";
import RefCodes from "./RefCodes";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Body>
          <NavBar />
          <RefCodes />
          <Footer />
        </Body>
      </BrowserRouter>
    </>
  );
}

const Body = styled.div`
  font-family: "Lato", sans-serif;
  color: white;
  background-image: url("/background2.jpg");
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
