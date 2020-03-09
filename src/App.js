import React from 'react';
import Header from './components/Header/Header';
import ContenidoPrincipal from './components/Sections/ContenidoPrincipal/ContenidoPrincipal';
import Historial from './components/Sections/Historial/Historial';
function App() {    
    return (
        <div className="App">
            <Header
                titulo="Buscador de pixabay"
            />
            <div className="container">
                <div className="row">
                    <ContenidoPrincipal />
                    <Historial />
                </div>
            </div>
        </div>
    );
}

export default App;
