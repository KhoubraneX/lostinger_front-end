import axios from "../api/axios"

function refreshToken() {
    const fetchData = async () => {
        try {
            let { data } = await axios.post('/space/api/auth/refresh', JSON.stringify({
                token: localStorage.getItem("refresh_token")
            })
            );
            let { jwt, refresh_token } = data;
            localStorage.setItem("jwt", jwt);
            localStorage.setItem("refresh_token", refresh_token);
        } catch (e) {
            localStorage.removeItem("jwt")
            localStorage.removeItem("refresh_token")
            window.location = "/"
        }
    };
    fetchData();
}

async function checkToken(token) {
    try {
        await axios.post("http://localhost/space/api/auth/check", JSON.stringify({ token: token }))
        return true
    } catch (error) {
        refreshToken()
    }
}

export { checkToken, refreshToken }