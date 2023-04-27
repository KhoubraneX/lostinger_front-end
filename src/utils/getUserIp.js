import axios from "../api/axios";

let getUserIpAddr = async () => {
    try {
        let { data } = await axios.get("https://api.ipify.org/?format=json");
        let request = await axios.get(`http://ip-api.com/json/${data.ip}`);
        let userInfoIp = request.data;
        return userInfoIp
    } catch (error) {
        console.log(error);
    }
};

export {getUserIpAddr}