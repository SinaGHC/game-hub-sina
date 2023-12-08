import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0f5fdf0dfda84e889011009da91db858",
  },
});
