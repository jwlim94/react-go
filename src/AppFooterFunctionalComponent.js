import React, { Fragment } from 'react'
import './AppFooter.css'

export default function AppFooterFunctionalComponent(props) {
    const currYear = new Date().getUTCFullYear()

    return (
        <Fragment>
            <p className="footer">Copyright &copy; {currYear}</p>
        </Fragment>
    )
}