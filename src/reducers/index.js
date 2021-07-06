import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter';

export const todoApp = combineReducers({
  todos,
  visibilityFilter
})