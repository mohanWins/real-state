"use client";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Import the arrow-right icon
import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/navigation";
import axios from "axios";

export const Header = () => {
  const token = useSelector((state) => state?.counter?.token);
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar
        className="sticky-top"
        style={{
          height: "65px",
          backgroundColor: "white",
        }}
      >
        <div className="container-fluid">
          <Nav className=" gap-3 ps-5">
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              Buy
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="#pricing"
            >
              sell
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="#pricing"
            >
              About
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="#pricing"
            >
              Contact
            </Link>
          </Nav>

          <div style={{ justifyContent: "end", paddingRight: "165px" }}>
            {!token ? (
              <>
                <div style={{ display: "flex", gap: "15px" }}>
                  {" "}
                  <div>
                    {" "}
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className="text-black"
                    />
                  </div>
                  <div
                    style={{ cursor: "pointer", color: "black" }}
                    onClick={logout}
                  >
                    logout
                  </div>
                </div>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="text-black"
                />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "5px",
                  }}
                  href="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
};
