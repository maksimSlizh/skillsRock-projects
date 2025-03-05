import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { TStyledButton } from "./StyledButton.type";

export const StyledButton = styled(Button)<TStyledButton>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1.2, 3),
  borderRadius: theme.shape.borderRadius * 2,
  fontSize: "1rem",
  fontWeight: 600,
  textTransform: "none",
  transition: "all 0.3s ease",
  boxShadow: theme.shadows[3],

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[5],
    transform: "scale(1.05)",
  },

  "&:active": {
    backgroundColor: theme.palette.primary.dark,
    transform: "scale(0.98)",
  },

  "&.Mui-disabled": {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.text.disabled,
    boxShadow: "none",
  },
}));
