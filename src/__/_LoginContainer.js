import { connect } from 'react-redux';
import actions from '../actions';
import UserName from '../UserName';


const mapStateToProps = (state) => {
    return {
        ifEnter: state.ifEnter,
        user: state.user,
        tasks: state.tasks
      }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onClick: () => {
        dispatch(actions.enterTodo())
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(UserName);