import { useEntertainmentClipListGetHook } from "@/hooks/entertainment/useEntertainmentClipListGetHook";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "./EntertainmentList.styled";

const EntertainmentList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clipList, getEntertainmentClipList } =
    useEntertainmentClipListGetHook();
  useEffect(() => {
    getEntertainmentClipList(id);
  }, []);

  return (
    <div>
      {clipList?.map((clip: any) => {
        return (
          <StyledButton
            key={clip.showProblemId}
            onClick={() =>
              navigate(`/entertainment/shadowing/${clip.showProblemId}`)
            }
          >
            {clip.showProblemId}
          </StyledButton>
        );
      })}
    </div>
  );
};

export default EntertainmentList;