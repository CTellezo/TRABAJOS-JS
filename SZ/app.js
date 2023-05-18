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
  let signo=""
  switch (M.value) {
    case Enero: signo(N>=20)?"Capricornio": "Acuario"; break;
    case Febrero: signo(N>=20)?"Acuario": "Piscis"; break;
    case Marzo: signo(N>=20)?"Piscis": "Aries"; break;
    case Abril: signo(N>=20)?"Aries": "Tauro"; break;
    case Mayo: signo(N>=20)?"Tauro": "Geminis"; break;
    case Junio: signo(N>=20)?"Geminis": "Cancer"; break;
    case Julio: signo(N>=20)?"Cancer": "Leo"; break;
    case Agosto: signo(N>=20)?"Leo": "Virgo"; break;
    case Septiembre: signo(N>=20)?"Virgo": "Libra"; break;
    case Octubre: signo(N>=20)?"Libra": "Escorpio"; break;
    case Noviembre: signo(N>=20)?"Escorpio": "Sagitario"; break;
    case Diciembre: signo(N>=20)?"Sagitario": "Capricornio"; break;
  }
  document.querySelector("#Ho").innerHTML=`<h3>Por lo tanto eres: ${signo} </h3>`
 }