import React, { useEffect } from "react";
import {
  StyeldListModalPage,
  StyledListModalWindow,
  StyledListModalTopContainer,
  StyeldModalTitle,
  StyledCloseButtonBox,
  StyledClossButton,
  StyledCardContainer,
  StyledCardBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
} from "./ListModal.styled";
import { useNavigate } from "react-router-dom";

const ListModal = (props: any) => {
  const navigate = useNavigate();
  return (
    <StyeldListModalPage>
      <StyledListModalWindow>
        <StyledListModalTopContainer>
          <StyeldModalTitle>전체 예능 목록</StyeldModalTitle>
          <StyledCloseButtonBox onClick={() => props.setIsOpen(false)}>
            <StyledClossButton></StyledClossButton>
          </StyledCloseButtonBox>
        </StyledListModalTopContainer>
        <StyledCardContainer>
          {props.entertainmentList.map((enter: any) => {
            return (
              <StyledCardBox key={enter.tvShowId}>
                <StyledImageBox>
                  <StyledImage></StyledImage>
                </StyledImageBox>
                <StyledContentContainer>
                  <StyledTtile>{enter.tvShowTitle}</StyledTtile>
                  <StyledClipButton
                    onClick={() =>
                      navigate(`/entertainmentList/${enter.tvShowId}`)
                    }
                  >
                    클립 목록
                  </StyledClipButton>
                </StyledContentContainer>
              </StyledCardBox>
            );
          })}
        </StyledCardContainer>
      </StyledListModalWindow>
    </StyeldListModalPage>
  );
};

export default ListModal;
