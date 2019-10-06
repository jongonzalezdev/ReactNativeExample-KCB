import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import _ from 'lodash';

const CharacterCell = ({character, onPress}) => {
  const name = _.get(character, 'nombre', '');
  const age = _.get(character, 'edad', '');
  const image = _.isNil(character, 'image_dir')
    ? require('../../../assets/images/placeholder.png')
    : {uri: character.image_dir};

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
    </TouchableOpacity>
  );
};

CharacterCell.defaultProps = {
  onPress: () => {},
};

CharacterCell.propTypes = {
  character: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default CharacterCell;