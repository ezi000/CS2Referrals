import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink as Link } from "react-router-hash-link";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  const navItems = [
    { to: "#market", label: "BUY & SELL SKINS" },
    { to: "#trading", label: "TRADE" },
    { to: "#selling", label: "CASH-OUT SKINS" },
    { to: "#gambling", label: "GAMBLE" },
    { to: "#cases", label: "CASES" },
    //{ to: "#giveaways", label: "GIVEAWAYS" },
    { to: "#other", label: "OTHER" },
  ];

  return (
    <>
      <Nav>
        <StyledNavBar>
          <HamburgerMenu>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: "gray" }} />
            </IconButton>
            <StyledDrawer
              anchor="top"
              open={isOpen}
              onClose={toggleDrawer(false)}
            >
              <StyledList
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {navItems.map((item) => (
                  <StyledListItem key={item.label}>
                    <StyledLink
                      to={item.to}
                      scroll={(el) =>
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                    >
                      <HamburguerMenuItems>{item.label}</HamburguerMenuItems>
                    </StyledLink>
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledDrawer>
          </HamburgerMenu>
          <DesktopMenu>
            <Stack direction="row" spacing={2}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  <StyledButton variant="text">{item.label}</StyledButton>
                </Link>
              ))}
            </Stack>
          </DesktopMenu>
        </StyledNavBar>
      </Nav>
    </>
  );
};

const HamburguerMenuItems = styled.div`
  color: rgba(0, 255, 255, 0.7);
  padding: 0.5rem;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0 0.5rem 0;
  height: 3rem;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
  background-color: #1e1c1c;
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #1e1c1c;
    z-index: 1;
  }
`;

const StyledList = styled(List)`
  && {
    padding: 0;
  }
`;

const StyledListItem = styled(ListItem)`
  && {
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
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
    font-family: "Oswald", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0, 255, 255, 0.7);
    background-color: #1e1c1c;
    &:hover {
      background-color: #41404057;
    }
    @media (max-width: 992px) {
      font-size: 0.9rem;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
