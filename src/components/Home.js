import styled from "styled-components";

import Navbar from "./Navbar";

export default function Home(){
    return (
        <>
            <Navbar/>
            <Container>
                <PageTitle>
                    <h1>Main Posts</h1>
                </PageTitle>
                <div>
                    <Posts>
                    </Posts>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 125px;
  width: 937px;

  h1 {
    font-size: 43px;
    font-family: "Varela Round", sans-serif;
    color: #192C35;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 43px;
  }

  @media (max-width: 937px) {
    width: 611px;
  }

  @media (max-width: 611px) {
    width: 100vw;
    margin-top: 144px;
    > h1 {
      margin-left: 17px;
      font-size: 30px;
    }
    > div {
      margin-top: 19px;
    }
  }
`;

const PageTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: break-all;
  @media(max-width: 611px){
    padding: 0 17px;
    position: relative;
  }
`;

export const Posts = styled.div`
  width: 65.2%;

  ul {
    width: 100%;
  }

  li {
    display: flex;
    justify-content: space-between;
    height: 237px;
    padding: 18px 18px 20px 21px;
    background: #F7F7F7;
    border-radius: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 937px) {
    width: 611px;
  }

  @media (max-width: 611px) {
    width: 100%;
  }
`;