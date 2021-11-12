import React from "react";
import styled from "styled-components";
import HomeOne from "../images/img89.jpg";
import HomeTwo from "../images/img84.jpg";
import HomeThree from "../images/img85.jpg";
import HomeFour from "../images/img83.jpg";
import HomeFive from "../images/img82.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import IconBanner from "../images/catalog-long.png";

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1401px) {
    padding-top: 12rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    padding-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: 8rem;
  }

  @media screen and (max-width: 411px) {
    padding-top: 1.5rem;
  }

  @media screen and (max-width: 360px) {
    margin-top: 3.5rem;
  }
`;

const Banner = styled.div`
  min-width: 20rem;
  padding-top: 2rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 375px) {
    margin-bottom: 7rem;
    }

    @media screen and (max-width: 360px) {
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    }

  img {
    position: absolute;

     height: 34.5vh; 
    width: 100vw;
    object-fit: cover;

     @media screen and (min-width: 1024px) {
      height: 32.5vh;
  } 

    @media screen and (max-width: 768px) {
      height: 28.5vh;
    }

    @media screen and (min-width: 361px) (max-width: 540px) {
      height: 20.5vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc{100% - 100px};
  color: #fff;

  img{
    z-index: 10000;
    height: 55vh;
    width: 100vw;
    object-fit: contain;
    padding-top: 3rem;

    @media screen and (min-width: 1024px) {
      padding-top: 5rem;
  }

    @media screen and (max-width: 768px) {
      padding-top: 0rem;
  }
  }
;

h1{
   font-size: clamp(3rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  }
}`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
text-align: center;
max-width: 700px;
  height: 100%;
  padding: 0rem 2rem 2rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
     margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #fff;
  }
  p {
    margin-bottom: 0.5rem;
    color: #fff;
  }

  a {
    background: #53565a;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")}

  &:hover {
    transform: translateY(-2px);
  }
  text-align: center;
  max-width: 700px;
  display: flex;
  justify-content: center;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
    padding-left: 2rem;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    @media screen and (max-width: 320px) {
    padding-right: 2rem;
  }
`;

const RowOne = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;
const RowTwo = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const RowThree = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const RowFour = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const RowFive = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const ColumnRight = styled.div`
  padding: 0rem 2rem 2rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    margin-top: 0rem;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      margin-top: 0rem;
      margin-left: 0rem;
      margin-right: 0rem;
      object-fit: cover;
    }
  }
`;

const CatalogList = ({ reverse }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Banner>
        <img src={HomeTwo} />
        <HeroContent>
          <h1>{t("catalogbutton")}</h1>
          <img src={IconBanner} />
        </HeroContent>
      </Banner>
      <br />
      <Section
        style={{
          backgroundColor: "#212121",
        }}
      >
        <RowOne>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog1title")}</h1>
            <p>{t("catalog1")}</p>
            <a
              href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("catalogbutton")}
            </a>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img
              src={HomeOne}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowOne>
        <RowTwo>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog2title")}</h1>
            <p>{t("catalog2")}</p>
            <a
              href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("catalogbutton")}
            </a>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img
              src={HomeTwo}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowTwo>
        <RowThree>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog3title")}</h1>
            <p>{t("catalog3")}</p>
            <a
              href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("catalogbutton")}
            </a>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img
              src={HomeThree}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowThree>
        <RowFour>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog4title")}</h1>
            <p>{t("catalog4")}</p>
            <a
              href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("catalogbutton")}
            </a>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img
              src={HomeFour}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowFour>
        <RowFive>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog5title")}</h1>
            <p>{t("catalog5")}</p>
            <a
              href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("catalogbutton")}
            </a>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img
              src={HomeFive}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowFive>
      </Section>
    </div>
  );
};

export default CatalogList;
