import {Layout, Typography} from "antd";
import React from "react";

export const Footer:React.FC=(props)=>{
    return (
        <Layout.Footer>
            <Typography.Title level={3} style={{textAlign:'center'}}>
                版权所有 @Greyrat
            </Typography.Title>
        </Layout.Footer>
    )
}
