import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAlert({
  buttonText,
  uName,
  fName,
  lName,
  eMail,
  passWord,
  message,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (
      uName == "" ||
      fName == "" ||
      lName == "" ||
      !eMail.includes('@','.com') ||
      passWord == ""
      
    )
      setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack color='success' spacing={2} sx={{ width: "100%" }}>
      <Button variant="contained" onClick={handleClick}>
        {buttonText}
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
