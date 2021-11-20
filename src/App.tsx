import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Button, Input, Layout, Menu, Typography} from "antd";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import {GlobalOutlined} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.appHeader}>
        <div className={styles.topHeader}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <DropdownButton style={{marginLeft:'15px'}} icon={<GlobalOutlined />} overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }>
              语言
            </DropdownButton>
            <ButtonGroup className={styles.buttonGroup}>
              <Button>登录</Button>
              <Button>注册</Button>
            </ButtonGroup>
          </div>
        </div>
        <Layout.Header className={styles.mainHeader}>
          <img src={logo} alt="" className={styles.AppLogo}/>
          <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
          <Input.Search placeholder={'请输入旅游目的地、主题或关键字'} className={styles.searchInput} />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles.mainMenu}>
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
      <Layout.Footer>
        <Typography.Title level={3} style={{textAlign:'center'}}>
          版权所有 @Greyrat
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}

export default App;
