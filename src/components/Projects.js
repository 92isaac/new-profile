import styled from "styled-components";
import { prevProjects } from "../utils/constant";
import { BiLinkExternal, BiGitBranch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <TopWrapper>
        <div className="projects">
          <h1 className="projects-header">
            <span className="orange-color">Completed </span> <br /> Projects
          </h1>
          <div className="development-card">
            {prevProjects.map((project) => {
              return (
                <div className="card" key={project.img}>
                  <div className="img-container">
                    <img src={project.img} alt={project.link} />
                    <Link to={`/${project.id}`} className="link">
                      <FaSearch />
                    </Link>
                  </div>
                  <div className="links-btn">
                    <a
                      href={project.link}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLinkExternal />
                    </a>
                    <a
                      href={project.github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiGitBranch />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TopWrapper>
      <BottomWraper>
        <div className="collaborate">
          <div className="collaborate-header">
            <div className="header-text">
              <h1> Why you should </h1>
              <p>
                Collaborate{" "}
                <span style={{ color: "#fff" }}>with me on your next</span>{" "}
                project
              </p>
            </div>
          </div>
          <div className="collaborate-body">
            <p>
              I can bring modern and best practices to your company. My previous
              experience as a frontend web developer as equipped me with enough
              experience of creating web-based applications in a fast-paced
              environment. This experience, in addition to the knowledge I
              gained while learning about various tools and languages for
              building successful web-application, makes me confident that I
              would be a valuable asset to your company
            </p>
          </div>
        </div>
      </BottomWraper>
    </>
  );
};

const TopWrapper = styled.div`
  width: 100%;
  background-color: var(--clr-black-3);
  .projects {
    width: 80%;
    margin: 0 auto;
    .projects-header {
      color: var(--clr-white);
      padding-top: 7%;
      padding-bottom: 3%;
      font-family: var(--poppins-font);
      font-size: 3rem;
      font-weight: 700;

      .orange-color {
        color: var(--clr-primary-1);
      }
    }
    .development-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .card {
        margin: 30px 0;
        .img-container {
          width: 350px;
          height: 400px;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            transition: var(--transition);
            z-index:-1;

          }
          .link {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--clr-primary-5);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            transition: var(--transition);
            opacity: 0;
            cursor: pointer;
            svg {
              font-size: 1.25rem;
              color: var(--clr-white);
              z-index:999;
            }
          }
        }
        .img-container:hover img {
          opacity: 0.5;
        }
        .img-container:hover .link {
          opacity: 1;
        }
        .links-btn {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
        }
      }
    }
  }
`;

const BottomWraper = styled.div`
  .collaborate-header {
    background-color: var(--clr-primary-1);
    .header-text {
      width: 80%;
      margin: 0 auto;
      padding: 20px 0;
      h1 {
        font-family: var(--poppins-font);
        font-weight: 300;
        font-size: 2rem;
        color: var(--clr-white);
      }
      p {
        font-family: var(--poppins-font);
        font-weight: 700;
        font-size: 3rem;
      }
    }
  }
  .collaborate-body {
    width: 80%;
    margin: 0 auto;
    padding-top: 35px;
    padding-bottom: 60px;
    p {
      width: 55%;
      text-align: justify;
      font-family: var(--roboto-font);
      font-size: 1rem;
      font-weight: 400;
      color: var(--clr-black-1);
      line-height: 1.5rem;
    }
  }
  @media (max-width: 800px) {
    .collaborate-header {
      .header-text {
        width: 80%;
        margin: 0 auto;
        padding: 20px 0;
        h1 {
          line-height: 0.9;
        }
        p {
          line-height: 1.3;
        }
      }
    }
    .collaborate-body {
      P {
        width: 100%;
        text-align: left;
      }
    }
  }
  @media (max-width: 560px) {
    .collaborate-header {
      .header-text {
        width: 90%;
        margin: 0 auto;
        padding: 20px 0;
        h1 {
          line-height: 1.7;
        }
        p {
          line-height: 1.2;
          font-size: 2rem;
        }
      }
    }
    .collaborate-body {
      width: 90%;
    }
  }
`;

export default Projects;
