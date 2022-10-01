import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./index.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 function AutoGrid() {
  return (
    <div className="Section-Description">
        
    <Box sx={{ flexGrow: 10 }} className='box-grid-container'>
        <div className="box-description">
            <h1 className="outletHeading">Outlet Types</h1>
            <p className="box-description-paragraph">TMBill’s Restaurant Management POS is built for all types of restaurant sizes and formats from single outlets to 100+ outlet chains. Select your format
             to see how TMBill can help you run better.</p>
        </div>
      <Grid container spacing={3} className="grid-details-conatiner">
        <Grid item lg={3} sm={6} xs={6}>
          <Item>
            <div className="img-container">
                <img src="https://tmbill.com/img/outlet/tmbill_for_qsr.png" alt=""/>
            </div>
            <h3 className="paragraph">QSR</h3>
          </Item>
        </Grid>
        <Grid item lg={3} sm={6} xs={6}>
          <Item>
          <div className="img-container">
                <img src="https://tmbill.com/img/outlet/tmbill_for_dine_in.png" alt="" />
            </div>
            <h3 className="paragraph">Dine-in</h3>
          </Item>
        </Grid>
        <Grid item lg={3} sm={6} xs={6}>
          <Item>
          <div className="img-container">
                <img src="	https://tmbill.com/img/outlet/tmbill_for_cafe.png" alt=""/>
            </div>
            <h3 className="paragraph">Cafes</h3>
          </Item>
        </Grid>
        <Grid item lg={3} sm={6} xs={6}>
          <Item>
          <div className="img-container">
                <img src="	https://tmbill.com/img/outlet/tmbill_for_cloud_kitchen.png" alt=""/>
            </div>
            <h3 className="paragraph">Cloud Kichens</h3>
          </Item>
        </Grid>
        <Grid item lg={3} sm={6} xs={6}>
          <Item>
          <div className="img-container">
                <img src="https://tmbill.com/img/outlet/tmbill_for_food_truck.png" alt=""/>
            </div>
            <h3 className="paragraph">Food Trucks</h3>
          </Item>
        </Grid>
        <Grid item lg={3} sm={6} xs={6}>
          <Item>
          <div className="img-container">
                <img src="	https://tmbill.com/img/outlet/tmbill_for_Bakeries.png" alt=""/>
            </div>
            <h3 className="paragraph">Bakeries</h3>
          </Item>
        </Grid>
        <Grid item lg={3} sm={6} xs={6}> 
          <Item>
            <div className="img-container">
                <img src="	https://tmbill.com/img/outlet/tmbill_for_ice_cream.png" alt=""/>
            </div>
            <h3 className="paragraph">Ice Cream</h3>
            </Item>
        </Grid>
        <Grid item lg={3}sm={6} xs={6}>
          <Item>
          <div className="img-container">
                <img src="	https://tmbill.com/img/outlet/tmbill_for_Pubs_bars.png" alt=""/>
            </div>
            <h3 className="paragraph">Pubs & Bars</h3>
          </Item>
        </Grid>
      </Grid>
      <div className="Press-media">
      <div className="box-description">
            <h3 className="outletHeading">From The Press & Media</h3>
            
        </div>
        </div>
        <Grid container spacing={3} className="grid-details-conatiner">
        <Grid item lg={4} sm={6} xs={6}>
          <Item>
            <div className="img-container-Press">
                <img src="	https://tmbill.com/img/media/1.png
" alt=""/>
            </div>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={6}>
          <Item>
            <div className="img-container-Press">
                <img src="	https://tmbill.com/img/media/3.jfif" alt=""/>
            </div>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={6}>
          <Item>
            <div className="img-container-Press">
                <img src="	https://tmbill.com/img/media/2.png
" alt=""/>
            </div>
         
          </Item>
        </Grid>
        </Grid>
   </Box>
    </div>
    
  );
}
export default AutoGrid