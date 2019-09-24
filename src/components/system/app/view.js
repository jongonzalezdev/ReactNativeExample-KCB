import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            label: 'HOLAA',
            staticValue: 'adios',
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({label: 'HOLITA'})
        }, 3000)
    }

    componentDidUpdate(prevProps, preState) {
        if (this.state.label !== 'HOLAA') {
            setTimeout(() => {
                this.setState({label: 'HOLAA'})
            }, 3000)
        }
    }
    
    render() {
        console.log("this.state", this.state);
        return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>{this.state.label}</Text>
        </SafeAreaView>
        )
    }
}

export default App;