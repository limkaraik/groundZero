import React from 'react'
import VideoStream from './sections/VideoStream'
import { useSelector } from "react-redux";

function LandingPage(props) {
    const user = useSelector(state => state.user)

    return (
        <div>
            {user.userData ? 
            <VideoStream userData= {user.userData}/> 
            :
            <div>
                <span style={{ fontSize: '2rem' }}>Please Log In</span>
            </div>

            }
        </div>
        
    )
}

export default LandingPage
