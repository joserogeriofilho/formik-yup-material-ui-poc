import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid } from "@material-ui/core";
import FormikTextField from "../components/FormikTextField";

const initialValues = {
  tickets: [],
};

const validationSchema = Yup.object({
  tickets: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email addresss`").required("Required"),
    })
  ),
});

export default function Tickets() {
  const onSubmit = (values) => console.log(values);

  const onAddTicket = (values, setValues) => {
    const tickets = [...values.tickets];
    tickets.push({
      firstName: "",
      lastName: "",
      email: "",
    });
    setValues({ ...values, tickets });
  };

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <h1>Subscription page</h1>
        </Grid>
      </Grid>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, values, touched, setValues }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onAddTicket(values, setValues)}
                >
                  Add Ticket
                </Button>
              </Grid>
            </Grid>

            {values.tickets.map((ticket, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12}>
                  <FormikTextField
                    isArrayItem
                    id={'firstName'}
                    arrayName={'tickets'}
                    index={index}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikTextField
                    isArrayItem
                    id={'lastName'}
                    arrayName={'tickets'}
                    index={index}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikTextField
                    isArrayItem
                    id={'email'}
                    arrayName={'tickets'}
                    index={index}
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
