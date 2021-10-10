import styled from 'styled-components';
const StyledDiv = styled.div`
 background-color: #FEF8EA;
 width: 100%;
 height: 411px;
`;
const Title= styled.p`
  color:  #23672A;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.0;
`;
const Paragraph = styled.h1`
  color: #EA6327; 
  font-size: 50px;
  font-weight: 600;
`;
const Para = styled.h1`
  color: #EA6327; 
  font-size: 20px;
  font-weight: 600;
`;

export default function Header() {
   
    return (

<StyledDiv>
    <Title>COTRIP</Title>
    <Para>쉬고 싶으면? 제주! 인생 사진도? 제주!</Para>
    <Paragraph>인생제주</Paragraph>
<img className="Image" alt="header_01" src="img/header_img.png" />
</StyledDiv>
       
    );
    
}