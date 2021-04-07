import {
    Paper,
    Grid,
    makeStyles,
    Button,
  } from "@material-ui/core";
  import { Form, Formik } from "formik";
  import React, { useState } from "react";
  import * as Yup from "yup";
  import FormControl from "../FormControl/FormControl";
   //data

  const DepartmentItems = [
    {
      value: "designer",
      label: "Designer",
    },
    {
      value: "developer",
      label: "Developer",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
    {
      value: "seo",
      label: "SEO",
    },
  ];
  //data
  //styles
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(3),
      padding: theme.spacing(4),
  
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
      "& .MuiButton-root": {
        margin: theme.spacing(0.5),
        textTransform: "capitalize",
      },
      "& .MuiTableCell-root:not(:nth-of-type(2))": {
        textTransform: "capitalize",
      },
    },
  }));
  const FormContainer = () => {
    const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem("employees")) || []
    );
    //initialValues
    const initialValues = {
      Name: "", 
       Price: "",
      department: "",
      date: new Date(),
    };
    //validationSchema
    const validationSchema = Yup.object({
      Name: Yup.string().required("Required"),
        Price: Yup.string().required("Required"),
      department: Yup.string().required("Required"),
      date: Yup.date().required(),
    });
    //onSubmit
    
    //function delete item to table
    const deleteItem = (id) => {
      const filter_with_id = employees.filter((emp) => emp.id !== id);
      setEmployees(filter_with_id);
      localStorage.setItem("employees", JSON.stringify(filter_with_id));
    };
    const classes = useStyles();
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
         >
          {(formik) => {
            console.log(formik);
            return (
              // Fomr
              <Form>
                <Paper elevation={0} className={classes.root}>
                  <Grid container>
                    <Grid item sm={6}>
                      <FormControl
                        control="input"
                        name="Name"
                        label="Name"
                        autoFocus
                      />
                       <FormControl control="input" name="Price" label="Price" />
                       <FormControl control="textarea" name="textarea" label="Description" rowsMin={3} />
                       <FormControl
                        control="select"
                        name="department"
                        options={DepartmentItems}
                        label="Department"
                      />

                    </Grid>
                    <Grid item sm={6}>
                      <input type="file" name="img" />
                    </Grid>
                  </Grid>
                  <Grid item sm={12}>
                     <div>
                        <Button type="submit" variant="contained" color="primary">
                          Save
                        </Button> 
                      </div>
                  </Grid>
                </Paper>
              </Form>
            );
          }}
        </Formik> 
      </>
    );
  };
  
  export default FormContainer;