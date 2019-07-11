import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {deleteEducation} from '../../actions/profile'

const Education = ({ education,deleteEducation }) => {

   const educations = education.map(edu => (
      <tr key={edu._id} >
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
      	 <Moment format='YYYY/DD/MM'>{edu.from}</Moment> - {' '} 
      	 {edu.to === null ? 'Now' : <Moment format='YYYY/DD/MM'>{edu.to}</Moment>}
      </td>
      <button onClick={e=>deleteEducation(edu._id)} className='btn btn-danger'>Delete</button>
      </tr>
   	))
	return (
       
       <Fragment>
           <h2 className="my-2">Education Credentials</h2> 
           <table className="table">
           <thead>
           <tr>
              <th>School</th>
              <th className='hide-sm'>Degree</th>
              <th className='hide-sm'>Years</th> 
              <th />
           </tr> 
           </thead>
           <tbody>{educations}</tbody>
           </table>
       </Fragment>

		)
}

Education.propTypes = {
 education: PropTypes.array.isRequired,
 deleteEducation: PropTypes.func.isRequired
}

export default connect(null,{deleteEducation})(Education);