import { alexandria } from "@/utilities/fonts";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: alexandria.style.fontFamily,
  },
});

export default theme;
