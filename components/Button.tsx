import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
    label: string;
    variant: 'outlined' | 'contained' | 'text';
}

const Button = (props: ButtonProps) => {
  const { label, variant } = props;
  return <MuiButton variant={variant}>{label}</MuiButton>;
};

export default Button;
