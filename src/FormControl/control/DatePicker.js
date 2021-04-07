import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { Field } from "formik";
const DatePicker = ({ name, label, ...reset }) => {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Field
          component={KeyboardDatePicker}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          inputVariant="outlined"
          name={name}
          label={label}
          {...reset}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePicker;
