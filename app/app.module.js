import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import uiBootstrap from 'angular-ui-bootstrap';
import ngResource from 'angular-resource';

// css lib
import 'bootstrap/dist/css/bootstrap.min.css';

// css

// components
import mainApp from './app.component';
import home from './components/home/home.component';
import posts from './components/posts/posts.component';
import post from './components/post/post.component';

// services
import appService from './app.service';
import getPosts from './components/posts/posts.service';

// routing
import routing from './app.route';

// directives

// constants
const MODULE_NAME = 'app';
require('../index.html');

angular.module(MODULE_NAME, [uiRouter, ngSanitize, uiBootstrap, ngResource])
    // components
    .component('myApp', mainApp)
    .component('home', home)
    .component('posts', posts)
    .component('post',post)
    .service('getPosts',getPosts)
    .service('appService', appService)
    .config(routing)

export default MODULE_NAME;
