import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography  from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Constant from '../../constant/Constant';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(0)}px`,
        marginLeft:'10px',
        marginRight:'150px',
        flex: '1000', 
        display: 'flex', 
        justifyContent: 'flex-end',
      },
  }),
);

export default function DataPajakLnList (props) { 
    const classes = useStyles();
    return(
        <Fragment>
           <Card>
               <CardContent>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.no_spt}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} 6416172
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.tgl_sptpd}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} 01-12-2016
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.masa_pajak}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} Oktober 2016
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.dp}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} Rp. 12.000.000
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.tf}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} 10%
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.pajak}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} Rp. 120.000
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.biaya}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} Rp. 2.500
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.tgl_bayar}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} Belum Bayar
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginLeft:10}}>
                        <div style={{ flex: '5' }}>
                            <Typography style={{ fontSize: 16, color: Constant.textColor }} >{props.kode_bayar}</Typography>
                        </div>
                        <div style={{ flex: '10', display: 'flex', justifyContent: 'flex' }}>
                            {props.sama_dengan} 12345678
                        </div>
                    </div>
                    
                    <div style={{marginTop:20}}>
                        <Paper style={{padding:10, marginTop:5, marginBottom:5,
                            marginLeft:20, marginRight:20, textAlign:'center', justifyContent:'center', color:'white', backgroundColor:Constant.primaryColor}}>
                                SSPD
                        </Paper>
                    </div>
               </CardContent>
           </Card>
        </Fragment>
    )

    
}