import React,{ useState }  from "react";
import Papa from "papaparse";
import Table from '../StyledComponents/Table/Table'
import Td from '../StyledComponents/Table/Td'
import Th from '../StyledComponents/Table/Th'
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
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto"}}
      />
      <button>Modifier une ligne</button>
      <button>Ajouter une colonne</button>
      <Table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <Th key={index}>{rows}</Th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <Td key={i}>{val}</Td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Csv;