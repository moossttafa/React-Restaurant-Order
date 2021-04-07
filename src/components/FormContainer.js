import {
  Paper,
  Grid,
  IconButton,
  makeStyles,
  Button,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormControl from "../FormControl/FormControl";
import DeleteIcon from "@material-ui/icons/Delete";
//data
const genderItems = [
  {
    value: "2LE",
    label: "Compo-2LE",
  },
  {
    value: "1LE",
    label: "Spicy-1LE",
  },
  
];
const DepartmentItems = [
  {
    value: "poultry",
    label: "Poultry",
  },
  {
    value: "dairy Produce",
    label: "Dairy Produce",
  },
  {
    value: "dry Products",
    label: "Dry Products",
  },
  {
    value: "daily Double",
    label: "Daily Double",
  },
];
const Meal = [
  {
    value: "poultry",
    label: "Poultry",
  },
  {
    value: "dairy Produce",
    label: "Dairy Produce",
  },
  {
    value: "dry Products",
    label: "Dry Products",
  },
  {
    value: "daily Double",
    label: "Daily Double",
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
    Quantity: "",
     addons: "",
    category: "",
    date: new Date(),
  };
  //validationSchema
  const validationSchema = Yup.object({
    Quantity: Yup.string().required("Required"),
     addons: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    date: Yup.date().required(),
  });
  //onSubmit
  const onSubmit = (values, action) => {
    const { Quantity,  addons, category ,meal } = values;
    const newEmployees = [
      ...employees,
      {
        id: new Date().getTime().toString(),
        Quantity,
        addons,
        category,
        meal
      },
    ];
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
    action.resetForm();
  };
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
        onSubmit={onSubmit}
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
                      control="select"
                      name="category"
                      options={DepartmentItems}
                      label="Category"
                    />
                      <FormControl
                      control="select"
                      name="meal"
                      options={Meal}
                      label="Item"
                    />
                      <FormControl
                      control="input"
                      name="Quantity"
                      label="Quantity"
                      autoFocus
                    />
                    </Grid>
                  <Grid item sm={6}>
                    <FormControl
                      control="radio"
                      name="addons"
                      options={genderItems}
                      label="Addons"
                    />
                     
                    <div>
                      <Button type="submit" variant="contained" color="primary">
                        Add
                      </Button>
                      <Button type="reset" variant="outlined" color="default">
                        New Order
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Form>
          );
        }}
      </Formik>
      {/* Table */}
      <Paper className={classes.root} elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>meal</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>addons</TableCell>
                 <TableCell>Totel</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.length ? (
                employees.map((employee) => {
                  const { id, Quantity,addons, meal } = employee;
                  return (
                    <TableRow key={id}>
                      <TableCell>{meal}</TableCell>
                      <TableCell>{Quantity}</TableCell>
                      <TableCell>{addons}</TableCell>
                      <TableCell>{addons}</TableCell> 
                      <TableCell>
                        <IconButton
                          color="secondary"
                          onClick={() => deleteItem(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <>
                  <TableRow>
                    <TableCell>No Items</TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper> 
    </>
  );
};

export default FormContainer;
