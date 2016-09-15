// a reducer takes in two things:

  // 1. the action (the info about what happened)
  // 2. copy of current state


// ES6 default parameters
function posts(state = [], action) {
  console.log("THE POST WILL CHANGE!!!")
  console.log(state, action);
  return state;
}

export default posts;
