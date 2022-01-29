import React, { Component, Fragment } from 'react'
import './AppFooter.css'

export default class AppFooter extends Component {

    render() {
        const currYear = new Date().getUTCFullYear()

        return (
            <Fragment>
                <p className="footer">Copyright &copy; {currYear}</p>
            </Fragment>
        )
    }
}