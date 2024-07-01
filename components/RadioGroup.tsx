/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioGroupOptions } from '@/utilities/constants';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup as MuiRadioGroup, Radio } from '@mui/material';

interface RadioGroupProps {
    defaultValue?: number | string | boolean;
    value?: number | string | boolean;
    label: string;
    className?: string;
    radioBtnsList: RadioGroupOptions[];
    onChange?: ((event: any) => void) | (() => void);
    helperText?: string;
    error?: boolean;
}

const RadioGroup = (props: RadioGroupProps) => {
  const {defaultValue, label, className, radioBtnsList, value, onChange, helperText, error } = props;
  return (
    <FormControl className={className} error={error}>
      <FormLabel>{label}</FormLabel>
      <FormHelperText>{helperText}</FormHelperText>
      <MuiRadioGroup
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
      >
        {radioBtnsList.map((item)=>
          <FormControlLabel key={item.value as string} value={item.value} label={item.label} control={<Radio />}/>
        )}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;