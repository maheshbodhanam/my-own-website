import React from 'react';
import { AppBar, ImageList, ImageListItem, TextField, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import Images from './images.json';
import ContactPageIcon from '@mui/icons-material/ContactPage';



const App = () => {
 
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">BODHANAM MAHESH</Typography>
        </Toolbar>
      </AppBar><br/><br/>
      <Container style={{"marginTop":"20px",
    "textAlign":"center"}} >
        <Typography variant="h3">It's my realistic webpage</Typography>
        <Typography variant="h6">This website shows my talent and skills</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={300} cols={4}>
          {Images.map(imageobj =>
          <ImageListItem key={imageobj.id}cols={1}>
            <img src={imageobj.img} alt={imageobj.title}/>
          </ImageListItem>)}
          
        </ImageList>
      </Container>
      <center>
        <Container>
        
          <Typography variant="h5"><ContactPageIcon/>contact form</Typography>
          <form>
            <TextField style={{"width":"500px","margin":"5px"}}type="text" label="Name" variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}}type="email" label="Email" variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}}type="tel" label="Phone Number" variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}}type="text" label="City" variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}}type="text" label="Required positin" variant="outlined"/><br/>
            <button>submit</button><br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
          </form>
        </Container>
      </center>
    </div>
  )
}


export default App;
