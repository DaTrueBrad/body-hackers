import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function RegUserNiche() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register 2 of 2</h1>
      <h2>Tell us about yourself</h2>
      <Formik
        initialValues={{
          niche: "",
          checked: [],
          heartCondition: false
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <Field name="niche" as="select" placeHolder="What sport do you do?">
              <option selected="selected" hidden>
                Select an Option
              </option>
              <option value="1">Powerlifting</option>
              <option value="2">Weekend Warrior</option>
              <option value="3">Runner</option>
            </Field>

            <h2>What will we see you for?</h2>
            <div className="checkbox-container">

              <label>
                <Field type="checkbox" name="checked" value="One" />
                One
              </label>

              <label>
                <Field type="checkbox" name="checked" value="Two" />
                Two
              </label>

              <label>
                <Field type="checkbox" name="checked" value="Three" />
                Three
              </label>

              <label>
                <Field type="checkbox" name="checked" value="Four" />
                Four
              </label>

              <label>
                <Field type="checkbox" name="checked" value="Five" />
                Five
              </label>
            </div>
            {/* Heart codition checkbox isn't working properly */}
            <label>
              <Field type="checkbox" name="heartCondition" value="true" />
              Check here if you have a heart condition
            </label>

            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegUserNiche;
