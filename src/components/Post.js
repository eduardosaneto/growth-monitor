import { PostContainer, UserName, Title, Body } from '../assets/styles/styledComponents/PostStyle'

export default function Post() {
  return (
    <PostContainer>
        <UserName>
          <h2>Eduardo</h2>
        </UserName>
        <Title><p>É isso</p></Title>
        <Body><p>Testes</p></Body>
    </PostContainer>
  );
}
