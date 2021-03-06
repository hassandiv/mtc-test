import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../App.css";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import Fb from "../images/Fb.svg";
import Tw from "../images/Tw.svg";
import In from "../images/In.svg";
import Cart from "../images/Cart.svg";

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  @media (max-width: 991px) {
    position: relative;
  }
`;
const StyledFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
  max-width: 100%;
  height: 90px;
  @media (max-width: 991px) {
    display: block;
    height: 100%;
  }
`;
const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  @media (max-width: 991px) {
    position: relative;
    top: auto;
    display: block;
    height: 39px;
  }
  @media (max-width: 550px) {
    height: 25px;
  }
`;
const StyledUl = styled.ul`
  padding: 0px;
  margin: 0px;
`;
const StyledLi = styled.li`
  list-style: none;
  padding: 5px 0px;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    position: absolute;
    top: 30px;
  }
  &:nth-child(1) {
    left: 15%;
  }
  &:nth-child(2) {
    left: 23%;
  }
  &:nth-child(3) {
    right: 29%;
  }
  &:nth-child(4) {
    right: 18%;
  }
  @media (max-width: 991px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
    }
    &:nth-child(4) {
      padding-bottom: 50px;
    }
  }
  a {
    color: #ffffff;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 18px;
    opacity: 1;
    font-family: "Roboto", sans-serif;
  }
  a:hover {
    text-decoration: none;
  }
`;
const StyledButton = styled.button`
  position: absolute;
  top: 26px;
  right: 0%;
  color: #fff;
  width: 162px;
  height: 45px;
  background: transparent;
  border-radius: 25px;
  opacity: 1;
  border: 1px solid #ffffff;
  text-transform: uppercase;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  &:before {
    content: "";
    background-image: url(${Cart});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
  @media (max-width: 991px) {
    top: 0px;
    width: 150px;
    height: 38.5px;
  }
  @media (max-width: 550px) {
    width: 60px;
    height: 40px;
    border: 0px;
    padding-right: 0px;
    &:before {
      width: 25px;
      height: 25px;
      margin-top: -10px;
    }
  }
`;
const StyledSpan = styled.span`
  @media (max-width: 550px) {
    display: none;
  }
`;
const StyledSoicalImg = styled.img`
  display: block;
  width: 17px;
  height: 17px;
  margin-right: 15px;
`;
const StyledSocialFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 0px;
  @media (max-width: 991px) {
    position: relative;
    top: 170px;
    //top: 140px;
    bottom: 0px;
    left: 0px;
    z-index: 9999;
    justify-content: flex-start;
  }
`;

const Header = () => {
  return (
          <StyledHeader>
                <Navbar expand="lg">
                    <StyledFlex>
                        <Navbar.Brand href="#home">
                            <StyledImg className="d-block mx-auto" src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <StyledSocialFlex>
                                <Link to="/">
                                    <StyledSoicalImg src={Fb} alt="facebook" />
                                </Link>
                                <Link to="/">
                                    <StyledSoicalImg src={Tw} alt="twitter" />
                                </Link>
                                <Link to="/">
                                    <StyledSoicalImg src={In} alt="instagrame" />
                                </Link>
                            </StyledSocialFlex>
                            <StyledUl>
                                <Nav>
                                    <StyledLi>
                                      <Link to="/">Shop</Link>
                                    </StyledLi>
                                    <StyledLi>
                                      <Link to="/">Plan My Kitchen</Link>
                                    </StyledLi>
                                    <StyledLi>
                                      <Link to="/">About us</Link>
                                    </StyledLi>
                                    <StyledLi>
                                      <Link to="/">Gallery</Link>
                                    </StyledLi>
                                </Nav>
                            </StyledUl>
                        </Navbar.Collapse>
                        <StyledButton>
                            <StyledSpan>My Order</StyledSpan>
                        </StyledButton>
                    </StyledFlex>
                </Navbar>
          </StyledHeader>
    );
};

export default Header;
