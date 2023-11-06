import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  StyledListPage,
  StyledListContainer,
  StyledMainImageContainer,
  StyledMainImage,
  StyledTitle,
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
} from "./DramaList.styled";
import { useDramaClipListHook } from "@/hooks/drama/useDramaClipListHook";
import { S3_ADDRESS } from "@/api/api";
const DramaList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { clipList, getDramaClipList } = useDramaClipListHook();
  useEffect(() => {
    getDramaClipList(id);
  }, []);

  useEffect(() => {
    console.log(clipList);
  }, [clipList]);
  return (
    <StyledListPage>
      <StyledListContainer>
        <StyledMainImageContainer>
          <StyledMainImage
            src={S3_ADDRESS + location.state.mainImage}
          ></StyledMainImage>
          <StyledTitle>{location.state.title}</StyledTitle>
        </StyledMainImageContainer>
        <StyledClipContainer>
          {clipList?.map((clip: any) => {
            return (
              <StyledClipBox
                key={clip.id}
                onClick={() => navigate(`/drama/shadowing/${clip.id}`)}
              >
                <StyledImageBox>
                  <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
                </StyledImageBox>
                <StyledContentContainer>
                  <StyledTtile>{clip.title}</StyledTtile>
                  <StyledClipButton>학습하기</StyledClipButton>
                </StyledContentContainer>
              </StyledClipBox>
            );
          })}
        </StyledClipContainer>
      </StyledListContainer>
    </StyledListPage>
  );
};

export default DramaList;
