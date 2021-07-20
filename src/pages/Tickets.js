import { Formik, Form } from "formik";
import { Box, Button, Container, Grid }  from '@material-ui/core';

const initialValues = {
  tickets: []
};

export default function Tickets() {
  const onSubmit = values => console.log(values);

  const onAddTicket = (values, setValues) => {
    const tickets = [...values.tickets];
    tickets.push('Opa');
    setValues({...values, tickets});
  }

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <h1>Subscription page</h1>
        </Grid>
      </Grid>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ errors, values, touched, setValues }) => (
          <Form>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={() => onAddTicket(values, setValues)}>
                Add Ticket
              </Button>
            </Grid>

            { values.tickets.map((ticket, index) => (
                <p key={index}>{ticket}</p>
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