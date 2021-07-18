import { Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField}  from '@material-ui/core';

export default function Subscription() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <h1>Subscription page</h1>
        </Grid>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="first-name" label="First Name" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TextField id="last-name" label="Last Name" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TextField id="e-mail" label="E-mail" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  value={10}
                  onChange={() => {}}
                  label="Gender"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Non-Binary</MenuItem>
                  <MenuItem value={20}>Other</MenuItem>
                  <MenuItem value={30}>Female</MenuItem>
                  <MenuItem value={40}>Male</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}