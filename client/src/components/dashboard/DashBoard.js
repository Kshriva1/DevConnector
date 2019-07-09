import React,{useEffect,Fragment} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layouts/Spinner.js';
import DashBoardActions from './DashBoardActions';
import {getCurrentProfile} from '../../actions/profile'
import Experience from './Experience';
import Education from './Education';
import {deleteAccount} from '../../actions/profile';

const DashBoard = ({getCurrentProfile,auth:{user},profile:{loading,profile},deleteAccount}) => {
     
    useEffect(() => {
    	getCurrentProfile()
    },[getCurrentProfile])


     return loading && profile === null ? <Spinner /> : <Fragment>
       <h1 className='large text-primary'>Dashboard</h1>
       <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
       </p>
       {profile !== null ? (

        <Fragment> 
        <DashBoardActions /> 
        <Experience experience={profile.experience} />
        <Education education={profile.education} />

        <div className="my-2">
         <button className="btn btn-danger" onClick={e=>deleteAccount()}>
         <i className="fas fa-user-minus"></i> Delete my Account
         </button>
        </div>
        </Fragment>) : 


        (<Fragment>
          
          <p>You have not yet setup your profile, please click below to setup your profile</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
          Create profile
          </Link>
        </Fragment>)}
     </Fragment>
	}

DashBoard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}	

const mapStateToProps = state => ({
     auth: state.auth,
     profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(DashBoard);	