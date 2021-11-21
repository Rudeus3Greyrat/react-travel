import React, {useState} from "react";
import styles from "./Header.module.css";
import {Button, Input, Layout, Menu, Typography} from "antd";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import {GlobalOutlined} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import logo from "../../assets/logo.svg";
import {useNavigate} from "react-router-dom";
import {store} from "../../redux/store";
import {changeLanguage, setLanguage} from "../../redux/language/languageActions";
import {useDispatch, useSelector} from "react-redux";
import {languageState} from "../../redux/language/languageReducer";

export const Header:React.FC=(props)=>{
    const navigate=useNavigate()
    const languageState=useSelector<languageState,languageState>(state=>state)
    const dispatch=useDispatch()
    return (
        <div className={styles['app-header']}>
            <div className={styles['top-header']}>
                <div className={styles.inner}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <DropdownButton style={{marginLeft:'15px'}} icon={<GlobalOutlined />} overlay={
                        <Menu>
                            {
                                languageState.languageList.map(lang=><Menu.Item key={lang.code} onClick={()=>dispatch(changeLanguage(lang.code))}>{lang.name}</Menu.Item>)
                            }
                            <Menu.Item key={Date.now()} onClick={()=>dispatch(setLanguage({name:'日文',code:'jp'}))}>添加语言</Menu.Item>
                        </Menu>
                    }>
                        {languageState.language==='zh'?'中文':'英文'}
                    </DropdownButton>
                    <ButtonGroup className={styles['button-group']}>
                        <Button onClick={()=>navigate('/signIn')}>登录</Button>
                        <Button onClick={()=>navigate('/register')}>注册</Button>
                    </ButtonGroup>
                </div>
            </div>
            <Layout.Header className={styles['main-header']} onClick={()=>navigate('/')}>
                <img src={logo} alt="" className={styles['App-logo']}/>
                <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
                <Input.Search placeholder={'请输入旅游目的地、主题或关键字'} className={styles['search-input']} />
            </Layout.Header>
            <Menu mode={"horizontal"} className={styles['main-menu']}>
                <Menu.Item key={1}>旅游首页</Menu.Item>
                <Menu.Item key={2}>周末游</Menu.Item>
                <Menu.Item key={3}>跟团游</Menu.Item>
                <Menu.Item key="4"> 自由行 </Menu.Item>
                <Menu.Item key="5"> 私家团 </Menu.Item>
                <Menu.Item key="6"> 邮轮 </Menu.Item>
                <Menu.Item key="7"> 酒店+景点 </Menu.Item>
                <Menu.Item key="8"> 当地玩乐 </Menu.Item>
                <Menu.Item key="9"> 主题游 </Menu.Item>
                <Menu.Item key="10"> 定制游 </Menu.Item>
                <Menu.Item key="11"> 游学 </Menu.Item>
                <Menu.Item key="12"> 签证 </Menu.Item>
                <Menu.Item key="13"> 企业游 </Menu.Item>
                <Menu.Item key="14"> 高端游 </Menu.Item>
                <Menu.Item key="15"> 爱玩户外 </Menu.Item>
                <Menu.Item key="16"> 保险 </Menu.Item>
            </Menu>
        </div>
    )
}
