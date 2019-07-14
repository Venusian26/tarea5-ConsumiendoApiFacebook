const FB = require('fb');



var tokenPage='EAAhOjXqyqHoBAAhCQhBRXb0tkRqdaCO08gSMA1DDiCZBjCrHTUWA1JOwbfbSvElWDynAGsZAZC9Y2HZBKznEMzDeDQ0ZAuLYNe3lapvcD4mfTixBDcKM2HRNioLZA40bXaU9ZA6SYoZBVPrDNKnvN03RcLIVYZBkxxTitNTZCOQuSl4YGZB5Q0QEJDI88wToOPs6WcxEWd7VN35HgZDZD';

FB.setAccessToken(tokenPage);


function publicarM(mensaje){
FB.api('/me/feed','post', { message: mensaje }).then(function (res) {
    
if(!res ||res.error){
console.res(!res ? 'Ocurrio un error' : res.error);
return;
} console.log('Post info :'+res.id);

});
}//Publicar un mensaje

function publicarP(pathFoto){


}//publicar una foto

//publicarM("Hola actualmente me estoy configurando, esto es una prueba... Saludenme ;)!!!");