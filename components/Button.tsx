import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  variant?: "outlined" | "contained" | "text";
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  onClick?: (() => void) | ((event: any) => void);
}

const Button = (props: ButtonProps) => {
  const { label, variant, endIcon, startIcon, onClick } = props;
  return (
    <MuiButton
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
