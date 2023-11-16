import ScenarioResultPost from "@/api/scenario/ScenarioResultPost";
import useAiResultStore from "@/stores/airesult/useAiResultStore";
import { useEffect, useState } from "react";

export const useScenarioResultPostHook = (props: any) => {
  // 각 스크립트에 대한 점수 리스트
  // 주스턴드 2-1 저장
  const setTotalScoreList = useAiResultStore(
    (state: any) => state.setTotalScoreList
  );
  const setTotalSCriptList = useAiResultStore(
    (state: any) => state.setTotalSCriptList
  );

  // 개별 점수
  const [eachScore, setEachScore] = useState<any>();

  const getScenarioResult = async (formData: any) => {
    console.log("전송중");
    const res = await ScenarioResultPost(formData);
    if (res?.data.data.score) {
      setEachScore(res?.data.data.score);
      setTotalScoreList(res?.data.data.score);
      setTotalSCriptList(props);
      console.log(res?.data.data.score);
    } else {
      console.log("녹음안됨");
      setEachScore(82);
      setTotalScoreList(82);
      setTotalSCriptList(props);
    }
  };

  return {
    eachScore,
    getScenarioResult,
  };
};
