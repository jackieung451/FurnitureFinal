import React from "react";
import styled, { css } from "styled-components/macro";
import { FaInstagram, FaFacebookF, FaYelp } from "react-icons/fa";
import ImageLogo2 from "../images/brand-color-alt-white.png";

const Section = styled.section`
  background: #323232;
  color: #fff;
  margin-bottom: 0;
  padding-bottom: 0;
  width: 100%;
  padding-top: 0;
  margin-top: 0;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #323232;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25rem;
  margin-right: 25rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    text-align: center;
    min-width: 20rem;
    margin-left: 14rem;
    padding: 0 0rem;
    object-fit: cover;
  }

  @media screen and (max-width: 540px) {
    margin-left: 6.9rem;
  }
  @media screen and (max-width: 414px) {
    margin-left: 2.9rem;
  }
  @media screen and (max-width: 375px) {
    margin-left: 1.7rem;
  }
  @media screen and (max-width: 360px) {
    margin-left: 1.25rem;
  }
  @media screen and (max-width: 320px) {
    margin-left: 0rem;
  }
`;

const TopRow = styled.div`
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d41920;
  height: 100px;
  text-align: center;
  width: 100vw;
  @media screen and (max-width: 280px) {
    margin-right: 2.5rem;
  }
`;

const Quote = styled.div`
  flex: 1;
  padding-top: 10px;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  padding-left: 5rem;
  padding-right: 6rem;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    text-align: center;
    max-width: 700px;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen and (max-width: 280px) {
    max-width: 50px;
    padding: 0 4rem 0 1rem;
  }

  h4 {
    margin: 0;
    padding: 0;
  }

  h5 {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 0.75;
    margin-top: 1rem;
    font-weight: 200rem;
    color: #f06569;

    @media screen and (max-width: 768px) {
      order: ${({ reverse }) => (reverse ? "1" : "2")};
      text-align: center;
      max-width: 700px;
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  h6 {
    font-size: clamp(1rem, 8vw, 3rem);
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 0.75;
    margin-left: 0rem;

    @media screen and (min-width: 1024px) {
      justify-content: center;
      padding-left: 0rem;
      padding-right: 0rem;
    }

    @media screen and (max-width: 768px) {
      line-height: 1;
      display: flex;
      justify-content: center;
      max-width: 200rem;
      padding: 0rem;
    }
  }
  p {
    display: flex;
    justify-content: center;
    line-height: 2;
    margin: 0;
    padding: 0;
    color: #bbbcbc;

    @media screen and (max-width: 768px) {
      order: ${({ reverse }) => (reverse ? "1" : "2")};
      text-align: center;
      max-width: 700px;
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px;

  @media screen and (max-width: 768px) {
    line-height: 1;
    padding-left: 2rem;
    padding-right: 0rem;
    max-width: 200rem;
  }
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #bbbcbc;
  padding-left: 1rem;
  height: 100px;
  min-width: 220px;

  @media screen and (max-width: 768px) {
    line-height: 1;
    max-width: 200rem;
    padding-right: 3rem;
    padding-left: 0rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 0rem 0rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 280px) {
    text-align: center;
    min-width: 300px;
    padding-left: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
  color: #bbbcbc;
`;
const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const Yelp = styled(FaYelp)`
  ${Icons}
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30rem;
  margin-right: 40rem;
  padding-bottom: 1rem;
`;

const Rights = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15rem;
  min-width: 700px;
  margin-top: 3.5rem;
  flex-wrap: wrap;
  text-align: center;

  @media screen and (max-width: 540px) {
    margin-right: 40rem;
  }

  @media screen and (max-width: 414px) {
    margin-right: 45rem;
    min-width: 20px;
  }

  @media screen and (max-width: 375px) {
    margin-right: 50rem;
  }

  @media screen and (max-width: 320px) {
    margin-right: 52rem;
  }
  @media screen and (max-width: 280px) {
    margin-right: 55rem;
  }
`;

const BottomLogo = styled.div`
  img {
    width: 20%;
    height: 30%;
    object-fit: contain;
    margin-top: 3.5rem;
    margin-left: 27rem;
  }
  @media screen and (max-width: 414px) {
    margin-right: 12rem;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <TopRow>
            <h6>
              <strong>Like what you see?</strong>
            </h6>
            <p>
              <strong>Give us a call (323) 247-9094</strong>
            </p>
          </TopRow>
          <Quote>
            <ColumnLeft>
              <h5>
                <strong>HOURS</strong>
              </h5>
              <p>
                <strong>MON - SAT | 10AM - 7PM</strong>
              </p>
              <p>
                <strong>SUN | 10AM - 3PM</strong>
              </p>
            </ColumnLeft>
            <ColumnRight>
              <h5>
                <strong>ADDRESS</strong>
              </h5>
              <p>
                <strong>2619 N Broadway</strong>
              </p>
              <p>
                <strong>Los Angeles, CA 90031</strong>
              </p>
            </ColumnRight>
          </Quote>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="https://www.facebook.com/LaNayaritFurniture/about"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/lanayaritfurniture/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.yelp.com/biz/la-nayarit-furniture-los-angeles"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Yelp />
            </a>
          </SocialIcons>
        </FooterBottom>
        <Copyright>
          <BottomLogo>
            <img src={ImageLogo2} />
          </BottomLogo>
          <Rights>
            <p>&copy; 2021 LA Nayarit Furniture. All rights reserved.</p>
          </Rights>
        </Copyright>
      </Container>
    </Section>
  );
};

export default Footer;
