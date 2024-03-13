"use client";

import Image from "next/image";
import Form from "react-bootstrap/Form";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import { NewAdd } from "@/component";

export default function Home() {
  return (
    <>
      <div style={{ position: "relative", display: "flex" }}>
        <div>
          <Image
            src={
              "https://www.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
            }
            height={845}
            width={1905}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            display: "flex",
            transform: "translate(-50%, 50%)",
            backgroundColor: "white",
            borderRadius: "5px",

            height: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
              padding: "10px",
            }}
          >
            {" "}
            <Form.Select
              style={{ width: "300px" }}
              aria-label="Default select example"
            >
              <option>Select Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>

          <div style={{ marginRight: "15px" }}>
            <MDBCol md="12">
              <MDBFormInline className="md-form mr-auto mb-4">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <MDBBtn
                  outline
                  color="success"
                  rounded
                  size="sm"
                  type="submit"
                  className="mr-auto"
                >
                  Search
                </MDBBtn>
              </MDBFormInline>
            </MDBCol>
          </div>
        </div>
      </div>
      <NewAdd />
    </>
  );
}
