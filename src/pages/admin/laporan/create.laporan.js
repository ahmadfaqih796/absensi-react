import "../../../assets/css/user/form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { createKaryawan } from "../../../providers/admin.provider";

const defaultKaryawan = {
  username: "",
  password: "12345",
  name: "",
  gender: "L",
  departemen: "IT",
  isAdmin: false,
  phone: "091212",
  alamat: "jl.kesasar",
};
const CreateLaporan = () => {
  
  return (
    <>
      <Navbar />
      <legend>Laporan</legend>
    </>
  );
};
export default CreateLaporan;
