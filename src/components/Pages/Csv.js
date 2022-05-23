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
import { Box, InputBase, Modal, Typography } from "@mui/material";
import { Input } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
//import TablePagination from "@mui/material/TablePagination";

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
    setEdit(value.id);
    setTempData(values);
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
{/*------------------------------------------------------------------------------------------ 
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = event => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
const emptyRows =rowsPerPage - Math.min(rowsPerPage, values.length - page * rowsPerPage);
*/}
 
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
              <Link to='/Login'  style={{textDecoration: 'none', color:'black'}} >
                <MenuItem onClick={handleClose}>
                <Tooltip title="Déconnexion">
                
                    <Fab color="success" aria-label="add" size='small' sx={{ mr: 1 }}> <ExitToAppIcon /> </Fab>
                   </Tooltip>
                            Déconnexion  </MenuItem> </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    {/*------------------------------------------ADD New Row------------------------------------------------------------------------ */}
    <Box sx={{ transform: 'translate(50px,30px)' }}>
      <Button
        variant="outlined"
        startIcon={<AddBoxIcon />}
        color="success"
        onClick={() => setAddNewRow(true)}
      >
        Ajouter une ligne
      </Button> </Box>
      {/*------------------------------------------ADD New Column----------------------------------------------------------- */}
      <Box sx={{ transform: 'translate(300px,-8px)' }}>
      <Button variant="outlined" color="success" startIcon={<AddCircleIcon />}
       onClick={() => setOpenAddColumn(true)}>Ajouter une colonne</Button>
      </Box>
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
<Fab color="success" aria-label="add" size='small'  sx={{ mr: 1 }} onClick={handleAddColumn}> <AddBoxIcon /> </Fab></Tooltip>
  
        </Box>
      </Modal>
     {/*-------------------------------Buuton Dowloand--------------------------------------------- */}
      <Fab color="success" aria-label="Dowload" size='medium' sx={{ mr: 1, float: 'right', top: '-50px' }}>
               <DownloadIcon /> </Fab> 
{/*----------------------------------Button Upload CSV File------------------------------------------------------------------------ */}
<Box sx={{transform: "translate(600px, 10px)"}}>
      <InputBase
      //classes={{ root: classes.root, focused: classes.focused }}
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"   
      /> 
</Box>
       
{/*----------------------------------------------------Afficher Table CSV------------------------------------------------------ */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableRows.map((rows, index) => {
                console.log(rows);
                return <TableCell key={index}>{rows}</TableCell>;
              })}
    
            </TableRow>
          </TableHead>
          <TableBody>
            {/*----------edit table row------------------------------- */}
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
                    
                      />
                    </Fragment>
                  </TableCell>
                ))}
                <Tooltip title='Save'>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Save"
                      sx={{ mr: 1 }}
                      onClick={handleAdd}
                    >
                      <SaveIcon />
                    </Fab>
                 </Tooltip>
                 <Tooltip title='Anuuler'>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Annuler"
                      sx={{ mr: 1 }}
                      onClick={() => setAddNewRow(false)}
                    >
                      <CancelIcon />
                    </Fab></Tooltip>
               
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
                    <Tooltip title='Edit Row'>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Edit"
                      sx={{ mr: 1 }}
                      onClick={(event) => handleEdit(event, value)}
                    >
                      <EditIcon />
                    </Fab></Tooltip>
                    <Tooltip title='Delete Row'>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="delete"
                      sx={{ mr: 1 }}
                      onClick={() => handleSppLigne(value.index)}
                    >
                      <DeleteIcon />
                    </Fab></Tooltip>
                    <Tooltip title='Anuuler Modification'>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Annuler"
                      sx={{ mr: 1 }}
                      onClick={handleCancelClick}
                    >
                      <CancelIcon />
                    </Fab></Tooltip>
                    <Tooltip title='Save'>
                    <Fab
                      size="small"
                      color="success"
                      aria-label="Save"
                      sx={{ mr: 1 }}
                      onClick={handleSave}
                    >
                      <SaveIcon />
                    </Fab>
                 </Tooltip>
                   
                  </TableCell>
                
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* 
        <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={values.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />*/}
      </TableContainer>

    </div>
  );
}

export default Csv;
