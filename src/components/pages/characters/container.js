import { connect } from 'react-redux';
import { charactersActions } from '../../../redux/characters';
import View from './view';

const mapStateToProps = (state) => {
    return {
        charactersList: state.characters.list,
        isFetching: state.characters.isFetching,
        total: state.characters.total,
        offset: state.characters.offset,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        initCharactersList: () => {
            dispatch(charactersActions.initCharactersList())
        },
        updateCharactersListOffset: () => {
            dispatch(charactersActions.updateCharactersListOffset())
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(View);