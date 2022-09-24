import {
  Button,
  Container,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Library() {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  return (
    <Container>
      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Book</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  id="student"
                  select
                  margin="dense"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  // onChange={handleGrade}
                >

                </TextField>
              </TableCell>
              <TableCell>
                <TextField
                  id="book"
                  select
                  margin="dense"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  // onChange={handleGrade}
                >

                </TextField>
              </TableCell>
              <TableCell>
                <DatePicker
                  style={{ maxWidth: 150 }}
                  selected={startDate}
                  onChange={(date) => setstartDate(date)}
                />
              </TableCell>
              <TableCell>
                <DatePicker
                  style={{ maxWidth: 150 }}
                  selected={endDate}
                  onChange={(date) => setendDate(date)}
                />
              </TableCell>
              <TableCell>
                <Button variant="outlined">Save</Button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
      <Paper sx={{ m: "2% auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
    </Container>
  );
}

export default Library;
