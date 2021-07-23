import React from 'react';
import { useAlert } from 'react-alert';
import { List, Grid, Paper, Button } from '@material-ui/core';
import Constant from '../../constant/Constant';

const PerpajakanAlert = () => {
  const alert = useAlert()

  return (
    <List style={{marginTop:10}}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                
                <Paper style={{padding:10, color:'white', textAlign:'center', backgroundColor:Constant.primaryColor}}
                //onClick={handleLaporan}
                onClick={() => {
                  alert.show(<div style={{ color: 'blue' }}>Some Message</div>)
                    //alert.show('Oh look, an alert!');
                    //console.log(alert);
                }}
                //value={props.post}
                >Simpan dataz</Paper>
            </Grid>
        </Grid>
    </List>
  )
}

export default PerpajakanAlert;
