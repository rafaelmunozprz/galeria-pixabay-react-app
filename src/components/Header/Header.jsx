import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = ({ titulo }) => {
    return (
        <Fragment>
            <Navbar
                titulo={titulo}
            />
        </Fragment>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;