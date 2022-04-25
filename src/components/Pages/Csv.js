import React,{ useState }  from "react";
import Papa from "papaparse";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
function Csv() {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true, //Les lignes qui sont vides seront ignorées
      complete: function (results) { //Recoit les résultats 
        const rowsArray = [];
        const valuesArray = [];
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };
  return (
    <div>

      <Button variant="contained" color="success">
      Ajouter une colonne
      </Button>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto"}}
      />
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableRows.map((rows, index) => {
              return <TableCell key={index}>{rows}</TableCell>;
            })}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((value, index) => {
            return (
              <TableRow key={index}>
                {value.map((val, i) => {
                  return <TableCell key={i}>{val}</TableCell>;
                })}
                <TableCell><button>Modifier</button>
                <button>Supprimer</button>
                </TableCell>
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