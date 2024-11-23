
import PostContainer from "../components/PostContainer";
import PostForm from "../components/PostForm";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function FormPage() { 
    const { posts, postDispatch } = useContext(PostContext);
    return(
<div>
<Container>
  <Row>
  <PostForm></PostForm>
  </Row>
  <Row>
    {posts.map((post) => (
      <Col sm key={post.id}>
        <PostContainer {...post}></PostContainer>
      </Col>
    ))}
  </Row>
</Container>
</div>
)}