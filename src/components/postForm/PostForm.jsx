import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import S from "./PostForm.module.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { newPost } from '../../redux/actions'
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function NewPost() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    navigate("/");
    dispatch(newPost(data))};
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f0f1ff", height: "123vh" }}>
          <Box
            sx={{
              maxWidth: "95%",
              padding: "10vh",
              margin: "auto",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>New Post</h1>
          
              <InputLabel>Title:</InputLabel>
              <TextField fullWidth label="title" id="fullWidth" 
               {...register("title", { required: true })}/>
              <br />
              <br />
              <br />
              <InputLabel>Body:</InputLabel>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="story"
                multiline
                rows={8}
                {...register("body", { required: true })}
              />
              <br />
              <br />
              <InputLabel id="demo-simple-select-label">UserId</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...register("userId", { required: true })}
                label="Age"
              >{new Array(10).map((e, index) =>  <MenuItem value={index}>{index}</MenuItem>)}
              </Select>
              <br />
              <br />
              
              <Stack spacing={4} direction="row" justifyContent="center">
                <Button variant="text"
                  onClick={()=>navigate("/")}
                >CANCEL</Button>
                <Button
                  className={S.button}
                  variant="contained"
                  type="submit"
                >
                  UPDATE
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
