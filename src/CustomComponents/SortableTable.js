import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridDemo(props) {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        getRowId={(row) => row[props.idName]}
        pagination
      />
    </div>
  );
}
