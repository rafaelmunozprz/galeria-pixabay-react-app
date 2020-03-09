import React, { Fragment, useState } from 'react';

const Navbar = ({titulo}) => {
    //Obtener datos del formulario
    const [consulta, guardarConsulta] = useState({
        busqueda: ''
    });

    const handleSubmit = evt => {
        evt.preventDefault();
        
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light color-nav">
                <div className="container">
                    <a className="navbar-brand" href="!#">{titulo}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toogle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form 
                            class="form-inline my-2 my-lg-0"
                            onSubmit={handleSubmit}
                        >
                            <input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;