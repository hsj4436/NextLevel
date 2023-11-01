import { useYoutubeHook } from "@/hooks/drama/useYoutubeHook";
import ApexChart from "../apexchart";
import { useRecordHook } from "@/hooks/drama/useRecordHook";
import {
  StyledRecordContainer,
  StyledScript,
  StyledButtonContainer,
  StyledIconContainer,
  StyledIcon,
} from "./Record.styled";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
const Record = (props: any) => {
  const {
    recording,
    myPitchList,
    transcript,
    playRecord,
    startRecording,
    stopRecording,
    playRecording,
    stopRecord,
  } = useRecordHook();
  const { isPlay, moveTime, onPlay, onPause } = useYoutubeHook();
  const script = usePlayerStore((state: any) => state.script);

  return (
    <StyledRecordContainer>
      <ApexChart moviePitchList={[]} myPitchList={myPitchList} />
      <StyledScript onClick={() => moveTime(props.data.startTime)}>
        {props.data?.script}
      </StyledScript>
      <StyledScript>{transcript ? transcript : script}</StyledScript>
      <StyledButtonContainer>
        {isPlay ? (
          <StyledIconContainer onClick={onPause}>
            <StyledIcon src="/record/Stop.png"></StyledIcon>
          </StyledIconContainer>
        ) : (
          <StyledIconContainer onClick={onPlay}>
            <StyledIcon src="/record/Play.png"></StyledIcon>
          </StyledIconContainer>
        )}
        {recording ? (
          <StyledIconContainer onClick={stopRecording}>
            <StyledIcon src="/record/Mic2.png"></StyledIcon>
          </StyledIconContainer>
        ) : (
          <StyledIconContainer onClick={() => startRecording(props.data.time)}>
            <StyledIcon src="/record/Mic1.png"></StyledIcon>
          </StyledIconContainer>
        )}
        {playRecord ? (
          <StyledIconContainer onClick={() => stopRecord()}>
            <StyledIcon src="/record/Speaker2.png"></StyledIcon>
          </StyledIconContainer>
        ) : (
          <StyledIconContainer onClick={() => playRecording(props.data.time)}>
            <StyledIcon src="/record/Speaker1.png"></StyledIcon>
          </StyledIconContainer>
        )}
      </StyledButtonContainer>
    </StyledRecordContainer>
  );
};

export default Record;
