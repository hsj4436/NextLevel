import { useEntertainmentClipListGetHook } from "@/hooks/entertainment/useEntertainmentClipListGetHook";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "./EntertainmentList.styled";

const EntertainmentList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clipList, getEntertainmentClipList } =
    useEntertainmentClipListGetHook();
  const location = useLocation();
  useEffect(() => {
    getEntertainmentClipList(id);
  }, []);
  useEffect(() => {
    console.log(location.state.mainImage);
  }, []);
  return (
    <div>
      {clipList?.map((clip: any) => {
        return (
          <StyledButton
            key={clip.id}
            onClick={() => navigate(`/entertainment/shadowing/${clip.id}`)}
          >
            {clip.id}
          </StyledButton>
        );
      })}
    </div>
  );
};

export default EntertainmentList;