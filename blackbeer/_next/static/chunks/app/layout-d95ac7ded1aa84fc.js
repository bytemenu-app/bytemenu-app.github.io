(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1483:function(e,t,i){Promise.resolve().then(i.t.bind(i,3865,23)),Promise.resolve().then(i.bind(i,7450)),Promise.resolve().then(i.bind(i,6443)),Promise.resolve().then(i.bind(i,5160)),Promise.resolve().then(i.bind(i,9462)),Promise.resolve().then(i.t.bind(i,3477,23)),Promise.resolve().then(i.bind(i,2566)),Promise.resolve().then(i.bind(i,1542)),Promise.resolve().then(i.bind(i,4669)),Promise.resolve().then(i.bind(i,2412)),Promise.resolve().then(i.bind(i,6244))},8783:function(e,t,i){"use strict";var n,r,s,l,a=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Product=t.ProductSchema=t.Currency=t.ProductPictureVariant=t.ProductMeasureUnit=void 0;let d=c(i(6457));(r||(t.ProductMeasureUnit=r={})).ml="ml",(s||(t.ProductPictureVariant=s={})).product="product",(l||(t.Currency=l={})).BRL="BRL",t.ProductSchema=new d.Schema({id:{type:String},name:{type:String},description:{type:String},price:{value:Number,currency:String},measure:{unit:String,value:String},picture:{desktop:String,mobile:String,variant:String},categories:{id:String,label:String,parent:String},timestamp:{type:Date,default:Date.now},store_id:{type:String}}),t.Product=(null===(n=d.default.models)||void 0===n?void 0:n.Product)||d.default.model("Product",t.ProductSchema,"products")},7450:function(e,t,i){"use strict";i.d(t,{default:function(){return p}});var n=i(7437),r=i(2566),s=i(6463),l=i(6648);function a(e){return(0,n.jsx)("svg",{width:"12",height:"12",...e,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M3.5 10.5C3.225 10.5 2.98958 10.4021 2.79375 10.2063C2.59792 10.0104 2.5 9.775 2.5 9.5V3H2V2H4.5V1.5H7.5V2H10V3H9.5V9.5C9.5 9.775 9.40208 10.0104 9.20625 10.2063C9.01042 10.4021 8.775 10.5 8.5 10.5H3.5ZM8.5 3H3.5V9.5H8.5V3ZM4.5 8.5H5.5V4H4.5V8.5ZM6.5 8.5H7.5V4H6.5V8.5Z",fill:"currentColor"})})}var o=i(7230),c=i(5964);function d(e){var t;let{entry:i,hideImage:s,className:d,...u}=e,m=(0,r.jD)();return i?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{...u,className:"flex flex-col pb-lg ".concat(null!=d?d:"").trim(),children:(0,n.jsxs)("div",{className:"flex items-start",children:[!0!==s&&(0,n.jsx)("div",{className:"w-[90px]",children:(0,n.jsx)(l.default,{src:null===(t=i.product.picture)||void 0===t?void 0:t.product.mobile,alt:i.product.name,width:600,height:600,className:"rounded-full",unoptimized:!0})}),(0,n.jsx)("div",{className:"flex flex-col justify-between",children:(0,n.jsx)("div",{className:"flex items-start",children:(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("h4",{className:"text-sm font-medium leading-md",children:i.product.name}),(0,n.jsx)("button",{type:"button",className:"text-grey",onClick:()=>{i&&m.removeFromCart(i.id)},children:(0,n.jsx)(a,{width:18,height:18})})]}),(0,n.jsxs)("span",{className:"text-grey text-xsm leading-md",children:[i.product.measure.value,i.product.measure.unit]}),(0,n.jsxs)("div",{className:"flex gap-sm justify-between items-center mt-xs",children:[(0,n.jsx)("div",{className:"font-medium leading-lg",children:new Intl.NumberFormat("pt-BR",{currency:"BRL",currencyDisplay:"symbol",currencySign:"standard",style:"currency",minimumFractionDigits:2,maximumFractionDigits:2}).format(i.price)}),(0,n.jsx)("div",{className:"w-2/5",children:(0,n.jsx)(o.ZP.Quantity,{value:i.quantity,setValue:e=>{i&&m.setItems(t=>t.map(t=>t.id===i.id?{...t,quantity:e}:t))},variantSize:c.P9.ExtraSmall,className:"!text-smm"})})]})]})})})]})})}):null}var u=i(4191),m=i(8411),h=i(7138),x=i(5127),f=i(4599);function p(){var e,t,i;let l=(0,r.jD)(),a=(0,s.usePathname)(),o=(0,s.useSearchParams)();return(0,n.jsx)(x.M,{children:l.isOpen&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.E.div,{initial:{x:-300,opacity:0},animate:{x:0,opacity:1},exit:{x:-300,opacity:0},transition:{type:"spring",stiffness:260,damping:20},className:"fixed flex flex-col top-0 bg-white w-4/5 h-full z-10",children:[(0,n.jsx)("div",{className:"mb-md border-b border-zircon",children:(0,n.jsxs)("div",{className:"flex justify-between items-center p-sm py-smm",children:[(0,n.jsx)("button",{type:"button",className:"py-xs",onClick:()=>l.setOpen(!l.isOpen),children:(0,n.jsx)(u.Z,{width:12,height:12,className:"rotate-90"})}),(0,n.jsx)("h3",{className:"text-smm leading-smm text-center w-full font-bold uppercase",children:"Carrinho"})]})}),(0,n.jsx)("div",{className:"flex-grow overflow-y-auto",children:(0,n.jsx)("div",{className:"p-sm py-smm",children:(0,n.jsx)("div",{className:"grid gap-lg ".concat((null===(e=l.items)||void 0===e?void 0:e.length)?"":"h-full").trim(),children:(null===(t=l.items)||void 0===t?void 0:t.length)&&l.items.map((e,t)=>(0,n.jsx)(d,{entry:e,hideImage:!0,className:t<l.items.length-1?"border-b border-zircon":""},t))||(0,n.jsx)("div",{className:"uppercase text-grey font-medium justify-center self-center flex grow w-full text-xs",children:"Seu carrinho est\xe1 vazio"})})})}),(null===(i=l.items)||void 0===i?void 0:i.length)&&(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"p-sm py-smm",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center py-sm text-smm border-t border-zircon",children:[(0,n.jsx)("span",{className:"font-bold",children:"Total:"}),(0,n.jsx)("span",{className:"text-grey",children:new Intl.NumberFormat("pt-BR",{currency:"BRL",currencyDisplay:"symbol",currencySign:"standard",style:"currency",minimumFractionDigits:2,maximumFractionDigits:2}).format(l.totalPrice)})]}),"/pedido/pagamento"===a&&(0,n.jsxs)(h.default,{href:"/?".concat(o.toString()),className:"bg-seagreen p-xs pr-sm rounded w-full text-white uppercase text-xs flex items-center justify-between",children:[(0,n.jsx)("span",{className:"w-full",children:"Adicionar mais itens"}),(0,n.jsx)(m.Z,{width:18,height:18})]})||(0,n.jsxs)(h.default,{href:"/pedido/pagamento?".concat(o.toString()),className:"bg-seagreen p-xs pr-sm rounded w-full text-white uppercase text-xsm flex items-center justify-between",children:[(0,n.jsx)("span",{className:"w-full",children:"Ir para o pagamento"}),(0,n.jsx)(u.Z,{width:14,height:14,className:"-rotate-90"})]})]})})||null]}),(0,n.jsx)(f.E.div,{initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},transition:{duration:.3},className:"fixed top-0 left-0 bg-black/80 w-full h-full",onClick:()=>l.setOpen(!l.isOpen)})]})})}},6443:function(e,t,i){"use strict";i.d(t,{default:function(){return p}});var n,r,s=i(7437),l=i(6463),a=i(2265),o=i(4191),c=i(5127),d=i(4599),u=i(2566);function m(e){return(0,s.jsx)("svg",{width:"12",height:"12",...e,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M4.775 8.99999L1.925 6.14999L2.6375 5.43749L4.775 7.57499L9.3625 2.98749L10.075 3.69999L4.775 8.99999Z",fill:"currentColor"})})}var h=i(7138),x=i(8783);let f=[{uid:"homepage",href:"/",label:"In\xedcio",icon:(0,s.jsx)(function(e){return(0,s.jsxs)("svg",{...e,width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M2.75 6.75L9.5 1.5L16.25 6.75V15C16.25 15.3978 16.092 15.7794 15.8107 16.0607C15.5294 16.342 15.1478 16.5 14.75 16.5H4.25C3.85218 16.5 3.47064 16.342 3.18934 16.0607C2.90804 15.7794 2.75 15.3978 2.75 15V6.75Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M7.25 16.5V9H11.75V16.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},{})},{uid:"orders",href:"/pedidos",label:"Pedidos",icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{...e,width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M4.41667 16.5C4.00417 16.5 3.65105 16.3531 3.3573 16.0594C3.06355 15.7656 2.91667 15.4125 2.91667 15V4.5C2.91667 4.0875 3.06355 3.73438 3.3573 3.44063C3.65105 3.14688 4.00417 3 4.41667 3H5.16667V1.5H6.66667V3H12.6667V1.5H14.1667V3H14.9167C15.3292 3 15.6823 3.14688 15.976 3.44063C16.2698 3.73438 16.4167 4.0875 16.4167 4.5V15C16.4167 15.4125 16.2698 15.7656 15.976 16.0594C15.6823 16.3531 15.3292 16.5 14.9167 16.5H4.41667ZM4.41667 15H14.9167V7.5H4.41667V15ZM4.41667 6H14.9167V4.5H4.41667V6ZM5.91667 10.5V9H13.4167V10.5H5.91667ZM5.91667 13.5V12H11.1667V13.5H5.91667Z",fill:"currentColor"})})},{})},{uid:"notifications",href:"/notificacoes",label:"Notifica\xe7\xf5es",icon:(0,s.jsx)(function(e){return(0,s.jsxs)("svg",{width:"25",height:"18",...e,viewBox:"0 0 25 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M13.8333 6C13.8333 4.80653 13.3592 3.66193 12.5153 2.81802C11.6714 1.97411 10.5268 1.5 9.33334 1.5C8.13987 1.5 6.99528 1.97411 6.15136 2.81802C5.30745 3.66193 4.83334 4.80653 4.83334 6C4.83334 11.25 2.58334 12.75 2.58334 12.75H16.0833C16.0833 12.75 13.8333 11.25 13.8333 6Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M10.6308 15.75C10.499 15.9773 10.3097 16.166 10.082 16.2971C9.8543 16.4283 9.59613 16.4973 9.33334 16.4973C9.07056 16.4973 8.81239 16.4283 8.58467 16.2971C8.35696 16.166 8.1677 15.9773 8.03584 15.75",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("circle",{cx:"20.3333",cy:"6",r:"4",fill:"#C72C41"})]})},{})},{uid:"profile",href:"/perfil",label:"Perfil",icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{...e,width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6708 15.5511C16.5652 14.7106 17.2778 13.6956 17.7644 12.5688C18.2511 11.442 18.5014 10.2274 18.5 8.99999C18.5 4.02923 14.4708 0 9.5 0C4.52923 0 0.500006 4.02923 0.500006 8.99999C0.498586 10.2274 0.748929 11.442 1.23556 12.5688C1.72219 13.6956 2.43477 14.7106 3.32923 15.5511C4.99717 17.1267 7.20555 18.0031 9.5 18C11.7945 18.0031 14.0028 17.1267 15.6708 15.5511ZM4.09539 14.3649C4.74346 13.5541 5.56586 12.8997 6.50151 12.4504C7.43717 12.001 8.46203 11.7682 9.5 11.7692C10.538 11.7682 11.5628 12.001 12.4985 12.4504C13.4341 12.8997 14.2565 13.5541 14.9046 14.3649C14.1976 15.0791 13.3557 15.6458 12.428 16.0321C11.5002 16.4184 10.505 16.6167 9.5 16.6154C8.49502 16.6167 7.49979 16.4184 6.57203 16.0321C5.64426 15.6458 4.80244 15.0791 4.09539 14.3649ZM12.9615 6.23076C12.9615 7.14882 12.5968 8.02928 11.9477 8.67844C11.2985 9.3276 10.4181 9.6923 9.5 9.6923C8.58194 9.6923 7.70149 9.3276 7.05232 8.67844C6.40316 8.02928 6.03846 7.14882 6.03846 6.23076C6.03846 5.31271 6.40316 4.43225 7.05232 3.78309C7.70149 3.13393 8.58194 2.76923 9.5 2.76923C10.4181 2.76923 11.2985 3.13393 11.9477 3.78309C12.5968 4.43225 12.9615 5.31271 12.9615 6.23076Z",fill:"currentColor"})})},{})}];function p(e){var t,i;let n=(0,u.jD)(),r=(0,l.usePathname)(),p=(0,l.useRouter)(),v=(0,l.useSearchParams)(),{variant:g,className:j,...w}=e,[y,C]=(0,a.useState)(!1);(0,a.useEffect)(()=>{r.includes("/pedido")?C(!1):C(!0)},[r]);let b=(0,s.jsx)("nav",{className:"flex w-full justify-between",children:f.map((e,t)=>(0,s.jsxs)(h.default,{href:"".concat(e.href,"?").concat(v.toString()),className:"text-xxs uppercase font-medium flex flex-col items-center tracking-widest ".concat(e.href===r&&"text-white"||"").trim(),children:[(0,s.jsx)("span",{children:e.icon}),(0,s.jsx)("span",{className:"mt-xxxs",children:e.label})]},t))});return(r.startsWith("/produtos")&&n.activeProduct&&(b=(0,s.jsx)("div",{className:"flex justify-between w-full items-center",children:(0,s.jsxs)("div",{className:"flex w-full justify-between",children:[(0,s.jsx)("button",{type:"button",onClick:()=>p.back(),className:"inline-flex text-white rounded-full py-xxxs pr-sm",children:(0,s.jsx)(o.Z,{width:12,height:12,className:"rotate-90"})}),(0,s.jsx)("span",{className:"text-white font-medium",children:new Intl.NumberFormat("pt-br",{style:"currency",currency:x.Currency.BRL}).format(null===(i=n.activeProduct)||void 0===i?void 0:i.price)})]})})),["/identificacao","/pedido/confirmacao"].includes(r))?null:(["/pedido"].some(e=>r.includes(e))&&(b=null),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.M,{mode:"popLayout",children:(0,s.jsx)("div",{className:"fixed bottom-0 left-0 w-full",children:y&&(0,s.jsx)(d.E.div,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:300,damping:25},children:(0,s.jsxs)(s.Fragment,{children:[!r.includes("/pedido/")&&(null===(t=n.items)||void 0===t?void 0:t.length)&&(0,s.jsxs)(d.E.div,{initial:{y:60,opacity:0},animate:{y:0,opacity:1},exit:{x:60,opacity:0},transition:{type:"spring",stiffness:260,damping:20},className:"bg-seagreen p-xs text-white text-xs flex justify-between items-center tracking-wider",children:[(0,s.jsxs)("div",{className:"uppercase",children:[1===n.items.length?"1 item":"".concat(n.items.length," itens")," ","no carrinho"]}),(0,s.jsx)("div",{children:(0,s.jsxs)("button",{type:"button",onClick:()=>n.setOpen(!0),className:"bg-white/30 px-xs leading-md rounded uppercase flex items-center",children:[(0,s.jsx)("span",{className:"mr-xxxs",children:"Validar Pedido"}),(0,s.jsx)(m,{width:16,height:16})]})})]},"footer-cart")||null,!r.includes("/categorias")&&(0,s.jsx)(d.E.div,{initial:{y:60,opacity:1},animate:{y:0,opacity:1},exit:{x:60,opacity:0},transition:{type:"spring",stiffness:260,damping:20,delay:.65,duration:1},className:"bg-nero px-lg h-[60px] flex items-center text-zambezi z-20 ".concat(j||"").trim(),children:b},"footer-variant")||null]})})})})}))}(n=r||(r={})).default="default",n.product="product",n.cart="cart"},5160:function(e,t,i){"use strict";i.d(t,{default:function(){return m}});var n=i(7437),r=i(2566);function s(e){return(0,n.jsxs)("svg",{width:"12",height:"12",...e,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{clipPath:"url(#cart-icon)",children:[(0,n.jsx)("path",{d:"M4.5 11C4.77614 11 5 10.7761 5 10.5C5 10.2239 4.77614 10 4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M10 11C10.2761 11 10.5 10.7761 10.5 10.5C10.5 10.2239 10.2761 10 10 10C9.72386 10 9.5 10.2239 9.5 10.5C9.5 10.7761 9.72386 11 10 11Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M0.5 0.5H2.5L3.84 7.195C3.88572 7.4252 4.01095 7.63198 4.19377 7.77915C4.37659 7.92632 4.60535 8.0045 4.84 8H9.7C9.93465 8.0045 10.1634 7.92632 10.3462 7.77915C10.529 7.63198 10.6543 7.4252 10.7 7.195L11.5 3H3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"cart-icon",children:(0,n.jsx)("rect",{width:"12",height:"12",fill:"currentColor"})})})]})}var l=i(7230),a=i(7138),o=i(1542),c=i(6463),d=i(4669);function u(){let e=(0,r.jD)(),t=(0,c.useSearchParams)(),{customer:i}=(0,o.O)(),{products:u}=(0,d.r)();return(0,c.usePathname)(),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("nav",{className:"bg-nero text-white",children:[(0,n.jsxs)("div",{className:"px-md pt-xxlg pb-xs flex items-start justify-between w-full",children:[(0,n.jsxs)(a.default,{href:"".concat(null==i?void 0:i.default_page,"?").concat(t.toString()),children:[(0,n.jsx)("div",{className:"text-md leading-xl",children:null==i?void 0:i.name}),(0,n.jsx)("div",{className:"text-smm text-grey",children:null==i?void 0:i.business_type})]}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)("button",{type:"button",onClick:()=>e.setOpen(!e.isOpen),className:"text-white bg-white/20 active:bg-white/40 flex p-smm rounded-full rounded-br-none",children:(0,n.jsx)(s,{width:18,height:18})})})]}),(0,n.jsx)("div",{className:"px-md translate-y-sm",children:(0,n.jsx)(l.ZP.Search,{})})]})})}function m(){let e=(0,c.usePathname)(),t=(0,r.jD)();return["/identificacao","/pedido/confirmacao"].includes(e)?null:(0,n.jsx)("header",{className:"pb-md ".concat(t.isOpen?"":"relative z-10").trim(),children:(0,n.jsx)(u,{})})}},8411:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7437);function r(e){return(0,n.jsx)("svg",{width:"24px",height:"24px",...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",fill:"currentColor",children:(0,n.jsx)("path",{d:"M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"})})}},4191:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7437);function r(e){return(0,n.jsx)("svg",{width:"4",height:"4",...e,viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2 2.3L3.53333 0.76667L4 1.23334L2 3.23334L-2.03986e-08 1.23334L0.466666 0.76667L2 2.3Z",fill:"currentColor"})})}},9462:function(e,t,i){"use strict";i.d(t,{AnimatedPage:function(){return o}});var n=i(7437),r=i(4599),s=i(5127),l=i(6463);let a=(0,i(2265).forwardRef)((e,t)=>(0,n.jsx)(r.E.div,{ref:t,...e}));function o(e){let{children:t,...i}=e,r=(0,l.usePathname)();return"/pedido/confirmacao"===r?t:(0,n.jsx)(s.M,{mode:"popLayout",children:(0,n.jsx)(a,{initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",stiffness:260,damping:20},children:t},r)})}a.displayName="PageContent"},1542:function(e,t,i){"use strict";i.d(t,{CustomerProvider:function(){return l},O:function(){return a}});var n=i(7437),r=i(2265);let s=(0,r.createContext)(void 0),l=e=>{let{children:t,customer:i}=e;return(0,n.jsx)(s.Provider,{value:{customer:i},children:t})},a=()=>{let e=(0,r.useContext)(s);if(void 0===e)throw Error("useCustomer must be used within a CustomerProvider");return e}},3477:function(){},3865:function(e){e.exports={style:{fontFamily:"'__Spinnaker_410c81', '__Spinnaker_Fallback_410c81'",fontWeight:400,fontStyle:"normal"},className:"__className_410c81",variable:"__variable_410c81"}}},function(e){e.O(0,[85,795,180,291,230,648,526,971,23,744],function(){return e(e.s=1483)}),_N_E=e.O()}]);