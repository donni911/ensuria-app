import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0.903vw;
  box-sizing: border-box;
`;

export const StyledLinkBtn = styled.a`
    height: 3.958vw;
    min-width: 10.764vw;
    padding: 5px 10px;
    font-family: "TT Hoves", sans-serif;
    font-size: 1.111vw;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    border: none;
    background-color:#2C2A2D;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2.014vw;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    @media ${(props) => props.theme.media.laptop} {
        min-width: auto;
        height: 58px;
        flex:1;
        font-size: 16px;
        border-radius: 28px;
    }

    img {
        width: 6.667vw;

        @media ${(props) => props.theme.media.laptop} {
            width: 100%;
            max-height: 27px;
            max-width:110px;
        }
    }

    &:hover{
        background-color: #7F7D84;
        border-color: #7F7D84;
    }
`;