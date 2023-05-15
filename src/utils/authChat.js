import { CometChat } from "@cometchat-pro/chat";

let authKey = process.env.REACT_APP_COMETCHAT_APP_AUTH_KEY

function ChatLogin(userId) {
    CometChat.login(userId, authKey)
}

function ChatRegister(userId , userName) {
    var user = new CometChat.User(userId);
    user.setName(userName);
    CometChat.createUser(user, authKey)
}

export {
    ChatLogin , 
    ChatRegister
}