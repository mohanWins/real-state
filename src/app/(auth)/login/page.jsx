"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "@/lib/features/token/authSlice";
import { useRouter } from "next/navigation";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required(" Email is required field"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const ValidationSchemaExample = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = useSelector((state) => state?.counter?.token);


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
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              resetForm();
              try {
                const { data } = await axios.post("/api/users/login", values);
                console.log({
                  loggedIn: data.data,
                });
                dispatch(getData(data.data));

                router.push("/");
              } catch (error) {
                console.log("Login  failed", error.message);
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
