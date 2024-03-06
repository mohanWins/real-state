"use client";

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  userType: Yup.string().required("User type is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Mobile number is required"),
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
              confirmPassword: "",
              userType: "",
              mobileNumber: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              resetForm();
              router.push("/login");
              console.log(values, "value");
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
                  <div className="col-6">
                    {" "}
                    <Form.Group
                      controlId="formConfirmPassword"
                      className="mt-4"
                    >
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        className={
                          touched.confirmPassword && errors.confirmPassword
                            ? "error"
                            : null
                        }
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <div style={{ color: "red" }}>
                          {errors.confirmPassword}
                        </div>
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
                  <div className="col-6">
                    {" "}
                    <Form.Group controlId="formMobileNumber" className="mt-4">
                      <Form.Control
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobileNumber}
                        className={
                          touched.mobileNumber && errors.mobileNumber
                            ? "error"
                            : null
                        }
                      />
                      {touched.mobileNumber && errors.mobileNumber && (
                        <div style={{ color: "red" }}>
                          {errors.mobileNumber}
                        </div>
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
