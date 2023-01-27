// document.querySelector("body > div.autocomplete-suggestions > div:nth-child(1) > strong > font > font").click()
// let option=document.querySelector("#newad_location")
//         option.click()
//         option.addEventListener('click', () => {
//             document.querySelector("#newad_location").value="Kesklinna linnaosa, Tallinn, Harjumaa";
//             let changeEvent = new Event('change');
//             option.dispatchEvent(changeEvent);
//     })

let option=document.querySelector("#newad_location")
        option.click()
        option.addEventListener('click', () => {
        document.querySelector("#newad_location").value="Kesklinna linnaosa, Tallinn";
        let changeEvent = new Event('change');
        option.dispatchEvent(changeEvent);
    })
function address(){
    let option=document.querySelector("#newad_location")
    option.click()
    option.addEventListener('click', () => {
    document.querySelector("#newad_location").value="Kesklinna linnaosa, Tallinn";
    let changeEvent = new Event('change');
    option.dispatchEvent(changeEvent);
})
}
    
    document.querySelector("body > div.autocomplete-suggestions > div:nth-child(1)").click()
    // document.querySelector("body > div.autocomplete-suggestions > div:nth-child(1) > strong > font > font").click()
