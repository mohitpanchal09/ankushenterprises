// import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "./responsive";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 45px;
  margin: 20px;
  text-align: center;

  ${mobile({ fontSize: "30px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: #ed1d2b;
  color: white;

  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Are you looking for customized resin?</Title>
      <Desc>Please contact us.</Desc>
      <Link to="/contact-us" style={{ textDecoration: "none" }}>
        <button className="enquiry-button">
          Enquiry Now &nbsp;{" "}
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0377 8.59497H1.45282"
              stroke="white"
              stroke-width="1.85849"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5418 1.13L20.0378 8.5937L12.5418 16.0586"
              stroke="white"
              stroke-width="1.85849"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Link>
    </Container>
  );
};

export default Newsletter;
