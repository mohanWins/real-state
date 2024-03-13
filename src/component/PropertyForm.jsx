"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const PropertyTypeSchema = Yup.object().shape({
  propertyType: Yup.mixed()
    .oneOf(["Family", "Hostel"])
    .required("User type is required"),
});

const PropertyForm = () => {
  return (
    <Formik
      initialValues={{ propertyType: "" }}
      validationSchema={PropertyTypeSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        resetForm();
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <Form.Group controlId="formpropertyType">
                  <Form.Control
                    as="select"
                    name="propertyType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.propertyType}
                    className={
                      touched.propertyType && errors.propertyType
                        ? "error"
                        : null
                    }
                  >
                    <option value="" disabled>
                      Select Property Type
                    </option>
                    <option value="Family">Family</option>
                    <option value="Hostel">Hostel</option>
                  </Form.Control>
                  {touched.propertyType && errors.propertyType && (
                    <div style={{ color: "red" }}>{errors.propertyType}</div>
                  )}
                </Form.Group>
              </div>
            </div>
          </div>

          <Button
            className="w-100"
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Create new account
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyForm;
