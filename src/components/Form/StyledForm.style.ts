import { styled } from "@mui/material/styles"

export const FormContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "32px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  maxWidth: "800px",
  width: "100%",
})

export const AvatarUploadWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "24px",
  cursor: "pointer",
})
