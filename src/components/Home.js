import { useState, useEffect } from 'react';
import axios from "axios";

import {
  Container,
  PageTitle,
  Posts,
} from "../assets/styles/styledComponents/HomeStyle";

import Navbar from "./Navbar";
import Post from "./Post";

export default function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => loadPosts(),[]);

    function loadPosts() {
        setPosts([])
        const request = axios.get('process.env.REACT_APP_POSTS')

        request.then( response => {
            setPosts(response.data)
        })
        request.catch(err => {
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
            {posts.map(post =>
                <Post 
                    key={post.id} id={post.id} 
                    user={post.user.name} username={post.user.username}
                    title={post.title} body={post.body}
                />
            )}
        </Posts>
      </Container>
    </>
  );
}
