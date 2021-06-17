import React, {Fragment} from 'react'

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
