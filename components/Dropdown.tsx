/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropDownMenuItem } from '@/utilities/constants';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface DropdownProps {
  label: string;
  value: string | number;
  className?: string;
  fullWidth?: boolean;
  onChange?: ((event: any) => void) | (() => void);
  dropdownOptions?: DropDownMenuItem[];
}

const Dropdown = (props: DropdownProps) => {
  const { label, value, onChange, className, fullWidth, dropdownOptions } =
    props;
  return (
    <FormControl fullWidth={fullWidth} className={className}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {dropdownOptions?.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
