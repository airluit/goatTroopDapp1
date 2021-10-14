(this.webpackJsonpgoatTroopDapp1=this.webpackJsonpgoatTroopDapp1||[]).push([[0],{284:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},305:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},325:function(e,t){},334:function(e,t){},352:function(e,t){},354:function(e,t){},373:function(e,t){},374:function(e,t){},442:function(e,t){},444:function(e,t){},454:function(e,t){},456:function(e,t){},481:function(e,t){},483:function(e,t){},484:function(e,t){},489:function(e,t){},491:function(e,t){},504:function(e,t){},516:function(e,t){},519:function(e,t){},524:function(e,t){},532:function(e,t){},606:function(e,t,n){},607:function(e,t,n){},608:function(e,t,n){},609:function(e,t,n){},610:function(e,t,n){},611:function(e,t,n){},612:function(e,t,n){},613:function(e,t,n){},614:function(e,t,n){},615:function(e,t,n){},616:function(e,t,n){},617:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(56),r=n.n(s),c=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,674)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))},o=n(112),l=n(276),d=n(35),u={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(d.a)(Object(d.a)({},u),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(d.a)(Object(d.a)({},u),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(d.a)(Object(d.a)({},e),{},{account:t.payload.account});default:return e}},h={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(d.a)(Object(d.a)({},h),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},b=Object(o.b)({blockchain:p,data:j}),m=[l.a],y=Object(o.c)(o.a.apply(void 0,m)),x=Object(o.d)(b,y),O=n(100),f=n(61),g=n(26),v=(n(305),n(306),n(20)),w=(n(307),n(670)),T=n(669),N=n.p+"static/media/discord.f668bebe.jpg",k=n.p+"static/media/twitterIcon.94db4a07.png",C=(n.p,n.p+"static/media/troopIfantryGray.7c090ef6.jpeg"),A=n(279),M=n.n(A),I=n(0),S=[{link:"",text:"Buy a Goat"},{link:"?page=map",text:"Road Map"},{link:"?page=marching",text:" Marching Orders "},{link:"?page=team",text:"Team"},{link:"?page=story",text:"Story"},{link:"?page=traits",text:"Traits"},{link:"?page=donations",text:"Donations"}],E=[{link:"https://discord.gg/RXVF6gW8",icon:N},{link:"https://twitter.com/GoattroopsNFT?s=20",icon:k}];var F,_,D,U,G,H,R,B,W,z,L,P,K,q,J=function(){var e=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(v.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=i.a.useState(!1),n=Object(v.a)(t,2),s=n[0],r=n[1];return Object(I.jsxs)("div",{className:"header-wrapper",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsx)(f.b,{className:"logo",to:"/",children:Object(I.jsx)("img",{src:C})})}),e.width>1e3?Object(I.jsxs)("nav",{className:"nav-container",children:[S.map((function(e){return Object(I.jsx)(f.b,{className:"menu-option",to:e.link,children:e.text},e.text)})),Object(I.jsx)("div",{className:"social-icons",children:E.map((function(e,t){return Object(I.jsx)("img",{src:e.icon,className:"header-social-icon",onClick:function(){return window.location.href=e.link,null}},t)}))})]}):Object(I.jsxs)("div",{className:"icon-button-container ",children:[Object(I.jsx)(w.a,{className:"icon-button",edge:"start","aria-label":"menu",onClick:function(){return r(!0)},children:Object(I.jsx)(M.a,{})}),Object(I.jsx)(T.a,{anchor:"right",open:s,onClose:function(){return r(!1)},children:Object(I.jsxs)("div",{className:"drawer-mui",children:[S.map((function(e){return Object(I.jsx)("div",{className:"drawer-item",children:Object(I.jsx)(f.b,{className:"menu-option",to:e.link,children:e.text},e.text)})})),Object(I.jsx)("div",{className:"social-icons",children:E.map((function(e,t){return Object(I.jsx)("img",{src:e.icon,className:"header-social-icon",onClick:function(){return window.location.href=e.link,null}},t+"s")}))})]})})]})]})},V=n(27),Q=n(38),Y=n.n(Q),X=n(110),Z=n(108),$=n.n(Z),ee=n(283),te=n.n(ee),ne=n(284),ae=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},ie=function(e){return function(){var e=Object(X.a)(Y.a.mark((function e(t){var n,a,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,x.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,x.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,x.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(ae("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},se=function(e){return{type:"CONNECTION_FAILED",payload:e}},re=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(ie());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ce=n(36),oe=ce.a.div(F||(F=Object(V.a)(["\n  background-color: var(--white);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),le=ce.a.div(_||(_=Object(V.a)(["\n  height: 8px;\n  width: 8px;\n"]))),de=ce.a.div(D||(D=Object(V.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ue=ce.a.div(U||(U=Object(V.a)(["\n  height: 24px;\n  width: 24px;\n"]))),pe=ce.a.div(G||(G=Object(V.a)(["\n  height: 32px;\n  width: 32px;\n"]))),he=ce.a.div(H||(H=Object(V.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),je=ce.a.p(R||(R=Object(V.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),be=(ce.a.p(B||(B=Object(V.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),ce.a.p(W||(W=Object(V.a)(["\n  color: var(--light-grey);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),me=(ce.a.div(z||(z=Object(V.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(667)),ye=n(666),xe=n(671),Oe=n(663),fe=(n.p,n.p+"static/media/troopBanner.9a1dccfd.png"),ge=n.p+"static/media/goatTeaser.ed6cfc95.png",ve=(n(606),ce.a.img(L||(L=Object(V.a)(["\n  width: 80%;\n"]))),ce.a.button(P||(P=Object(V.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);\n  }\n"])))),we=ce.a.div(K||(K=Object(V.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),Te=ce.a.img(q||(q=Object(V.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var Ne=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.blockchain})),n=i.a.useState(1),s=Object(v.a)(n,2),r=s[0],c=s[1],o=Object(O.c)((function(e){return e.data})),l=Object(a.useState)("What Personality will your Goat have?"),d=Object(v.a)(l,2),u=d[0],p=d[1],h=Object(a.useState)(!1),j=Object(v.a)(h,2),b=j[0],m=j[1],y=function(){""!==t.account&&null!==t.smartContract&&e(ie(t.account))};return Object(a.useEffect)((function(){y()}),[t.account]),Object(I.jsx)(oe,{style:{backgroundColor:"#313639"},children:Object(I.jsxs)(he,{flex:1,ai:"center",children:[Object(I.jsx)("div",{className:"header-text",children:"Welcome to Goat Troops Infantry\u2026"}),Object(I.jsx)(ue,{}),Object(I.jsx)("img",{className:"banner-img",src:fe}),Object(I.jsx)(he,{jc:"center",ai:"center",children:Object(I.jsx)(je,{style:{textAlign:"center",fontSize:28,fontWeight:"bold",margin:40}})}),Object(I.jsxs)(we,{flex:1,style:{padding:12},children:[Object(I.jsxs)(he,{flex:1,jc:"center",ai:"center",children:[Object(I.jsx)(Te,{alt:"example",src:ge}),Object(I.jsx)(ue,{}),Object(I.jsxs)(je,{style:{textAlign:"center",fontSize:26,fontWeight:"bold"},children:[o.totalSupply,"/13000"]})]}),Object(I.jsx)(ue,{}),Object(I.jsx)(he,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#313639",padding:12},children:13e3==Number(o.totalSupply)?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(je,{style:{textAlign:"center"},children:"The sale has ended."}),Object(I.jsx)(de,{}),Object(I.jsxs)(be,{style:{textAlign:"center"},children:["You can still buy and trade Goat Troops NFTs on"," ",Object(I.jsx)("a",{target:"",href:"https://testnets.opensea.io/collection/trooptest",children:"Opensea.io"})]})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(je,{style:{textAlign:"center"},children:"Goat Troops Infantry is a collection of 13,000 Goats training for battle on the Ethereum blockchain. Donations will be made to the families affected by the terrorist attack during the evacuation in Afghanistan."}),Object(I.jsx)(le,{}),Object(I.jsx)(le,{}),Object(I.jsx)(le,{}),Object(I.jsx)(pe,{}),Object(I.jsx)(je,{style:{textAlign:"center"},children:"1 Troop NFT costs .06 ETH"}),Object(I.jsx)(le,{}),Object(I.jsx)(be,{style:{textAlign:"center"},children:"-excluding gas fee-"}),Object(I.jsx)(pe,{}),Object(I.jsx)(de,{}),Object(I.jsx)(be,{style:{textAlign:"center"},children:u}),Object(I.jsx)(ue,{}),""===t.account||null===t.smartContract?Object(I.jsxs)(he,{ai:"center",jc:"center",children:[Object(I.jsx)(be,{style:{textAlign:"center"}}),Object(I.jsx)(de,{}),Object(I.jsx)(ve,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(X.a)(Y.a.mark((function e(t){var n,a,i,s,r,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),n=window,a=n.ethereum,i=a&&a.isMetaMask,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!i){e.next=23;break}return $.a.setProvider(a),s=new te.a(a),e.prev=8,e.next=11,a.request({method:"eth_requestAccounts"});case 11:return r=e.sent,e.next=14,a.request({method:"net_version"});case 14:1==e.sent?(c=new $.a(ne,"0x3c1220Dc26f85F02D69A790AdE03E619F5C32582"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:c,web3:s}}),a.on("accountsChanged",(function(e){t(re(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(se("Change network to Ethereum")),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t(se("Something went wrong"));case 21:e.next=24;break;case 23:t(se("Install Metamask"));case 24:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}()),y()},children:"CONNECT WALLET"}),""!==t.errorMsg?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(de,{}),Object(I.jsx)(be,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"mui-select",children:Object(I.jsxs)(xe.a,{fullWidth:!0,children:[Object(I.jsx)(me.a,{id:"demo-simple-select-label",children:"Amount"}),Object(I.jsxs)(Oe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,label:"Amount",onChange:function(e){c(e.target.value)},children:[Object(I.jsx)(ye.a,{value:1,children:"1"}),Object(I.jsx)(ye.a,{value:2,children:"2"}),Object(I.jsx)(ye.a,{value:3,children:"3"}),Object(I.jsx)(ye.a,{value:4,children:"4"}),Object(I.jsx)(ye.a,{value:5,children:"5"}),Object(I.jsx)(ye.a,{value:6,children:"6"}),Object(I.jsx)(ye.a,{value:7,children:"7"}),Object(I.jsx)(ye.a,{value:8,children:"8"}),Object(I.jsx)(ye.a,{value:9,children:"9"}),Object(I.jsx)(ye.a,{value:10,children:"10"}),Object(I.jsx)(ye.a,{value:11,children:"11"}),Object(I.jsx)(ye.a,{value:12,children:"12"}),Object(I.jsx)(ye.a,{value:13,children:"13"})]})]})}),Object(I.jsx)(he,{ai:"center",jc:"center",fd:"row",children:Object(I.jsx)(ve,{disabled:b?1:0,onClick:function(n){var a;n.preventDefault(),(a=r)<=0||(p("Preparing your Troop NFT for deployment..."),m(!0),t.smartContract.methods.mint(a).send({to:"0x3c1220Dc26f85F02D69A790AdE03E619F5C32582",from:t.account,value:t.web3.utils.toWei((.06*a).toString(),"ether")}).once("error",(function(e){console.log(e),p("It seems the transaction was cancelled."),m(!1)})).then((function(n){p("Woohoo! You just helped 13 families! Visit Opensea.io to view your randomly generated NFT!"),m(!1),e(ie(t.account))}))),y()},children:b?"Busy...":"Buy ".concat(r," NFT")})})]})]})})]}),Object(I.jsx)(de,{}),Object(I.jsxs)(he,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(I.jsx)(be,{style:{textAlign:"center",fontSize:18},children:"Thank you! You are helping support the troops."}),Object(I.jsx)(de,{}),Object(I.jsxs)(be,{style:{textAlign:"center",fontSize:14},children:["Troop Rewarded to help the fallen soldiers #TroopNFT ",Object(I.jsx)("p",{}),"*.*.*Launching_Soon*.*.*"]})]})]})})};n(607);var ke=function(){return Object(I.jsxs)("div",{className:"about-page",children:["about",Object(I.jsx)("p",{children:"this is a paragraph"})]})};n(608);var Ce=function(){return Object(I.jsxs)("div",{className:"roadmap-page",children:[Object(I.jsx)("div",{className:"header-text",children:"Road Map"}),Object(I.jsxs)("div",{className:"roadMap",children:[Object(I.jsx)("h1",{children:"Stage 1"}),Object(I.jsx)("p",{children:"Donations will be made periodically throughout the minting process of the Goat Troops Infantry. Each milestone (25% minted) Goat Troops Infantry will donate directly to all families affected by the terrorist attack that killed 13 US troops at the Kabul Airport in August 2021."})]}),Object(I.jsx)("div",{className:"roadMap",children:Object(I.jsxs)("p",{children:[Object(I.jsx)("h1",{children:"Discord Invite War"}),"Invite Challenge: Top 13 people who invite the most people to our discord will be rewarded a Goat Troop."]})}),Object(I.jsx)("div",{className:"roadMap",children:Object(I.jsx)("p",{children:Object(I.jsx)("h1",{children:"25% First Donation Milestone"})})}),Object(I.jsx)("div",{className:"roadMap",children:Object(I.jsx)("p",{children:Object(I.jsx)("h1",{children:"50% Second Donation Milestone"})})}),Object(I.jsx)("div",{className:"roadMap",children:Object(I.jsx)("p",{children:Object(I.jsx)("h1",{children:"75% Third Donation Milestone"})})}),Object(I.jsx)("div",{className:"roadMap",children:Object(I.jsx)("p",{children:Object(I.jsx)("h1",{children:"100% Fourth Donation Milestone"})})})]})},Ae=n.p+"static/media/air.f60ca233.jpeg",Me=n.p+"static/media/vin.818ea072.jpeg",Ie=n.p+"static/media/bul.1a160292.jpg",Se=n.p+"static/media/mic.a101cf5d.jpg",Ee=n.p+"static/media/tin.c28cbdb5.jpg",Fe=n.p+"static/media/joe.1766ee63.jpg";n(609);var _e=function(){return Object(I.jsxs)("div",{className:"teampage",children:[Object(I.jsx)("div",{className:"header-text",children:"Team"}),Object(I.jsxs)("div",{className:"gallery",children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:Me,className:"goat-image"})}),Object(I.jsxs)("div",{className:"desc",children:[Object(I.jsx)("h1",{children:"Vinny Gorgeous"}),Object(I.jsxs)("p",{children:["Born in the Cleveland Mafia,",Object(I.jsx)("br",{}),"a retired snitch who is unable to keep a secret decided to join the military."]}),Object(I.jsx)("div",{className:"bottom-socials",children:Object(I.jsxs)("div",{className:"social-container",children:[Object(I.jsx)("img",{className:"discord-icon",src:N}),Object(I.jsx)("div",{className:"social-name",children:"VinnyGorgeous#2108"}),Object(I.jsx)("img",{className:"discord-icon",src:k}),Object(I.jsx)("div",{className:"social-name",children:Object(I.jsx)("a",{href:"https://twitter.com/GoattroopsNFT?s=20",children:"Twitter "})})]})})]})]}),Object(I.jsxs)("div",{className:"gallery",children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:Ae,className:"goat-image"})}),Object(I.jsxs)("div",{className:"desc",children:[Object(I.jsx)("h1",{children:"AirLuit"}),Object(I.jsxs)("p",{children:["Busy piloting the Code Force high in the clouds,",Object(I.jsx)("br",{}),"spends his days getting into dog fights",Object(I.jsx)("br",{})]}),Object(I.jsx)("div",{className:"bottom-socials",children:Object(I.jsxs)("div",{className:"social-container",children:[Object(I.jsx)("img",{className:"discord-icon",src:N}),Object(I.jsx)("div",{className:"social-name",children:"AirLuit#5452"}),Object(I.jsx)("img",{className:"discord-icon",src:k}),Object(I.jsx)("div",{className:"social-name",children:Object(I.jsx)("a",{href:"https://twitter.com/airluit",children:"@airluit "})})]})})]})]}),Object(I.jsxs)("div",{className:"gallery",children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:Se,className:"goat-image"})}),Object(I.jsxs)("div",{className:"michelobsBox desc",children:[Object(I.jsx)("h1",{children:"Michelob Ultras"}),Object(I.jsxs)("p",{children:["Previously an AA member,",Object(I.jsx)("br",{}),"joined the military",Object(I.jsx)("br",{}),"for a more tight knit group."]}),Object(I.jsx)("div",{className:"bottom-socials",children:Object(I.jsxs)("div",{className:"social-container",children:[Object(I.jsx)("img",{className:"discord-icon",src:N}),Object(I.jsx)("div",{className:"social-name",children:"MichelobUltras#2492"}),Object(I.jsx)("img",{className:"discord-icon",src:k}),Object(I.jsx)("div",{className:"social-name",children:Object(I.jsx)("a",{href:"https://twitter.com/MichelobUltras?s=20",children:"@MichelobUltras"})})]})})]})]}),Object(I.jsxs)("div",{className:"gallery",children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:Ie,className:"goat-image"})}),Object(I.jsxs)("div",{className:"bulgingBox desc",children:[Object(I.jsx)("h1",{children:"Bulging Idiot"}),Object(I.jsxs)("p",{children:["First in command in the Department of Art,",Object(I.jsx)("br",{}),"showing no mercy towards sleep."]}),Object(I.jsx)("div",{className:"bottom-socials",children:Object(I.jsxs)("div",{className:"social-container",children:[Object(I.jsx)("img",{className:"discord-icon",src:N}),Object(I.jsx)("div",{className:"social-name",children:"Bulging Idiot#8623"}),Object(I.jsx)("img",{className:"discord-icon",src:k}),Object(I.jsx)("div",{className:"social-name",children:Object(I.jsx)("a",{href:"https://twitter.com/bulgingidiot?s=20",children:"@bulgingidiot"})})]})})]})]}),Object(I.jsxs)("div",{className:"gallery",children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:Fe,className:"goat-image"})}),Object(I.jsxs)("div",{className:"desc",children:[Object(I.jsx)("h1",{children:"NFTjoe"}),Object(I.jsxs)("p",{children:["Joined the military because",Object(I.jsx)("br",{}),"he heard there was free pizza."]}),Object(I.jsx)("div",{className:"bottom-socials",children:Object(I.jsxs)("div",{className:"social-container",children:[Object(I.jsx)("img",{className:"discord-icon",src:N}),Object(I.jsx)("div",{className:"social-name",children:"NFTjoe#6274"}),Object(I.jsx)("img",{className:"discord-icon",src:k}),Object(I.jsxs)("div",{className:"social-name",children:[" ",Object(I.jsx)("a",{href:" https://twitter.com/NFTjoe?s=20",children:" @NFTJoe"})]})]})})]})]}),Object(I.jsxs)("div",{className:"gallery",children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:Ee,className:"goat-image"})}),Object(I.jsxs)("div",{className:"desc",children:[Object(I.jsx)("h1",{children:"CrimsonTian"}),Object(I.jsx)("p",{style:{color:"black"},children:"lvl. 6 wizard. Joined the military for more experience in the field."}),Object(I.jsx)("div",{className:"bottom-socials",children:Object(I.jsxs)("div",{className:"social-container",children:[Object(I.jsx)("img",{className:"discord-icon",src:N}),Object(I.jsx)("div",{className:"social-name",children:"Discord Name"}),Object(I.jsx)("img",{className:"discord-icon",src:k}),Object(I.jsxs)("div",{className:"social-name",children:[" ",Object(I.jsx)("a",{href:"https://twitter.com/GoattroopsNFT?s=20",children:"Twitter "})]})]})})]})]})]})};n.p,n(610);var De=function(){return Object(I.jsxs)("div",{className:"buy-page",children:[Object(I.jsx)("div",{className:"header-text",children:"Marching Orders"}),Object(I.jsxs)("div",{className:"marchAdds",children:[Object(I.jsx)("h1",{children:"Features"}),Object(I.jsx)("p",{children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:"-Stats: Health (HP), Attack (ATK), Defense (DEF) "}),Object(I.jsx)("li",{children:"-Toxic Waste Spill (Airdrop)"}),Object(I.jsx)("li",{children:"-Military Arsenal Unlocked (Airdrop) "}),Object(I.jsx)("li",{children:"-Big Announcement after both airdrops! "}),Object(I.jsx)("li",{children:"-Merchandise "})]})})]}),Object(I.jsxs)("div",{className:"marchAdds",children:[Object(I.jsx)("h1",{children:"Community DOA"}),Object(I.jsxs)("p",{children:[" With the retirement of General Harold Ransom. The Goat Troops are left to decide the next best course of action. Holders of Goat Troop Infantry decide their own fate:",Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:"-Civil War"}),Object(I.jsx)("li",{children:"-Battle of the Bulging Idiot  "}),Object(I.jsx)("li",{children:"-Factions! "})]})]})]})]})};n(611);var Ue=function(){return Object(I.jsxs)("div",{className:"",children:[Object(I.jsx)("div",{className:"header-text",children:"An Old War Story"}),Object(I.jsxs)("div",{className:"storyTime",children:[Object(I.jsx)("p",{children:"General Harold Ransom looked over the new recruits with a mixture of disappointment and excitement. The recruits were raw, disorderly, and undeveloped. Some looked scared, others cocky. All had potential though but General Ransom did not take the responsibility of sending them to battle lightly."}),Object(I.jsx)("p",{children:"The goal wasn\u2019t to make them killing machines, yet, that would come later in battle. The goal was to make them a team. The key wasn\u2019t to beat them into following orders but rather to give them a common goal. For years Ransom had been doing this with new recruits. He was losing the energy to continue the good fight. It was becoming time to pass the baton to a new generation, ones that would carry the same spirit forward."}),Object(I.jsx)("p",{children:"Harold in his old age has seen it all over his career. He wasn\u2019t perfect but there had been a few mistakes. He had addressed each and every mistake and been taking care of loose ends so he would be able to retire with a clear conscience. There were two things left on that list that would have to wait until after he spoke to the new recruits: oversee the destruction of the toxic waste warehouse (which none knew about) and do an accounting of the armory to ensure no weapons were missing."}),Object(I.jsx)("p",{children:"The drill sergeants were finishing up their introductions, hammering the troops like steel to remove all imperfections so they were ready for the battles to come. They had been screaming at the troops for hours to stand up straight, show respect; instilling the principles of discipline, teamwork, and spirit. The troops were probably covered in a layer of spittle by now."}),Object(I.jsx)("p",{children:"It was time to build the recruits up. Harold walked down the aisle lined with the chairs recruits were sitting in, his knees aching with every step. His strength may not be what it used to be; his endurance and eyesight were waning, but the fiery passion inside could still inspire the young and impressionable. They may not respect him yet but that would change soon. The words weren\u2019t planned but they would come to him. This would be his last speech before calling it quits."}),Object(I.jsx)("p",{children:'\u201cWelcome Goat Troops Infantry. I know some of you may not be sure why you are here. Some of you may have accidentally stumbled into this group thinking it sounded interesting. Others of you may have been waiting for this opportunity your whole lives. No matter the reasoning, you are here, and now you\u2019re a family."'}),Object(I.jsx)("p",{children:"\u201cSet aside who you were before. You\u2019re a part of something bigger now. I\u2019ve given my life to this organization but my time is ending.\u201d"}),Object(I.jsxs)("p",{children:["\u201cI am one person. Alone I am nothing. Together we can shift the direction of a generation.\u201d",Object(I.jsx)("br",{})]}),Object(I.jsxs)("p",{children:["The troops were still. They waited for more. He had the recruit's full attention.",Object(I.jsx)("br",{}),"\u201cWe will get through this together. We will make a difference. The world will feel our impact. We will leave it better than we found it and we will inspire others to do the same.\u201d"]}),Object(I.jsx)("p",{children:'"We have lost others in the past. We carry their dreams, their ambitions, their spirit with us in everything we do. If one of you is lost, we will do the same. To lose one of us is to lose a piece of yourself."'}),Object(I.jsx)("p",{children:'"Our responsibility is to each other."'}),Object(I.jsx)("p",{children:'"Now we are family. Outside of this space, you may have friends, family, and loved ones. They too belong to our family. A family takes care of each other. When one feels pain or loss, we all grieve together."'}),Object(I.jsx)("p",{children:'"We will train you to do well. It will be up to you to do good."'}),Object(I.jsx)("p",{children:'"ATTENTION!"'})]})]})};n(612);var Ge=function(){return Object(I.jsxs)("div",{className:"",children:[Object(I.jsx)("div",{className:"header-text",children:"Terms & Conditions"}),"Hyperlink them in the bottom corner (Like the image below) Have socials linked to bottom Have logo redirect you to top of page if the user clicks on it"]})},He=n.p+"static/media/24.5a7eba1f.jpeg",Re=n.p+"static/media/10.cba2e179.jpeg",Be=(n(613),[{name:"Backgounds",number:12},{name:"Furs",number:16},{name:"Clothing",number:24},{name:"Mouths",number:18},{name:"Face Traits",number:12},{name:"Eyes",number:13},{name:"Piercings",number:12},{name:"Eyewear",number:12},{name:"Horns",number:12},{name:"Headwear",number:22}]);var We=function(){return Object(I.jsxs)("div",{className:"",children:[Object(I.jsx)("div",{className:"header-text",children:"Traits"}),Object(I.jsxs)("div",{className:"traitContent",children:[Object(I.jsx)("div",{div:!0,className:"imageContainerRel",children:Object(I.jsxs)("div",{className:"imageContainer",children:[Object(I.jsx)("img",{className:"traitImage1",src:He}),Object(I.jsx)("img",{className:"traitImage2",src:Re})]})}),Object(I.jsxs)("div",{className:"traitContainer",children:[Object(I.jsx)("div",{className:"traitHeader",children:"Rarity"}),Be.map((function(e){return Object(I.jsxs)("div",{className:"traitRow",children:[Object(I.jsx)("div",{children:e.number}),Object(I.jsx)("div",{className:"traitName",children:e.name})]})}))]})]})]})};n(614);var ze=function(){return Object(I.jsxs)("div",{className:"buy-page",children:[Object(I.jsx)("div",{className:"header-text",children:"Dontations"}),Object(I.jsx)("div",{className:"donateHere",children:Object(I.jsx)("p",{children:"As mentioned, donations will be made periodically throughout the minting process of the Goat Troops Infantry. Each milestone (25% minted) Goat Troops Infantry will donate directly to all families affected by the terrorist attack that killed 13 US troops at the Kabul Airport in August 2021. A percentage of secondary sales will be donated to veterans and troops forever."})})]})};n(615);var Le=function(){var e=new URLSearchParams(Object(g.f)().search),t=e?e.get("page"):null,n=Ne;switch(t){case"about":n=ke;break;case"map":n=Ce;break;case"marching":n=De;break;case"team":n=_e;break;case"story":n=Ue;break;case"terms":n=Ge;break;case"traits":n=We;break;case"donations":n=ze}return Object(I.jsx)("div",{className:"home-page",children:Object(I.jsx)(n,{})})},Pe=n.p+"static/media/nft-calendar-transparent.c5ef49e5.png",Ke=(n(616),[{link:"https://discord.gg/RXVF6gW8",icon:N},{link:"https://twitter.com/GoattroopsNFT?s=20",icon:k},{link:"https://nftcalendar.io/event/goat-troops-infantry/",icon:Pe}]);var qe=function(){return Object(I.jsxs)("div",{className:"footer-wrapper",children:[Object(I.jsx)("div",{className:"terms",children:"Goat Troops Infantry"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{className:"infantry-icon",src:C}),Object(I.jsx)("img",{className:"nft-icon",src:Pe}),Object(I.jsx)("div",{className:"nft-icon",children:Object(I.jsx)("a",{style:{color:"white"},href:"https://nftcalendar.io/event/goat-troops-infantry/",children:"NFT calendar"})}),Object(I.jsx)("div",{className:"terms-footer-wrapper",children:Object(I.jsx)("div",{className:"terms-footer",children:"By purchasing a Goat Troop you will hold all commercial rights to your # Goat Troop."})})]}),Object(I.jsx)("div",{className:"terms-icons",children:Ke.map((function(e){return Object(I.jsx)("img",{src:e.icon,className:"header-social-icon",onClick:function(){return window.location.href=e.link,null}},e.icon)}))})]})};r.a.render(Object(I.jsx)(O.a,{store:x,children:Object(I.jsxs)(f.a,{children:[Object(I.jsx)(J,{}),Object(I.jsx)(g.c,{children:Object(I.jsx)(g.a,{exact:!0,path:"/",component:Le})}),Object(I.jsx)(qe,{})]})}),document.getElementById("root")),c()}},[[617,1,2]]]);
//# sourceMappingURL=main.c5d240f6.chunk.js.map