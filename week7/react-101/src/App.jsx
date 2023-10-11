import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Grid, IconButton, Table, Paper, TableCell, TableContainer, TableRow , Typography} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext' 
import styles from './styles.module.css';

const MAX_USER_ID = 10;
const MIN_USER_ID = 1;


function App() {
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  function nextUser() {
    setUserId(userId + 1);
  }
  function previousUser() {
    setUserId(userId - 1);
  }
  async function fetchUserInfo() {
    try {
      const baseURL = "https://jsonplaceholder.typicode.com/users";
      const response = await axios.get(`${baseURL}/${userId}`);
      console.log(response.data);
      setUserInfo(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load user info!");
    }
  }
  useEffect(() => {
    fetchUserInfo();
  }, [userId]);
  return (
    <>
      <CssBaseline/>
      <Container className={styles.container}>
        <Grid container className={styles.gridContainer}>
          <Grid item xs={2} className={styles.navigator}>
            <IconButton onClick={previousUser} disabled={userId === MIN_USER_ID}>
              <NavigateBeforeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" align="center" gutterBottom>
              Welcome to React 101!
            </Typography>
            <Paper className={styles.paper}>

              <TableContainer>
                <Table>
                  <TableRow>
                    <TableCell style={{ width: "20%" }}>UserId</TableCell>
                    <TableCell>{userId}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>{userInfo?.username}</TableCell>
                  </TableRow>


                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{userInfo?.email}</TableCell>
                  </TableRow>


                  <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell>{userInfo?.phone}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Website</TableCell>
                    <TableCell>{userInfo?.website}</TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={2} className={styles.navigator}>
            <IconButton onClick={nextUser} disabled={userId === MAX_USER_ID}>
              <NavigateNextIcon />
            </IconButton>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default App;