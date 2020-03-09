import React, { Fragment } from 'react';
import Tarjeta from './Tarjeta';

const ContenidoPrincipal = ({resultados}) => {
    return (
        <Fragment>
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 my-2">
                <div className="row">
                    <Tarjeta 
                        resultados={resultados}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ContenidoPrincipal;