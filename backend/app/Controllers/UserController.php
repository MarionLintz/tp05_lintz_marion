<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use Firebase\JWT\JWT;

class UserController
{
    public function login(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();   

        $login = $data["login"] ?? ""; 
        $password = $data["password"] ?? ""; 

        if($login != "admin" || $password != "admin"){
            $response->getBody()->write(json_encode([
                "success" => false
            ]));
            return $response->withHeader("Content-Type", "application/json");
        }

        $dateNow = time();

        $payload = [
            "iat" => $dateNow,
            "exp" => $dateNow + 100,
            "user" => [
                "id" => 1
            ]
        ];

        $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

        $response->getBody()->write(json_encode([
                "success" => true
            ]));

        return $response
            ->withHeader("Authorization", $token_jwt)
            ->withHeader("Content-Type", "application/json");
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();

        $result = [
            "success" => true,
            "data" => $data
        ];

        $response->getBody()->write(json_encode($result));
        return $response->withHeader("Content-Type", "application/json");
    }
}