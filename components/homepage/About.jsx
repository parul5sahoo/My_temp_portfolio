import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Title, Header } from "../shared/";
import { SkillSet } from "../../content/skillsSet";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundPrimary};

  .sectionContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .leftSection {
      max-width: 900px;
      width: 100%;
      flex: 3;
      overflow-x: hidden;

      p {
        font-size: 13pt;
        font-weight: 400;
        opacity: 0.9;
        margin-bottom: 1.25rem;
        color: ${(props) => props.theme.textPrimary};

        a {
          color: ${(props) => props.theme.accentColor};
          text-decoration: none;
        }
      }

      ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;
        color: ${(props) => props.theme.textPrimary};

        li {
          position: relative;
          margin-bottom: 0.75rem;
          padding-left: 20px;

          &:before {
            content: "▹";
            position: absolute;
            left: 0;
            color: ${(props) => props.theme.accentColor};
            line-height: 20px;
          }
        }
      }
    }

    .rightSection {
      display: grid;
      place-items: center;
      flex: 1;
      padding: 0 1.5rem;

      canvas {
        width: calc(100% - 4rem);
        min-width: 480px;
        height: auto;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .sectionContainer {
      .leftSection {
        p {
          font-size: 12pt;
        }
      }
    }
  }

  @media only screen and (max-width: 930px) {
    display: block;

    .sectionContainer {
      flex-direction: column;

      .leftSection {
        align-self: center;
      }

      .rightSection {
        padding: 0;
        width: 100%;

        canvas {
          width: 100%;
          max-width: 534px;
          min-width: 0;
        }
      }
    }
  }
`;

const About = () => {
  const theme = useTheme();

  useEffect(() => {
    eval(
      `try {TagCanvas.Start('myCanvas', '',
         {textColour: '${theme.textPrimary}',
         outlineColour: 'transparent',         
         imageMode: "both", 
         shape: 'hcylinder',
         lock: 'x',
         imagePosition:"top", 
         initial: [0,-0.1],
         fadeIn: 3000,
         zoom:0.9,
         wheelZoom: false,
         pinchZoom: true,
         shuffleTags: true,
         frontSelect: true,
         textHeight: 18,
         reverse: true,
         depth: 0.5,
         maxSpeed: 0.04,
         minSpeed: 0.02});
          }
          catch(e)
          {
            console.log(e)
            document.getElementById('myCanvasContainer').style.display = 'none';
          } `
    );
  }, [theme]);

  return (
    <Container id="about">
      <Title style={{ marginBottom: "unset" }}>About Me</Title>
      <div className="sectionContainer">
        <div className="leftSection">
          <p>Hello, I'm Parul,</p>
          <p>
            A CSE graduate from
            <a
              className="interactive"
              href="https://www.cet.edu.in/"
              target="_blank"
            >
              {" "}
              Odisha University of Technology and Research{" "}
            </a>.
          </p>
          <p>
          I am fond of automation and new age technologies and 
          currently focused on Blockchain technology,  DevOps tools. 
          </p>
          <p>
          Being a part of the Kubernetes Open Source community, I also like the whole concept of Open Sourcing 
          and endorse it to a great extent, within my reach. I am always looking forward to bagging new opportunities 
          to gain knowledge of something new or getting a deeper insight of technologies that I am already aware of.
          </p>

          <p>Here are a few technologies I've been working with recently :</p>
          <ul>
            <li>Kubernetes</li>
            <li>Golang</li>
            <li>CI/CD</li>
            <li>AWS</li>
          </ul>
        </div>
        <div className="rightSection">
          <canvas width="650" height="650" id="myCanvas">
            <p>
              Anything in here will be replaced on browsers that support the
              canvas element
            </p>
            <ul>
              {SkillSet.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  id={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    eval(
                      `TagCanvas.TagToFront("myCanvas", {id: "${item.name}", active: 1});`
                    );
                  }}
                >
                  <li>
                    <img
                      width="56"
                      height="56"
                      src={`/images/svg/${item.image}.svg`}
                    />
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </canvas>
        </div>
      </div>
    </Container>
  );
};

export default About;
