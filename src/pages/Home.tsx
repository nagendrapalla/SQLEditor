import { Box, Drawer, CssBaseline, Button } from '@mui/material';
import logo_main from '../assets/Synchrony_Financial_Logo.png';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { ExtendedTreeItemProps } from '../utils/types';
import DatabaseExplorer from './DatabaseExplorer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MonacoSQLEditor from './MonacoSQLEditor';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Generate 15 columns
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'jobTitle', headerName: 'Job Title', width: 150 },
  { field: 'salary', headerName: 'Salary', width: 120 },
  { field: 'hireDate', headerName: 'Hire Date', width: 150 },
  { field: 'location', headerName: 'Location', width: 150 },
  { field: 'phone', headerName: 'Phone Number', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'manager', headerName: 'Manager', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'gender', headerName: 'Gender', width: 120 },
  { field: 'experience', headerName: 'Experience (Years)', width: 180 },
];

export default function Home() {

  const [sqlValue, setSqlValue] = useState<string>('SELECT * FROM table WHERE id = 1;');
  const [tableData, setTableData] = useState<any>([]);

  const handleOnChange = (newValue: string) => {
    setSqlValue(newValue);
  };

  const ITEMS: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
    {
      id: 'db1',
      label: 'Database1',
      nodeType: 'database',
      children: [
        {
          id: 'db1-schema1',
          label: 'Schema1',
          nodeType: 'schema',
          children: [
            {
              id: 'db1-schema1-table1',
              label: 'Table1',
              nodeType: 'table',
              children: [
                { id: 'db1-schema1-table1-column1', label: 'column1 (varchar)', nodeType: 'column' },
                { id: 'db1-schema1-table1-column2', label: 'column2 (int)', nodeType: 'column' },
              ],
            },
            {
              id: 'db1-schema1-table2',
              label: 'Table2',
              nodeType: 'table',
              children: [
                { id: 'db1-schema1-table2-column1', label: 'column1 (date)', nodeType: 'column' },
                { id: 'db1-schema1-table2-column2', label: 'column2 (decimal)', nodeType: 'column' },
              ],
            },
          ],
        },
        {
          id: 'db1-schema2',
          label: 'Schema2',
          nodeType: 'schema',
          children: [
            {
              id: 'db1-schema2-table3',
              label: 'Table3',
              nodeType: 'table',
              children: [
                { id: 'db1-schema2-table3-column1', label: 'column1 (boolean)', nodeType: 'column' },
                { id: 'db1-schema2-table3-column2', label: 'column2 (timestamp)', nodeType: 'column' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'db2',
      label: 'Database2',
      nodeType: 'database',
      children: [
        {
          id: 'db2-schema1',
          label: 'Schema1',
          nodeType: 'schema',
          children: [
            {
              id: 'db2-schema1-table1',
              label: 'Table1',
              nodeType: 'table',
              children: [
                { id: 'db2-schema1-table1-column1', label: 'column1 (text)', nodeType: 'column' },
                { id: 'db2-schema1-table1-column2', label: 'column2 (float)', nodeType: 'column' },
              ],
            },
          ],
        },
      ],
    },
  ];

  const navigate = useNavigate();

  // Generate 50 rows of sample data
  const rows = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    firstName: `First${index + 1}`,
    lastName: `Last${index + 1}`,
    email: `employee${index + 1}@company.com`,
    department: ['Engineering', 'HR', 'Sales', 'Marketing'][index % 4],
    jobTitle: ['Developer', 'Designer', 'Manager', 'Analyst'][index % 4],
    salary: Math.floor(Math.random() * 50000) + 50000,
    hireDate: `202${index % 4}-0${(index % 12) + 1}-15`,
    location: ['New York', 'San Francisco', 'Austin', 'Chicago'][index % 4],
    phone: `123-456-78${index % 10}`,
    status: ['Active', 'On Leave', 'Resigned'][index % 3],
    manager: `Manager${(index % 10) + 1}`,
    age: Math.floor(Math.random() * 25) + 25,
    gender: ['Male', 'Female'][index % 2],
    experience: Math.floor(Math.random() * 10) + 1,
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            overflow: 'hidden',
            background: "#eee",
            boxShadow: 'inset -4px 0 5px rgba(0, 0, 0, 0.2)'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ width: 300 }}>
          <div style={{ display: "flex", padding: "4px", justifyContent: "center", background: "rgb(27 25 24)", alignItems: "center" }} >
            <img src={logo_main} height="50px" />
          </div>

          <div className="heading-container">
            <h1>Databases</h1>
            <div className="heading-line"></div>
          </div>

          <DatabaseExplorer data={ITEMS} key="Database_Explorer" />

        </Box>
      </Drawer>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          bgcolor: '#fff',
          height: "100vh",
          width: "calc(100% - 300px)"
        }}
      >
        <div style={{ display: "flex", height: "58px", background: "#ddd", justifyContent: "space-between", padding: "10px", alignItems: "center" }} >
          <h1 style={{ margin: 0, padding: 0, letterSpacing: "1px", fontWeight: 100 }} >Universal SQL Editor</h1>
          <div style={{ display: "flex", gap: "10px" }} >
            <Button variant="contained" startIcon={<PlayArrowIcon />} size='large' style={{ borderRadius: 0 }} onClick={() => { setTableData(rows) }} >Execute</Button>
            <Button variant="contained" startIcon={<CloseOutlinedIcon />} color='error' size='large' style={{ borderRadius: 0 }} onClick={() => { navigate("/") }} >Close Connection</Button>
          </div>
        </div>

        <div style={{ background: "#eee", height: "250px" }} >
          <MonacoSQLEditor initialValue={sqlValue} height='250px' key="SQL Editor" theme='vs-dark' width='100%' handleOnChange={handleOnChange} />
        </div>

        {
          !(tableData && tableData.length > 0) &&
          <div style={{ flexGrow: 1, textAlign: "center", alignContent: "center" }} >
            <h1 style={{ margin: 0, padding: "20px 0 10px 0", fontSize: "50px", fontWeight: 300 }} >Welcome to Universal SQL Editor</h1>
            <p style={{ margin: 0, padding: "0px 0 20px", fontSize: "20px", fontWeight: 300 }} >
              The Ultimate All-in-One Solution for SQL Management and Execution
            </p>
          </div>
        }

        {
          (tableData && tableData.length > 0) &&
          <div style={{ flexGrow: 1, textAlign: "center", alignContent: "center", maxHeight: "calc(100% - 308px)", maxWidth: "fit-content" }} >
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
            />
          </div>
        }

      </Box>
    </Box>
  );
}
