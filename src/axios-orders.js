import axios from "axios";

const instance = axios.create({
	baseURL: "https://burger-builder-e0dd7.firebaseio.com/",
});

export default instance;
