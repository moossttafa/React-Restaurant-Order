import { MenuItem } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";

const Select = ({ name, label, options = [], ...reset }) => {
  return (
    <Field
      name={name}
      component={TextField}
      variant="outlined"
      label={label}
      select
      {...reset}
    >
      <MenuItem value="">None</MenuItem>
      {options.map((option) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </Field>
  );
};

export default Select;
