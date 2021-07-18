import { useFormikContext } from 'formik';
import { TextField }  from '@material-ui/core';

export default function FormikSelect({children, label, id, ...restProps }){
  const { values, handleChange, touched, errors } = useFormikContext();

  return (
    <TextField
      select
      label={label}
      id={id}
      value={values[id]}
      onChange={handleChange[id]}
      error={touched[id] && Boolean(errors[id])}
      helperText={touched[id] && errors[id]}
      {...restProps}
    >
      {children}
    </TextField>
  )
}