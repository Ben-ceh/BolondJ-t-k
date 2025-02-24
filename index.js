let sz = ""

const sor = 15
const osz = 15

// - - - - - - - - - - - - - - - - - - - - - -Gombok kirajzolása

for (let i = 0; i < sor; i++) {
    
    for (let j = 0; j < osz; j++) {
        sz+= `<button id="${i}_${j}" background-color: #e5e5e5;  style="padding: 5px; width: 50px; height: 50px; " onclick="szovegKiir(this.id)"></button>`
        
    }
    sz+=`<br>`
}
document.getElementById("tabla").innerHTML+=sz
// - - - - - - - - - - - - - - - - - - - - - - -KétD tömb



let tomb = []
for (let i = 0; i < sor; i++) {
    let egysor= []    

    for (let i = 0; i < osz; i++) {
        egysor.push(0)
        
    }

tomb.push(egysor)
}

console.log(tomb)



function szovegKiir(id){
    let kecske = id.split("_")
    console.log(kecske[0])
    console.log(kecske[1])
    let s = parseInt(kecske[0])
    let o = parseInt(kecske[1])
    szines(s,o)
    szines(s-1,o)
    szines(s+1,o)
    szines(s,o-1)
    szines(s,o+1)
    //Kattintotttttt
    
    
   
    //felette kattintttttt
    
    
}





function szines(s,o){
    if(s>=0 && s<sor && o>=0 && o<osz){

    

        if(tomb[s][o]==0){

            document.getElementById((s)+"_"+o).style.backgroundColor="red"
    
            tomb[s][o]=1
        }
        else{
            document.getElementById((s)+"_"+o).style.backgroundColor="#e5e5e5"
            tomb[s][o]=0
        }
        }
    
}


