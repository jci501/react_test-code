import styled from 'styled-components';
const StyledDiv = styled.div`
 background-color: #FEF2C6;
 width: 100%;
 height: 411px;
 float : left;
`;
const Title= styled.h1`
  color:  #518B0E;
  font-size: 20px;
  font-weight: 600;
`;
const SubTitle= styled.h1`
  color:  black;
  font-size: 20px;
  font-weight: 600;
`;

export default function Header() {
   
    return (
        
        <StyledDiv>
            <Title>제주 쉬기좋은</Title><SubTitle>지역별 안내</SubTitle>
            <img className="Image" alt="header_01" src="img/main_content_img1.png" />
        </StyledDiv>

       
    );
}