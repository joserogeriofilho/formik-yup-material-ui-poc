import { Container, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <h1>Home</h1>
        </Grid>
        <Grid item xs={12}>
          <p>
            Navigate through the pages for examples of Formik and Yup controlled
            forms. On the "Subscription" page the form is plain simple. On the
            "Tickets" page, the form is dynamically set by the user (they can
            add tickets to the form at will).
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
