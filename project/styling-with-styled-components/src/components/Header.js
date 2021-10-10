import styled from 'styled-components';
const StyledDiv = styled.div`
 background-color: #FEF8EA;
 width: 100%;
 height: 411px;
`;
export default function Header() {
   
    return (
<StyledDiv>
    <p>인생제주</p>
<img className="Image" alt="header_01" src="../img/header_img.png" />
</StyledDiv>
       
    );
    
}