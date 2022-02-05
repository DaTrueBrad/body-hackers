import "./auth.css";
import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

function RegUserInfo() {

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name is too Short!")
      .max(50, "First name is too Long!")
      .required("First name Required"),
    lastName: Yup.string()
      .min(2, "Last name is too Short!")
      .max(50, "Last name is too Long!")
      .required("Last name Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password is too long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });


  return (
    <div>
      <h1>Register 1 of 2</h1>
      <h2>Create your account</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={ (values) => {
          console.log(values)
          axios.post('http://localhost:4000/api/registerOne', values)
          .then((res) => {
            console.log(res.data)
            localStorage.setItem('cui', res.data.id)
            localStorage.setItem('firstName', res.data.first_name)
            localStorage.setItem('lastName', res.data.last_name)
            localStorage.setItem('Email', res.data.email)
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text: err.response.data
            })
          })
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <div className="names-container">
            <Field
              name="firstName"
              placeHolder="First Name" />
            <Field
              name="lastName"
              placeholder="Last Name"/>
            </div>
            <Field
              name="email"
              type="email"
              placeHolder="Email"/>
            <Field
              name="password"
              type="password"
              placeHolder="Password"/>
            <Field
              name="confirmPassword"
              type="password"
              placeHolder="Confirm Password"/>

            <button type="submit" disabled={!isValid}>Submit</button>
            {errors.firstName && touched.firstName ? (
              <div className="error">{errors.firstName}</div>
            ) : null}
            {errors.lastName && touched.lastName ? (
              <div className="error">{errors.lastName}</div>
            ) : null}
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="error">{errors.confirmPassword}</div>
            ) : null}
          </Form>
          
        )}
      </Formik>

      {/* <form onSubmit={formik.handleSubmit}>
        <div className="names-container">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </div>
        <input
            type="text"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        <input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />

        <button type="submits" disabled={!formik.isValid}>Next</button>
      </form> */}
    </div>
  );
}

export default RegUserInfo;
