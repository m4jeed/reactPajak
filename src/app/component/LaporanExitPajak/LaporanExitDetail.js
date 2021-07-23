import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Constant from '../../constant/Constant';

export default function LaporanExitDetail(props) { 
    return (
        <Fragment>
            <div style={{marginTop:10}}>
                <Container>
                    <Typography style={{padding:5, justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                        Pelaporan pajak Anda telah disimpan
                    </Typography>
                    <List style={{marginTop:10}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper style={{padding:10, color:'white', textAlign:'center', backgroundColor:Constant.primaryColor}}
                                onClick={props.handleBack}
                                //value={props.post}
                                >Tutup</Paper>
                            </Grid>
                        </Grid>
                    </List>
                </Container>
            </div>
            
        </Fragment>
    )
}