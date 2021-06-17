import React from 'react'
import { Fragment } from 'react-is';

import Footer from '../Footer'

const Layout = (props) => {
    const {children} = props;
    return (
        <Fragment>
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;
