"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Import the arrow-right icon
import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <div className="container-fluid" style={{ display: "flex" }}>
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
            <FontAwesomeIcon icon={faRightFromBracket} className="text-black" />{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                paddingLeft: "5px",
              }}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </Navbar>
    </>
  );
};
