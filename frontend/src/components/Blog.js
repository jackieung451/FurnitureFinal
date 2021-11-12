import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconBanner from "../images/blog-long.png";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import HomeTwo from "../images/img84.jpg";
import { capitalizeFirstLetter } from "./Util";

const Section = styled.div`
  min-height: 100vh;
  margin-bottom: 0;
  padding-bottom: 0;

  @media screen and (min-width: 1401px) {
    padding-top: 18rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1400px) {
    padding-top: 13rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 12rem;
  }
  @media screen and (max-width: 540px) {
    padding-top: 8.5rem;
  }
  @media screen and (max-width: 360px) {
    padding-top: 7rem;
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
;

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
  
  @media screen and (max-width: 375px) {
}`;

const Blog = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BLOG_URL}/categories/`
        );
        setCategories(res.data);
      } catch (err) {}
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BLOG_URL}/featured/`
        );
        setFeaturedBlog(res.data[0]);
        console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BLOG_URL}/`);
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);

  const getCategoryByID = (id) => {
    let result = {};
    categories.map((category) => {
      if (category.id == id) {
        result = category;
      }
    });
    return result;
  };

  const getCategories = () => {
    let list = [];
    let result = [];

    categories.map((category) => {
      return list.push(
        <Link to={`/blog/category/${category.slug}`} className="p-2 text-muted">
          {capitalizeFirstLetter(category.name)}
        </Link>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="p-2 text-muted">
          {list[i]}
        </div>
      );
    }

    return result;
  };

  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="bg-dark row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col-7 p-2 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-white">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0 text-white">{blogPost.title}</h3>
            <div className="mb-1 text-white">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto text-white">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div
            className="col-5 d-none d-lg-block"
            style={{
              background: `url(${blogPost.header_image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <a></a>
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  const [searchTerm, setSearchTerm] = useState("");
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
          <h1>{t("blog")}</h1>
          <img src={IconBanner} />
        </HeroContent>
      </Banner>
      <Section>
        <div className="container mt-0">
          <div className="p-4 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
              <p className="lead my-3">{featuredBlog.excerpt}</p>
              <p className="lead mb-0">
                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="text-white font-weight-bold"
                >
                  Continue reading...
                </Link>
              </p>
            </div>
          </div>
          {getBlogs()}
        </div>
        <div className="nav-scroller py-1 mb-0 text-white bg-dark">
          <nav className="nav d-flex justify-content-between">
            {getCategories()}
          </nav>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
