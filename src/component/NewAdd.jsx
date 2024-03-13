"use client";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";

export const NewAdd = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-6 mt-4 ps-4">
            <h4>Newly Add</h4>
          </div>
          <div className="col-6 d-flex mt-4 justify-content-end pe-4">
            <Button size="sm" variant="outline-success">
              View All
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-6 d-flex">
            <div className="col-6">
              <Image
                src={
                  "https://www.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
                }
                height={250}
                width={420}
              />
            </div>
            <div className="col-6">
              <div style={{ display: "flex" }}>
                <h5>Residential Rental</h5>
                <span> 55408</span>
              </div>

              <div style={{ backgroundColor: "green", color:"white" }}>
                <span>$184,00</span>
                <span>7.25% CAP</span>
              </div>
              <span>4 days ago</span>
              <div>
                <Button size="sm" variant="outline-success">
                  more details
                </Button>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};
