"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[538],{5680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>m});var t=i(6540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||r;return i?t.createElement(m,l(l({ref:n},u),{},{components:i})):t.createElement(m,l({ref:n},u))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8250:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(8168),a=(i(6540),i(5680));i(1873);const r={},l="Getting started with ICICLE",o={unversionedId:"icicle/introduction",id:"icicle/introduction",title:"Getting started with ICICLE",description:"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to this guide please.",source:"@site/docs/icicle/introduction.md",sourceDirName:"icicle",slug:"/icicle/introduction",permalink:"/icicle/introduction",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/introduction.md",tags:[],version:"current",lastUpdatedBy:"yshekel",lastUpdatedAt:1714057767,formattedLastUpdatedAt:"4/25/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"What is ICICLE?",permalink:"/icicle/overview"},next:{title:"ICICLE Core",permalink:"/icicle/core"}},s={},c=[{value:"ICICLE repository overview",id:"icicle-repository-overview",level:2},{value:"ICICLE Core",id:"icicle-core",level:3},{value:"ICICLE Rust and Golang bindings",id:"icicle-rust-and-golang-bindings",level:3},{value:"Running ICICLE",id:"running-icicle",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Optional Prerequisites",id:"optional-prerequisites",level:4},{value:"Setting up ICICLE and running tests",id:"setting-up-icicle-and-running-tests",level:3},{value:"Setting up environment with Docker",id:"setting-up-environment-with-docker",level:4},{value:"ICICLE Core",id:"icicle-core-1",level:4},{value:"ICICLE Rust",id:"icicle-rust",level:4},{value:"ICICLE Golang",id:"icicle-golang",level:4},{value:"Running ICICLE examples",id:"running-icicle-examples",level:3},{value:"Running with Docker",id:"running-with-docker",level:4}],u={toc:c},p="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-started-with-icicle"},"Getting started with ICICLE"),(0,a.yg)("p",null,"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to ",(0,a.yg)("a",{parentName:"p",href:"/icicle/integrations#using-icicle-integrations"},"this guide")," please."),(0,a.yg)("h2",{id:"icicle-repository-overview"},"ICICLE repository overview"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"ICICLE API overview",src:i(1611).A,width:"1932",height:"996"})),(0,a.yg)("p",null,"The diagram above displays the general architecture of ICICLE and the API layers that exist. The CUDA API, which we also call ICICLE Core, is the lowest level and is comprised of CUDA kernels which implement all primitives such as MSM as well as C++ wrappers which expose these methods for different curves."),(0,a.yg)("p",null,"ICICLE Core compiles into a static library. This library can be used with our official Golang and Rust wrappers or linked with your C++ project. You can also implement a wrapper for it in any other language."),(0,a.yg)("p",null,"Based on this dependency architecture, the ICICLE repository has three main sections:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#icicle-core"},"ICICLE Core")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#icicle-rust-and-golang-bindings"},"ICICLE Rust bindings")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#icicle-rust-and-golang-bindings"},"ICICLE Golang bindings"))),(0,a.yg)("h3",{id:"icicle-core"},"ICICLE Core"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/icicle/core"},"ICICLE Core")," is a library that directly works with GPU by defining CUDA kernels and algorithms that invoke them. It contains code for ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/include/field/field.cuh"},"fast field arithmetic"),", cryptographic primitives used in ZK such as ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/ntt/"},"NTT"),", ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/msm/"},"MSM"),", ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/poseidon/"},"Poseidon Hash"),", ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/polynomials/"},"Polynomials")," and others."),(0,a.yg)("p",null,"ICICLE Core would typically be compiled into a static library and either used in a third party language such as Rust or Golang, or linked with your own C++ project."),(0,a.yg)("h3",{id:"icicle-rust-and-golang-bindings"},"ICICLE Rust and Golang bindings"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/icicle/rust-bindings"},"ICICLE Rust bindings")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/icicle/golang-bindings"},"ICICLE Golang bindings"))),(0,a.yg)("p",null,"These bindings allow you to easily use ICICLE in a Rust or Golang project. Setting up Golang bindings requires a bit of extra steps compared to the Rust bindings which utilize the ",(0,a.yg)("inlineCode",{parentName:"p"},"cargo build")," tool."),(0,a.yg)("h2",{id:"running-icicle"},"Running ICICLE"),(0,a.yg)("p",null,"This guide assumes that you have a Linux or Windows machine with an Nvidia GPU installed. If you don't have access to an Nvidia GPU you can access one for free on ",(0,a.yg)("a",{parentName:"p",href:"https://colab.google/"},"Google Colab"),"."),(0,a.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"ICICLE can only run on Linux or Windows. ",(0,a.yg)("strong",{parentName:"p"},"MacOS is not supported"),"."))),(0,a.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"NVCC (version 12.0 or newer)"),(0,a.yg)("li",{parentName:"ul"},"cmake 3.18 and above"),(0,a.yg)("li",{parentName:"ul"},"GCC - version 9 or newer is recommended."),(0,a.yg)("li",{parentName:"ul"},"Any Nvidia GPU"),(0,a.yg)("li",{parentName:"ul"},"Linux or Windows operating system.")),(0,a.yg)("h4",{id:"optional-prerequisites"},"Optional Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Docker, latest version."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html"},"NVIDIA Container Toolkit"))),(0,a.yg)("p",null,"If you don't wish to install these prerequisites you can follow this tutorial using a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile"},"ZK-Container")," (docker container). To learn more about using ZK-Containers ",(0,a.yg)("a",{parentName:"p",href:"/ZKContainers"},"read this"),"."),(0,a.yg)("h3",{id:"setting-up-icicle-and-running-tests"},"Setting up ICICLE and running tests"),(0,a.yg)("p",null,"The objective of this guide is to make sure you can run the ICICLE Core, Rust and Golang tests. Achieving this will ensure you know how to setup ICICLE and run an ICICLE program. For simplicity, we will be using the ICICLE docker container as our environment, however, you may install the prerequisites on your machine and ",(0,a.yg)("a",{parentName:"p",href:"#icicle-core-1"},"skip")," the docker section."),(0,a.yg)("h4",{id:"setting-up-environment-with-docker"},"Setting up environment with Docker"),(0,a.yg)("p",null,"Lets begin by cloning the ICICLE repository:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ingonyama-zk/icicle\n")),(0,a.yg)("p",null,"We will proceed to build the docker image ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile"},"found here"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"docker build -t icicle-demo .\ndocker run -it --runtime=nvidia --gpus all --name icicle_container icicle-demo\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-it")," runs the container in interactive mode with a terminal."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--gpus all")," Allocate all available GPUs to the container. You can also specify which GPUs to use if you don't want to allocate all."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--runtime=nvidia")," Use the NVIDIA runtime, necessary for GPU support.")),(0,a.yg)("p",null,"To read more about these settings reference this ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/nvidia-container-runtime"},"article"),"."),(0,a.yg)("p",null,"If you accidentally close your terminal and want to reconnect just call:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"docker exec -it icicle_container bash\n")),(0,a.yg)("p",null,"Lets make sure that we have the correct CUDA version before proceeding"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"nvcc --version\n")),(0,a.yg)("p",null,"You should see something like this"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\n")),(0,a.yg)("p",null,"Make sure the release version is at least 12.0."),(0,a.yg)("h4",{id:"icicle-core-1"},"ICICLE Core"),(0,a.yg)("p",null,"ICICLE Core is found under ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle"},(0,a.yg)("inlineCode",{parentName:"a"},"<project_root>/icicle")),". To build and run the tests first:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd icicle\n")),(0,a.yg)("p",null,"For this example, we are going to compile ICICLE for a ",(0,a.yg)("inlineCode",{parentName:"p"},"bn254")," curve. However other compilation strategies are supported."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir -p build\ncmake -S . -B build -DCURVE=bn254 -DBUILD_TESTS=ON\ncmake --build build -j\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-DBUILD_TESTS")," option compiles the tests, without this flag ",(0,a.yg)("inlineCode",{parentName:"p"},"ctest")," won't work.\n",(0,a.yg)("inlineCode",{parentName:"p"},"-DCURVE")," option tells the compiler which curve to build. You can find a list of supported curves ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/cmake/CurvesCommon.cmake#L2"},"here"),"."),(0,a.yg)("p",null,"The output in ",(0,a.yg)("inlineCode",{parentName:"p"},"build")," folder should include the static libraries for the compiled curve."),(0,a.yg)("p",null,"To run the test"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd build/tests\nctest\n")),(0,a.yg)("h4",{id:"icicle-rust"},"ICICLE Rust"),(0,a.yg)("p",null,"The rust bindings work by first compiling the CUDA static libraries as seen ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs"},"here"),". The compilation of CUDA and the Rust library is all handled by the rust build toolchain."),(0,a.yg)("p",null,"Similar to ICICLE Core here we also have to compile per curve."),(0,a.yg)("p",null,"Lets compile curve ",(0,a.yg)("inlineCode",{parentName:"p"},"bn254")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd wrappers/rust/icicle-curves/icicle-bn254\n")),(0,a.yg)("p",null,"Now lets build our library"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,a.yg)("p",null,"This may take a couple of minutes since we are compiling both the CUDA and Rust code."),(0,a.yg)("p",null,"To run the tests"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cargo test\n")),(0,a.yg)("p",null,"We also include some benchmarks"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cargo bench\n")),(0,a.yg)("h4",{id:"icicle-golang"},"ICICLE Golang"),(0,a.yg)("p",null,"Golang is WIP in v1, coming soon. Please checkout a previous ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0"},"release v0.1.0")," for golang bindings."),(0,a.yg)("h3",{id:"running-icicle-examples"},"Running ICICLE examples"),(0,a.yg)("p",null,"ICICLE examples can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/examples"},"here")," these examples cover some simple use cases using C++, rust and golang."),(0,a.yg)("p",null,"Lets run one of our C++ examples, in this case the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/examples/c%2B%2B/msm/example.cu"},"MSM example"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd examples/c++/msm\n./compile.sh\n./run.sh\n")),(0,a.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"Read through the compile.sh and CMakeLists.txt to understand how to link your own C++ project with ICICLE"))),(0,a.yg)("h4",{id:"running-with-docker"},"Running with Docker"),(0,a.yg)("p",null,"In each example directory, ZK-container files are located in a subdirectory ",(0,a.yg)("inlineCode",{parentName:"p"},".devcontainer"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"msm/\n\u251c\u2500\u2500 .devcontainer\n   \u251c\u2500\u2500 devcontainer.json\n   \u2514\u2500\u2500 Dockerfile\n")),(0,a.yg)("p",null,"Now lets build our docker file and run the test inside it. Make sure you have installed the ",(0,a.yg)("a",{parentName:"p",href:"#optional-prerequisites"},"optional prerequisites"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"docker build -t icicle-example-msm -f .devcontainer/Dockerfile .\n")),(0,a.yg)("p",null,"Lets start and enter the container"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --gpus all -v .:/icicle-example icicle-example-msm\n")),(0,a.yg)("p",null,"Inside the container you can run the same commands:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"./compile.sh\n./run.sh\n")),(0,a.yg)("p",null,"You can now experiment with our other examples, perhaps try to run a rust or golang example next."))}g.isMDXComponent=!0},1611:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/apilevels-1ab85a883df418516e16eb87aa7b0385.png"},1873:(e,n,i)=>{i(6540)}}]);