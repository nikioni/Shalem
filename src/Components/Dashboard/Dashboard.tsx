import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { rows } from "./api";
import PieChart from "./Charts/PieChart";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hook";

export interface IDashboard {}

const Dashboard: React.FC<IDashboard> = (props) => {
  const categories = useAppSelector(
    (state: RootState) => state.categories.value
  );
  const getColumnsFromCategories = (): any[] => {
    let columns: GridColDef[] = [];
    columns.push({
      field: "month",
      headerName: "Month",
      width: 90,
    });
    categories.map((category: string) =>
      columns.push({
        field: category,
        headerName: category.charAt(0) + category.slice(1),
        type: "number",
        width: 110,
        editable: true,
      })
    );
    columns.push({
      field: "total",
      headerName: "Total exp",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
      valueGetter: (params: GridValueGetterParams) => {
        return (
          params.row.food +
          params.row.accomandation +
          params.row.entertainment +
          params.row.transport +
          params.row.shopping +
          params.row.other
        );
      },
    });
    return columns;
  };
  return (
    <>
      <h1>This is Dashboard</h1>
      <Box sx={{ height: 800, width: "70%", margin: "auto" }}>
        <DataGrid
          rows={rows}
          columns={getColumnsFromCategories()}
          pageSize={12}
          rowsPerPageOptions={[12]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        <Box sx={{ width: "50%", margin: "auto" }}>
          <PieChart></PieChart>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
