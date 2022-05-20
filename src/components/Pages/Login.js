import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Nom: data.get('Nom'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

{/*-----------------Menu------------------------------------- */}
<AppBar color='default'>
          <Toolbar>   
    <Typography variant="h6" component="div">FATCA Login</Typography> 
          </Toolbar>
        </AppBar>
      <Toolbar />
{/*------------------------------------------------------------------------------------- */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar  sx={{ bgcolor: green[500], top:'35px', transform: 'translateX(-52px)' }}>
            <LockOutlinedIcon />  </Avatar>
          <Typography component="h1" variant="h5">
            Login </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Nom"
              label="Nom d'utilisateur"
              name="Nom"
              autoComplete="Nom"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='success'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="inherit" underline="hover">
                mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2" color="inherit" underline="hover">
                  {"Vous n'avez pas de compte ? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
          </Box>
     
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}