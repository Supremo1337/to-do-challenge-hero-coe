import { theme } from "@/styles/themes";
import { TextField } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes } from "react";

type InputComponentProps = {
  type?: string;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  top?: number;
  height?: number;
  multiline?: boolean;
  rows?: number;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputComponent({
  type = "text",
  label = "",
  placeholder = "",
  onChange,
  value = "",
  top = -8,
  height = 40,
  multiline = false,
  rows = 1,
}: InputComponentProps) {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      type={type}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      multiline={multiline}
      rows={rows}
      required
      sx={{
        ".MuiFormLabel-root[data-shrink=false]": { top: top },
        "&.MuiFormControl-root": {
          width: "100%",
        },
        "& label.Mui-focused": {
          color: theme.colors.gray.gray_700,
          font: theme.fonts.libre_Franklin.title_7,
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.colors.gray.gray_300,
            font: theme.fonts.libre_Franklin.title_4,
          },
        },
        "& .MuiOutlinedInput-root": {
          height: height,
          "& fieldset": {
            borderColor: theme.colors.gray.gray_300,
          },
          "&:hover fieldset": {
            borderColor: theme.colors.gray.gray_300,
          },
          "&.Mui-focused fieldset": {
            border: `1px solid ${theme.colors.gray.gray_300}`,
          },
        },
      }}
    />
  );
}
