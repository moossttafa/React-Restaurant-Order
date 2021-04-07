import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
const Textarea = ({ name, label, ...reset }) => {
  return (
    <>
      <Field
        component={TextField}
        name={name}
        label={label}
        variant="outlined"
        placeholder="Description"
        rows={7}
        rowMax={10}
        {...reset}
      />
    </>
  );
};

export default Textarea;