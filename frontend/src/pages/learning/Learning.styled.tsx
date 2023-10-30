import styled, { css } from "styled-components";

const StyledLearning = styled.div`
  /* border: 1px solid red; */
  /* background-color: #fcf6f5; */
`;

const StyledLearnNav = styled.div`
  background-color: #ffffff;
  display: flex;
  height: 6.5vh;
  border-bottom: 3px solid black;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledLearnNavButton = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectLearn = props.selectLearn;
    const id = props.id;

    return css`
      width: 20vw;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: 20px;
      font-size: ${selectLearn === id ? `22px` : null};
    `;
  }}
`;

const StyledLearnBody = styled.div`
  /* border: 1px solid orange; */
  overflow-y: scroll;
  height: 85vh;
`;

export {
  StyledLearning,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearnBody,
};
