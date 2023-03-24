import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const ProductDetails = ({ img, productDescription, github, link }) => {

  const navigate = useNavigate()

  return (
    <Wrapper>
    <ProductContainer>
      <ProductImage src={img} alt="Product Image" />
      <ProductSide>
      <ProductDescription>{productDescription.map((point, index)=>(<ul key={index}>
        <li>{point}</li>
      </ul>))}</ProductDescription>
      </ProductSide>
    </ProductContainer>
      <ButtonContainer>
        <Button href={github} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </Button>
        <Button onClick={()=>navigate(-1)} rel="noopener noreferrer">
          Go back
        </Button>
        <Button href={link} target="_blank" rel="noopener noreferrer">
          Product URL
        </Button>
      </ButtonContainer>
    </Wrapper>

  );
};

export default ProductDetails;


const Wrapper = styled.div`
  width: 90%;
  margin:10px auto
  `;


const ProductContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
`;

const ProductSide =styled.div`

`;

const ProductImage = styled.img`
width: 100%;
height: auto;
object-fit: cover;
`;

const ProductDescription = styled.p`
  margin: 1rem;
  text-align: center;
  ul li{
    text-align:justify;
    font-size:15px;
    font-weight:bold;
    font-style:italic;
    margin-bottom:10px;
    font-family: var(--poppins-font);

  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;

 
`;

const Button = styled.a`
  padding: 1rem 2rem;
  margin: 0 0.5rem;
  background-color: #1f2937;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b5563;
  }

  @media (max-width: 600px) {
    a{
      display: block;
    }
  }
`;

