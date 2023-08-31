import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../redux/actions";
import { Space, Table, Tag } from "antd";

export const ApiDisplay = () => {
         const dispatch = useDispatch();
         const data = useSelector((state) => state.datas);
         useEffect(() => {
           dispatch(fetching());
         }, []);
         const columns = [
           {
             title: "Id",
             dataIndex: "id",
             key: "id",
           },
           {
             title: "Accounts",
             dataIndex: "account_id",
             key: "account_id",
           },
           {
             title: "Campaigns",
             dataIndex: "campaign_name",
             key: "campaign_name",
           },
           {
             title: "Status",
             dataIndex: "status",
             key: "status",
           },
         ];

         return <Table columns={columns} dataSource={data?.data} />;
       };
