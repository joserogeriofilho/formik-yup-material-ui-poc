import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid, MenuItem }  from '@material-ui/core';
import FormikTextField from '../components/FormikTextField';
import FormikSelect from '../components/FormikSelect';

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "none"
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email addresss`")
    .required("Required"),
  gender: Yup.string()
    .oneOf(
      ["non-binary", "other", "female", "male"],
      "Invalid gender"
    )
    .required("Required")
});

export default function Subscription() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <h1>Subscription page</h1>
        </Grid>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={ values => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormikTextField id="firstName" label="First Name" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <FormikTextField id="lastName" label="Last Name" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <FormikTextField id="email" label="E-mail" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <FormikSelect id="gender" label="Gender" variant="outlined" fullWidth>
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"non-binary"}>Non-Binary</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"male"}>Male</MenuItem>
                </FormikSelect>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Container>
  );
}