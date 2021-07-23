import React, { Component } from 'react'
import DataPajakList from './DataPajakList'
import DataPajakHeader from './DataPajakHeader'

export default class DataPajakMain extends Component {
    render() {
        return (
            <div className="wrapper">
                <DataPajakHeader />
                <DataPajakList />
            </div>
        )
    }
}
