import axios from "axios";
import { checkToken } from "../utils/authServices";

export default axios.create({
    baseURL: process.env.REACT_APP_BACKEND_END_POINT
})
