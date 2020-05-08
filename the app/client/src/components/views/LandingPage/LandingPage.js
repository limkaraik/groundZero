import React from 'react'
import VideoStream from './sections/VideoStream'
import { useSelector } from "react-redux";

function LandingPage(props) {
    const user = useSelector(state => state.user)

    return (
        <div>
            {(user.userData && user.userData.isAuth) ? 
            <VideoStream userData= {user.userData}/> 
            :
            <div style={{textAlign:'center'}}>
                <span style={{ fontSize: '2rem' }}>Please Log In</span>
            </div>

            }
        </div>
        
    )
}

export default LandingPage
