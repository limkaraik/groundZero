import React, { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;


function VideoStream(props) {

    const [yourID, setYourID] = useState("");
    const [users, setUsers] = useState({});
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);

    const userVideo = useRef();
    const partnerVideo = useRef();
    const socket = useRef();

    useEffect(() => {
        socket.current = io.connect("http://localhost:5000");
        socket.current.emit('userData', props.userData)
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
          setStream(stream);
          if (userVideo.current) {
            userVideo.current.srcObject = stream;
          }
        })

        socket.current.on('init',  (id)=>{
            setYourID(id)
        })

        // socket.current.on("yourID", (id) => {
        //     setYourID(id);
        // })
        
        socket.current.on("allUsers", (users) => {
          setUsers(users);
        })
    
        socket.current.on("hey", (data) => {
          setReceivingCall(true);
          setCaller(data.from);
          setCallerSignal(data.signal);
        })
      }, []);
    
    function callPeer(id) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream,
    });

    peer.on("signal", data => {
        socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
        if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
        }
    });

    socket.current.on("callAccepted", signal => {
        setCallAccepted(true);
        peer.signal(signal);
    })

    }

    function acceptCall() {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream,
    });
    peer.on("signal", data => {
        socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
        partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    }

    let UserVideo;
    if (stream) {
    UserVideo = (
        <Video playsInline muted ref={userVideo} autoPlay />
    );
    }

    let PartnerVideo;
    if (callAccepted) {
    PartnerVideo = (
        <Video playsInline ref={partnerVideo} autoPlay />
    );
    }

    let incomingCall;
    if (receivingCall) { 
    incomingCall = (
        <div>
            {
                callAccepted ? <br/> :
                <div>
                <h1>{caller && users[caller].name} is calling you</h1>
                <button onClick={acceptCall}>Accept</button>
                </div>
            }
        
        </div>
    )
    }
    const endCall = ()=>{
        setCallAccepted(false)
        setCaller("")
        setReceivingCall(false)
        setCallerSignal()
    }
    
    return (
        <div>
            <div style ={{ textAlign: 'center'}}>
                <h2>Hi {props.userData.name}</h2>
            </div>
            <div style={{width:'100%', paddingTop:'25px'}}>
                <Container>
                    <Row>
                        {UserVideo}
                        {PartnerVideo}
                    </Row>
                    <Row>
                        {Object.keys(users).map(key => {
                            if (key === yourID) {
                                return null;
                            }
                            else if (!callAccepted) return (
                            <button onClick={() => callPeer(key)}>Call {users[key].name}</button>
                            );
                        })}
                    </Row>
                    <Row>
                        <button onClick={endCall}>End Call</button>
                        {incomingCall}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default VideoStream
