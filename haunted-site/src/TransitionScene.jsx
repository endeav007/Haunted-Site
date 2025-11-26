import React from 'react';
import { useState } from 'react';

function Scene(){

    function next(currentIndex){
        currentIndex++; 
    }
    return(
        <>
        <h1> Title </h1>
        <button> Continue? </button>
        </>
    );
}



export default Scene;

