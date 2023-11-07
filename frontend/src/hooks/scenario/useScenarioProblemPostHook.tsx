import ScenarioProblemPost from "@/api/scenario/ScenarioProblemPost";
import { useState } from "react";

export const useScenarioProblemPostHook = () => {
  const getScenarioProbelem = async (formData: any) => {
    for (let key of formData.values()) {
      console.log(key);
    }
    console.log("여기까지 되는건가?");
    const res = await ScenarioProblemPost(formData);
    console.log("123", res);
  };
  return { getScenarioProbelem };
};
