<?php

// namespace App\Http\Controllers;
// //use Socialite;
// use Illuminate\Http\Request;

// class zahkersocial extends Controller
// {
//     
//     public function redirect($provider)
//      {
//       return Socialite::driver($provider)->redirect();
//     }
// public function Callback($provider)
// {
// $userSocial =   Socialite::driver($provider)->stateless()->user();
//         $users       =   User::where(['email' => $userSocial->getEmail()])->first();
// if($users){
//             Auth::login($users);
//             return redirect('/');
//         }else{
// $user = User::create([
//                 'name'          => $userSocial->getName(),
//                 'email'         => $userSocial->getEmail(),
//                 'image'         => $userSocial->getAvatar(),
//                 'provider_id'   => $userSocial->getId(),
//                 'provider'      => $provider,
//             ]);
//          return redirect()->route('home');
//         }
// }
// }
 

