import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../redux/actions";
import { Table } from "antd";
import { styled } from "styled-components";

const CustomStyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: pink;
  }
  .ant-table-tbody > tr > td {
    background-color: lavender;
  }
  .ant-table-tbody > tr > td,
  .ant-table-thead > tr > th {
    color: grey;
  }
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  .ant-table-tbody > tr {
    border-bottom: 1px solid #e8e8e8;
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    border-right: 1px solid #e8e8e8;
  }
`;


export const ApiDisplay = () => {
         const dispatch = useDispatch();
         const data = useSelector((state) => state?.datas);
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

         return <CustomStyledTable columns={columns} dataSource={data?.data} className="custom-table"/>;
       };
