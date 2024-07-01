/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropDownMenuItem } from '@/utilities/constants';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

interface DropdownProps {
  label: string;
  value: string | number;
  className?: string;
  fullWidth?: boolean;
  onChange?: ((event: any) => void) | (() => void);
  dropdownOptions?: DropDownMenuItem[];
  error?: boolean;
  helperText?: string;
}

const Dropdown = (props: DropdownProps) => {
  const { label, value, onChange, className, fullWidth, dropdownOptions, error, helperText } =
    props;
  return (
    <FormControl fullWidth={fullWidth} className={className} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {dropdownOptions?.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Dropdown;
