import Main from './components/Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './redux/action';
import { withRouter } from 'react-router';

function mapStateToProps(state, ownProps) {
	return {
		posts: state.posts,
		comments: state.comments,
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));

export default App;
