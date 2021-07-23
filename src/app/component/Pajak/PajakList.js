import React from 'react';
import Typography from '@material-ui/core/Typography';
import Constant from '../../constant/Constant';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import RestoreIcon from '@material-ui/icons/Restore';
import RouterIcon from '@material-ui/icons/Router';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import PeopleIcon from '@material-ui/icons/People';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

export default function PajakList(props) {
    return (
        <div style={{marginTop:10,marginBottom:1}}>
            <div style={{padding:5, backgroundColor:Constant.primaryColor}}>
                <Typography style={{marginLeft:'30px', color: Constant.textColor2}}>Informasi</Typography>
            </div>
            <Container>
                <List style={{marginTop:10}}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                            <Avatar style={{backgroundColor:Constant.primaryColors}}>
                            <KeyboardVoiceIcon  />
                            </Avatar>
                            <Typography style={{ fontSize: 10, color: Constant.textColor }}>Informasi</Typography>
                        </div>    
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                                <Avatar style={{backgroundColor:Constant.primaryColors}}>
                                    <RestoreIcon/>
                                </Avatar>
                                <Typography style={{ fontSize: 10, color: Constant.textColor }}>Event</Typography>
                            </div>    
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                                <Avatar style={{backgroundColor:Constant.primaryColors}}>
                                    <RouterIcon/>
                                </Avatar>
                                <Typography style={{ fontSize: 10, color: Constant.textColor }}>Berita</Typography>
                            </div>    
                        </Grid>
                    </Grid>
                </List>
            </Container>
            <div style={{padding:5, backgroundColor:Constant.primaryColor}}>
                <Typography style={{marginLeft:'30px', color: Constant.textColor2}}>Pemerintahan</Typography>
            </div>
            <Container>
                <List style={{marginTop:10, marginLeft:'20%', marginRight:'10%'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                            <Avatar>
                                <NaturePeopleIcon/>
                            </Avatar>
                            <Typography style={{ fontSize: 10, color: Constant.textColor }}>Perijinan</Typography>
                        </div>    
                        </Grid>
                        <Grid item xs={5} onClick={props.handlePage}>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                                <Avatar>
                                    <TrackChangesIcon/>
                                </Avatar>
                                <Typography style={{ fontSize: 10, color: Constant.textColor }} 
                                >Perpajakan</Typography>
                            </div>    
                        </Grid>
                        <Grid item xs={5}>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                                <Avatar>
                                    <PeopleIcon/>
                                </Avatar>
                                <Typography style={{ fontSize: 10, color: Constant.textColor }}>Kependudukan</Typography>
                            </div>    
                        </Grid>
                        <Grid item xs={5}>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                                <Avatar>
                                    <PhoneCallbackIcon/>
                                </Avatar>
                                <Typography style={{ fontSize: 10, color: Constant.textColor }}>Pengaduan</Typography>
                            </div>    
                        </Grid>
                        
                    </Grid>
                </List>
            </Container>
        </div>
    );
}