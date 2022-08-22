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
import style from '../styleModal'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function NewPost() {
  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () =>{
    navigate("/");
    dispatch(newPost(data));
    setOpen(false)};
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    setData(data);
    setOpen(true);}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            there will be a new post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A new post will be added at the end of the list
          </Typography>
          <br />
          <br />
          <Button
                  className={S.button}
                  variant="contained"
                  onClick={handleClose}
              >
                Accept
              </Button>
        </Box>
      </Modal>
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
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...register("userId", { required: true })}
                label="Age"
              >{new Array(10).fill(1).map((e, index) =>  <MenuItem value={index+1}>{index+1}</MenuItem>)}
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
