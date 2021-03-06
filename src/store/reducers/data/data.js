import {extend} from '../../../helpers/utils';
import {ActionTypes} from '../../actions/data/data';

const initialState = {
  offers: [],
  nearOffers: [],
  favorites: [],
  detailsOfferId: null,
  loading: true
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionTypes.GET_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload
      });

    case ActionTypes.GET_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });

    case ActionTypes.SET_DETAILS_OFFER_ID:
      return extend(state, {
        detailsOfferId: action.payload
      });

    case ActionTypes.SET_LOADING_FLAG:
      return extend(state, {
        loading: action.payload
      });
  }
  return state;
};

export default reducer;
