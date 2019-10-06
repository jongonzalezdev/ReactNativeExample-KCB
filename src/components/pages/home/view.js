import React, {Component} from 'react';
import { SafeAreaView, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { HouseCell } from '../../molecules';



class Home extends Component {

    componentDidMount() {
        this.props.fetchHousesList();
    }

    _onHouseTapped = (house) => {
        this.props.updateItem(house);
        Actions.Characters({ title: _.get(house, 'nombre', 'Personajes')});
    }

    _renderItem = ({ item }) => <HouseCell house={item} onHousePress={house => this._onHouseTapped(house)} />

    render() {
        const { housesList, isFetching } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={housesList} 
                    renderItem={this._renderItem} 
                    keyExtractor={(item, index) => `house-${index}`}
                    numColumns={2}
                    extraData={this.props}
                    refreshControl={
                        <RefreshControl 
                            refreshing={isFetching} 
                            onRefresh={this.props.fetchHousesList}
                            tintColor={'white'}
                            colors={['white']}
                        />
                    }
                />
            </SafeAreaView>
        )
    }
}

export default Home;