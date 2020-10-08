import React from 'react'
import { Typography,Row } from 'antd';
const { Title } = Typography;
const { Text } = Typography;

function Meeting() {
    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Title>10 May Meeting</Title>
            </div>
            <br/>
            <div>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>Once the call starts the audio will be fed into a cloud storage where a speech to  text model will process the streamed input.</Text>
                </Row>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>We can also use the chat function to text members in the call, and these chat will also be sored in the meeting</Text>
                </Row>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>Next the agenda can be set by anyone in the call which is important in the formatting of the meeting.</Text>
                </Row>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>So let us set agenda 1 to be marketing strategy</Text>
                </Row>
                <br/>
                <Title level={4} style={{textAlign: 'center'}}>Agenda 1: Marketing Strategy</Title>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>This will help all the meeting participants to be on the same page, hence reducing wasted time.</Text>
                </Row>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>Next, we an set agenda 2 to be sales target</Text>
                </Row>
                <br/>
                <Title level={4} style={{textAlign: 'center'}}>Agenda 2: Sales Target</Title>
                <Row style={{textAlign:'center',  justifyContent:'center'}}>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>Then end the call.</Text>
                </Row>
            </div>
        </div>
    )
}

export default Meeting
