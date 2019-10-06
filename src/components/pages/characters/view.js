import React from 'react';
import { SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { CharacterCell } from '../../molecules';
import styles from './styles';

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.props.initCharactersList();
    }

    _renderItem = ({item}) => <CharacterCell character={item} />;

    _onEndReached = ({ distanceFromEnd }) => {
        const { isFetching, charactersList, total } = this.props;
        const onEndReached =
            distanceFromEnd > 100 && !isFetching && charactersList.length < total;
        if (onEndReached) {
            this.props.updateCharactersListOffset();
        }
    };

    render() {
        const { charactersList, isFetching } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={charactersList}
                    renderItem={this._renderItem}
                    keyExtractor={item => `character-${item.id}`}
                    extraData={this.props}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.8}
                    refreshControl={
                        <RefreshControl
                            refreshing={isFetching}
                            onRefresh={this.props.initCharactersList}
                            tintColor={'white'}
                            colors={['white']}
                        />
                    }
                />
            </SafeAreaView>
        );
    }
}

export default Characters;