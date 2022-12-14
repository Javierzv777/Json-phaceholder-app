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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import style from '../styleModal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

export default function Edit() {
  const [data, setdata] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props,
    ref
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    dispatch(editPost({ ...data, id: post.id, userId: post.userId }));
    setOpenDialog(false);
    navigate("/");
  };


  const handleCancel = () => {
    setOpen(false);
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  const onSubmit = (data) => {
    setdata(data);
    setOpen(true);
  };

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
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialog}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Successful Update"}</DialogTitle>
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
              there will be an update of this post
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              The new information will overwrite the previous data
            </Typography>
            <br /><br />
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
        <Box sx={{ bgcolor: "#f0f1ff", height: "121vh" }}>
          <Box
            sx={{
              maxWidth: "95%",
              padding: "10vh",
              margin: "auto",
            }}
          >
              <Typography className={S.title} variant="h4">
            Edit Post
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
              <InputLabel>Title:</InputLabel>
              <TextField defaultValue={post?.title} fullWidth label="title" id="fullWidth"
                {...register("title", { required: true })} />
              <br /><br /><br />
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
              <br /><br /><br /><br />
              <Stack spacing={4} direction="row" justifyContent="center">
                <Button variant="text"
                  onClick={() => navigate("/")}
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
