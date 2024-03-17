import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
import { Table } from "antd";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    // Name and phone no. is not showing in the appointment page of the user 
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   render: (text, record) => (
    //     <span>
    //       {record.doctorInfo.firstName} {record.doctorInfo.lastName}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Phone",
    //   dataIndex: "phone",
    //   render: (text, record) => <span>{record.doctorInfo.phone}</span>,
    // },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("YYYY-MM-DD")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
        <Layout>
          <h3 className="text-center">Appoinmtnets Lists</h3>
    
          <Table columns={columns} dataSource={appointments} />
        </Layout>
      );
};

export default Appointments;

