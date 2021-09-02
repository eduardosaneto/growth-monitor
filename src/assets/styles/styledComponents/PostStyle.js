import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 18px 18px 20px 21px;
  background: #e5e5e5;
  border-radius: 16px;
  margin-bottom: 16px;

  .button:focus,
  .button:hover {
    filter: brightness(700%);
    animation: pulse 1s;
    opacity: 0.8;
  }
  @media (max-width: 611px) {
    border-radius: 0;
    padding: 9px 18px 15px 15px;
    height: 232px;
  }
`;

export const UserName = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  
  h2 {
    font-size: 22px;
    color: #192c35;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
    color: #192c35;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  padding: 10px;
  display: flex;
  align-items: center;
  
  p {
    font-size: 18px;
    color: #192c35;
  }
`;
