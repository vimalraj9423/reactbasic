import io from 'socket.io-client';
class SocketClass {
    constructor(){
        this.socket=undefined;
    }
    static connectSocket(){

        const socket = io('http://localhost:80');
        this.socket=socket;
    }
}
export default SocketClass;