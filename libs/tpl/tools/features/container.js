import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import <ClassName> from './component'
import actions from './action.js'

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(<ClassName>)