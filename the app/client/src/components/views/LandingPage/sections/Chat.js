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
        <div style={{ marginTop:'10px' }}>
        
            {Convo.map((M, i)=>(
                M.agenda ? <p style={{color: 'blue' , textAlign:'center', width:'100%'}}>Agenda: {M.message}</p>
                :
                <div style={{
                    display:'flex', textAlign:'center', 
                    flexDirection:'column',
                    alignItems: 'flex-start'
                 }}>
                    <p style={{borderRadius:'50px 50px 10px', paddingRight:'10px',
                    background:'#B8E2F2', paddingLeft:'10px',  marginLeft:'auto', marginRight:'10px'}}>
                        {M.name}: {M.message}
                    </p>
                </div>
                
            ))}
            <br/>
        
        </div>
        
    )

    
    return (
        <div>
            <div style={{display: 'grid', border:'2px solid black',  marginRight:'10px', height:'400px', borderRadius:'25px'}}>
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
