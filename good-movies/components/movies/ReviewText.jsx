import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { Button } from "@mui/material";

export default function ReviewText({movieTitle}) {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label={movieTitle}
          multiline
          maxRows={6}
          value={value}
          onChange={handleChange}
        />
        <Link href="/profile">
          <Button
            size="small"
            variant="contained"
            // onClick={likeMovie}
            sx={{ bgcolor: "secondary" }}
          >
            LIKE
          </Button>
        </Link>
      </div>
    </Box>
  );
}
