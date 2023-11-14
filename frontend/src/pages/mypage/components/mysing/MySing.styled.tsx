import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 95vw;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledClipBox = styled.div``;

const StyledImageBox = styled.div``;

const StyledSingImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 30vw;
  border-radius: 3px;
`;

const StyledContentContainer = styled.div`
  height: 100%;
  width: 80%;
`;

const StyledTtile = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  width: 100%;
`;

const StyledArtist = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledClipButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regularfont};
  border: none;
  font-size: ${(props) => props.theme.fontsize.xsmall};
  width: 80px;
  height: 30px;
  border-radius: 5px;
`;

const StyledScore = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  margin-bottom: 10px;
`;

export {
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
  StyledSingImage,
  StyledArtist,
};
