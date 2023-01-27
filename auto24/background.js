let carsData
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.Message=="autoData"){
        carsData=message.AutoData;
        console.log(message.AutoData)
        sendResponse("recieved to background")
    }
    setTimeout(() => {
        // chrome.runtime.sendMessage({Message:"background",AutoData:message.AutoData},function(recieved){
        //        console.log(recieved)
        //  })
       }, 10000);
  });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    console.log(message)
    if (message.Message === 'soove') {
        {
            console.log("yes soove");
        }

        
      sendResponse(carsData);
    }
  });


  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.Message =="Blob"){
      fetch("https://img12.img-bcg.eu/auto24/320/755/164225755.jpg",{mode:'no-cors'})
      .then(res => res.blob())
      .then(blob =>{
        console.log("blob fetch in the background.js")
        console.log(blob);
          sendResponse(blob)
      });
      
    }
    return true;
  })
  

  