import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Home, Characters } from '../../pages';
import styles, { navBarStyles } from './styles';

const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="Home" component={Home} hideNavBar/>
            <Scene key="Characters" component={Characters} {...navBarStyles} />
        </Stack>
    </Router>
)

export default Routes;