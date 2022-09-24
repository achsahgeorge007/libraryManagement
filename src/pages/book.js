import {
    Box,
    Button,
    Grid,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import "./../styles/home.css";
  
  
  function Book() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
  
    const [author, setAuthor] = useState("");
    const [authorError, setAuthorError] = useState("");
  
    const [publication, setPublication] = useState("");
    const [publicationError, setPublicationError] = useState("");

    const [year, setYear] = useState("");
    const [yearError, setYearError] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (!name) {
        setNameError("Please enter name");
      } else {
        setNameError("");
      }
      if (!author) {
        setAuthorError("Please enter name of author");
      } else {
        setAuthorError("");
      }
      if (!publication) {
        setPublicationError("Please enter publication");
      } else {
        setPublicationError("");
      }
      if (!year) {
        setYearError("Please enter year");
      } else {
        setYearError("");
      }
      console.log(e.target.value, "sathiukfj")
    }
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="page">
            <form className="form">
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Book
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
                <label>Author</label>
                <TextField
                  id="author"
                  name="author"
                  size="small"
                  autoFocus
                  value={author}
                  error={!!authorError}
                  helperText={authorError}
                  fullWidth={true}
                  variant="outlined"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </Box>
              <Box sx={{ m: "6% auto" }}>
                <label>Publication</label>
                <TextField
                  id="publication"
                  name="publication"
                  size="small"
                  autoFocus
                  value={publication}
                  error={!!publicationError}
                  helperText={publicationError}
                  fullWidth={true}
                  variant="outlined"
                  onChange={(e) => {
                    setPublication(e.target.value);
                  }}
                />
              </Box>
              <Box sx={{ m: "6% auto" }}>
                <label>Year</label>
                <TextField
                  id="year"
                  name="year"
                  size="small"
                  autoFocus
                  value={year}
                  error={!!yearError}
                  helperText={yearError}
                  fullWidth={true}
                  variant="outlined"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
              </Box>
              <Button
            type="submit"
            variant="contained"
            onClick={onSubmit}
            color="primary"
            sx={{m: "1% auto"}}
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
              <TableCell>Author</TableCell>
              <TableCell>Publication</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Publication</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        </Grid>
      </Grid>
    );
  }
  
  export default Book;
  