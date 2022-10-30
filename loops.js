let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function(){
    let res = JSON.parse(request.response)

    // for Each
    res.forEach(element => {
        console.log(element.name)
    });

    // for 
    for(let i = 0; i < res.length; i++){
        console.log(`Country name: ${res[i].name}`)
    }

    // for of
    for (let re of res){
        console.log(re.capital)
    }
    
}

let data = {
	name:"Raghu Nandan K.V",
	isQualified:true,
  	education:{
    	SSLC: "80%",
        HSC: "88%",
        BCom: "63%",
    },
    
}

for (const key in data) {
    console.log(`${key} ---${data[key]} `)
}

