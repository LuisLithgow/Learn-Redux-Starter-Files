// a reducer takes in two things:

  // 1. the action (the info about what happened)
  // 2. copy of current state


// ES6 default parameters
function postComments(state = [], action) {
  // console.log(state, action);
  switch(action.type) {
    case 'ADD_COMMENT':
      //return the new state with the new comment
      return[...state,{
        user:action.author,
        text:action.comment
      }]
    case 'REMOVE_COMMENT':
      console.log("Removing a comment")
      // we need to return the new state without the deleted comment
      return [
        // from the start until the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one until the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  // console.log(state, action);
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite thispost with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}


export default comments;
