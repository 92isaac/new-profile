import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { tools } from "../utils/constant";

const Skills = () => {
  return (
    <Wrapper>
      <div className="skill-left">
        <div className="about-me">
          <h1>About</h1>
          <div className="me">
            <span></span>
            <h1>Me</h1>
          </div>

          <a href="/Isaac Oluwatobi Sangodare 2023..pdf" className="btn">
            View CV
          </a>
        </div>
      </div>
      <div className="skill-right">
        <section>
          <h1>About Me</h1>
          <p className="skill-text">
          Experienced Frontend Engineer with expertise in JavaScript, React, Redux, Next.js, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.
          </p>
          <div className="skill-bar">
            <p className="skillBar-header">Skills</p>
            {tools.map((tool, index) => {
              return (
                <ProgressBar
                  language={tool?.language}
                  level={tool?.completed}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-black-2);
  width: 100%;
  display: flex;
  .skill-left {
    width: 40%;
    .about-me {
      width: 70%;
      margin: 80px auto;
      h1 {
        font-family: var(--poppins-font);
        color: var(--clr-white);
        font-weight: 800;
        font-size: 5.2rem;
      }
      .me {
        display: flex;
        align-items: center;
        margin-top: -22px;
        span {
          margin-right: 30px;
          display: block;
          width: 177px;
          height: 48px;
          background-color: var(--clr-white);
        }
      }
      button {
        margin-top: 40px;
      }
    }
  }
  .skill-right {
    width: 60%;
    background-color: var(--clr-primary-1);
    section {
      width: 90%;
      margin: 50px auto;
      h1 {
        display: none;
      }
    }
    .skill-text {
      font-family: var(--roboto-font);
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6;
      text-align: justify;
      color: var(--clr-white-1);
      margin-bottom: 40px;
    }
    .skill-bar {
      width: 100%;
      .skillBar-header {
        color: var(--clr-black-2);
        font-family: var(--roboto-font);
        font-weight: 800;
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 851px) {
    .skill-left {
      .about-me {
        width: 90%;
        h1 {
          font-weight: 700;
          font-size: 4.2rem;
        }
        .me {
          span {
            display: none;
          }
        }
        button {
          margin-top: 60px;
        }
      }
    }
    .skill-right {
      section {
        width: 95%;
        margin: 50px auto;
      }
      .skill-text {
        font-size: 1.15rem;
        line-height: 1.3;
      }
    }
  }
  @media (max-width: 600px) {
    .skill-left {
      display: none;
    }
    .skill-right {
      width: 100%;
      section {
        h1 {
          font-family: var(--poppins-font);
          color: var(--clr-black-2);
          font-weight: 700;
          font-size: 2.5rem;
          display: block;
        }
      }
      .skill-text {
        font-size: 1.1rem;
        line-height: 1.4;
        font-weight: 400;
        text-align: left;
      }
    }
  }
`;

export default Skills;
