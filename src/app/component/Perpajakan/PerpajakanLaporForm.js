import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Constant from '../../constant/Constant';
import ConfirmAlert from '../Alert/ConfirmAlert';

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
  ];

  const rekpajak = [
    {
      label: 'Pilih jenis rekening pajak',
    },
    {
      value: 'Pilih rekening pajak',
      label: 'Pilih rekening pajak',
    },
  ];

  const masapajak = [
    {
      label: 'Pilih masa pajak',
    },
    {
      value: 'Januari',
      label: 'Januari',
    },
    {
      value: 'Februari',
      label: 'Februari',
    },
    {
      value: 'Maret',
      label: 'Maret',
    },
    {
      value: 'April',
      label: 'April',
    },
    {
      value: 'Mei',
      label: 'Mei',
    },
    {
      value: 'Juni',
      label: 'Juni',
    },
    {
      value: 'Juli',
      label: 'Juli',
    },
    {
      value: 'Agustus',
      label: 'Agustus',
    },
    {
      value: 'September',
      label: 'September',
    },
    {
      value: 'Oktober',
      label: 'Oktober',
    },
    {
      value: 'November',
      label: 'November',
    },
    {
      value: 'Desember',
      label: 'Desember',
    },
  ];

  const thnpajak = [
    {
      label: 'Pilih tahun pajak',
    },
    {
      value: '2019',
      label: '2019',
    },
    {
      value: '2018',
      label: '2018',
    },
    {
      value: '2017',
      label: '2017',
    },
    {
      value: '2016',
      label: '2016',
    },
    {
      value: '2015',
      label: '2015',
    },
    {
      value: '2014',
      label: '2014',
    },
    {
      value: '2013',
      label: '2013',
    },
    {
      value: '2012',
      label: '2012',
    },
    {
      value: '2011',
      label: '2011',
    },
    {
      value: '2010',
      label: '2010',
    },
    {
      value: '2009',
      label: '2009',
    },
    {
      value: '2008',
      label: '2008',
    },
  ];

  function handleAlert() {
   //this.setState({ e.target.value })
  }


export default function PerpajakanLaporForm (props) {
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
                        <TextField 
                            id=""
                            select
                            label="Pilih jenis rekening pajak"
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
                           {rekpajak.map(option => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                        <TextField 
                            id=""
                            select
                            label="Pilih masa pajak"
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
                           {masapajak.map(option => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                        <TextField 
                            id=""
                            select
                            label="Tahun pajak"
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
                           {thnpajak.map(option => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                        <TextField
                                id=""
                                label="Dasar Pengenaan"
                                placeholder="Pilih dasar pengenaan (Omset)"
                                style={{marginLeft: 'theme.spacing(1)',
                                marginRight: 'theme.spacing(1)', width:'100%'}}
                                margin="normal"
                                //onChange={this.handleChange}
                                type="text"
                                name=""
                        />
                        <TextField
                                id=""
                                label="Simpan No. Sebagai"
                                style={{marginLeft: 'theme.spacing(1)',
                                marginRight: 'theme.spacing(1)', width:'100%'}}
                                margin="normal"
                                //onChange={this.handleChange}
                                type="text"
                                name=""
                        />
                        <TextField
                                id=""
                                label="Tarif Pajak"
                                placeholder="10%"
                                style={{marginLeft: 'theme.spacing(1)',
                                marginRight: 'theme.spacing(1)', width:'100%'}}
                                margin="normal"
                                //onChange={this.handleChange}
                                type="text"
                                name=""
                        />
                        <TextField
                                id=""
                                label="Pajak yang Harus Dibayarkan"
                                placeholder="Rp. 4.500.000,00"
                                style={{marginLeft: 'theme.spacing(1)',
                                marginRight: 'theme.spacing(1)', width:'100%'}}
                                margin="normal"
                                //onChange={this.handleChange}
                                type="text"
                                name=""
                        />
                          <ConfirmAlert title="Apakah Anda yakin, data yang anda masukan sudah benar ?">
                            {confirm =>(
                                <List style={{marginTop:10}}>
                                  <Grid container spacing={3}>
                                      <Grid item xs={12}>
                                          <Paper style={{padding:10, color:'white', 
                                          textAlign:'center', backgroundColor:Constant.primaryColor}}
                                          onClick={confirm(handleAlert)}
                                            >Simpan data</Paper>
                                        </Grid>
                                    </Grid>
                                </List>
                                )}
                          </ConfirmAlert>
                    </form>
                </Container>
            </div>
            </Fragment>
        
    )
}