import { useFormikContext } from "formik";
import { TextField } from "@material-ui/core";

export default function FormikSelect({
  children,
  label,
  id,
  isArrayItem,
  arrayName,
  index,
  ...restProps
}) {
  const { values, handleChange, touched, errors } = useFormikContext();

  const isTouched = isArrayItem
    ? touched[arrayName] &&
      touched[arrayName][index] &&
      touched[arrayName][index][id]
    : touched[id];
  const error = isArrayItem
    ? errors[arrayName] &&
      errors[arrayName][index] &&
      errors[arrayName][index][id]
    : errors[id];
  const value = isArrayItem ? values[arrayName][index][id] : values[id];
  const name = isArrayItem ? `${arrayName}[${index}].${id}` : id;

  return (
    <TextField
      select
      label={label}
      id={name}
      value={value}
      onChange={handleChange(name)}
      error={isTouched && Boolean(error)}
      helperText={isTouched && error}
      {...restProps}
    >
      {children}
    </TextField>
  );
}
