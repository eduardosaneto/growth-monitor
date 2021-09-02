import styled from "styled-components";

import {
  Container,
  PageTitle,
  Posts,
} from "../assets/styles/styledComponents/HomeStyle";

import Navbar from "./Navbar";
import Post from "./Post";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <PageTitle>
          <h1>Main Posts</h1>
        </PageTitle>
        <Posts>
          <Post />
        </Posts>
      </Container>
    </>
  );
}
