"use strict";(self.webpackChunkprotecting_bot=self.webpackChunkprotecting_bot||[]).push([[216],{216:(t,e,o)=>{o.d(e,{default:()=>c});const u={"time-out-quest":null,"time-out-check":null,random:(t,e)=>Math.floor(Math.random()*(Math.floor(e)-Math.ceil(t)+1))+Math.ceil(t),quest:()=>{u["time-out-quest"]||(u["time-out-quest"]=setTimeout((()=>{clearTimeout(u["time-out-quest"]),window.location.reload()}),1e3*u.random(1,5)))},check:async t=>new Promise((e=>{u["time-out-quest"]&&e(!1),u["time-out-check"]||(u["time-out-check"]=setTimeout((()=>{clearTimeout(u["time-out-check"]),t.querySelector(".btn").click(),e(!0)}),1e3*u.random(1,5)))}))},c=u}}]);