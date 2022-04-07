import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useState } from "react";
import { pink } from "@mui/material/colors";

export default function EnhancedTable(props) {
  const data = props.data;

  const handleClick = (event, rowData) => {
    let d = new Date();
    let dateIn = d.toLocaleDateString();
    props.handleEdit({
      ...rowData,
      date: dateIn,
    });
  };

  return (
    <Box sx={{ width: "90vw" }}>
      <Paper sx={{ width: "100%", mb: 2, p: 3 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead p={5}>
              <TableRow>
                <TableCell key="subject" padding="2rem">
                  <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                    Subject
                  </Typography>
                </TableCell>

                <TableCell key="date" padding="2rem">
                  <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                    Date Created
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row)}
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                  >
                    <TableCell
                      component="th"
                      id="subject"
                      scope="row"
                      padding="2rem"
                    >
                      {row.subject}
                    </TableCell>
                    <TableCell
                      component="th"
                      id="date"
                      scope="row"
                      padding="2rem"
                    >
                      {row.date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
