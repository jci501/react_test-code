import styled from 'styled-components';
const StyledDiv = styled.div`
 background-color: #FEF2C6;
 width: 100%;
 height: 411px;
`;
export default function Header() {
   
    return (
        <StyledDiv>
            <img className="Image" alt="header_01" src="img/main_content_img1.png" />
        </StyledDiv>

       
    );
}