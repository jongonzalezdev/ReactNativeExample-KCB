import React, {Fragment} from 'react';
import Routes from '../routes';
import { YellowBox } from 'react-native';

class App extends React.Component {

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
    }

    render() {
        return <Routes />;
    }
}
    
export default App;