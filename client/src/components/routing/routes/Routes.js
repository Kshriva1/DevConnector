import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../auth/Login';
import Register from '../../auth/Register';
import Alert from '../../layouts/alert';
import NotFound from '../../layouts/NotFound';
import DashBoard from '../../dashboard/DashBoard';
import PrivateRoute from '../PrivateRoute';
import CreateProfile from '../../profile-forms/CreateProfile';
import EditProfile from '../../profile-forms/EditProfile';
import AddExperience from '../../profile-forms/AddExperience';
import AddEducation from '../../profile-forms/AddEducation';
import Profiles from '../../profiles/Profiles';
import Profile from '../../profile/Profile';
import Posts from '../../posts/Posts';
import Post from '../../post/Post';

const Routes = props => {

	return (

     <div>
     <section className='container'>
     <Alert />
       <Switch>
         <Route exact path="/register" component={Register} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/profiles" component={Profiles} />
         <Route exact path="/profile/:id" component={Profile} />
         <PrivateRoute exact path="/dashboard" component={DashBoard} />
         <PrivateRoute exact path="/create-profile" component={CreateProfile} />
         <PrivateRoute exact path="/edit-profile" component={EditProfile} />
         <PrivateRoute exact path="/add-experience" component={AddExperience} />
         <PrivateRoute exact path="/add-education" component={AddEducation} />
         <PrivateRoute exact path="/posts" component={Posts} />
         <PrivateRoute exact path="/post/:id" component={Post} />
         <Route component={NotFound} />
       </Switch> 
     </section>

     </div>

		)
}

export default Routes;