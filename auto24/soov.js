window.onload = function() {
   console.log("yes soov")
let carsData
    chrome.runtime.sendMessage({Message:"soove"},function(recieved){
        
        carsData=recieved;
        console.log(recieved)
    })  
setTimeout(() => {
    console.log(carsData);
    document.getElementById("title").value=carsData['Title'];
    document.getElementById("description").value=carsData['Description'];
    document.getElementById("price").value=carsData['Price'];
    document.getElementById("newad_location").value="Põhja-Tallinna linnaosa, Tallinn, Harjumaa";
    function select(){
        let option=document.getElementById('category1')
        option.click()
        option.addEventListener('click', () => {
            option.querySelectorAll('option')[1].selected=true
            let changeEvent = new Event('change');
            option.dispatchEvent(changeEvent);
    })    
    }
    select()
    select()
    function address(){
        let option=document.querySelector("#newad_location")
        option.click()
        option.addEventListener('click', () => {
        document.querySelector("#newad_location").value="Kesklinna linnaosa, Tallinn";
        let changeEvent = new Event('change');
        option.dispatchEvent(changeEvent);
    })
    }
    address()
    address()
    setTimeout(() => {
        function select2(){
        
        let option=document.getElementById('category2')
        option.querySelectorAll('option')[1].selected=true
        option.click()
        option.addEventListener('click', () => {
          let changeEvent = new Event('change');
          option.dispatchEvent(changeEvent);
        })    
        }
        select2()
        select2()
        setTimeout(() => {
            document.querySelector("body > div.autocomplete-suggestions > div:nth-child(1)").click()
            document.getElementById("regnr").value=carsData['RegistrationNo'];
            document.getElementById("check_regnumber").click()
            // window.scrollTo(0, 400);
            setTimeout(() => {
                let body=carsData['Body_Type']
                if( body=="Luukpära" ||body=="Sedaan" || body=="Universaal" || body=="Kabriolett" || body=="Maastur" || body=="Mahtuniversaal" || body=="Kaubik"){
                   document.getElementById("keretuup").value=body
                }
                document.getElementById("registreerimisaasta").value=carsData['Registration'];
                document.getElementById("voimsus").value=carsData['Power'];
                if(carsData['Mileage'].length > 0){
                    document.getElementById("labisoit").value=carsData['Mileage'];
                }
                document.getElementById("kutuse_tuup").value=carsData["Fuel"]
                document.getElementById("kaigukast").value=carsData['Transmisson'];
                document.getElementById("vedav_sild").value=carsData['DriveTrain'];
                document.getElementById("varv").value=carsData['Color']
                

            }, 2000);
        }, 2000);
    }, 1000);
},500);
  };


  fetch("https://img12.img-bcg.eu/auto24/320/755/164225755.jpg",{method:'GET',mode:'no-cors',credentials: 'omit'}
    )
      .then(res => res.blob())
      .then(blob => {
        console.log("blob fetch in soov.js:")
        console.log(blob);
      });

  chrome.runtime.sendMessage({Message:"Blob"},function(recieved){
    console.log("blob received from background.js");
    console.log(recieved)  
})  
