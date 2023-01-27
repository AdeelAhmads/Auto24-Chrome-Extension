var content=document.querySelectorAll("div[class='tpl-content']").length
if(content!=0){
    var data_send_to_soov=[]
    try{
        //1.title
        var title=document.querySelectorAll(".commonSubtitle")[0].innerText
        console.log("1.title:"+title)

        var mydiv = document.getElementsByClassName("commonSubtitle")[0]
        var aTag = document.createElement('a');
        aTag.setAttribute('href',"https://soov.ee/lisa-kuulutus");
        aTag.setAttribute('id',"scrape_button");
        aTag.setAttribute('target',"_blank");
        aTag.innerText = "copy to soov";
        mydiv.appendChild(aTag);
        // 2.pictures
        let imagesLinks=[]
        var images=document.querySelectorAll(".topSection__images")[0]
        // console.log(images.querySelectorAll("img"))
        var img_src=images.querySelectorAll("img")
        img_src.forEach((img)=>{
            imagesLinks.push(img.src)
            console.log(img.src)
        })
        //3 description
        var description=document.querySelectorAll(".other-info")[0].innerText
        // console.log("3.description:"+description)
        //4.price
        var dicount_len=document.querySelectorAll(".field-soodushind>.field>.value").length
        var price;
        if(dicount_len!=0){
            price=document.querySelectorAll(".field-soodushind>.field>.value")[0].innerText
        }
        else{
            price=document.querySelectorAll(".field-hind>.field>.value")[0].innerText
        }
        // console.log("4.price:"+price)
    
        //7. body_type
        var body_type=document.querySelectorAll(".field-keretyyp>.field")[0].innerText
        // console.log("7.body_type:"+body_type)
        //8. registration year
        var registrationDate=document.querySelectorAll(".field-month_and_year>.field")[0].innerText
        // console.log("8.registrationDate:"+ registrationDate)
        // 9.power
        var power=document.querySelectorAll(".field-mootorvoimsus>.field")[0].innerText
        // console.log("9.power:"+ power)
        // 10.mileage
        var mileage=document.querySelectorAll(".field-labisoit>.field")[0].innerText
        // console.log("10.mileage:"+mileage)
        // 11.fuel
        var fuel=document.querySelectorAll(".field-kytus>.field")[0].innerText
        // console.log("11.fuel:"+ fuel)
        // 12.transmission
        var transmission=document.querySelectorAll(".field-kaigukast_kaikudega>.field")[0].innerText
        // console.log("12.transmission:"+ transmission)
        // 13.driveTrain
        var driveTrain=document.querySelectorAll(".field-vedavsild>.field")[0].innerText
        // console.log("13.driveTrain:"+ driveTrain)
        // 14.color
        var color=document.querySelectorAll(".field-varvus>.field")[0].innerText
        // console.log("14.color:"+ color)
       var gearBox=document.querySelectorAll(".field-kaigukast_kaikudega>.field>.value")[0].innerText
    //    console.log("gearBox:"+gearBox)
        document.getElementsByClassName('service-trigger')[0].click()
        var registrationNo='';
        var auto_data={}
        setTimeout(() => {
           if(document.querySelectorAll(".field-reg_nr>.field").length>0){
            registrationNo=document.querySelectorAll(".field-reg_nr>.field")[0].innerText
           }
            
            // if(registrationNo.length==0){
            //     alert("Sorry! Registration Number not found so you can't save to soov!")
            //     document.getElementById("scrape_button").href='';
            // }
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
              }
            body_type=capitalizeFirstLetter(body_type)
            fuel=capitalizeFirstLetter(fuel)
            
            color= color.split(" ")[0]
            color=capitalizeFirstLetter(color)
            // console.log("color: " + color);
            if(color!="Hall" && color!="Prunn" && color!="Must" && color!="Punane" && color!="Kollane" && color!="Koheline" && color!="Sinine"){
                color="Muu";    
            }
            price=price.replace(/[^\d.-]/g, '');
            mileage=mileage.replace(/[^\d.-]/g, '');
            power=power.split(" ")
            power=power[power.length-1].replace(/[^\d.-]/g, '')
            console.log("power"+power)
            if(driveTrain=="nelikvedu"){
                driveTrain="Neljarattavedu";
            }
            else if(driveTrain=="esivedu"){
                driveTrain="Esisillavedu";
            }
            else if(driveTrain=="tagavedu"){
                driveTrain="Tagasillavedu";
            }
            // let imgBlob={}
            // fetch("https://img12.img-bcg.eu/auto24/320/784/166662784.jpg",{ mode: 'no-cors'},)
            // .then(res => res.blob())
            // .then(blob => {
            // imgBlob=blob
            
            // });
            
            registrationDate=registrationDate.split("/")[1];
            transmission= transmission.split(" ")[0];
            transmission=capitalizeFirstLetter(transmission);
            // console.log("registrationNo:"+ registrationNo);
           
            title = title.substring(0,46);
            auto_data={
            Title:title,
            Image:imagesLinks,
            Description:description,
            RegistrationNo:registrationNo,
            Price:price,
            Body_Type:body_type,
            Registration:registrationDate,
            Power:power,
            Mileage:mileage,
            Fuel:fuel,
            Transmisson:transmission,
            DriveTrain:driveTrain,
            Color:color,
            // Blob:imgBlob
        }
        data_send_to_soov.push(auto_data)
        console.log("Data send to soove:")
        console.log(data_send_to_soov)

        let soovButton=document.getElementById("scrape_button")
        soovButton.addEventListener('click',()=>{
        if(registrationNo.length>0){
            
                chrome.runtime.sendMessage({Message:"autoData",AutoData:auto_data},function(recieved){
                    console.log(recieved)
              })
            }
            else{
                document.getElementById("scrape_button").href='';
                document.getElementById("scrape_button").setAttribute('target','_self');
                alert("Sorry! Registration Number not found so you can't save to soov!")
                
            }
            
        })
        },1000);
          
        
        
    }catch(err){
        console.log("error: " + err)
    }
     
} 