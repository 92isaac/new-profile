import styled from "styled-components";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="footer">
        <div className="certify">
          <p>&#169; {year} </p>
        </div>
        <div className="number">
          <a href="tel:+2348068290320">Telephone: +2348068290320</a>
        </div>
        <div className="social-links">
          <a
            href="https://twitter.com/SangoTobi"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare />
          </a>

          <a
            href="https://www.instagram.com/donibot/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/isaac-sangodare-744765148/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
          <a href="https://github.com/92isaac" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-black-1);
  height: 110px;
  width: 100%;
  .footer {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: white;
    .certify {
      p {
        font-family: var(--inter-font);
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 20px;
      }
    }
    .number {
      a {
        font-family: var(--inter-font);
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 20px;
        text-decoration: none;
        color: var(--clr-white);
      }
    }
    .social-links {
      svg {
        margin-right: 40px;
        font-size: 1.3rem;
        color: var(--clr-white);
        cursor: pointer;
      }
    }
  }
  @media (max-width: 850px) {
    .footer {
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      .social-links {
        svg {
          margin-right: 15px;
          font-size: 1.2rem;
          color: var(--clr-white);
          cursor: pointer;
        }
      }
    }
  }
`;

export default Footer;
