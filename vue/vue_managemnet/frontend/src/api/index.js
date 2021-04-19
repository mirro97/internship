import axios from "axios";

function registerBorard(boardType) {
  const url = "http://localhost:3000/board";
  return axios.post(url, boardType);
}

export { registerBorard };
