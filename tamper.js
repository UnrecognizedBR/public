// ==UserScript==
// @name         ##########TwProjectBot##############
// @version      1.0.5
// @description  Troca de aldeia e navega entre as páginas farm, scavenge, main(principal) e chegando.
// @author       Clezio Marcos
// @match        https://**.tribalwars.com.br/game.php*
// @match        https://www.tribalwars.com.br/
// @exclude      https://brs1.tribalwars.com.br/game.php*
// @icon         https://www.vemtranquilo.host/VT/ÍCONES-GIFS/VEM TRANQUILO.jpg
// @grant        none
// ==/UserScript==

(async function() {
    'use strict'
    const url = [
        'https://raw.githubusercontent.com/UnrecognizedBR/public/master/letsGO.js',
        'https://raw.githubusercontent.com/UnrecognizedBR/public/master/reconnect.js'
    ]
    for (const key in url) {
        if ( ( location.host == 'www.tribalwars.com.br' && key == 1 ) 
          || ( location.host != 'www.tribalwars.com.br' && key == 0 ) ) {
            const data = await fetch( url[ key ] ).then( resp => resp.blob() )
            // .then( resp => resp.text() )
            // .then( text => console.log(text) )
            
            const urlBlob = URL.createObjectURL(data)
            let elem = document.createElement('script')
            document.querySelector("body").append(elem)
            elem.src = urlBlob
        }
    }
})();
