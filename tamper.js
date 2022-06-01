// ==UserScript==
// @name         ##########TwProjectBot##############
// @description  Troca de aldeia e navega entre as páginas farm, scavenge, main(principal) e chegando.
// @author       Clezio Marcos
// @match        https://*.tribalwars.com.br/game.php*
// @include      https://tribalwars.com.br/*
// @exclude      https://brs1.tribalwars.com.br/game.php*
// @icon         https://www.vemtranquilo.host/VT/ÍCONES-GIFS/VEM TRANQUILO.jpg
// @grant        none
// ==/UserScript==

(async function() {
    'use strict'
    const url = [
        'https://raw.githubusercontent.com/UnrecognizedBR/Test-Vscode/master/public/letsGO.js',
    ]
    for (const key in url) {
        const data = await fetch( url[ key ] ).then(function(data) {
            return data.blob()
        })
        const urlBlob = URL.createObjectURL(data)
        let elem = document.createElement('script')
        document.querySelector("body").append(elem)
        elem.src = urlBlob
    }
})();