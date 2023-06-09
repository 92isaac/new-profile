import styled from "styled-components";
import { motion } from "framer-motion";

const introVariants = {
  init: {
    opacity: 0,
  },
  visiual: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const Intro = () => {
  return (
    <Wrapper>
      <motion.div
        variants={introVariants}
        initial="init"
        animate="visiual"
        className="about-me"
      >
        <h4>Hello,</h4>
        <h1>I'm Isaac</h1>
        <p>
          A freelance <span>Frontend Developer </span> and a <span> Tutor</span>
        </p>
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 80vh;
  background-color: var(--clr-black-1);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-me {
    font-family: var(--poppins-font);
    h4 {
      color: var(--clr-white);
      font-weight: 500;
      font-size: 1rem;
      font-family: inherit;
    }
    h1 {
      color: var(--clr-primary-1);
      font-family: inherit;
      font-weight: 800;
      font-size: 5.2rem;
      font-style: normal;
    }
    p {
      font-family: inherit;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 38px;
      color: var(--clr-white);

      span {
        color: var(--clr-primary-1);
      }
    }
  }
  @media (max-width: 660px) {
    height: 70vh;
    .about-me {
      h1 {
        font-weight: 700;
        font-size: 4.5rem;
      }
    }
  }
`;
export default Intro;
