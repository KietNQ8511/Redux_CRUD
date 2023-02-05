import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ComponentModalAdd = (props) => {

	return (
		<Modal
			open={props.open}
			onClose={props.handleCloseModalSecond}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<div>
				<h1>component 2</h1>
				<Box sx={props.style}>
					<TextField
						id="username"
						fullWidth={true}
						value={props.user.username}
						label="Search field"
						autoComplete="true"
						variant="standard"
						name="username"
						margin="normal"
						onChange={props.onchangeInput}
					/>
					<TextField
						id="fullname"
						fullWidth={true}
						value={props.user.fullname}
						label="Helper text"
						autoComplete="true"
						variant="standard"
						name="fullname"
						margin="normal"
						onChange={props.onchangeInput}
					/>
					<TextField
						id="phone"
						fullWidth={true}
						value={props.user.phone}
						label="Helper text"
						autoComplete="true"
						variant="standard"
						name="phone"
						margin="normal"
						onChange={props.onchangeInput}
					/>
					<Button
						align="center"
						onClick={props.handleSubmit}
						variant="contained"
					>
						Save
					</Button>
				</Box>
			</div>
		</Modal>
	);
}

export default ComponentModalAdd;
