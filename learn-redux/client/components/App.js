import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators "../actions/actionCreators";
import Main from './Main';


function mapStateToProps(state) {
  return {
    posts:state.posts,
    comments:state.comments
  }
}

function mapDispatchToProps(dispatch){
  // will return all action creator functions from actionCreatorsfile
  return bindActionCreators(actionCreators, dispatch);
}

// NOT creating a react class but CONNECTING it from 'react-redux'
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
