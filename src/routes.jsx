/* ADIÇÕES ROTAS - 26/02/2021 by Leonardo Meira

- Adicionado o componente responsável pelo roteamento do site - routes.jsx

- Adicionados novos diretórios para as páginas (pages), estilos CSS (styles, que passa a ser responsável por todos os estilo de todos os componentes e páginas do site) e images

- Caso algum endereço inválido (como "localhost:3000/afferagseargr") seja digitado e acessado no browser, o app renderizará uma página de erro.

*/

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import NotFound from './pages/not-found/NotFound';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;