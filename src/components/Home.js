import { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  PageTitle,
  Posts,
} from "../assets/styles/styledComponents/HomeStyle";

import { PostContainer, UserName, Title, Body } from '../assets/styles/styledComponents/PostStyle'

import Navbar from "./Navbar";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => loadPosts(), []);

  function loadPosts() {
    const request = axios.get(process.env.REACT_APP_POST);
    request.then((response) => {
      setPosts(response.data);
    });
    request.catch((err) => {
      alert(`Couldn't load the posts: ${err}`);
    });
  }

  return (
    <>
      <Navbar />
      <Container>
        <PageTitle>
          <h1>Main Posts</h1>
        </PageTitle>
        <Posts>
          {posts.map((post) => (
            <PostContainer key={post.id}>
                <UserName>
                    <h2>{post.user.name}</h2>
                </UserName>
                <Title><p>{post.title}</p></Title>
                <Body><p>{post.body}</p></Body>
            </PostContainer>
          ))}
        </Posts>
      </Container>
    </>
  );
}
