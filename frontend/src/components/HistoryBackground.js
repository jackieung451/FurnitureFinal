import React from "react";
import styled from "styled-components/macro";
import HistoryOne from "../images/img51.png";
import HomeTwo from "../images/img84.jpg";
import HistoryTwo from "../images/img52.jpeg";
import HistoryThree from "../images/img54.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import IconBanner from "../images/history-long.png";
import i18n from "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 769px) {
    padding-top: 14rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 540px) {
    padding-top: 1.5rem;
  }

  @media screen and (max-width: 360px) {
    padding-top: 0rem;
  }
`;

const Banner = styled.div`
  min-width: 20rem;
  padding-top: 2rem;
  margin-bottom: 0rem;

  @media screen and (max-width: 375px) {
    margin-bottom: 0rem;
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
  z-index: 100000;
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

h1{
   font-size: clamp(3rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}`;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const InfoRow = styled.div`
  justify-content: center;
  margin: 0 200px 0 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem 0rem 1rem;
  min-width: 260px;
  height: 100%;

  h2 {
    padding: 6rem 0 0 0;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    color: #fff;
  }
  p {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-right: 2rem;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-right: 7rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-content: center;
  padding: 0 0 2rem 0;
  flex-wrap: wrap;
`;

const ImageWrap = styled.div`
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: contain;

  @media screen and (max-width: 375px) {
    padding-right: 2rem;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-right: 7rem;
  }
`;

const HistoryBackground = () => {
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
          <h1>{t("history")}</h1>
          <img src={IconBanner} />
        </HeroContent>
      </Banner>
      <Section>
        <Container>
          <InfoRow>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h2>
                <strong>{t("historyheading")}</strong>
              </h2>
              <p>{t("history1")}</p>
              <br />
              <p>{t("history2")}</p>
              <br />
              <p>{t("history3")}</p>
            </InfoWrap>
            <ImageContainer>
              <ImageWrap>
                <Image src={HistoryOne} alt="history" />
              </ImageWrap>
              <ImageWrap>
                <Image src={HistoryTwo} alt="history" />
              </ImageWrap>
              <ImageWrap>
                <Image src={HistoryThree} alt="history" />
              </ImageWrap>
            </ImageContainer>
          </InfoRow>
        </Container>
      </Section>
    </div>
  );
};

export default HistoryBackground;
