import React from "react";
import {Menu} from "antd";
import {sideMenuList} from "./mockup";
import {GifOutlined} from "@ant-design/icons";
import styles from './SideMenu.module.css';

export const SideMenu:React.FC=(props)=>{
    return (
        <Menu mode={'vertical'} className={styles['side-menu']}>
            {
                sideMenuList.map((menu,index)=>(
                    <Menu.SubMenu key={`side-menu-${index+menu.title}`} icon={<span><GifOutlined />{menu.title}</span>}>
                        {
                            menu.subMenu.map((subMenu,subIndex)=>(
                                <Menu.SubMenu key={`side-sub-menu-${subIndex+subMenu.title}`} icon={<span><GifOutlined />{subMenu.title}</span>}>
                                    {
                                        subMenu.subMenu.map((item,itemIndex)=>(
                                            <Menu.Item key={`menu-item-${itemIndex+item}`}><GifOutlined />{item}</Menu.Item>
                                        ))
                                    }
                                </Menu.SubMenu>
                            ))
                        }
                    </Menu.SubMenu>
                ))
            }
        </Menu>
    )
}
