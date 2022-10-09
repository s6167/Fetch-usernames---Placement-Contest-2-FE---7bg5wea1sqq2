import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
 const [url, setUrl] = useState("https://content.newtonschool.co/v1/pr/main/users/1")
 const [data, setData] = useState();
 const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    console.log("Url IS"+ url)
    fetch(url)
    .then((res)=>res.json())
    .then((result)=>{
      setData(result)
      setIsLoaded(true)
    })
 }, [url])

 
 function changeInput(e){
   let newUrl = url;
   if(url[url.length-1]!="/"){
     newUrl = newUrl.substring(0,newUrl.length-1)
   }
  console.log(newUrl)
   setUrl(newUrl+e.target.value)
   console.log(url)
 }

 


  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{isLoaded && data.name}</p>
    </div>
  );
}


export default App;
