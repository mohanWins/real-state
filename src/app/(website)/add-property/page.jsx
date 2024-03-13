"use client";
import Image from "next/image";
import React from "react";
import styles from "@/styles.module.css";
import PropertyForm from "@/component/PropertyForm";

const page = () => {
  return (
    <>
      <div
        style={{
          height: "150px",
          backgroundColor: "#306976",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Add Property</h2>
      </div>

      <div className="container-fluid ">
        <div style={{ height: "240px" }}>
          <div className="mt-5">
            <h5>Basic information</h5>
          </div>
          <div>
            <span>Please select an image that look like your property </span>
          </div>
          <div className="container-fluid mt-2">
            <div className={styles.imageContainer}>
              <Image
                src={
                  "https://www.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
                }
                fill
              />
              <div className={styles.text}>Triplex</div>
            </div>
          </div>
        </div>
        <PropertyForm />
      </div>
    </>
  );
};

export default page;
