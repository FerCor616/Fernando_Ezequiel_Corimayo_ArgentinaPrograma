//uso de api
document.getElementById('enviar').addEventListener("click",function(){
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then(data=>{
        //.then(data=>console.log(data))
        document.getElementById('imgPerfil').setAttribute("src",data.results[0].picture.large);
        })
});

//uso de dom

document.getElementById('helper').addEventListener("click",function(){
    document.getElementById('ayuda').style.display='block';
});

//guardado de nombre y apellido
document.getElementById('nombre').value=localStorage.getItem('nom');
document.getElementById('apellido').value=localStorage.getItem('ape');
document.addEventListener('click',function(){
    agregarAlocalStore('nom','nombre');
    agregarAlocalStore('ape','apellido');
})
function agregarAlocalStore(nom,elemenId){
    const elemenValor = document.getElementById(elemenId).value;
    localStorage.setItem(nom,elemenValor);
}
//geoloacalizacion
//fuente:https://www.youtube.com/watch?v=PXQe_AGIqoQ
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(accedio,error);
}else{
    alert("puedes obterner geo");
}
function accedio(geolocationPosition){
    let coordenadas = geolocationPosition.coords;
    console.log(coordenadas);
    document.getElementById('localizacion').innerHTML="Su localizacion es: "+"longitud:"+coordenadas.longitude+" latitud: "+coordenadas.latitude;
}
function error(err){
    document.getElementById('localizacion').innerHTML= err.message;
}