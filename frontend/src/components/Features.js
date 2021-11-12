import React from "react";
import styled from "styled-components";
import ImageOne from "../images/img97.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Section = styled.section`
  background: #000d1a;
  padding: 3.5rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    iframe {
      min-width: 200px;
      max-width: 1020px;
    }
  }
`;

const Content = styled.div`
  flex: 0 0 50%;
  line-height: 1.8;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    font-size: 2 rem;
    display: flex;
    justify-content: flex-start;
    color: #fff;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: #fff;
  }
  h2 {
    display: flex;
    justify-content: center;
    color: #fff;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  max-width: 850px;
  height: 100%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 60px;
    padding-bottom: 40px;
  }
`;

const Features = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container
        style={{
          backgroundColor: "#212121",
        }}
      >
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>{t("contact")}</h1>
              <p>2619 N Broadway</p>
              <p>Los Angeles, California 90031</p>
              <p>
                <strong>(323) 247-9094</strong>
              </p>
              <p>sales@lanayaritfurniture.com</p>
            </Content>
            <br />
            <br />
            <br />
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.317769356978!2d-118.2149471!3d34.0738862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1626564967160!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageOne} alt="home" />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
