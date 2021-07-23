import React, { Component } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import SspdList from './SspdList';

export default class SspdMain extends Component {
    render() {
        return (
            <div className="wrapper"> 
                <PDFViewer style={{marginTop:10}}>
                    <SspdList />
                </PDFViewer>
            </div>
        )
    }
}
