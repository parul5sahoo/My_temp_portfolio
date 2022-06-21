import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.main`
  position: fixed;
  bottom: 0;
  right: 4rem;

  .handles {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:after {
      content: "";
      display: block;
      height: 6.5rem;
      border-left: 2px solid ${(props) => props.theme.textPrimary};
      opacity: 0.8;
    }

    a {
      .icon {
        font-size: 18pt;
        color: ${(props) => props.theme.textPrimary};
        margin-bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: 620px) {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    right: 2rem;
  }

  @media only screen and (max-width: 1500px) {
    position: absolute;
  }
`;

const Contact = () => {
  return (
    <Container>
      <div className="handles">
        <a href="https://github.com/parul5sahoo" target="_blank">
          <FaGithub className="icon interactive" />
        </a>
        <a
          href="https://www.linkedin.com/in/parul-sahoo-4bb8301a0/"
          target="_blank"
        >
          <FaLinkedinIn className="icon interactive" />
        </a>

        <a href="https://medium.com/@parulsahoo5jan" target="_blank">
          <FaMedium className="icon interactive" />
        </a>
        <a href="https://www.hackerrank.com/parulsahoo5jan" target="_blank">
          <FaHackerrank className="icon interactive" />
        </a>
        <a href="mailto:parulsahoo5jan@gmail.com" target="_blank">
          <FaRegEnvelope className="icon interactive" />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
