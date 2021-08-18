import {APP_ACTION} from '../actions';

const initialState = {
  isOnBoarding: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTION.SET_ONBOARDING:
      return Object.assign({}, {...state}, {isOnBoarding: action.payload});
    default:
      return initialState;
  }
};
