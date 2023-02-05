import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiAddStudent, apiDeleteStudent, apiGetStudents, apiSaveStudent } from "./redux/action";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ButtonBase } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ComponentModalAdd from "./ComponentModalAdd";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
	const dispatch = useDispatch();
	const  { students }  = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [openModalSecond, setOpenModalSecond] = useState(false);

  const handleOpen = (item) => {
    updateItem(item)
    setOpen(true);
  }

  const handleOpenModalSecond = () => {
    setOpenModalSecond(true);
  }

  const handleCloseModalSecond = () => setOpenModalSecond(false);

  const handleClose = () => setOpen(false);

  const [itemUpdate, setItemUpdate] = useState({
    studentId: null,
    classStudent: null,
    birthDay: null,
    age: null,
    address: null,
    nameParent: '',
    mailParent: '',
    birthDayParent: '',
    sexStudent: '',
    sexParent: '',
    username: '',
    fullname: '',
    phone: ''
  })

	useEffect(() => {
		dispatch(apiGetStudents());
	}, []);

  const updateItem = (item) => {
    setItemUpdate({
      ...itemUpdate,
      studentId: item.studentId,
      username: item.username,
      fullname: item.fullname,
      phone: item.phone
    });
  }

  const deleteItem = (studentId) => {
    dispatch(apiDeleteStudent(studentId))
  }

  const onchangeInput = (event) => {
    setItemUpdate({
      ...itemUpdate,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(apiSaveStudent(itemUpdate));
    setOpen(false);
  }

  const handleSubmitAdd = (e) => {
    console.log(itemUpdate);
    e.preventDefault()
    dispatch(apiAddStudent(itemUpdate))
    setOpenModalSecond(false);
  }

	return (
		<div className="App">
			<TableContainer component={Paper} >
      <Button onClick={handleOpenModalSecond} variant="contained">ADD</Button>
      <Table sx={{ minWidth: 650,maxWidth: 1150 }} align="center" aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell align="right">studentId</TableCell>
            <TableCell align="right">fullName</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.students.map((row, index) => (
            <TableRow
              key={row.studentId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{row.studentId}</TableCell>
              <TableCell align="right">{row.fullname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="center">
                <ButtonBase onClick={() => handleOpen(row)} className="action">
                  <EditIcon color="primary" />
                </ButtonBase>
                <ButtonBase onClick={() => deleteItem(row.studentId)} className="action">
                  <DeleteIcon color="error" />
                </ButtonBase>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="username"
            fullWidth={true}
            value={itemUpdate.username}
            label="Search field"
            autoComplete="true"
            variant="standard"
            name="username"
            margin="normal"
            onChange={onchangeInput}
          />
          <TextField
            id="fullname"
            fullWidth={true}
            value={itemUpdate.fullname}
            label="Helper text"
            autoComplete="true"
            variant="standard"
            name="fullname"
            margin="normal"
            onChange={onchangeInput}
          />
          <TextField
            id="phone"
            fullWidth={true}
            value={itemUpdate.phone}
            label="Helper text"
            autoComplete="true"
            variant="standard"
            name="phone"
            margin="normal"
            onChange={onchangeInput}
          />
        <Button align='center' onClick={handleSubmit} variant="contained">Save</Button>
        </Box>
      </Modal>

      <ComponentModalAdd
        open={openModalSecond}
        user={itemUpdate}
        style={style}
        handleSubmit={handleSubmitAdd}
        onchangeInput={onchangeInput}
        handleOpenModalSecond={handleOpenModalSecond}
        handleCloseModalSecond={handleCloseModalSecond}
      />

    </TableContainer>
		</div>
	);
}



export default App;
