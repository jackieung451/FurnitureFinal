import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { capitalizeFirstLetter } from "./Util";

const Section = styled.div`
  min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const Content = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const Title = styled.div`
  padding-top: 5rem;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const BackButton = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 0;
`;

// const [categories, setCategories] = useState([]);

// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         `${process.env.REACT_APP_API_BLOG_URL}/categories/`
//       );
//       setCategories(res.data);
//     } catch (err) {}
//   };

//   fetchCategories();
// }, []);

// const getCategories = () => {
//   let list = [];
//   let result = [];

//   categories.map((category) => {
//     return list.push(
//       <Link to={`/blog/category/${category.slug}`} className="p-2 text-muted">
//         {capitalizeFirstLetter(category.name)}
//       </Link>
//     );
//   });

//   for (let i = 0; i < list.length; i += 2) {
//     result.push(
//       <div key={i} className="p-2 text-muted">
//         {list[i]}
//       </div>
//     );
//   }

//   return result;
// };

const BlogCategory = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const category = props.match.params.id;
    setCurrentCategory(capitalizeFirstLetter(category));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BLOG_URL}/categories/`,
          { category },
          config
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);

  const getCategories = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-0 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong>{capitalizeFirstLetter(blogPost.category)}</strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-0 text-muted">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-0">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <Section
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Title>
        <h3 className="display-4 text-white">{currentCategory} Category</h3>
      </Title>
      <div className="nav-scroller py-1 mb-0 text-white bg-dark">
        <nav className="nav d-flex justify-content-between">
          {getCategories()}
        </nav>
      </div>

      {/* <div className="nav-scroller py-1 mb-0 text-white bg-dark">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/category/world">
            World
          </Link> */}
      {/* 
          <Link className="p-2 text-muted" to="/category/environment">
            Environment
          </Link>
          <Link className="p-2 text-muted" to="/category/technology">
            Technology
          </Link>
          <Link className="p-2 text-muted" to="/category/design">
            Design
          </Link>
          <Link className="p-2 text-muted" to="/category/culture">
            Culture
          </Link>
          <Link className="p-2 text-muted" to="/category/business">
            Business
          </Link>
          <Link className="p-2 text-muted" to="/category/politics">
            Politics
          </Link>
          <Link className="p-2 text-muted" to="/category/opinion">
            Opinion
          </Link>
          <Link className="p-2 text-muted" to="/category/science">
            Science
          </Link>
          <Link className="p-2 text-muted" to="/category/health">
            Health
          </Link>
          <Link className="p-2 text-muted" to="/category/style">
            Style
          </Link>
          <Link className="p-2 text-muted" to="/category/travel">
            Travel
          </Link> */}
      {/* </nav>
      </div> */}

      <Content className="text-white bg-dark">{getCategories()}</Content>
      <BackButton>
        <p>
          <Link to="/blog" className="font-weight-bold">
            Back to Blogs
          </Link>
        </p>
      </BackButton>
    </Section>
  );
};

export default BlogCategory;
