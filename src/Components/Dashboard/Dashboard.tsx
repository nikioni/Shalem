import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { rows, columns } from "./api";
import { autocompleteClasses } from "@mui/material";

export interface IDashboard {}

const Dashboard: React.FC<IDashboard> = (props) => {
  
  return (
    <>
      <h1>This is Dashboard</h1>
      <Box sx={{ height: 800, width: "70%", margin: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[12]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default Dashboard;
