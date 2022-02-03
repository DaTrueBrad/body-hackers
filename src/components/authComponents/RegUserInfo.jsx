import React from "react";
import { useFormik} from "formik";
import * as Yup from 'yup'

function RegUserInfo() {
  const initialValues = {
    firstName: ""
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
      <h1>Register 1 of 2</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="names-container">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>

        <button type="submits">Next</button>
      </form>
    </div>
  );
}

export default RegUserInfo;
