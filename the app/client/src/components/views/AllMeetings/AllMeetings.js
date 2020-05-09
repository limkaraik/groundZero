import React from 'react'
import {Icon, Col, Card, Row} from 'antd'
const {Meta} = Card;

function AllMeetings() {
    return (
        <div style={{width:'75%', margin:'3rem auto'}}>
            <Row gutter={[16,16]}>
            <Col lg={6} md={8} xs={24}>
                <Card 
                    cover = {<a href={'/meeting'}><Icon type='schedule' style={{fontSize:80, marginLeft:'105px'}}/></a>}
                >
                    <Meta
                        style={{textAlign:'center'}}
                        title= {'10 May Meeting'}
                        description ={'Time: 08:10'}
                    />
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default AllMeetings
