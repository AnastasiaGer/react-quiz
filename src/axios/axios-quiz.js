import axios from "axios";

export default axios.create({
  baseURL: 'https://react-quiz-f5514-default-rtdb.firebaseio.com/'
})