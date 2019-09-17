function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data=new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.` 
if(hora>=0 && hora<12){
    //Bom dia
    img.src='manha.png'
    document.body.style.background = '#5b430c'
}else if(hora >=12 && hora<18){
    //Boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#fc7d00'
}else{
//Boa noite
    img.src = 'noite.png'
    document.body.style.background = '#52483d'
}
}