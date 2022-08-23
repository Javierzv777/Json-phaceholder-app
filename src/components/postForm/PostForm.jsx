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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

export default function NewPost() {
  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
  props,
  ref
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () =>{
    
    dispatch(newPost(data));
    setOpen(false)
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/");
  };

  const handleCancel = ()=>{
    setOpen(false);
  }

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
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Post Successfully Created"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
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
  <Stack spacing={4} direction="row" justifyContent="center">
  <Button
                  className={S.button}
                  variant="contained"
                  onClick={handleCancel}
              >
                Cancel
              </Button>
          <Button
                  className={S.button}
                  variant="contained"
                  onClick={handleClose}
              >
                Accept
              </Button>

               </Stack>
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
              
              <Typography className={S.title} variant="h4">
                New Post
            </Typography>
            <br />
              <InputLabel>Title:</InputLabel>
              <TextField fullWidth label="title" id="fullWidth" 
               {...register("title", { required: true })}/>
              <br /><br /><br />
              <InputLabel>Body:</InputLabel>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="story"
                multiline
                rows={8}
                {...register("body", { required: true })}
              />
              <br /><br />
              <InputLabel id="demo-simple-select-label">UserId</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...register("userId", { required: true })}
                label="Age"
              >{new Array(10).fill(1).map((e, index) =>  <MenuItem value={index+1}>{index+1}</MenuItem>)}
              </Select>
              <br /><br />
              <Stack spacing={4} direction="row" justifyContent="center">
                <Button variant="text"
                  onClick={()=>navigate("/")}
                >CANCEL</Button>
                <Button
                  className={S.button}
                  variant="contained"
                  type="submit"
                >
                  CREATE
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
