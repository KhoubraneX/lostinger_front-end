import axios from "axios"

async function checkToken() {
    let request = await axios.post("http://localhost/space/api/auth/check")
}

export default checkToken