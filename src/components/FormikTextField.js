import { useFormikContext } from 'formik';
import { TextField}  from '@material-ui/core';

export default function FormikTextField({id, ...restProps }){
  const { values, handleChange, touched, errors } = useFormikContext();
  
  return(
    <TextField
      id={id}
      value={values[id]}
      onChange={handleChange}
      error={touched[id] && Boolean(errors[id])}
      helperText={touched[id] && errors[id]}
      {...restProps}
    />
  )
}