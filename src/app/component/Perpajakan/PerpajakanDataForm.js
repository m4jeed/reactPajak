import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Constant from '../../constant/Constant';
import DataPajakMain from '../DataPajak/DataPajakMain';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dense: {
      marginTop: 10,
    },
    menu: {
      width: 200,
    },
    steel:{
      display:'none',
    }
  }),
);

const npwpd = [
    {
      label: 'Pilih Nomor NPWPD',
    },
    {
      value: 'Pilih Nomor',
      label: 'Pilih Nomor',
    },
  ];

const wajibpajak = [
    {
      label: 'Pilih jenis objek pajak yang dilaporkan',
    },
    {
      value: 'Pilih jenis objek',
      label: 'Pilih jenis objek',
    },
  ];

const jnpajak = [
    {
      label: 'Pilih jenis pajak yang dilaporkan',
    },
    {
      value: 'Pajak Hotel',
      label: 'Pajak Hotel',
    },
    {
      value: 'Pajak Restoran',
      label: 'Pajak Restoran',
    },
    {
      value: 'Pajak Hiburan',
      label: 'Pajak Hiburan',
    },
    {
      value: 'Pajak Reklame',
      label: 'Pajak Reklame',
    },
    {
      value: 'Pajak Penerangan Jalan',
      label: 'Pajak Penerangan Jalan',
    },
    {
      value: 'Pajak Mineral Bukan Logam dan Bebatuan',
      label: 'Pajak Mineral Bukan Logam dan Bebatuan',
    },
    {
      value: 'Pajak Parkir',
      label: 'Pajak Parkir',
    },
    {
      value: 'Pajak Bumi dan Bangunan',
      label: 'Pajak Bumi dan Bangunan',
    },
  ];

function handleDataPajak() {
    window.location = '/list_data_pajak';
};

export default function PerpajakanDataForm (props) {

    const classes = useStyles(); 
    return (
            <Fragment>
            <div style={{marginTop:10}}>
                <Typography style={{padding:10, marginLeft:10, justifyContent:'center', textAlign:'left'}}>{props.jml_produk}</Typography>
                <Container>
                    <form>
                        <TextField
                                id=""
                                label="Nomor Induk Kependudukan (NIK)"
                                placeholder="Masukan nomor NIK"
                                style={{marginLeft: 'theme.spacing(1)',
                                marginRight: 'theme.spacing(1)', width:'100%'}}
                                margin="normal"
                                //onChange={this.handleChange}
                                type="text"
                                name=""
                        />
                        <TextField 
                            id=""
                            select
                            label="Nomor Pokok Wajib Pajak Daerah (NPWPD)"
                            style={{marginLeft: 'theme.spacing(1)',
                            marginRight: 'theme.spacing(1)', width:'100%'}}
                            //value={values.npwpd}
                            SelectProps={{
                            native: true,
                              MenuProps: {
                                  className: classes.menu,
                              },
                            }}
                            margin="normal"
                            paket={ props.paket }
                            onChange={props.handleChange}
                        >
                        {npwpd.map(option => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                        <TextField 
                            id=""
                            select
                            label="Jenis Objek Pajak"
                            style={{marginLeft: 'theme.spacing(1)',
                            marginRight: 'theme.spacing(1)', width:'100%'}}
                            SelectProps={{
                            native: true,
                              MenuProps: {
                                  className: classes.menu,
                              },
                            }}
                            margin="normal"
                            paket={ props.paket }
                            onChange={props.handleChange}
                        >
                           {wajibpajak.map(option => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                        <TextField 
                            id=""
                            select
                            label="Jenis Pajak"
                            style={{marginLeft: 'theme.spacing(1)',
                            marginRight: 'theme.spacing(1)', width:'100%'}}
                            SelectProps={{
                            native: true,
                              MenuProps: {
                                  className: classes.menu,
                              },
                            }}
                            margin="normal"
                            paket={ props.paket }
                            onChange={props.handleChange}
                        >
                           {jnpajak.map(option => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                        
                        {/* <Link to="/hasil_pelaporan"> */}
                        <List style={{marginTop:10}}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                  
                                    <Paper style={{padding:10, color:'white', textAlign:'center', backgroundColor:Constant.primaryColor}}
                                    onClick={handleDataPajak}
                                    //value={props.post}
                                    >Lanjut</Paper>
                                </Grid>
                            </Grid>
                        </List>
                        {/* </Link> */}
                    </form>
                </Container>
            </div>
            <Router>
                <Route path="/list_data_pajak" component={DataPajakMain} />
            </Router>
            </Fragment>
        
    )
}