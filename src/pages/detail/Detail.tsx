import React from "react";
import {useParams} from "react-router-dom";

export const Detail:React.FC=(props)=>{
    const {id:touristRouteId}=useParams()
    return (
        <>
            旅游路线详情页面，路线ID：{touristRouteId}
        </>
    )
}
