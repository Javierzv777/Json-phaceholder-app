import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import InputLabel from "@mui/material/InputLabel";
import S from "./Edit.module.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  const onSubmit = (data) =>{
    navigate("/")
    dispatch(editPost({...data, id: post.id, userId: post.userId}))};
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f0f1ff", height: "121vh" }}>
          <Box
            sx={{
              maxWidth: "95%",
              padding: "10vh",
              margin: "auto",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Edit Post</h1>
             
              <InputLabel>Title:</InputLabel>
              <TextField defaultValue={post?.title} fullWidth label="title" id="fullWidth" 
               {...register("title", { required: true })}/>
              <br />
              <br />
              <br />
              <InputLabel>Body:</InputLabel>
              <TextField
                defaultValue={post?.body}
                fullWidth
                id="outlined-multiline-static"
                label="story"
                multiline
                rows={8}
                {...register("body", { required: true })}
              />
              <br />
              <br />
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
