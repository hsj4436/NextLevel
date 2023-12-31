import { serverAxios } from "../api";

const ChatbotCustomPost = async (subject: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/chatgpt/custom",
      data: {
        subject: subject,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ChatbotCustomPost;
