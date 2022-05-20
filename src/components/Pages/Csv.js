import React, { Fragment, useState, useRef } from "react";
import Papa from "papaparse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Modal, Typography } from "@mui/material";
import { Input } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip'; 
import AddBoxIcon from '@mui/icons-material/AddBox';
import DownloadIcon from '@mui/icons-material/Download';
function Csv() {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const [openAddColumn, setOpenAddColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [addNewRow, setAddNewRow] = useState(false);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true, //Les lignes qui sont vides seront ignorées
      complete: function (results) {
        //Recoit les résultats
        const rowsArray = [];
        const valuesArray = [];
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      }
    });
  };
  const handleSppLigne = (contactID) => {
    console.log("Delete");

    const newContacts = [...values];
    const index = values.findIndex((value) => value.index === contactID);
    newContacts.splice(index, 1);
    setValues(newContacts);
    console.log(index);
  };
  const [edit, setEdit] = useState(null);
  const [editFormData, setEditFormData] = useState([""][""]);
  const [tempData, setTempData] = useState();
  const [tempRow, setTempRow] = useState([]);
  values.forEach((item, i) => {
    item.id = i + 1;
  });
  const handleEdit = (event, value) => {
    console.log("edit");
    event.preventDefault();
    //const index = values.findIndex((value) => value === edit);
    //console.log(index);
    //setEdit(index);

    setEdit(value.id);
    setTempData(values);
    // setEditFormData(editFormData);
  };
  const handleCancelClick = () => {
    setEdit(null);
  };

  const [show, setShow] = useState([""]);
  const [saved, setSaved] = useState(false);
  const present = useRef([editFormData]);
  const handleSave = () => {
    //replace temp data with values
    setValues(tempData);
    setSaved(!saved);
    setEdit(null);
    console.log("editFormData", editFormData);
    // setSaved(!saved);
    // setEdit(null);
    // setShow([editFormData]);
    // console.log("save");
    // console.log([editFormData]);
    // present.current = [editFormData];
    // const newValue = [...values];
    // // const index = values.findIndex((value) => value.id === edit);
    // // console.log(index);
    // // newValue[index][index]= [editFormData];
    // setValues(newValue);
    // console.log(newValue);
    // values.map((value, index) => {
    //   return value.map((_val, i) => {
    //     return (newValue[index][i] = [editFormData]);
    //     //  console.log(i,' ',index)
    //   });
    // });
    // setValues(newValue);
  };

  const handleAddColumn = () => {
    console.log(tableRows);
    setTableRows((prev) => {
      const newArr = prev;
      newArr.push(newColumnName);

      return newArr;
    });

    setValues((prev) => {
      const newArr = prev.map((value) => {
        value.push("");
        return value;
      });
      return newArr;
    });

    setOpenAddColumn(false);
  };

  const handleAdd = () => {
    setValues((prev) => {
      return [...prev, tempRow];
    });

    setAddNewRow(false);
  };
{/*-----------------------------Menu------------------------- */}
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <div>
      {/*-----------------------------Menu------------------------- */}
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Fab color="default" aria-label="User" size='small' sx={{ mr: 1 }}>
               <PersonIcon /> </Fab>  Utilisateur </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose} >
                <MenuItem onClick={handleClose}>
                <Tooltip title="Déconnexion">
                    <Fab color="success" aria-label="add" size='small' sx={{ mr: 1 }}> <ExitToAppIcon /> </Fab></Tooltip>
                            Déconnexion  </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    {/*-------------------------------------------------------------- */}
      <Button
        variant="outlined"
        color="success"
        onClick={() => setAddNewRow(true)}
      >
        Ajouter une ligne
      </Button>
      <Button variant="outlined" color="success" onClick={() => setOpenAddColumn(true)}>Ajouter une colonne</Button>
      <Modal
        open={openAddColumn}
        onClose={() => setOpenAddColumn((prev) => !prev)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Ajouter une nouvelle colonne
          </Typography>
          <Input
            value={newColumnName}
            onChange={(e) => setNewColumnName(e.target.value)}
            placeholder="nom de colonne"
          />
          {' '}
          <Tooltip title="Add new column">
<Fab color="success" aria-label="add" size='small' onClick={handleAddColumn}> <AddBoxIcon /> </Fab></Tooltip>
  {/*         <Button color="success" onClick={handleAddColumn}>Add</Button>*/}
        </Box>
      </Modal>

      <Fab color="success" aria-label="Dowload" size='medium' sx={{ mr: 1, float: 'right', top: '20px' }}>
               <DownloadIcon /> </Fab>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
{/*------------------Table CSV--------------------------------------- */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableRows.map((rows, index) => {
                console.log(rows);
                return <TableCell key={index}>{rows}</TableCell>;
              })}
             {/* <TableCell>Action</TableCell>
               <TableCell>ID</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/*edit table row */}
            {values.length > 0 && addNewRow && (
              <TableRow>
                {values[0].map((value, index) => (
                  <TableCell>
                    <Fragment>
                      <Input
                        name="edit"
                        value={setTempRow[index]}
                        onChange={(e) => {
                          const value = e.target.value;
                          setTempRow((prev) => {
                            prev[index] = value;
                            return prev;
                          });
                        }}
                        // value={tempData[index]}
                        // onChange={(e) => {
                        //   // console.log(e.target.value[i]);
                        //   console.log("val", e.currentTarget.value);
                        //   setTempData((prev) => {
                        //     console.log("prev", prev);
                        //     let newData = prev;
                        //     newData[index][i] = e.target.value;

                        //     return newData;
                        //   });
                        //   setEditFormData(e.currentTarget.value);
                        // }}
                      />
                    </Fragment>
                  </TableCell>
                ))}
                <button type="submit" onClick={handleAdd}>
                  Save
                </button>
                <button type="submit" onClick={() => setAddNewRow(false)}>
                  close
                </button>
              </TableRow>
            )}
            {values.map((value, index) => {
              return (
                <TableRow key={index}>
                  {value.map((val, i) => {
                    // console.log(val);
                    return (
                      <>
                        <TableCell key={i}>
                          <Fragment>
                            {edit === value.id ? (
                              <Input
                                name="edit"
                                value={tempData[index][i]}
                                onChange={(e) => {
                                  // console.log(e.target.value[i]);
                                  console.log("val", e.currentTarget.value);
                                  setTempData((prev) => {
                                    console.log("prev", prev);
                                    let newData = prev;
                                    newData[index][i] = e.target.value;

                                    return newData;
                                  });
                                  setEditFormData(e.currentTarget.value);
                                }}
                              />
                            ) : (
                              <div>{val}</div>
                            )}
                          </Fragment>
                        </TableCell>
                      </>
                    );
                  })}

                  <TableCell>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Edit"
                      sx={{ mr: 1 }}
                      onClick={(event) => handleEdit(event, value)}
                    >
                      <EditIcon />
                    </Fab>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="delete"
                      sx={{ mr: 1 }}
                      onClick={() => handleSppLigne(value.index)}
                    >
                      <DeleteIcon />
                    </Fab>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Annuler"
                      sx={{ mr: 1 }}
                      onClick={handleCancelClick}
                    >
                      <CancelIcon />
                    </Fab>
                    <button type="submit" onClick={handleSave}>
                      Save
                    </button>
                  </TableCell>
                  {/*     <TableCell>{index}</TableCell>*/}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Csv;
