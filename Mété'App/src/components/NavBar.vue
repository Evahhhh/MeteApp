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
                <router-link to="/" class="nav-link">Home</router-link>
            </div>
            <div class="btn">
                <router-link to="/about" class="nav-link">About</router-link>
            </div>
            <div class="btn">
                <router-link to="/contact" class="nav-link">Contact</router-link>
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
        cursor: pointer;
    }

    .button:hover {
        background-color: #c68a7d;
    }


  </style>
  