"use client";

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Full name is required field"),
  email: Yup.string()
    .email("Invalid email")
    .required(" Email is required field"),
});

const ValidationSchemaExample = () => {
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
            initialValues={{ fullName: "", email: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              resetForm();

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
                <Form.Group controlId="formFullName">
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    required={false}
                    className={
                      touched.fullName && errors.fullName ? "error" : null
                    }
                  />
                  {touched.fullName && errors.fullName && (
                    <div style={{ color: "red" }}>{errors.fullName}</div>
                  )}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-4">
                  <Form.Control
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={false}
                    value={values.email}
                    className={touched.email && errors.email ? "error" : null}
                  />
                  {touched.email && errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </Form.Group>

                <div className="row mt-4">
                  <div className="col-6">
                    <span>Remeber me</span>
                  </div>
                  <div className="col-6">
                    <span>Forgot Password?</span>
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
                    Submit
                  </Button>
                </div>
                <div className="mt-4">
                  <span>
                    New broker by number{" "}
                    <Link href="/signUp">Create new account</Link>
                  </span>
                </div>
                <div
                  className="mt-3"
                  style={{ display: "flex ", justifyContent: "center" }}
                >
                  <Link href="/"> Go to home</Link>
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
