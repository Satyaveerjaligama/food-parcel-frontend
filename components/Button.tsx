/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button as MuiButton } from '@mui/material';
import { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  variant?: 'outlined' | 'contained' | 'text';
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  onClick?: (() => void) | ((event: any) => void);
  className?: string;
  fullWidth?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Button = (props: ButtonProps) => {
  const { label, variant, endIcon, startIcon, onClick, className, fullWidth, color } = props;
  return (
    <MuiButton
      className={className}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      fullWidth={fullWidth}
      color={color}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
