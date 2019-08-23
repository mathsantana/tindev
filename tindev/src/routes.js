import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// Dependendo do tipo de navegação desejada, o createSwitchNavigator pode mudar.

import Main from './pages/Main.js';
import Login from './pages/Login.js';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main
    })
);