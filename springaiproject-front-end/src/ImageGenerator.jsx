import React, { useState } from 'react'

const ImageGenerator = () => {

  const[prompt,setPrompt]=useState('');
  const[imageUrls,setImageUrls]=useState('');

  const generateImage=async ()=>{
    try {
      const response=await fetch("http://localhost:8080/generate-image/${prompt}");
      const urls=await response.json();
      setImageUrls(urls);
    }
    catch(error){
      console.error("Error generating image:", error);
    }
  }

  return (
    <!--Html-code-->
    <div className='tab-content'>

        <h2> Generate Images</h2>
        <input 
        type="text" 
        value={prompt} 
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder='Enter prompt for image'
        />
        <button onClick={generateImage}>Generate Image</button>
        <div className='image-grid'>
            {imageUrls.map((url,index)=>
            (
              <img key={index} src={url} alt={`Generated ${index}`}/>
            )
            )}
        </div>

    </div>

  )


}
export default ImageGenerator