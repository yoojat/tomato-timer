import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as tomatoActions} from '../../reducer';
import Timer from './presenter';

//Provider를 통해 전달받은 store를 통해 state를 사용?
function mapStateToProps(state) {
  const {isPlaying, elapsedTime, timerDuration} = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
