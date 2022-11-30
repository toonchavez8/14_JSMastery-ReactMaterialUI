import React from "react";
import { Typography, AppBar, Button,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import { Camera, GitHub } from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack } from "@mui/system";
import Link from '@mui/material/Link';
import Reader from "./Reader";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" sx={{pt:2}}>
        <Link color="inherit" href="https://github.com/toonchavez8" 
        sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            }}> 
        <GitHub />toonchavez {' '}
            {new Date().getFullYear()}
            {'.'}
        </Link>
      </Typography>
    );
  }

const theme = createTheme();


const App = () => {    
    
    
  return (
    <ThemeProvider theme={theme} >
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <Camera sx={{mr:2}}/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
            </AppBar>
                
            <main>
        
                {/* Hero Banner */}
                <Box sx={{bgcolor:'background.paper', pt:8, pb:6,}} >
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        This photo album will show the images you have uploaded and you will be able to see them by clicking on them. Please feel free to navigate the site and see what we have been able to accomplish with <a href="https://mui.com/core/" style={{textDecoration: 'none'}}>Material UI</a>, using <a href="https://reactjs.org/" style={{textDecoration: 'none'}}>React</a>. 
                        </Typography>
                        <div>
                            <Stack 
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                            >
                                <Button variant="contained" color="primary">View Photos</Button>
                                {/* button to open model */}
                                <Button variant="outlined" color="primary" onClick={() => this.setState({showModal: true})}>Read Book</Button>
        
                            </Stack>
                        </div>
                    </Container>
                </Box>
                {/* End Hero Banner */}
          
                <Container sx={{py:8}} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                        <Grid item key={card} xs={6} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                component="img"
                                image="https://picsum.photos/300/300?random=1"
                                alt="random image"
                                
                                />
                                <CardContent  sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                  
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6, }} component="footer" align="center">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                I created this website using the <Link sx={{textDecoration: 'none'}} href="https://youtu.be/Xoz31I1FuiY">JavaScript Mastery Tutorial</Link> and with the help of the <Link sx={{textDecoration: 'none'}} href="https://github.com/mui/material-ui/tree/v5.10.16/docs/data/material/getting-started/templates/album">Material UI repo</Link> as a base along the way. This is a learning exercise to help me understand how to work with Material UI.
                </Typography>
                <Copyright />
            </Box>

            <Reader />
    </ThemeProvider>
  )
    }

export default App;
