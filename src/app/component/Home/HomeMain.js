import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom';

class HomeMain extends Component {
    render() {
        return (
            <Fragment>
                <div className='wrapper'>
                    <ul>
                        <li>
                            <Link to="/pajak">Pajak</Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(HomeMain)
