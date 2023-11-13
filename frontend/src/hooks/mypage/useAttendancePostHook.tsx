import AttendancePost from "@/api/mypage/AttendancePost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAttendancePostHook = () => {
  const navigate = useNavigate();
  const postAttendance = async () => {
    const res = await AttendancePost();
    if (res.data.status === 200) {
      navigate("/mypage");
    }
  };
  return { postAttendance };
};
