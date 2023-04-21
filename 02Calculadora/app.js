const Suma=()=>{
  let n1 = parseInt(document.querySelector("#n1").value);
  let n2 = parseInt(document.querySelector("#n2").value);
  CSuma=n1+n2;
  let res= document.querySelector("#Resul");
  res.innerHTML=`<h1> Resultado </h1>
  <h2> Suma: ${CSuma} </h2>`;
}
const Resta=()=>{
  let n1 = parseInt(document.querySelector("#n1").value);
  let n2 = parseInt(document.querySelector("#n2").value);
  CResta=n1-n2;
  let res= document.querySelector("#Resul");
  res.innerHTML=`<h1> Resultado </h1>
  <h2> Resta: ${CResta} </h2>`;
}
const Multi=()=>{
  let n1 = parseInt(document.querySelector("#n1").value);
  let n2 = parseInt(document.querySelector("#n2").value);
  CMulti=n1*n2;
  let res= document.querySelector("#Resul");
  res.innerHTML=`<h1> Resultado </h1>
  <h2> Multiplicacion: ${CMulti} </h2>`;
}
const Sion=()=>{
  let n1 = parseInt(document.querySelector("#n1").value);
  let n2 = parseInt(document.querySelector("#n2").value);
  DSion=n1/n2;
  let res= document.querySelector("#Resul");
  res.innerHTML=`<h1> Resultado </h1>
  <h2> Division: ${DSion} </h2>`;
}
