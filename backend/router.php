<?php

use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function (App $app){

    $app->group('/user', function (Group $group) {
        $group->post('/login', "App\Controllers\UserController:login");
        $group->post('/register', "App\Controllers\UserController:register");
    });

};


