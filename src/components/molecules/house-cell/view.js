import React from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';

class HouseCell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageWidth: 0,
            imageHeight: 0,
        }
    }

    componentDidMount() {
        const { house } = this.props
        const imageDir = _.get(house, 'image_dir')

        Image.getSize(
            imageDir,
            (realImageWidth, realImageHeight) => {
                const {height, width} = Dimensions.get('window') //altura y anchura de la pantalla
                const imageWidth = width / 2;
                const imageHeight = (realImageHeight * imageWidth) / realImageWidth;
                this.setState({
                    imageWidth: imageWidth,
                    imageHeight: imageHeight
                })
            },
            err => {
                console.log('getSize err: ', err);
            }
        );
    }

    render () {
        const { house, onHousePress } = this.props
        const { imageWidth, imageHeight } = this.state
        const imageDir = _.get(house, 'image_dir');
        return (
            <TouchableOpacity onPress={ (event) => onHousePress(house)}>
                <Image source={{uri: imageDir}} style={{width: imageWidth, height: imageHeight, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        )
    }
}

HouseCell.defaultProps = {
    onHousePress: () => {},
};

HouseCell.propTypes = {
    house: PropTypes.object.isRequired,
    onHousePress: PropTypes.func,
}

export default HouseCell;