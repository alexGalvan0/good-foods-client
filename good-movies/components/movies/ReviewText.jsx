import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { Button } from "@mui/material";
import axios from "axios";
import useUser from "../../hooks/useUser";


export default function ReviewText({movieTitle,mData}) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

const user = useUser()

const submitReview = async()=>{
  if(value){
    const url = 'https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/review/'
    let config = {
      user:user.id,
      review:value,
      movie: 1 //HARD COADED GET MOVIE ID 
    }
    let req = axios.post(url,config)
    let res = await req
    console.log(mData)

  }
}

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
            onClick={submitReview}
            sx={{ bgcolor: "secondary" }}
          >
            ADD REVIEW
          </Button>
        </Link>
      </div>
    </Box>
  );
}
