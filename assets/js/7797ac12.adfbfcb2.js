"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[2432],{31521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(74848),a=t(28453),d=t(28774);const r={},s="Introduction",o={id:"android-sdk/Introduction",title:"Introduction",description:"HaoJin is a mobile phone software that provides aggregate collection services for merchants. This document describes the interface calls that HaoJin is open to, and third-party applications can implements the collection function through these interfaces.",source:"@site/docs/05-android-sdk/01-Introduction.md",sourceDirName:"05-android-sdk",slug:"/android-sdk/Introduction",permalink:"/qfpay-sdk/docs/android-sdk/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-android-sdk/01-Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android SDK",permalink:"/qfpay-sdk/docs/category/android-sdk"},next:{title:"Third-party Interface Invoke Sample",permalink:"/qfpay-sdk/docs/android-sdk/third-party-interface-invoke"}},c={},l=[{value:"How to use",id:"how-to-use",level:2},{value:"Add Permissions",id:"add-permissions",level:3},{value:"Add Jar Package Dependency",id:"add-jar-package-dependency",level:3},{value:"Config Target Application Id",id:"config-target-application-id",level:3},{value:"Add Proguard Rule",id:"add-proguard-rule",level:3}];function p(e){const n={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"HaoJin is a mobile phone software that provides aggregate collection services for merchants. This document describes the interface calls that HaoJin is open to, and third-party applications can implements the collection function through these interfaces.\nHaoJin supports below third-party functions:"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Collection, Refund, Query Multiple Transaction Records, Query Transaction Details."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"View Transaction Summary, Query Transaction Channel Configuration."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Sale/Void/Query/Adjust Endpoints for card."}),"\n"]}),"\n",(0,i.jsxs)(d.A,{href:"/img/android/architecture__diagram.png",target:"_blank",children:[" ",(0,i.jsx)(n.img,{alt:"Introduction",src:t(27891).A+"",width:"856",height:"379"})]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(n.h3,{id:"add-permissions",children:"Add Permissions"}),"\n",(0,i.jsx)(n.p,{children:"Add the following code to the AndroidManifest.xml file.\nNote: In order to ensure that you can get permission, please install the haojin\napplication first."}),"\n",(0,i.jsxs)(d.A,{href:"/img/android/add__permission.png",target:"_blank",children:[" ",(0,i.jsx)(n.img,{alt:"Add Permissions",src:t(42259).A+"",width:"1013",height:"50"})]}),"\n",(0,i.jsx)(n.h3,{id:"add-jar-package-dependency",children:"Add Jar Package Dependency"}),"\n",(0,i.jsx)(n.p,{children:"Integrated the qfpay_haojin_api_xxx.jar file in the third party application."}),"\n",(0,i.jsxs)(d.A,{href:"/img/android/package__dependency.png",target:"_blank",children:[" ",(0,i.jsx)(n.img,{alt:"Add Jar Package Dependency",src:t(81712).A+"",width:"735",height:"71"})]}),"\n",(0,i.jsx)(n.h3,{id:"config-target-application-id",children:"Config Target Application Id"}),"\n",(0,i.jsxs)(d.A,{href:"/img/android/config__appid.png",target:"_blank",children:[" ",(0,i.jsx)(n.img,{alt:"Config Target Application Id",src:t(96055).A+"",width:"994",height:"51"})]}),"\n",(0,i.jsx)(n.h3,{id:"add-proguard-rule",children:"Add Proguard Rule"}),"\n",(0,i.jsx)(n.p,{children:"Add follow code to the proguard-rules.pro file."}),"\n",(0,i.jsxs)(d.A,{href:"/img/android/proguard__rule.png",target:"_blank",children:[" ",(0,i.jsx)(n.img,{alt:"Add Proguard Rule",src:t(297).A+"",width:"969",height:"101"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},42259:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add__permission-9881c9d1b6c9c27ec83ce8c736219606.png"},27891:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/architecture__diagram-36d1c22ea0bf6adf51603315e43fe8a5.png"},96055:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/config__appid-facacd84f2d78904b9aa37766b58a6df.png"},81712:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/package__dependency-3c804d7c157f04c94088aa06d79c7c85.png"},297:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/proguard__rule-1233860018018f1dbf825e72f0158bf1.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},d=i.createContext(a);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);