import { Component, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Outlet/>
            </Fragment>
        );
    }
}

export default Layout;