// a reducer takes in two things:

  // 1. the action (the info about what happened)
  // 2. copy of current state


// ES6 default parameters
function posts(state = [], action) {
  // console.log("THE POST WILL CHANGE!!!")
  // console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log("Incrementing Likes");
    // return the updated state
    const i = action.index;
    return [
      ...state.slice(0,i), //before the one we are updating
      {...state[i], likes:state[i].likes + 1 },
      // ^^ this should just update that one post
      ...state.slice(i + 1) //after the one we are updating
    ]
    default:
      return state;
  }
}

export default posts;
