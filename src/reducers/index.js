import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import review from './review';
import bootcamp from './bootcamp';
import amazonproduct from './amazonproduct';
export default combineReducers({
  alert,
  auth,
  profile,
  review,
  bootcamp,
  amazonproduct,
});
