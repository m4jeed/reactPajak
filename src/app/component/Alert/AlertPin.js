import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Constant from '../../constant/Constant';
import { Grid, Container, Typography, TextField } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
  }),
);

export default function AlertPin (props) {
    const classes = useStyles();
        return (
            <div className="wrapper">
                <div style={{marginTop:200}}>
                    <Container>
                        <Card style={{marginRight:50, marginLeft:50}}>
                            <CardActionArea>
                                <CardContent>
                                    <div style={{ padding: 5 }}>
                                        <div style={{padding:5,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                                            <Typography style={{ fontSize: 16, textAlign:'center', color: Constant.textColor }}>Masukan PIN Transaksi Anda</Typography>
                                            <TextField
                                                    id=""
                                                    style={{marginLeft: 'theme.spacing(1)',
                                                    marginRight: 'theme.spacing(1)'}}
                                                    margin="normal"
                                                    //onChange={this.handleChange}
                                                    type="text"
                                                    name=""
                                            />
                                        </div>
                                    </div>
                                    <List>
                                        <Grid container spacing={3} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                            <Grid item xs={4}>
                                                <Paper className={classes.paper} style={{backgroundColor: Constant.primaryColor, color:'white'}}
                                                >Batal</Paper>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Paper className={classes.paper} style={{backgroundColor: Constant.primaryColor, color:'white'}}
                                                >OK</Paper>
                                            </Grid>
                                        </Grid>
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Container> 
                </div>
            </div>
        )
}
