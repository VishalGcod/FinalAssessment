import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../redux/actions";
import { CustomStyledTable } from "../styledComponents/styles";

export const ApiDisplay = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.datas);
  const loading = useSelector((state) => state?.loading);
  const error = useSelector((state) => state?.error);
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

  if (loading) {
    return <h2>loading Your Api...</h2>;
  }
  if (error) {
    return <h2>Error... {error.message}</h2>;
  }
  return (
    <CustomStyledTable
      columns={columns}
      dataSource={data?.data}
      className="custom-table"
    />
  );
};
