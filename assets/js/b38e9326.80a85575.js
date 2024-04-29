"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[711],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},g),{},{components:t})):r.createElement(m,a({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(8168),i=(t(6540),t(5680));t(1873);const o={},a="ECNTT",l={unversionedId:"icicle/golang-bindings/ecntt",id:"icicle/golang-bindings/ecntt",title:"ECNTT",description:"Supported curves",source:"@site/docs/icicle/golang-bindings/ecntt.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/ecntt",permalink:"/icicle/golang-bindings/ecntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/ecntt.md",tags:[],version:"current",lastUpdatedBy:"yshekel",lastUpdatedAt:1714057767,formattedLastUpdatedAt:"4/25/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"NTT",permalink:"/icicle/golang-bindings/ntt"},next:{title:"Vector Operations",permalink:"/icicle/golang-bindings/vec-ops"}},c={},s=[{value:"Supported curves",id:"supported-curves",level:3},{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters:",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"ECNTT Example",id:"ecntt-example",level:2}],g={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ecntt"},"ECNTT"),(0,i.yg)("h3",{id:"supported-curves"},"Supported curves"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"bls12-377"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bls12-381"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bn254")),(0,i.yg)("h2",{id:"ecntt-method"},"ECNTT Method"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ECNtt[T any]()")," function performs the Elliptic Curve Number Theoretic Transform (EC-NTT) on the input points slice, using the provided dir (direction), cfg (configuration), and stores the results in the results slice."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func ECNtt[T any](points core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) core.IcicleError\n")),(0,i.yg)("h3",{id:"parameters"},"Parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"points")),": A slice of elliptic curve points (in projective coordinates) that will be transformed. The slice can be stored on the host or the device, as indicated by the ",(0,i.yg)("inlineCode",{parentName:"li"},"core.HostOrDeviceSlice")," type."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"dir")),": The direction of the EC-NTT transform, either ",(0,i.yg)("inlineCode",{parentName:"li"},"core.KForward")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"core.KInverse"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg")),": A pointer to an ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTConfig")," object, containing configuration options for the NTT operation."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"results")),": A slice that will store the transformed elliptic curve points (in projective coordinates). The slice can be stored on the host or the device, as indicated by the ",(0,i.yg)("inlineCode",{parentName:"li"},"core.HostOrDeviceSlice")," type.")),(0,i.yg)("h3",{id:"return-value"},"Return Value"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"CudaError")),": A ",(0,i.yg)("inlineCode",{parentName:"li"},"core.IcicleError")," value, which will be ",(0,i.yg)("inlineCode",{parentName:"li"},"core.IcicleErrorCode(0)")," if the EC-NTT operation was successful, or an error if something went wrong.")),(0,i.yg)("h2",{id:"ntt-configuration-nttconfig"},"NTT Configuration (NTTConfig)"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"NTTConfig")," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type NTTConfig[T any] struct {\n    Ctx cr.DeviceContext\n    CosetGen T\n    BatchSize int32\n    ColumnsBatch bool\n    Ordering Ordering\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync bool\n    NttAlgorithm NttAlgorithm\n}\n")),(0,i.yg)("h3",{id:"fields"},"Fields"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Ctx")),": Device context containing details like device ID and stream ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"CosetGen")),": Coset generator used for coset (i)NTTs, defaulting to no coset being used."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"BatchSize")),": The number of NTTs to compute in one operation, defaulting to 1."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"ColumnsBatch")),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,i.yg)("inlineCode",{parentName:"li"},"false"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Ordering")),": Ordering of inputs and outputs (",(0,i.yg)("inlineCode",{parentName:"li"},"KNN"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KNR"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KRN"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KRR"),"), affecting how data is arranged."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"areInputsOnDevice")),": Indicates if input scalars are located on the device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"areOutputsOnDevice")),": Indicates if results are stored on the device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"IsAsync")),": Controls whether the NTT operation runs asynchronously."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"NttAlgorithm")),": Explicitly select the NTT algorithm. ECNTT supports running on ",(0,i.yg)("inlineCode",{parentName:"li"},"Radix2")," algoruithm.")),(0,i.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"GetDefaultNTTConfig")," to obtain a default configuration, customizable as needed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n")),(0,i.yg)("h2",{id:"ecntt-example"},"ECNTT Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n)\n\nfunc Main() {\n    // Obtain the default NTT configuration with a predefined coset generator.\n    cfg := GetDefaultNttConfig()\n    \n    // Define the size of the input scalars.\n    size := 1 << 18\n\n    // Generate Points for the ECNTT operation.\n    points := GenerateProjectivePoints(size)\n    \n    // Set the direction of the NTT (forward or inverse).\n    dir := core.KForward\n\n    // Allocate memory for the results of the NTT operation.\n    results := make(core.HostSlice[Projective], size)\n\n    // Perform the NTT operation.\n    err := ECNtt(points, dir, &cfg, results)\n    if err != cr.CudaSuccess {\n        panic("ECNTT operation failed")\n    }\n}\n')))}u.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);