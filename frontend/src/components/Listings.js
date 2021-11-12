import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import HomeOne from "../images/img34.jpg";
import HomeTwo from "../images/img33.jpg";
import HomeThree from "../images/img32.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const Heading = styled.div`
  font-size: 1.5rem;

  h1 {
    display: grid;
    grid-template-rows: 10px;
    justify-content: center;
    padding: 3rem 0 0rem 0;
    margin-bottom: 5rem;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 8rem;
  }
  @media screen and (max-width: 540px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 411px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 500px;
  justify-content: center;
  margin: 0 100px 0 100px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    object-fit: contain;
  }
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    object-fit: cover;
    margin: 0 1rem;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  height: 70%;

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

  button {
    background: #53565a;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    color: #fff;
    font-size: 20px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  h2 {
    margin-bottom: 0rem;
    margin-top: 0rem;
    padding: 0 0 0 0;
    color: #fff;
  }
  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    height: 50%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0 0 0 0;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
  }
`;

const Listings = () => {
  let history = useHistory();
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Section>
        <Container>
          <Heading>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <strong>{t("listingheading")}</strong>
            </h1>
          </Heading>
          <InfoRow>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src={HomeOne}
                alt="home"
                css={`
                  // margin-top: 120px;
                  @media screen and (max-width: 768px) {
                    margin-top: 0px;
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: center;
                    // align-items: flex-start;
                    // order: 1;
                  }
                `}
              />
              <h2>{t("listing1")}</h2>
              <a
                href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
                rel="noopener noreferrer"
                target="_blank"
                alt="home"
              >
                {t("view")}
              </a>
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={HomeTwo} alt="home" />
              <h2>{t("listing2")}</h2>
              <a
                href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("view")}
              </a>
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={HomeThree} alt="home" />
              <h2>{t("listing3")}</h2>
              <a
                href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
                rel="noopener noreferrer"
                target="_blank"
                alt="home"
              >
                {t("view")}
              </a>
            </InfoWrap>
          </InfoRow>
        </Container>
      </Section>
    </div>
  );
};

export default Listings;
