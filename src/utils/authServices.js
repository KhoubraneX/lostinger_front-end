import axios from "../api/axios"

function refreshToken() {
    const fetchData = async () => {
        try {
            let { data } = await axios.post('/api/auth/refresh', JSON.stringify({
                token: localStorage.getItem("refresh_token")
            })
            );
            let { jwt, refresh_token } = data;
            localStorage.setItem("jwt", jwt);
            localStorage.setItem("refresh_token", refresh_token);
        } catch (e) {
            localStorage.removeItem("jwt")
            localStorage.removeItem("refresh_token")
            window.location = "/login"
            console.log("you out");
        }
    };
    fetchData();
}

async function checkToken(token = localStorage.jwt) {
    try {
        await axios.post("/api/auth/check", JSON.stringify({ token: token }))
        return true
    } catch (error) {
        refreshToken()
        return false
    }
}

export { checkToken, refreshToken }