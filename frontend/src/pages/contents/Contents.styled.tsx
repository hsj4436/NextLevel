import styled from "styled-components";

const StyledContents = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledContentsNav = styled.div`
  /* background-color: aliceblue; */
  height: 6.5vh;
  display: flex;
  border-bottom: 3px solid black;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledContentsNavButton = styled.div`
  /* border: 1px solid blue; */
  width: 20vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 20px;
`;

const StyledContentsBody = styled.div`
  /* border: 1px solid orange; */
  overflow-y: scroll;
  height: 85vh;
`;

export {
  StyledContents,
  StyledContentsNav,
  StyledContentsNavButton,
  StyledContentsBody,
};
