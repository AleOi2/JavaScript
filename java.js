let getlistaul = document.getElementById("Lista1");

//let listaul = document.getElementById("Lista1");
let Text = document.getElementById("texto");
console.log(Text);

for (let index = 0; index < 5; index++) {
    let listali = document.createElement("li")
    let input = document.createElement("input")
    input.className = "radio r8-radio-float";
    input.type = "radio";
    input.name = "null";
    input.value = index;
    getlistaul.appendChild(listali);    
    input.onclick = function() {
        //console.log(getlistaul.children[index].children[0])
        if(getlistaul.children[index].childNodes[0].checked == true){   
            check(index);
        }        
    }
    listali.appendChild(input);
}


function check(index){
    while (Text.hasChildNodes()) {
        Text.removeChild(Text.lastChild);
    }

    switch (index) {
        case 0:
            let hi = document.createElement("h1");
            hi.innerText = "Primeira Página"
            Text.appendChild(hi);
            let pi = document.createElement("p");
            pi.innerText = "Primeiro Parágrafo que estou escrevendo"
            Text.appendChild(pi);

            break;
        case 1:
            let hi2 = document.createElement("h1");
            hi2.innerText = "Segunda Página"
            Text.appendChild(hi2);
            let pi2 = document.createElement("p");
            pi2.innerText = "Primeiro Parágrafo que estou escrevendo"
            Text.appendChild(pi2);
            break;
        case 2:            
            let hi3 = document.createElement("h1");
            hi3.innerText = "Terceira Página"
            Text.appendChild(hi3);
            let pi3 = document.createElement("p");
            pi3.innerText = "Primeiro Parágrafo que estou escrevendo"
            Text.appendChild(pi3);
            break;
        case 3:            
            let hi4 = document.createElement("h1");
            hi4.innerText = "Quarta Página"
            Text.appendChild(hi4);
            let pi4 = document.createElement("p");
            pi4.innerText = "Primeiro Parágrafo que estou escrevendo"
            Text.appendChild(pi4);
            break;
        case 4:            
            let hi5 = document.createElement("h1");
            hi5.innerText = "Quinta Página"
            Text.appendChild(hi5);
            let pi5 = document.createElement("p");
            pi5.innerText = "Primeiro Parágrafo que estou escrevendo"
            Text.appendChild(pi5);
            break;
        default:
            break;
    }

}