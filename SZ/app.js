 let D=document.querySelector("#Dia")
 let SD =document.querySelector("#SD")
 let M = document.querySelector("#Mes")
 let F = document.querySelector("#Fe")
 let H = document.querySelector("#Ho")

 D.oninput=()=>{Form()}
 M.onchange=()=>{Form()}
 F.oninput=()=>{Form()}
 H.oninput=()=>{Form()}
 SD.oninput=()=>{Form()}
 
 const Form=()=>{
    let N = parseInt(D.value);
    let I = parseInt(M.value)
        document.querySelector("#SD").innerHTML=N
   document.querySelector("#Fe").innerHTML=`<h3>Naciste el: ${D.value} de ${M.value} </h3>`
   if (N = 21 && I<=Febrero) {
    document.querySelector("#Ho").innerHTML=`<h3></h3>`
   }
 }