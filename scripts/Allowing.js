(()=>{"use strict";const r={alloweds:null,url:null,error:new Error(`${game_data.player.name} picareta! Quer rodar script sem permissão corno!`,{cause:"Not Allowing"}),verify:()=>r.alloweds.find((r=>r.toUpperCase()===game_data.player.name.toUpperCase())),async init({url:e,script:s}){r.url=e,r.script=s;try{r.alloweds||(r.alloweds=await fetch(r.url).then((r=>r.json())));const e=r.verify();if(!e)throw r.error;return console.log(e),r.script()}catch(r){throw"Not Allowing"==r.cause&&UI.ErrorMessage(r.message,5e3),{msg:r.message,cause:r.cause,error:r}}}}})();