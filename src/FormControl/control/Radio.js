import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio as MuiRadio,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import { RadioGroup } from "formik-material-ui";
import { ErrorMessage, Field } from "formik";

const Radio = ({ name, label, options = [], ...reset }) => {
  return (
    <div>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Field component={RadioGroup} name={name} {...reset} row>
          {options.map((option, index) => {
            const { value, label: radioLabel } = option;
            return (
              <FormControlLabel
                key={index}
                value={value}
                control={<MuiRadio />}
                label={radioLabel}
              />
            );
          })}
        </Field>
        <ErrorMessage
          style={{ color: "#f44336" }}
          name={name}
          component={FormHelperText}
        />
      </FormControl>
    </div>
  );
};

export default Radio;
