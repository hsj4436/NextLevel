import styled from "styled-components";

const StyledRankingPage = styled.div`
  height: 94vh;
  width: 100vw;
  /* background-color: ${(props) => props.theme.colors.white}; */
`;

const StyledRankingTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4vh;
  width: 96vw;
  height: 6vh;
  padding-left: 4vw;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.xxlarge};
`;

const StyleMyRankingContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
`;

const StyledMyRanking = styled.div`
  width: 90%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.main};
  display: flex;
`;

const StyledMyProfileContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
`;

const StyledMyProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid black;
`;
const StyledMyName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.xlarge};
`;
const StyledMyTierContainer = styled.div`
  background-color: red;
  flex: 2;
`;
const StlyedMyScoreContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3%;
`;
const StyledMyScoreTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: ${(props) => props.theme.fontsize.small};
`;
const StyledMyScore = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledAllRankingContainer = styled.div`
  height: 55vh;
  width: 85vw;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translate(-50%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const StyledTopRankerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 15vh;
`;
const StyledTopRankerCard = styled.div.attrs<any>(() => {})`
  height: 100%;
  width: 28%;
  background-color: lightblue;
  transform: ${(props) =>
    props.index === 1 ? "translateY(-50%)" : " translateY(-20%)"};
`;

const StyledUnTopRankerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledUnTopRankerTopContainer = styled.div`
  height: 2vh;
  width: 100%;
  display: flex;
`;
const StyledUnTopRankerTop = styled.div.attrs<any>(() => ({}))`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: ${(props) => props.theme.fontsize.semiboldfont};
  margin-left: ${(props) => (props.left ? props.left : "auto")};
  margin-right: ${(props) => props.right && props.right};
`;

const StyledUnRankerCard = styled.div`
  width: 100%;
  height: 6vh;
  background-color: black;
  margin-top: 1vh;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const StyledTableHead = styled.thead`
  /* background-color: #f2f2f2; */
  border-bottom: 2px solid black;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledContentContainer = styled.tbody`
  background-color: ${(props) => props.theme.colors.menu};
  cursor: pointer;
`;

const StyledContent = styled.td.attrs<any>(() => ({}))`
  font-family: ${(props) => props.theme.fonts.blodfont};
  /* font-size: 14px; */
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.main};
  padding: 10px;
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.th`
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.blodfont};
  /* font-size: 14px; */
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.menu};
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;

const CustomTableRow = styled(StyledTableRow)`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
`;

export {
  StyledRankingPage,
  StyledRankingTitle,
  StyleMyRankingContainer,
  StyledMyRanking,
  StyledMyProfileContainer,
  StyledMyProfile,
  StyledMyName,
  StyledMyTierContainer,
  StlyedMyScoreContainer,
  StyledMyScoreTitle,
  StyledMyScore,
  StyledAllRankingContainer,
  StyledTopRankerContainer,
  StyledTopRankerCard,
  StyledUnTopRankerContainer,
  StyledUnTopRankerTopContainer,
  StyledUnTopRankerTop,
  StyledUnRankerCard,
  StyledTable,
  StyledTableHead,
  StyledTableRow,
  StyledContentContainer,
  StyledContent,
  StyledTitle,
  CustomTableRow,
};