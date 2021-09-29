(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{225:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},258:function(e,t){},267:function(e,t){},285:function(e,t){},287:function(e,t){},306:function(e,t){},307:function(e,t){},375:function(e,t){},377:function(e,t){},387:function(e,t){},389:function(e,t){},414:function(e,t){},416:function(e,t){},417:function(e,t){},422:function(e,t){},424:function(e,t){},437:function(e,t){},449:function(e,t){},452:function(e,t){},457:function(e,t){},465:function(e,t){},539:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){},545:function(e,t,n){},546:function(e,t,n){},547:function(e,t,n){},548:function(e,t,n){},549:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(86),s=n.n(i),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,553)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))},o=n(72),c=n(218),p=n(20),l={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(p.a)(Object(p.a)({},l),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(p.a)(Object(p.a)({},l),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(p.a)(Object(p.a)({},e),{},{account:t.payload.account});default:return e}},d={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(p.a)(Object(p.a)({},d),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},b=Object(o.b)({blockchain:u,data:y}),m=[c.a],h=Object(o.c)(o.a.apply(void 0,m)),j=Object(o.d)(b,h),x=n(63),f=n(25),g=n(14),O=(n(240),n(241),n(242),n.p+"static/media/troopsIfantry.af9b6de7.png"),v=n(0);var w,T,k,C,M,N,A,_,S,E,I,F,D,U,B=function(){return Object(v.jsxs)("div",{className:"header-wrapper",children:[Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("img",{src:O})}),Object(v.jsxs)("nav",{className:"nav-container",children:[Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1",children:"Home"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=buy",children:"Buy a Goat"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=map",children:"Roadmap"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=team",children:"Team"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=phase2",children:"Phase II"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=gallery",children:"Gallery"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=terms",children:"Terms & Conditions"}),Object(v.jsx)(f.b,{className:"menu-option",to:"/goatTroopDapp1?page=donations",children:"Donations"}),Object(v.jsx)("div",{className:"social-icons",children:"social icons"})]})]})},H=n(125),L=n(18),R=n(21),P=n.n(R),z=n(71),W=n(70),G=n.n(W),K=n(224),q=n.n(K),Q=n(225),J=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},Y=function(e){return function(){var e=Object(z.a)(P.a.mark((function e(t){var n,a,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,j.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,j.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,j.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(J("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},V=function(e){return{type:"CONNECTION_FAILED",payload:e}},X=function(e){return function(){var t=Object(z.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(Y());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=n(19),$=Z.a.div(w||(w=Object(L.a)(["\n  background-color: var(--white);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=Z.a.div(T||(T=Object(L.a)(["\n  height: 8px;\n  width: 8px;\n"]))),te=Z.a.div(k||(k=Object(L.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ne=Z.a.div(C||(C=Object(L.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ae=Z.a.div(M||(M=Object(L.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ie=Z.a.div(N||(N=Object(L.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),se=Z.a.p(A||(A=Object(L.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),re=(Z.a.p(_||(_=Object(L.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),Z.a.p(S||(S=Object(L.a)(["\n  color: var(--light-grey);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),oe=(Z.a.div(E||(E=Object(L.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p,n.p+"static/media/goatTeaser.ed6cfc95.png"),ce=(n(539),Z.a.img(I||(I=Object(L.a)(["\n  width: 80%;\n"]))),Z.a.button(F||(F=Object(L.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);\n  }\n"])))),pe=Z.a.div(D||(D=Object(L.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),le=Z.a.img(U||(U=Object(L.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var ue=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.blockchain})),n=Object(x.c)((function(e){return e.data})),i=Object(a.useState)("What Personality will your Goat have?"),s=Object(H.a)(i,2),r=s[0],o=s[1],c=Object(a.useState)(!1),p=Object(H.a)(c,2),l=p[0],u=p[1],d=function(){""!==t.account&&null!==t.smartContract&&e(Y(t.account))};return Object(a.useEffect)((function(){d()}),[t.account]),Object(v.jsx)($,{style:{backgroundColor:"black"},children:Object(v.jsxs)(ie,{flex:1,ai:"center",children:[Object(v.jsx)("div",{className:"header-text",children:"Welcome to Goat Troops\u2026"}),Object(v.jsx)(ne,{}),Object(v.jsx)(le,{alt:"example",src:oe}),Object(v.jsx)(ie,{jc:"center",ai:"center",children:Object(v.jsx)(se,{style:{textAlign:"center",fontSize:28,fontWeight:"bold",margin:40}})}),Object(v.jsxs)(pe,{flex:1,style:{padding:12},children:[Object(v.jsxs)(ie,{flex:1,jc:"center",ai:"center",children:[Object(v.jsx)(le,{alt:"example",src:oe}),Object(v.jsx)(ne,{}),Object(v.jsxs)(se,{style:{textAlign:"center",fontSize:26,fontWeight:"bold"},children:[n.totalSupply,"/10000"]})]}),Object(v.jsx)(ne,{}),Object(v.jsx)(ie,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#000000",padding:12},children:1e4==Number(n.totalSupply)?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(se,{style:{textAlign:"center"},children:"The sale has ended."}),Object(v.jsx)(te,{}),Object(v.jsxs)(re,{style:{textAlign:"center"},children:["You can still buy and trade TBC NFTs on"," ",Object(v.jsx)("a",{target:"",href:"https://testnets.opensea.io/collection/trooptest",children:"Opensea.io"})]})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(se,{style:{textAlign:"center"}}),Object(v.jsx)(ee,{}),Object(v.jsx)(se,{style:{textAlign:"center"},children:"1 Troop NFT costs .06 ETH"}),Object(v.jsx)(ee,{}),Object(v.jsx)(re,{style:{textAlign:"center"},children:"-excluding gas fee-"}),Object(v.jsx)(ae,{}),Object(v.jsx)(te,{}),Object(v.jsx)(re,{style:{textAlign:"center"},children:r}),Object(v.jsx)(ne,{}),""===t.account||null===t.smartContract?Object(v.jsxs)(ie,{ai:"center",jc:"center",children:[Object(v.jsx)(re,{style:{textAlign:"center"}}),Object(v.jsx)(te,{}),Object(v.jsx)(ce,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(z.a)(P.a.mark((function e(t){var n,a,i,s,r,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),n=window,a=n.ethereum,i=a&&a.isMetaMask,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!i){e.next=23;break}return G.a.setProvider(a),s=new q.a(a),e.prev=8,e.next=11,a.request({method:"eth_requestAccounts"});case 11:return r=e.sent,e.next=14,a.request({method:"net_version"});case 14:4==e.sent?(o=new G.a(Q,"0xf32a6e88ef1c6604898d9782562d93e65113e8a2"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:o,web3:s}}),a.on("accountsChanged",(function(e){t(X(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(V("Change network to Ethereum")),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t(V("Something went wrong"));case 21:e.next=24;break;case 23:t(V("Install Metamask"));case 24:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}()),d()},children:"CONNECT WALLET"}),""!==t.errorMsg?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(te,{}),Object(v.jsx)(re,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(v.jsx)(ie,{ai:"center",jc:"center",fd:"row",children:Object(v.jsx)(ce,{disabled:l?1:0,onClick:function(n){var a;n.preventDefault(),(a=1)<=0||(o("Preparing your Troop NFT for deployment..."),u(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:"285000",to:"0xf32a6e88ef1c6604898d9782562d93e65113e8a2",from:t.account,value:t.web3.utils.toWei((.02*a).toString(),"ether")}).once("error",(function(e){console.log(e),o("It seems the transaction was cancelled."),u(!1)})).then((function(n){o("Woohoo! You just helped 13 families! Visit Opensea.io to view your randomly generated NFT!"),u(!1),e(Y(t.account))}))),d()},children:l?"Busy...":"Buy 1 NFT"})})]})})]}),Object(v.jsx)(te,{}),Object(v.jsxs)(ie,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(v.jsx)(re,{style:{textAlign:"center",fontSize:18},children:"Thank you! You are helping support the troops."}),Object(v.jsx)(te,{}),Object(v.jsxs)(re,{style:{textAlign:"center",fontSize:14},children:["Troop Rewarded to help the fallen soldiers #TroopNFT ",Object(v.jsx)("p",{}),"*.*.*Launching_Soon*.*.*"]})]})]})})};n(540);var de=function(){return Object(v.jsxs)("div",{className:"about-page",children:["about",Object(v.jsx)("p",{children:"this is a paragraph"})]})};n(541);var ye=function(){return Object(v.jsx)("div",{className:"roadmap-page",children:Object(v.jsx)("div",{className:"header-text",children:"Road Map"})})};n(542);var be=function(){return Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"header-text",children:"Team"}),Object(v.jsxs)("div",{class:"gallery",children:[Object(v.jsx)("a",{children:Object(v.jsx)("img",{src:oe})}),Object(v.jsxs)("div",{class:"desc",children:[Object(v.jsx)("h1",{children:"Vinny Gorgeous"}),Object(v.jsx)("p",{children:"Born in the Cleveland Mafia. A retired snitch. Unable to keep a secret ."})]})]}),Object(v.jsxs)("div",{class:"gallery",children:[Object(v.jsx)("a",{children:Object(v.jsx)("img",{src:oe})}),Object(v.jsxs)("div",{class:"desc",children:[Object(v.jsx)("h1",{children:"AirLuit"}),Object(v.jsx)("p",{children:"Piloting the Coding Force, Air Luit is often flying high in the clouds. His days are spent in dog fights leading his troops through the skies with brilliant success."})]})]}),Object(v.jsxs)("div",{class:"gallery",children:[Object(v.jsx)("a",{children:Object(v.jsx)("img",{src:oe})}),Object(v.jsxs)("div",{class:"desc",children:[Object(v.jsx)("h1",{children:"Michelob Ultras"}),Object(v.jsx)("p",{children:"Previously an AA member, joined the military for a more tight knit group."})]})]}),Object(v.jsxs)("div",{class:"gallery",children:[Object(v.jsx)("a",{children:Object(v.jsx)("img",{src:oe})}),Object(v.jsxs)("div",{class:"desc",children:[Object(v.jsx)("h1",{children:"Bulging Idiot"}),Object(v.jsxs)("p",{children:["First in command of the art department,",Object(v.jsx)("br",{}),"General Bulging Idiot shows no mercy towards sleep "]})]})]})]})},me=n.p+"static/media/MintHere.60793082.png";n(543);var he=function(){return Object(v.jsxs)("div",{className:"buy-page",children:[Object(v.jsx)("div",{className:"header-text",children:"Buy a Goat"}),Object(v.jsx)("p",{children:"When going through our mint proces, people will connect to their own MetaMask wallet then will click a button that says \u201cMint Here.\u201d After doing so, they will then choose how many they want to mint at a time. After each of the 13,000 (12,870 actually, giveaway 130) images get minted, we would like to have some sort of a tracker to let people know how many are left. For example, when project \u2018Based Fish Mafia\u2019 did their mint, they stated how many were left as people were buying them."}),Object(v.jsx)("img",{src:me})]})};n(544);var je=function(){return Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"header-text",children:"Phase II"}),Object(v.jsx)("div",{children:"coming soon..."})]})};n(545);var xe=function(){return Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"header-text",children:"Terms & Conditions"}),"Hyperlink them in the bottom corner (Like the image below) Have socials linked to bottom Have logo redirect you to top of page if the user clicks on it"]})};n(546);var fe=function(){return Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"header-text",children:"Gallery"}),"Could we link all of our artwork to the website after the mint? Something like this https://boredapeyachtclub.com/#/gallery"]})};n(547);var ge=function(){return Object(v.jsx)("div",{className:"buy-page",children:Object(v.jsx)("div",{className:"header-text",children:"Dontations"})})};n(548);var Oe=function(){var e=new URLSearchParams(Object(g.f)().search),t=e?e.get("page"):null,n=ue;switch(t){case"about":n=de;break;case"map":n=ye;break;case"buy":n=he;break;case"team":n=be;break;case"phase2":n=je;break;case"terms":n=xe;break;case"gallery":n=fe;break;case"donations":n=ge}return Object(v.jsx)("div",{className:"home-page",children:Object(v.jsx)(n,{})})};s.a.render(Object(v.jsx)(x.a,{store:j,children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(B,{}),Object(v.jsx)(g.c,{children:Object(v.jsx)(g.a,{exact:!0,path:"/goatTroopDapp1/",component:Oe})})]})}),document.getElementById("root")),r()}},[[549,1,2]]]);
//# sourceMappingURL=main.980c560d.chunk.js.map