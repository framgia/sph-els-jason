<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        // for validation
        $public_data = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:3'
        ]);

        $user = User::create([
            'first_name' => $public_data['first_name'],
            'last_name' => $public_data['last_name'],
            'email' =>  $public_data['email'],
            'password' => Hash::make($public_data['password'])
        ]);


        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'status' => 'Success',
            'message' => 'Successfully registered',
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            //Authentication did not pass...
            return response()->json([
                'message' => 'Login information is invalid.'
            ], 401);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Login information is invalid.'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
}
