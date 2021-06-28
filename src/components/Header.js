import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="#" key={index}>
              {car}
            </a>
          ))}

        {/* <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a> */}
      </Menu>

      <RightMenu onClick={() => setburgerStatus(true)}>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomDiv>
          <Close onClick={() => setburgerStatus(false)} />
        </CustomDiv>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">New Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Finding Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 17px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 17px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 15;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
  }
`;

const Close = styled(ClearIcon)`
  cursor: pointer;
`;

const CustomDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
