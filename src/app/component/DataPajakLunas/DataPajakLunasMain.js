import React, { Component } from 'react'
import DataPajakLunasHeader from './DataPajakLunasHeader'
import DataPajakLunasList from './DataPajakLunasList'

export default class DataPajakLunasMain extends Component {
    render() {
        return (
            <div className="wrapper">
                <DataPajakLunasHeader />
                <DataPajakLunasList />
            </div>
        )
    }
}
