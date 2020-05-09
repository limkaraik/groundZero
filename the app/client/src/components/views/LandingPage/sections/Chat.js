import React,{useState} from 'react'
import {Input, Col, Row, Select, InputNumber, DatePicker} from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import './chat.css';

const { Option } = Select;


function Chat(props) {
    
    const [Message, setMessage] = useState('');
    const [Type, setType] = useState('Message');
    const [Convo, setConvo] = useState([]);

    function onChange(value) {
        setType(value)
    }

    const handleChange = (event)=>{
        setMessage(event.currentTarget.value)
    }

    const pressEnter = ()=>{
        let a = false
        if (Type==='Set Agenda')
            a = true
        let m = {
            message: Message,
            name: props.name,
            agenda: a
        }
        let messages = [...Convo, m]
        setConvo(messages)
        setMessage('')
    }
    
    const renderConvo = () =>(
        
        <ScrollToBottom className="messages">
            {Convo.map((M, i)=>(
                M.agenda ? <p style={{color: 'blue'}}>Agenda: {M.message}</p>
                :
                <p>{M.name}: {M.message}</p>
            ))}
        </ScrollToBottom>
        
    )

    
    return (
        <div>
            <div className='container'>
                {renderConvo()}
            </div>
            <div style={{ marginRight:'10px'}}>
            <Input.Group compact>
                <Select defaultValue="Message" 
                    onChange={onChange}
                    style={{ width: '30%' }}>
                    <Option value="Message">Message</Option>
                    <Option value="Set Agenda">Set Agenda</Option>
                </Select>
                <Input
                    style={{ width: '70%' }}
                    placeholder= 'type...'
                    onChange={handleChange}
                    value={Message}
                    onPressEnter ={pressEnter}
                />
            </Input.Group>
            </div>
        </div>
    )
}

export default Chat
