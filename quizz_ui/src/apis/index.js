import axiosInstance from "../setup/api";
import { baseUrl } from "../setup/api";

//get all questions on start
export function getAllQuestions() {
  try {
    const getQuest = async () => {
      return await axiosInstance.get(`${baseUrl}/list`).then((response) => {
        let data = response
        return data.data.data;
      }).catch((error) => {
        throw new Error(error);
      });
    }
    return getQuest()
    
  } catch (error) {
    throw new Error(error);
  }
}

//save response of each question.
export function saveQuestionResponse(id) {
  try {
    const save = async () => {
      return await axiosInstance.post(`${baseUrl}/question/${id}`).then((response) => {
        let data = response
        return data.data;
      }).catch((error) => {
        throw new Error(error);
      });
    }
    return save()
    
  } catch (error) {
    throw new Error(error);
  }
}

//To get calculated score
export function getScore(allAnswers) {
  try {
    const score = async () => {
      return await axiosInstance.post(`${baseUrl}/score`, {...allAnswers}).then((response) => {
        let data = response
        return data.data;
      }).catch((error) => {
        throw new Error(error);
      });
    }
    return score()
    
  } catch (error) {
    throw new Error(error);
  }
}