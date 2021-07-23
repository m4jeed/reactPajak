import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Constant from '../../constant/Constant';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Dialog } from "@reach/dialog";
import PerpajakanMain from '../Perpajakan/PerpajakanMain';

export default class ConfirmAlert extends Component {
    state = {
        open: false,
        callback: null
    }

    show = callback => event => {
        event.preventDefault()
    
        event = {
          ...event,
          target: { ...event.target, value: event.target.value }
        }
    
        this.setState({
          open: true,
          callback: () => callback(event)
        })
      }
    
    hide = () => this.setState({ open: false, callback: null })
    
    confirm =()=>{
        window.location = '/hasil_pelaporan';
    }

    render() {
        return (
            <Fragment>
                {this.props.children(this.show)}
                    {this.state.open && (
                        <Dialog className="popup">
                            <Card style={{marginRight:10, marginLeft:10}}>
                                <CardActionArea>
                                    <CardContent>
                                        <div style={{ padding: 5 }}>
                                            <div style={{padding:5,display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}} >
                                                <Typography style={{ fontSize: 18, textAlign:'center', color: Constant.textColor, justifyContent:'center', alignContent:'center'}}>{this.props.title}</Typography>
                                            </div>
                                        </div>
                                        <List>
                                            <Grid container spacing={3} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                                <Grid item xs={4}>
                                                    <Paper onClick={this.confirm} style={{backgroundColor: Constant.primaryColor, textAlign:'center', color:'white', height:'30px'}}
                                                    >
                                                        <Typography style={{height:'200%', transform: 'translateY(5%)'}}>Ya</Typography>
                                                    </Paper>
                                                </Grid>
                                                <Grid item xs={4}>
                                                <Paper onClick={this.hide}  style={{backgroundColor: Constant.primaryColor, textAlign:'center', color:'white', height:'30px'}}
                                                    >
                                                        <Typography style={{height:'200%', transform: 'translateY(5%)'}}>Cancel</Typography>
                                                    </Paper>
                                                </Grid>
                                            </Grid>
                                        </List>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Dialog>
                    )}
                <Router>
                    <Route path="/hasil_pelaporan" component={PerpajakanMain} />
                </Router>
                
            </Fragment>
        )
    }
}
