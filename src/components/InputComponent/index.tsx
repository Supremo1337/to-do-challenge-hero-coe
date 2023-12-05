import { theme } from "@/styles/themes";
import { TextField } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes } from "react";

type InputComponentProps = {
  type?: string;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputComponent({
  type = "text",
  label = "",
  placeholder = "",
  onChange,
  value = "",
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
      required
      sx={{
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
