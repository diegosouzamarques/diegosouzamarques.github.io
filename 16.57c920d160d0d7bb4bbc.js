(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{drZP:function(e,t,r){"use strict";r.r(t),r.d(t,"TutorialModule",(function(){return s}));var n=r("ofXK"),o=r("tyNb"),i=r("fXoL");const l=function(e){return{active:e}};function c(e,t){if(1&e){const e=i.Mb();i.Lb(0,"button",6),i.Sb("click",(function(){i.cc(e);const r=t.$implicit;return i.Ub().changeItem(r)})),i.ic(1),i.Kb()}if(2&e){const e=t.$implicit,r=t.index,n=i.Ub();i.Zb("routerLink","/reactive-form/",e.link,""),i.Xb("ngClass",i.ac(3,l,r+1==n.current)),i.xb(1),i.jc(e.name)}}const a=[{path:"",component:(()=>{class e{constructor(){this.current=1,this.features=[{id:1,name:"Prototype",link:"prototype"},{id:2,name:"FormControl",link:"form-control"},{id:3,name:"FormControl Class",link:"form-control-class"},{id:4,name:"FormGroup",link:"form-group"},{id:5,name:"FormBuilder",link:"form-builder"},{id:6,name:"FormBuilder Nested",link:"form-builder-nested"},{id:7,name:"FormArray",link:"form-array"},{id:8,name:"FormMulti",link:"form-multi"}]}changeItem(e){this.current=e.id}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Cb({type:e,selectors:[["app-example-reactive-form"]],decls:7,vars:1,consts:[[1,"row","justify-content-center","pt-4","pb-4"],[1,"col-md-2","text-center"],[1,"list-group"],["type","button","class","list-group-item list-group-item-action active",3,"ngClass","routerLink","click",4,"ngFor","ngForOf"],[1,"col-md-10","text-center"],[1,"card","p-4"],["type","button",1,"list-group-item","list-group-item-action","active",3,"ngClass","routerLink","click"]],template:function(e,t){1&e&&(i.Lb(0,"div",0),i.Lb(1,"div",1),i.Lb(2,"div",2),i.hc(3,c,2,5,"button",3),i.Kb(),i.Kb(),i.Lb(4,"div",4),i.Lb(5,"div",5),i.Jb(6,"router-outlet"),i.Kb(),i.Kb(),i.Kb()),2&e&&(i.xb(3),i.Xb("ngForOf",t.features))},directives:[n.j,o.d,n.i,o.a],styles:[".list-group-item[_ngcontent-%COMP%]{padding:3px 10px}"]}),e})(),children:[{path:"prototype",loadChildren:()=>Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"PTYH")).then(e=>e.ExerciceModule)},{path:"form-control",loadChildren:()=>Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"Ytc8")).then(e=>e.ExerciceModule)},{path:"form-control-class",loadChildren:()=>Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"4ly4")).then(e=>e.ExerciceModule)},{path:"form-group",loadChildren:()=>Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"HBQS")).then(e=>e.ExerciceModule)},{path:"form-builder",loadChildren:()=>Promise.all([r.e(0),r.e(12)]).then(r.bind(null,"stv0")).then(e=>e.ExerciceModule)},{path:"form-builder-nested",loadChildren:()=>Promise.all([r.e(0),r.e(13)]).then(r.bind(null,"9wY/")).then(e=>e.ExerciceModule)},{path:"form-array",loadChildren:()=>Promise.all([r.e(0),r.e(14)]).then(r.bind(null,"5oEP")).then(e=>e.ExerciceModule)},{path:"form-multi",loadChildren:()=>Promise.all([r.e(0),r.e(15)]).then(r.bind(null,"Dh8l")).then(e=>e.ExerciceModule)},{path:"",redirectTo:"/reactive-form/prototype",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},imports:[[o.c.forChild(a)],o.c]}),e})();var u=r("tk/3");let s=(()=>{class e{}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},imports:[[n.b,d,u.b]]}),e})()}}]);