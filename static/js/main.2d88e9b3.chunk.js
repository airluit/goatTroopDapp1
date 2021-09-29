(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{225:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},258:function(e,t){},267:function(e,t){},285:function(e,t){},287:function(e,t){},306:function(e,t){},307:function(e,t){},375:function(e,t){},377:function(e,t){},387:function(e,t){},389:function(e,t){},414:function(e,t){},416:function(e,t){},417:function(e,t){},422:function(e,t){},424:function(e,t){},437:function(e,t){},449:function(e,t){},452:function(e,t){},457:function(e,t){},465:function(e,t){},539:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){},545:function(e,t,n){},546:function(e,t,n){},547:function(e,t,n){},548:function(e,t,n){},549:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(86),s=n.n(i),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,553)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))},o=n(72),c=n(218),l=n(20),p={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(l.a)(Object(l.a)({},p),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(l.a)(Object(l.a)({},p),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(l.a)(Object(l.a)({},e),{},{account:t.payload.account});default:return e}},d={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(l.a)(Object(l.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(l.a)(Object(l.a)({},d),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},y=Object(o.b)({blockchain:u,data:h}),b=[c.a],m=Object(o.c)(o.a.apply(void 0,b)),j=Object(o.d)(y,m),f=n(63),x=n(25),g=n(14),w=(n(240),n(241),n(242),n.p,n.p+"static/media/troopIfantryGray.7c090ef6.jpeg"),O=n(0);var v,T,k,C,N,M,A,S,I,_,E,F,D,H,U=function(){return Object(O.jsxs)("div",{className:"header-wrapper",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("img",{src:w})}),Object(O.jsxs)("nav",{className:"nav-container",children:[Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1",children:"Home"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=buy",children:"Buy a Goat"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=map",children:"Roadmap"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=team",children:"Team"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=phase2",children:"Story"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=gallery",children:"Gallery"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=terms",children:"Terms & Conditions"}),Object(O.jsx)(x.b,{className:"menu-option",to:"/goatTroopDapp1?page=donations",children:"Donations"}),Object(O.jsx)("div",{className:"social-icons",children:"social icons"})]})]})},B=n(125),W=n(18),R=n(21),z=n.n(R),L=n(71),G=n(70),P=n.n(G),q=n(224),K=n.n(q),J=n(225),Q=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},Y=function(e){return function(){var e=Object(L.a)(z.a.mark((function e(t){var n,a,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,j.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,j.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,j.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(Q("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},V=function(e){return{type:"CONNECTION_FAILED",payload:e}},X=function(e){return function(){var t=Object(L.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(Y());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=n(19),$=Z.a.div(v||(v=Object(W.a)(["\n  background-color: var(--white);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=Z.a.div(T||(T=Object(W.a)(["\n  height: 8px;\n  width: 8px;\n"]))),te=Z.a.div(k||(k=Object(W.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ne=Z.a.div(C||(C=Object(W.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ae=Z.a.div(N||(N=Object(W.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ie=Z.a.div(M||(M=Object(W.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),se=Z.a.p(A||(A=Object(W.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),re=(Z.a.p(S||(S=Object(W.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),Z.a.p(I||(I=Object(W.a)(["\n  color: var(--light-grey);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),oe=(Z.a.div(_||(_=Object(W.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p,n.p+"static/media/goatTeaser.ed6cfc95.png"),ce=(n(539),Z.a.img(E||(E=Object(W.a)(["\n  width: 80%;\n"]))),Z.a.button(F||(F=Object(W.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);\n  }\n"])))),le=Z.a.div(D||(D=Object(W.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),pe=Z.a.img(H||(H=Object(W.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var ue=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.blockchain})),n=Object(f.c)((function(e){return e.data})),i=Object(a.useState)("What Personality will your Goat have?"),s=Object(B.a)(i,2),r=s[0],o=s[1],c=Object(a.useState)(!1),l=Object(B.a)(c,2),p=l[0],u=l[1],d=function(){""!==t.account&&null!==t.smartContract&&e(Y(t.account))};return Object(a.useEffect)((function(){d()}),[t.account]),Object(O.jsx)($,{style:{backgroundColor:"#313639"},children:Object(O.jsxs)(ie,{flex:1,ai:"center",children:[Object(O.jsx)("div",{className:"header-text",children:"Welcome to Goat Troops\u2026"}),Object(O.jsx)(ne,{}),Object(O.jsx)(pe,{alt:"example",src:oe}),Object(O.jsx)(ie,{jc:"center",ai:"center",children:Object(O.jsx)(se,{style:{textAlign:"center",fontSize:28,fontWeight:"bold",margin:40}})}),Object(O.jsxs)(le,{flex:1,style:{padding:12},children:[Object(O.jsxs)(ie,{flex:1,jc:"center",ai:"center",children:[Object(O.jsx)(pe,{alt:"example",src:oe}),Object(O.jsx)(ne,{}),Object(O.jsxs)(se,{style:{textAlign:"center",fontSize:26,fontWeight:"bold"},children:[n.totalSupply,"/10000"]})]}),Object(O.jsx)(ne,{}),Object(O.jsx)(ie,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#313639",padding:12},children:1e4==Number(n.totalSupply)?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(se,{style:{textAlign:"center"},children:"The sale has ended."}),Object(O.jsx)(te,{}),Object(O.jsxs)(re,{style:{textAlign:"center"},children:["You can still buy and trade TBC NFTs on"," ",Object(O.jsx)("a",{target:"",href:"https://testnets.opensea.io/collection/trooptest",children:"Opensea.io"})]})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(se,{style:{textAlign:"center"}}),Object(O.jsx)(ee,{}),Object(O.jsx)(se,{style:{textAlign:"center"},children:"1 Troop NFT costs .06 ETH"}),Object(O.jsx)(ee,{}),Object(O.jsx)(re,{style:{textAlign:"center"},children:"-excluding gas fee-"}),Object(O.jsx)(ae,{}),Object(O.jsx)(te,{}),Object(O.jsx)(re,{style:{textAlign:"center"},children:r}),Object(O.jsx)(ne,{}),""===t.account||null===t.smartContract?Object(O.jsxs)(ie,{ai:"center",jc:"center",children:[Object(O.jsx)(re,{style:{textAlign:"center"}}),Object(O.jsx)(te,{}),Object(O.jsx)(ce,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(L.a)(z.a.mark((function e(t){var n,a,i,s,r,o;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),n=window,a=n.ethereum,i=a&&a.isMetaMask,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!i){e.next=23;break}return P.a.setProvider(a),s=new K.a(a),e.prev=8,e.next=11,a.request({method:"eth_requestAccounts"});case 11:return r=e.sent,e.next=14,a.request({method:"net_version"});case 14:4==e.sent?(o=new P.a(J,"0xf32a6e88ef1c6604898d9782562d93e65113e8a2"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:o,web3:s}}),a.on("accountsChanged",(function(e){t(X(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(V("Change network to Ethereum")),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t(V("Something went wrong"));case 21:e.next=24;break;case 23:t(V("Install Metamask"));case 24:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}()),d()},children:"CONNECT WALLET"}),""!==t.errorMsg?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(te,{}),Object(O.jsx)(re,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(O.jsx)(ie,{ai:"center",jc:"center",fd:"row",children:Object(O.jsx)(ce,{disabled:p?1:0,onClick:function(n){var a;n.preventDefault(),(a=1)<=0||(o("Preparing your Troop NFT for deployment..."),u(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:"285000",to:"0xf32a6e88ef1c6604898d9782562d93e65113e8a2",from:t.account,value:t.web3.utils.toWei((.02*a).toString(),"ether")}).once("error",(function(e){console.log(e),o("It seems the transaction was cancelled."),u(!1)})).then((function(n){o("Woohoo! You just helped 13 families! Visit Opensea.io to view your randomly generated NFT!"),u(!1),e(Y(t.account))}))),d()},children:p?"Busy...":"Buy 1 NFT"})})]})})]}),Object(O.jsx)(te,{}),Object(O.jsxs)(ie,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(O.jsx)(re,{style:{textAlign:"center",fontSize:18},children:"Thank you! You are helping support the troops."}),Object(O.jsx)(te,{}),Object(O.jsxs)(re,{style:{textAlign:"center",fontSize:14},children:["Troop Rewarded to help the fallen soldiers #TroopNFT ",Object(O.jsx)("p",{}),"*.*.*Launching_Soon*.*.*"]})]})]})})};n(540);var de=function(){return Object(O.jsxs)("div",{className:"about-page",children:["about",Object(O.jsx)("p",{children:"this is a paragraph"})]})};n(541);var he=function(){return Object(O.jsx)("div",{className:"roadmap-page",children:Object(O.jsx)("div",{className:"header-text",children:"Road Map"})})};n(542);var ye=function(){return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("div",{className:"header-text",children:"Team"}),Object(O.jsxs)("div",{class:"gallery",children:[Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:oe})}),Object(O.jsxs)("div",{class:"desc",children:[Object(O.jsx)("h1",{children:"Vinny Gorgeous"}),Object(O.jsxs)("p",{children:["Born in the Cleveland Mafia,",Object(O.jsx)("br",{}),"a retired snitch who is unable to keep a secret decided to join the military."]})]})]}),Object(O.jsxs)("div",{class:"gallery",children:[Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:oe})}),Object(O.jsxs)("div",{class:"desc",children:[Object(O.jsx)("h1",{children:"AirLuit"}),Object(O.jsxs)("p",{children:["Busy piloting the Code Force high in the clouds,",Object(O.jsx)("br",{}),"spends his days getting into dog fights",Object(O.jsx)("br",{})]})]})]}),Object(O.jsxs)("div",{class:"gallery",children:[Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:oe})}),Object(O.jsxs)("div",{class:"michelobsBox",children:[Object(O.jsx)("h1",{children:"Michelob Ultras"}),Object(O.jsxs)("p",{children:["Previously an AA member,",Object(O.jsx)("br",{}),"joined the military",Object(O.jsx)("br",{}),"for a more tight knit group."]})]})]}),Object(O.jsxs)("div",{class:"gallery",children:[Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:oe})}),Object(O.jsxs)("div",{class:"bulgingBox",children:[Object(O.jsx)("h1",{children:"Bulging Idiot"}),Object(O.jsxs)("p",{children:["First in command in the Department of Art,",Object(O.jsx)("br",{}),"showing no mercy towards sleep."]})]})]}),Object(O.jsxs)("div",{class:"gallery",children:[Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:oe})}),Object(O.jsxs)("div",{class:"desc",children:[Object(O.jsx)("h1",{children:"NFTjoe"}),Object(O.jsxs)("p",{children:["Joined the military because",Object(O.jsx)("br",{}),"he heard there was free pizza."]}),Object(O.jsx)("p",{})]})]})]})},be=n.p+"static/media/MintHere.60793082.png";n(543);var me=function(){return Object(O.jsxs)("div",{className:"buy-page",children:[Object(O.jsx)("div",{className:"header-text",children:"Buy a Goat"}),Object(O.jsx)("p",{children:"When going through our mint proces, people will connect to their own MetaMask wallet then will click a button that says \u201cMint Here.\u201d After doing so, they will then choose how many they want to mint at a time. After each of the 13,000 (12,870 actually, giveaway 130) images get minted, we would like to have some sort of a tracker to let people know how many are left. For example, when project \u2018Based Fish Mafia\u2019 did their mint, they stated how many were left as people were buying them."}),Object(O.jsx)("img",{src:be})]})};n(544);var je=function(){return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("div",{className:"header-text",children:"An Old War Story"}),Object(O.jsxs)("div",{className:"storyTime",children:[Object(O.jsx)("p",{children:"General Harold Ransom looked over the new recruits with a mixture of disappointment and excitement. The recruits were raw, disorderly, and undeveloped. Some looked scared, others cocky. All had potential though but General Ransom did not take the responsibility of sending them to battle lightly."}),Object(O.jsx)("p",{children:"The goal wasn\u2019t to make them killing machines, yet, that would come later in battle. The goal was to make them a team. The key wasn\u2019t to beat them into following orders but rather to give them a common goal. For years Ransom had been doing this with new recruits. He was losing the energy to continue the good fight. It was becoming time to pass the baton to a new generation, ones that would carry the same spirit forward."}),Object(O.jsx)("p",{children:"Harold in his old age has seen it all over his career. He wasn\u2019t perfect but there had been a few mistakes. He had addressed each and every mistake and been taking care of loose ends so he would be able to retire with a clear conscience. There were two things left on that list that would have to wait until after he spoke to the new recruits: oversee the destruction of the toxic waste warehouse (which none knew about) and do an accounting of the armory to ensure no weapons were missing."}),Object(O.jsx)("p",{children:"The drill sergeants were finishing up their introductions, hammering the troops like steel to remove all imperfections so they were ready for the battles to come. They had been screaming at the troops for hours to stand up straight, show respect; instilling the principles of discipline, teamwork, and spirit. The troops were probably covered in a layer of spittle by now."}),Object(O.jsx)("p",{children:"It was time to build the recruits up. Harold walked down the aisle lined with the chairs recruits were sitting in, his knees aching with every step. His strength may not be what it used to be; his endurance and eyesight were waning, but the fiery passion inside could still inspire the young and impressionable. They may not respect him yet but that would change soon. The words weren\u2019t planned but they would come to him. This would be his last speech before calling it quits."}),Object(O.jsx)("p",{children:'\u201cWelcome Goat Troops Infantry. I know some of you may not be sure why you are here. Some of you may have accidentally stumbled into this group thinking it sounded interesting. Others of you may have been waiting for this opportunity your whole lives. No matter the reasoning, you are here, and now you\u2019re a family."'}),Object(O.jsx)("p",{children:"\u201cSet aside who you were before. You\u2019re a part of something bigger now. I\u2019ve given my life to this organization but my time is ending.\u201d"}),Object(O.jsxs)("p",{children:["\u201cI am one person. Alone I am nothing. Together we can shift the direction of a generation.\u201d",Object(O.jsx)("br",{})]}),Object(O.jsxs)("p",{children:["The troops were still. They waited for more. He had the recruit's full attention.",Object(O.jsx)("br",{}),"\u201cWe will get through this together. We will make a difference. The world will feel our impact. We will leave it better than we found it and we will inspire others to do the same.\u201d"]}),Object(O.jsx)("p",{children:'"We have lost others in the past. We carry their dreams, their ambitions, their spirit with us in everything we do. If one of you is lost, we will do the same. To lose one of us is to lose a piece of yourself."'}),Object(O.jsx)("p",{children:'"Our responsibility is to each other."'}),Object(O.jsx)("p",{children:'"Now we are family. Outside of this space, you may have friends, family, and loved ones. They too belong to our family. A family takes care of each other. When one feels pain or loss, we all grieve together."'}),Object(O.jsx)("p",{children:'"We will train you to do well. It will be up to you to do good."'}),Object(O.jsx)("p",{children:'"ATTENTION!"'})]})]})};n(545);var fe=function(){return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("div",{className:"header-text",children:"Terms & Conditions"}),"Hyperlink them in the bottom corner (Like the image below) Have socials linked to bottom Have logo redirect you to top of page if the user clicks on it"]})};n(546);var xe=function(){return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("div",{className:"header-text",children:"Gallery"}),"Could we link all of our artwork to the website after the mint? Something like this https://boredapeyachtclub.com/#/gallery"]})};n(547);var ge=function(){return Object(O.jsx)("div",{className:"buy-page",children:Object(O.jsx)("div",{className:"header-text",children:"Dontations"})})};n(548);var we=function(){var e=new URLSearchParams(Object(g.f)().search),t=e?e.get("page"):null,n=ue;switch(t){case"about":n=de;break;case"map":n=he;break;case"buy":n=me;break;case"team":n=ye;break;case"phase2":n=je;break;case"terms":n=fe;break;case"gallery":n=xe;break;case"donations":n=ge}return Object(O.jsx)("div",{className:"home-page",children:Object(O.jsx)(n,{})})};s.a.render(Object(O.jsx)(f.a,{store:j,children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(g.c,{children:Object(O.jsx)(g.a,{exact:!0,path:"/goatTroopDapp1/",component:we})})]})}),document.getElementById("root")),r()}},[[549,1,2]]]);
//# sourceMappingURL=main.2d88e9b3.chunk.js.map