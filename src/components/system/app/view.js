import React, {Fragment} from 'react';
import Routes from '../routes';
import { YellowBox, StatusBar } from 'react-native';

class App extends React.Component {

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
        StatusBar.setBarStyle('light-content', false);
    }

    render() {
        return <Routes />;
    }
}
    
export default App;