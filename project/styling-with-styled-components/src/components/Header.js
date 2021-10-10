import styled from 'styled-components';

const StyledDiv = styled.div`
 background-color: #FEF8EA;
 width: 100%;
 height: 800px;
`;
const Title= styled.p`
  color:  #23672A;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.0;
  padding-top: 3rem;
  padding-right: 25rem;
  
`;
const Content0 = styled.h1`
  color: #FCD937; 
  font-size: 50px;
  font-weight: 600;
  padding-right: 15rem;
  font-family:'RockSalt-Regular';
`;
const Content1 = styled.h2`
  color: #EA6327; 
  font-size: 20px;
  font-weight: 600;
  padding-left: 10rem;
`;
const Content2 = styled.h1`
  color: #EA6327; 
  font-size: 70px;
  font-weight: 600;
  padding-left: 5rem;
`;

export default function Header() {
   
    return (

<StyledDiv>
    <Title>COTRIP</Title>
    <Content0>JEJu</Content0>
    <Content1>쉬고 싶으면? 제주! 인생 사진도? 제주!</Content1>
    <Content2>인생제주</Content2>
<img className="Image" alt="header_01" src="img/header_img.png" />
</StyledDiv>
       
    );
    
}