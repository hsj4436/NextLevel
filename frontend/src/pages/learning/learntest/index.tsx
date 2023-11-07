import { useScenarioProblemPostHook } from "@/hooks/scenario/useScenarioProblemPostHook";
import React, { useCallback, useEffect, useRef, useState } from "react";
import audioBufferToWav from "audiobuffer-to-wav";

const LearnTest = () => {
  const { getScenarioProbelem } = useScenarioProblemPostHook();

  const [stream, setStream] = useState<any>();
  const [media, setMedia] = useState<any>();
  const [onRec, setOnRec] = useState<boolean>(true);
  const [source, setSource] = useState<any>();
  const [analyser, setAnalyser] = useState<any>();
  const [audioUrl, setAudioUrl] = useState<any>();
  const chunks = []; // 오디오 청크 데이터를 저장할 배열
  const [sound, setSound] = useState<any>();

  //녹음
  const onRecAudio = () => {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    const makeSound = (stream: any) => {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener("dataavailable", (e) => {
          chunks.push(e.data);
        });

        mediaRecorder.start();
        setStream(stream);
        setMedia(mediaRecorder);
        makeSound(stream);
        analyser.onaudioprocess = function (e) {
          setOnRec(false);
        };
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const offRecAudio = () => {
    media.ondataavailable = function (e: any) {
      chunks.push(e.data);
      setAudioUrl(e.data);
      setOnRec(true);
    };

    stream.getAudioTracks().forEach(function (track: any) {
      track.stop();
    });

    media.stop();

    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      const audio = new Audio(URL.createObjectURL(audioUrl));
      audio.play();
    }
  }, [audioUrl]);

  // const sendToserverFun = () => {
  //   const formData = new FormData();

  //   const sendToServer = new File([audioUrl], "test.wav", {
  //     type: "audio/wav",
  //   });

  //   console.log("111", sendToServer);

  //   // // 파일 확인용 다운로드 함수
  //   function download() {
  //     const a = document.createElement("a");
  //     const url = URL.createObjectURL(sendToServer);

  //     a.href = url;
  //     a.download = sendToServer.name;

  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }

  //   try {
  //     // 확인용 파일 다운로드
  //     download();
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   const text =
  //     "안녕하세요 저는 스물다섯살 손민영입니다 벌써 십이월이에요 겨울이네요";

  //   formData.append("script", text);
  //   formData.append("wavFile", sendToServer);
  //   getScenarioProbelem(formData);
  // };

  const sendToserverFun = useCallback(async () => {
    if (audioUrl) {
      setSound(URL.createObjectURL(audioUrl));
      const arrayBuffer = await audioUrl.arrayBuffer();
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const wav = audioBufferToWav(audioBuffer);
      const wavFile = new File([wav], "sound", { type: "audio/wav" });

      const script = {
        ko: "안녕하세요",
        video_sentence_id: 3,
      };

      const formdata = new FormData();
      // formdata.enctype = "multipart/form-data";
      formdata.append("sound", wavFile);
      formdata.append(
        "script",
        new Blob([JSON.stringify(script)], { type: "application/json" })
      );

      fetch(`http://k9e204.p.ssafy.io/api/evaluate/result`, {
        method: "POST",
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          // setScoreData(data);
        });
    } else {
      console.log("no audio");
    }
  }, [audioUrl]);

  return (
    <div>
      <button onClick={onRec ? onRecAudio : offRecAudio}>
        {onRec ? "녹음 시작" : "녹음 중지"}
      </button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
      <button onClick={sendToserverFun}>백엔드로 전송</button>
    </div>
  );
};

export default LearnTest;
