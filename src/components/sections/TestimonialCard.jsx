import React from "react";
import styled from "styled-components";
import Tano from "../../images/Tanush.png";
import { Link } from "react-router-dom";

const TestimonialCard = ({ imageSrc, name, description }) => {
  return (
    <Container>
      <Heading>Testimonial</Heading>
      <Card>
        <ImageContainer>
          <img src={Tano} alt={name} />
        </ImageContainer>
        <Content>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Link to="https://tanushmm.github.io/tanush-portfolio/">
            Portfolio
          </Link>
        </Content>
      </Card>
    </Container>
  );
};

export default TestimonialCard;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  color: white;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
`;

const ImageContainer = styled.div`
  margin-right: 20px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 10%;
    object-fit: cover;
  }
`;

const Content = styled.div``;

const Name = styled.h3`
  font-size: 1.5em;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
`;
