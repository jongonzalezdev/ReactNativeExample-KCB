import { connect } from 'react-redux';
import { housesActions } from '../../../redux/houses';
import View from './view';

const mapStateToProps = (state) => {
    return {
        housesList: state.houses.list,
        isFetching: state.houses.isFetching,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(housesActions.fetchHousesList());
        },
        updateItem: (house) => {
            dispatch(housesActions.updateItem(house))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(View);