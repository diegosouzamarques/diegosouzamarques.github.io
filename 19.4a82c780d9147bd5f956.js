(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6+D1":function(t,e,n){"use strict";n.r(e),n.d(e,"ItemsModule",(function(){return L}));var i=n("ofXK"),s=n("tyNb"),b=n("jhN1"),r=n("fXoL"),o=n("tk/3");const c={headers:new o.c({"Content-Type":"application/json"})};let a=(()=>{class t{constructor(t){this.http=t}getItems(t){return this.http.get(t,c)}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,e){1&t&&(r.Lb(0,"div"),r.Lb(1,"div",12),r.Lb(2,"span",13),r.ic(3,"Loading..."),r.Kb(),r.Kb(),r.Lb(4,"div",14),r.Lb(5,"span",13),r.ic(6,"Loading..."),r.Kb(),r.Kb(),r.Lb(7,"div",15),r.Lb(8,"span",13),r.ic(9,"Loading..."),r.Kb(),r.Kb(),r.Lb(10,"div",16),r.Lb(11,"span",13),r.ic(12,"Loading..."),r.Kb(),r.Kb(),r.Lb(13,"div",17),r.Lb(14,"span",13),r.ic(15,"Loading..."),r.Kb(),r.Kb(),r.Lb(16,"div",18),r.Lb(17,"span",13),r.ic(18,"Loading..."),r.Kb(),r.Kb(),r.Lb(19,"div",19),r.Lb(20,"span",13),r.ic(21,"Loading..."),r.Kb(),r.Kb(),r.Kb())}function l(t,e){if(1&t&&(r.Lb(0,"tr"),r.Lb(1,"td"),r.ic(2),r.Kb(),r.Lb(3,"td"),r.ic(4),r.Kb(),r.Lb(5,"td"),r.ic(6),r.Kb(),r.Kb()),2&t){const t=e.$implicit;r.xb(2),r.jc(t.name),r.xb(2),r.jc(t.username),r.xb(2),r.jc(t.email)}}function p(t,e){if(1&t&&(r.Lb(0,"div",20),r.Lb(1,"table",21),r.Lb(2,"thead"),r.Lb(3,"tr"),r.Lb(4,"th",22),r.ic(5,"name"),r.Kb(),r.Lb(6,"th",22),r.ic(7,"username"),r.Kb(),r.Lb(8,"th",22),r.ic(9,"email"),r.Kb(),r.Kb(),r.Kb(),r.Lb(10,"tbody"),r.hc(11,l,7,3,"tr",23),r.Kb(),r.Kb(),r.Kb()),2&t){const t=r.Ub();r.xb(11),r.Xb("ngForOf",t.items)}}const u=Object(b.e)("items"),h=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.state=t,this.itemsService=e,this.platformId=n,this.appId=i,this.items=[]}ngOnInit(){this.getUsers()}getUsers(){this.loaded=!1,this.items=this.state.get(u,[]),0===this.items.length?this.itemsService.getItems("https://jsonplaceholder.typicode.com/users").subscribe(t=>{const e=Object(i.o)(this.platformId)?"in the browser":"on the server";console.log(`getUsers : Running ${e} with appId=${this.appId}`),this.items=t,this.loaded=!0,this.state.set(u,t)}):this.loaded=!0}resetUsers(){this.items=null,this.loaded=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(b.d),r.Ib(a),r.Ib(r.B),r.Ib(r.c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-items"]],decls:18,vars:2,consts:[[1,"row","pb-4"],[1,"col-12","col-sm-12","col-md-3","col-lg-3","col-xl-3"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-primary","mr-4",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],[1,"row"],["class","table-responsive httpclient-table blue-gradient",4,"ngIf"],["role","status",1,"spinner-grow","text-primary"],[1,"sr-only"],["role","status",1,"spinner-grow","text-secondary"],["role","status",1,"spinner-grow","text-success"],["role","status",1,"spinner-grow","text-danger"],["role","status",1,"spinner-grow","text-warning"],["role","status",1,"spinner-grow","text-info"],["role","status",1,"spinner-grow","text-dark"],[1,"table-responsive","httpclient-table","blue-gradient"],[1,"table","table-hover","table-striped","table-responsive-md"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Lb(2,"div",0),r.Lb(3,"div",2),r.Lb(4,"div",3),r.Lb(5,"h5",4),r.ic(6,"Feature : HttpClient"),r.Kb(),r.Jb(7,"hr"),r.Lb(8,"p",5),r.ic(9,"Use HtppClient"),r.Kb(),r.Lb(10,"button",6),r.Sb("click",(function(){return e.getUsers()})),r.ic(11,"Get"),r.Kb(),r.Lb(12,"button",7),r.Sb("click",(function(){return e.resetUsers()})),r.ic(13,"Reset"),r.Kb(),r.Kb(),r.Kb(),r.hc(14,d,22,0,"div",8),r.Kb(),r.Kb(),r.Lb(15,"div",9),r.Lb(16,"div",10),r.hc(17,p,12,1,"div",11),r.Kb(),r.Kb(),r.Kb()),2&t&&(r.xb(14),r.Xb("ngIf",!e.loaded),r.xb(3),r.Xb("ngIf",e.loaded))},directives:[i.k,i.j],styles:[".httpclient-table[_ngcontent-%COMP%]{border-radius:10px}.httpclient-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{color:#fff}.httpclient-table.blue-gradient[_ngcontent-%COMP%]{background:linear-gradient(40deg,#45cafc,#5664bd)!important}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(e){return new(e||t)},imports:[[s.c.forChild(h)],s.c]}),t})(),L=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(e){return new(e||t)},providers:[a],imports:[[i.b,g]]}),t})()}}]);