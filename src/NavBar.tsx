import styled from "styled-components";
import { Button, Stack } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <>
      <Nav>
        <StyledNavBar>
          <Stack direction="row" spacing={2}>
            <Link
              to="#cases"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="text">CASES</StyledButton>
            </Link>
            <Link
              to="#market"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="text">BUY & SELL SKINS</StyledButton>
            </Link>
            <Link
              to="#trading"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="text">TRADE</StyledButton>
            </Link>
            <Link
              to="#selling"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="text">Cash-out skins</StyledButton>
            </Link>
            <Link
              to="#gambling"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="text">GAMBLE</StyledButton>
            </Link>
            <Link
              to="#other"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="text">OTHER</StyledButton>
            </Link>
          </Stack>
        </StyledNavBar>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0 0.5rem 0;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
  background-color: #1e1c1c;
`;

const StyledNavBar = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    font-size: 1rem;
    font-weight: 600;
    &.MuiButton-colorPrimary {
      color: rgba(0, 255, 255, 0.7);
      background-color: #1e1c1c;
      &:hover {
        background-color: #41404057;
      }
    }
    @media (max-width: 992px) {
      width: fit-content;
      font-size: 0.7rem;
    }
  }
`;
