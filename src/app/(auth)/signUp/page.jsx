"use client";

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Full name is required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required field"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  userType: Yup.mixed()
    .oneOf(["merchant", "customer"])
    .required("User type is required"),
});

const ValidationSchemaExample = () => {
  const router = useRouter();

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-6 position-relative">
          <Image src="/building.jpg" fill className="p-0" alt="..." />
        </div>
        <div
          className="col-6 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              userType: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              resetForm();
              console.log(values, "values");
              try {
                await axios.post("/api/users/signup", values);
                router.push("/login");
              } catch (error) {
                console.log("Signup failed", error.message);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6 mt-4">
                    <Form.Group controlId="formFullName">
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        className={
                          touched.fullName && errors.fullName ? "error" : null
                        }
                      />
                      {touched.fullName && errors.fullName && (
                        <div style={{ color: "red" }}>{errors.fullName}</div>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formEmail" className="mt-4">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={
                          touched.email && errors.email ? "error" : null
                        }
                      />
                      {touched.email && errors.email && (
                        <div style={{ color: "red" }}>{errors.email}</div>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <Form.Group controlId="formPassword" className="mt-4">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={
                          touched.password && errors.password ? "error" : null
                        }
                      />
                      {touched.password && errors.password && (
                        <div style={{ color: "red" }}>{errors.password}</div>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <Form.Group controlId="formUserType" className="mt-4">
                      <Form.Control
                        as="select"
                        name="userType"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userType}
                        className={
                          touched.userType && errors.userType ? "error" : null
                        }
                      >
                        <option value="" disabled>
                          Select User Type
                        </option>
                        <option value="customer">Customer</option>
                        <option value="merchant">Merchant</option>
                        {/* Add more user types as needed */}
                      </Form.Control>
                      {touched.userType && errors.userType && (
                        <div style={{ color: "red" }}>{errors.userType}</div>
                      )}
                    </Form.Group>
                  </div>
                </div>

                <div
                  className="mt-4"
                  style={{ display: "flex ", justifyContent: "center" }}
                >
                  <Button
                    className="w-100"
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Create new account
                  </Button>
                </div>

                <div
                  className="mt-3"
                  style={{ display: "flex ", justifyContent: "center" }}
                >
                  Go to home
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ValidationSchemaExample;
