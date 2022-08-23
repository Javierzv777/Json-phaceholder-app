import React from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';
import S from './Datatable.module.css';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, getPost, deletePost, GET_POST } from '../../redux/actions'
import { useNavigate } from 'react-router-dom';
import style from '../styleModal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const deleteIcon = "data:image/png;base64,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"
const editIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvsx3APSbM5ktQCA_cPSmqYXRkWEHy2YfQA&usqp=CAU"
const bookIcon = "data:image/png;base64,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"


export default function DataGridDemo() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const rows = useSelector(state => state.posts);
  const navigate = useNavigate();
  const [id, setId] = React.useState('');
  const [editId, setEditId] = React.useState('');
  const [deleteId, setDeleteId] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);
  

  const Transition = React.forwardRef(function Transition(
    props,
    ref
    ) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

  React.useEffect(()=>{
   id !== '' && dispatch(getPost(id))
    .then(navigate('/post'));
  },[id])

  React.useEffect(()=>{
    editId !== '' && dispatch({type: GET_POST, payload: editId})
    editId !== '' && (navigate('/editpost'))
     
   },[editId])

   React.useEffect(()=>{
    deleteId !== "" && setOpen(true)
   },[deleteId])

   React.useEffect(()=>{
    
   },[deleteId])

   const handleClose = () =>{
    
     setOpen(false);
     setOpenDialog(true);
    };

    const handleCloseDialog = () => {
      setOpenDialog(false);
      deleteId !== '' && dispatch(deletePost(deleteId));
    };

    const handleCancel = ()=>{
      setOpen(false);
    }

  const columns = [
    { field: 'userId', headerName: 'User Id', width: 80 },
    {
      field: 'look',
      headerName: 'Look',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
  
          const api = params.api;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
            );
  
          return setId((thisRow.id));
        };
  
        return <img className={S.logo} onClick={onClick} src={bookIcon}/>;
      },
    },
    { field: 'id', headerName: 'Post Id', width: 80 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'body', headerName: 'Body', width: 300 },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
  
          const api= params.api;
          const thisRow= {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
            );
  
          return setEditId(thisRow.id);
        };
  
        return <img className={S.logo} onClick={onClick} src={editIcon}/>;
      },
    },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
  
          const api = params.api;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
            );
  
          return setDeleteId(thisRow.id);
        };
  
        return <img className={S.logo} onClick={onClick} src={deleteIcon}/>;
      },
    },
  ];
  React.useEffect(()=>{
    rows?.length === 0 && dispatch(getPosts())
   
  },[rows])
  
  return (
    <div className={S.container}>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            This post will be deleted
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            the data of this post will be deleted permanently
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
        <div className={S.dataTable}>
        <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection = {false} />
        {openDialog && (<div>
          <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialog}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Successful Delete"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
        </div>)}
      </div>
     
    </div>
  );
}
