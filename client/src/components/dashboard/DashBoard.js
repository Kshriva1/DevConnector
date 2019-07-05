import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile'

const DashBoard = ({getCurrentProfile}) => {
     return (

       <div>
         DashBoard
       </div>  

     	)
	}

DashBoard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}	

const mapStateToProps = state => ({
     auth: state.auth,
     profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(DashBoard);	