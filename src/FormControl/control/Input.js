import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
const Input = ({ name, label, ...reset }) => {
  return (
    <>
      <Field
        component={TextField}
        name={name}
        label={label}
        variant="outlined"
        size="small"
        {...reset}
      />
    </>
  );
};

export default Input;
