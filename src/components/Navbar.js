import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/navigasi.css";
import absensi from "../assets/image/logo-absensi.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const admin = localStorage.getItem("admin");
  const spv = localStorage.getItem("spv");

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("spv");
    localStorage.removeItem("status");
    navigate("/login");
  };

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <img src={absensi} alt="" />
      </a>

      <button
        className="menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        {admin === "true" && spv === "true" ? (
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">Absen</a>
            </li>
            <li>
              <a href="/admin/karyawan">Karyawan</a>
            </li>

            <li>
              <a href="/admin/report">Report</a>
            </li>
            <li>
              <a href="/login" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="/karyawan">Home</a>
            </li>
            <li>
              <a href="/karyawan/laporan/create">Laporan</a>
            </li>
            <li>
              <a href="/login" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
