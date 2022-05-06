import { io } from "socket.io-client";

function socket(urlValue){
let URL = `ws://localhost:7000/${urlValue}`;
    let socket = io(URL, { autoConnect: false });
    return socket
}



export default socket;