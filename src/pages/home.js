import {
  Box,
  Button,
  Grid,
  MenuItem,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./../styles/home.css";

const grades = [
  { value: 0, label: "Select Class" },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
];

function HomePage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [grade, setGrade] = useState(0);
  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Please enter name");
    } else {
      setNameError("");
    }
    console.log(e.target.value, "sathiukfj");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <div className="page">
          <form className="form">
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Student
            </Typography>
            <Box sx={{ m: "6% auto" }}>
              <label>Name</label>
              <TextField
                id="name"
                name="name"
                size="small"
                autoFocus
                value={name}
                error={!!nameError}
                helperText={nameError}
                fullWidth={true}
                variant="outlined"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ m: "6% auto" }}>
              <label>Class</label>
              <TextField
                id="grade"
                name="grade"
                select
                margin="dense"
                variant="outlined"
                size="small"
                value={grade}
                fullWidth={true}
                onChange={handleGrade}
                sx={{ minWidth: 300 }}
              >
                {grades.map((std) => (
                  <MenuItem key={std.value} value={std.value}>
                    {std.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ m: "6% auto" }}>
              <label>Photo</label>
              <Button
                variant="outlined"
                value={photo}
                onChange={(e) => {
                  setPhoto(e.target.value);
                }}
                component="label"
                fullWidth
              >
                Upload Photo
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
            <Box sx={{ m: "6% auto" }}>
              <label>Video</label>
              <Button
                variant="outlined"
                value={video}
                onChange={(e) => {
                  setVideo(e.target.value);
                }}
                component="label"
                fullWidth
              >
                Upload Video
                <input hidden accept="video/*" multiple type="file" />
              </Button>
            </Box>
            <Button
              type="submit"
              variant="contained"
              onClick={onSubmit}
              color="primary"
              sx={{ m: "1%" }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="warning"
              sx={{ m: "1%" }}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={2} md={8}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Video</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Video</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Grid>
    </Grid>
  );
}

export default HomePage;
