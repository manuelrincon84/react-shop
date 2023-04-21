import React from "react";
import ReactDOM  from "react-dom/client";
import App from './routers/App';

//ReactDOM.render(<App />, document.getElementById('app'));
const elementoRaiz = document.getElementById('app');
const raiz = ReactDOM.createRoot(elementoRaiz);

raiz.render(
    <React.StrictMode>
        <App/>  
    </React.StrictMode>
);
