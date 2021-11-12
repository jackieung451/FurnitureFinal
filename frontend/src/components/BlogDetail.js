import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { capitalizeFirstLetter } from "./Util";

const Section = styled.div`
  min-height: 100vh;
  padding-left: 1rem;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #fff;
`;

const Title = styled.div`
  padding-top: 5rem;
  color: #fff;
`;

const Category = styled.div`
  margin-top: 1rem;
  margin-bottom: 0rem;
  color: #fff;
`;

const Content = styled.div`
  color: #fff;
  word-wrap: break-word;
`;

const BackButton = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 0;
`;

const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BLOG_URL}/${slug}/`
        );
        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);

  const createBlog = () => {
    return { __html: blog.content };
  };

  return (
    <Section
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Title>
        <h1>{blog.title}</h1>
      </Title>
      <Category>
        <h2 className="text-white">
          Category: {capitalizeFirstLetter(blog.category)}
        </h2>
        <h4 className="text-white">
          {blog.month} {blog.day}
        </h4>
      </Category>
      <Content>
        <div className="text-white" dangerouslySetInnerHTML={createBlog()} />
        <br />
        <BackButton>
          <p>
            <Link to="/blog" className="font-weight-bold">
              Back to Blogs
            </Link>
          </p>
        </BackButton>
      </Content>
    </Section>
  );
};

export default BlogDetail;
