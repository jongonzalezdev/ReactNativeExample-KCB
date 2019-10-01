import React, {Component} from 'react';
import { SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import * as api from '../../../api';
import _ from 'lodash';
import { HouseCell } from '../../molecules';

class Home extends Component {

    state = {
        houses: []
    };

    componentDidMount() {
        this._loadHousesList()
    }

    _loadHousesList = async () => {
        try {
            const getHouses = await api.getHouses();
            const houses = _.get(getHouses, 'data.records', []);

            this.setState({ houses: houses })
        } catch(e) {
            console.log('getHouses err: ', e);
        }

        // api.getHouses().then(res => {
        //     console.log('getHouses res: ', res)
        // }).catch(err => {
        //     console.log('getHouses err: ', err);
        // }).finally(() => {})
    }

    _renderItem = ({ item }) => <HouseCell house={item} onHousePress={house => console.log('house: ', house)} />

    render() {
        console.log('this.state.houses: ', this.state.houses);

        const { houses } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={houses} 
                    renderItem={this._renderItem} 
                    keyExtractor={(item, index) => `house-${index}`}
                    numColumns={2}/>
            </SafeAreaView>
        )
    }
}

export default Home;