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
                <Title level={4} style={{textAlign: 'center'}}>Agenda 1: Marketing Strategy</Title>
                <Row>
                    <Text style={{color: '#1B7CED'}}>Kar Aik:</Text>
                    <Text style={{marginLeft:'5px'}}>I am so cool</Text>
                </Row>
                <Title level={4} style={{textAlign: 'center'}}>Agenda 2: Sales Target</Title>
            </div>
        </div>
    )
}

export default Meeting
