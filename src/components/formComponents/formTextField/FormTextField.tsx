import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@samuraichikit/inc-ui-kit'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const FormTextField = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField {...rest} {...field} errorMessage={error?.message} />
}
