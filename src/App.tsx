import React from 'react';
import styles from './App.module.css';
import {Col, Layout, Row, Typography} from "antd";
import {Header,Footer, SideMenu, Carousel} from "./components";
import {productList1,productList2,productList3} from './mockups';

function App() {
  return (
    <div className={styles.App}>
        <Header />
        <div className={styles["page-content"]}>
            <Row style={{marginTop:'18px'}}>
                <Col span={6}>
                    <SideMenu />
                </Col>
                <Col span={18}>
                    <Carousel />
                </Col>
            </Row>
        </div>
        <Footer />
    </div>
  );
}

export default App;
