import { useState,React } from "react";



const Main = () => {


    const [currentPics,setCurrentPics]=useState([]);

    const createCat=async()=>{
        console.log(currentPics)
         fetch('https://api.thecatapi.com/v1/images/search')
        .then((response)=>response.json())
         .then((data)=>{setCurrentPics([...currentPics,data[0].url])})
      }


    return (


        
        <div>
 <button onClick={createCat}>CAT</button> 


{/*             
             {messages.map((messageContent)=>{
                return <div id={messageContent.author==username?'you':'other'}>
                        <div className='chat_body_message' >{messageContent.message}</div>
                        <div className='chat_body_about'>
                           <div className='chat_body_about_author'>by {messageContent.author}</div> 
                          <div className='chat_body_about_time'>at {messageContent.time}</div>
                        </div>
                    </div>
                 })} */}



        </div>
    );
};

export default Main;