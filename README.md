# DevConnector

This application is built using the MongoDb, Expressjs, React, Nodejs tech stack also know as the MERN stack. It is a social media application for developers and allows different developers to connect with each other by the means of shraring their knowledge and ideas using posts.

This application consists of the following functionalities:

(1) The register functionality is used for registering different users and storing their information in the database. Bcrypt library is used to hash the passwords of the users before storing in the database to ensure proper security in the application.

(2) The signup functionality is used to compare the information of the user which has been entered by the user with the information of the user. If the information matches the user is authenticated and is signed in.

(3) The dashboard component allows users to make a profile if no profile exists for the user. if it exists then the user can add their experiences,education and edit their profile.

(4) The user can post afer creating a profile. The user can also like and dislike posts from any user. However the user can only delete his own posts.

(5) The user can comment on any posts including their own posts and alos like and dislike the comments.

(6) The user can also view a list of all the developers available on the application and connect with anyone they like. This feature is available without registering for this application.

(7) The user can display their github repositories by entering their github username in the profile section. This enables different developers to see our repositories and also the amount of stars, forks and watchers it gets.

(8) It also displays a NotFound page it is redirected to any page which it cannot find.

This application can be viewed at https://invulnerable-livre-75833.herokuapp.com
