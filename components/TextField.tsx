import { TextField as MuiTextField, TextFieldVariants } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
    type?: HTMLInputTypeAttribute; 
    className?: string;
    label?: string;
    size?: 'small' | 'medium';
    variant?: TextFieldVariants;
    value?: any;
    fullWidth?: boolean;
    disabled?: boolean;
    onChange?: (event: object) => void;
}

const TextField = (props: TextFieldProps) => {
    const {type, className, label, size, variant, value, fullWidth, disabled, onChange} = props
    return (
        <MuiTextField
            type={type}
            className={className}
            label={label}
            size={size}
            variant={variant}
            value={value}
            fullWidth={fullWidth}
            disabled={disabled}
            onChange={onChange}
        />
    )
}

export default TextField;