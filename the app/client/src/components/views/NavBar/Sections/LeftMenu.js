import React from 'react';
import { Menu,Badge, Icon } from 'antd';
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)
  
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="schedule">
      <Badge count={user.userData && user.meeting}>
        <a href="/meetings" style={{marginRight:-22, color:'#667777'}}>
          <Icon type="schedule" style={{fontSize:30, marginBottom:4 }} />
        </a>
      </Badge>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu