import React from 'react';
import { useState } from 'react';


function SwapImage({imagePrefix}){
    return(
        <div>
            <SwapButton imagePrefix={imagePrefix} />
        </div>
    );
}
function SwapButton({imagePrefix}){
    const [image, setImage] = useState(0); // state will swap between normal image (0) and spooky one (1)
    const image1= imagePrefix.concat("_OG.jpg");
    const image2= imagePrefix.concat("_POST.jpg");
    function swap(){
        var current = image;
        if(current === 1){ setImage(0);} else { setImage(1);}
    }
    
    return(
        <div>
            <button onClick={swap}> 
                Current Count {image}
            </button>
            <PickImage imageNum = {image} image1={image1} image2={image2}/>
        </div>
    );
}

function PickImage({imageNum, image1, image2}){
    if(imageNum ===1){
        return <img src={image2} alt = "yayyay" />
    }
    return <img src={image1} alt = "yayyay" />
}

export default SwapImage;