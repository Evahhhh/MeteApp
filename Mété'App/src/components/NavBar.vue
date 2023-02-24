<template>

    <nav>
        <img
            alt="Vue logo"
            class="logo"
            src="../assets/logo.png"
            width="80"
            height="80"
        />

        <div class="btnSpace">
            <div class="btn">
                <router-link class="btn-txt" to="/app">Accueil</router-link>
            </div>
            <div class="btn">
                <router-link class="btn-txt" to="/contact">Contact</router-link>
            </div>
            <div class="btn">
                <router-link class="btn-txt" to="/help">Aide</router-link>
            </div>
        </div>
    </nav>
  </template>
  
  <style>
    .nav-link {
        display: inline-block;
        padding: 0.5em 1em;
        color: white;
        text-decoration: none;
    }

    .btnSpace{
        display : flex;
        gap : 15px;
    }

    .btn{
        background-color: #CF8E80;;
        border-radius: 5px;
        padding : 5px 15px 5px 15px;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #c68a7d;
    }

    .btn-txt{
        color : white;
    }


  </style>
  