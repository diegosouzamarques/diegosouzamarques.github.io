(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"SO+r":function(t,e,a){"use strict";a.r(e),a.d(e,"ExampleBootstrapPrototypeModule",(function(){return p}));var i=a("ofXK"),n=a("tyNb"),o=a("fXoL");const b=function(t){return{active:t}};function r(t,e){if(1&t){const t=o.Mb();o.Lb(0,"button",5),o.Sb("click",(function(){o.cc(t);const a=e.$implicit;return o.Ub().changeItem(a)})),o.ic(1),o.Kb()}if(2&t){const t=e.$implicit,a=e.index,i=o.Ub();o.Zb("routerLink","/bootstrap-prototype/",t.link,""),o.Xb("ngClass",o.ac(3,b,a+1==i.current)),o.xb(1),o.jc(t.name)}}let c=(()=>{class t{constructor(){this.current=1,this.features=[{id:1,name:"Alerts",link:"alerts"},{id:2,name:"Badge",link:"badge"},{id:3,name:"Blockquotes",link:"blockquotes"},{id:4,name:"Breadcrumb",link:"breadcrumb"},{id:5,name:"Buttons",link:"buttons"},{id:6,name:"Collapse",link:"collapse"},{id:7,name:"Dropdowns",link:"dropdowns"},{id:8,name:"Forms",link:"forms"},{id:9,name:"List Group",link:"list-group"},{id:10,name:"Modal",link:"modal"},{id:11,name:"Pagination",link:"pagination"},{id:12,name:"Popovers",link:"popovers"},{id:13,name:"Progress",link:"progress"},{id:14,name:"Spinners",link:"spinners"},{id:15,name:"Toasts",link:"toasts"},{id:16,name:"Tooltips",link:"tooltips"}]}changeItem(t){this.current=t.id}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-example-bootstrap-prototype"]],decls:6,vars:1,consts:[[1,"row","justify-content-center","pb-4"],[1,"col-md-3","text-center"],[1,"list-group"],["type","button","class","list-group-item list-group-item-action active",3,"ngClass","routerLink","click",4,"ngFor","ngForOf"],[1,"col-md-9","text-center"],["type","button",1,"list-group-item","list-group-item-action","active",3,"ngClass","routerLink","click"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"div",2),o.hc(3,r,2,5,"button",3),o.Kb(),o.Kb(),o.Lb(4,"div",4),o.Jb(5,"router-outlet"),o.Kb(),o.Kb()),2&t&&(o.xb(3),o.Xb("ngForOf",e.features))},directives:[i.j,n.d,i.i,n.a],styles:[".list-group-item[_ngcontent-%COMP%]{padding:3px 10px}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-alerts"]],decls:31,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["role","alert",1,"alert","alert-primary"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-info"],["href","#",1,"alert-link"],["role","alert",1,"alert","alert-secondary"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Alerts"),o.Kb(),o.Lb(4,"div",3),o.ic(5," A simple primary alert\u2014check it out! "),o.Kb(),o.Lb(6,"div",4),o.ic(7," A simple success alert\u2014check it out! "),o.Kb(),o.Lb(8,"div",5),o.ic(9," A simple info alert\u2014check it out! "),o.Kb(),o.Jb(10,"hr"),o.Lb(11,"div",3),o.ic(12," A simple primary alert with "),o.Lb(13,"a",6),o.ic(14,"an example link"),o.Kb(),o.ic(15,". Give it a click if you like. "),o.Kb(),o.Lb(16,"div",7),o.ic(17," A simple secondary alert with "),o.Lb(18,"a",6),o.ic(19,"an example link"),o.Kb(),o.ic(20,". Give it a click if you like. "),o.Kb(),o.Lb(21,"div",4),o.ic(22," A simple success alert with "),o.Lb(23,"a",6),o.ic(24,"an example link"),o.Kb(),o.ic(25,". Give it a click if you like. "),o.Kb(),o.Lb(26,"div",5),o.ic(27," A simple info alert with "),o.Lb(28,"a",6),o.ic(29,"an example link"),o.Kb(),o.ic(30,". Give it a click if you like. "),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})();const s=[{path:"",component:c,children:[{path:"alerts",component:l},{path:"badge",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-badge"]],decls:79,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],[1,"badge","badge-secondary"],[1,"badge","badge-primary","mr-1"],[1,"badge","badge-secondary","mr-1"],[1,"badge","badge-success","mr-1"],[1,"badge","badge-danger","mr-1"],[1,"badge","badge-warning","mr-1"],[1,"badge","badge-info","mr-1"],[1,"badge","badge-light","mr-1"],[1,"badge","badge-dark","mr-1"],[1,"badge","badge-pill","badge-primary","mr-1"],[1,"badge","badge-pill","badge-secondary","mr-1"],[1,"badge","badge-pill","badge-success","mr-1"],[1,"badge","badge-pill","badge-danger","mr-1"],[1,"badge","badge-pill","badge-warning","mr-1"],[1,"badge","badge-pill","badge-info","mr-1"],[1,"badge","badge-pill","badge-light","mr-1"],[1,"badge","badge-pill","badge-dark","mr-1"],["href","#",1,"badge","badge-primary","mr-1"],["href","#",1,"badge","badge-secondary","mr-1"],["href","#",1,"badge","badge-success","mr-1"],["href","#",1,"badge","badge-danger","mr-1"],["href","#",1,"badge","badge-warning","mr-1"],["href","#",1,"badge","badge-info","mr-1"],["href","#",1,"badge","badge-light","mr-1"],["href","#",1,"badge","badge-dark","mr-1"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Badges"),o.Kb(),o.Lb(4,"h1"),o.ic(5,"Example heading "),o.Lb(6,"span",3),o.ic(7,"New"),o.Kb(),o.Kb(),o.Lb(8,"h2"),o.ic(9,"Example heading "),o.Lb(10,"span",3),o.ic(11,"New"),o.Kb(),o.Kb(),o.Lb(12,"h3"),o.ic(13,"Example heading "),o.Lb(14,"span",3),o.ic(15,"New"),o.Kb(),o.Kb(),o.Lb(16,"h4"),o.ic(17,"Example heading "),o.Lb(18,"span",3),o.ic(19,"New"),o.Kb(),o.Kb(),o.Lb(20,"h5"),o.ic(21,"Example heading "),o.Lb(22,"span",3),o.ic(23,"New"),o.Kb(),o.Kb(),o.Lb(24,"h6"),o.ic(25,"Example heading "),o.Lb(26,"span",3),o.ic(27,"New"),o.Kb(),o.Kb(),o.Jb(28,"hr"),o.Lb(29,"span",4),o.ic(30,"Primary"),o.Kb(),o.Lb(31,"span",5),o.ic(32,"Secondary"),o.Kb(),o.Lb(33,"span",6),o.ic(34,"Success"),o.Kb(),o.Lb(35,"span",7),o.ic(36,"Danger"),o.Kb(),o.Lb(37,"span",8),o.ic(38,"Warning"),o.Kb(),o.Lb(39,"span",9),o.ic(40,"Info"),o.Kb(),o.Lb(41,"span",10),o.ic(42,"Light"),o.Kb(),o.Lb(43,"span",11),o.ic(44,"Dark"),o.Kb(),o.Jb(45,"hr"),o.Lb(46,"span",12),o.ic(47,"Primary"),o.Kb(),o.Lb(48,"span",13),o.ic(49,"Secondary"),o.Kb(),o.Lb(50,"span",14),o.ic(51,"Success"),o.Kb(),o.Lb(52,"span",15),o.ic(53,"Danger"),o.Kb(),o.Lb(54,"span",16),o.ic(55,"Warning"),o.Kb(),o.Lb(56,"span",17),o.ic(57,"Info"),o.Kb(),o.Lb(58,"span",18),o.ic(59,"Light"),o.Kb(),o.Lb(60,"span",19),o.ic(61,"Dark"),o.Kb(),o.Jb(62,"hr"),o.Lb(63,"a",20),o.ic(64,"Primary"),o.Kb(),o.Lb(65,"a",21),o.ic(66,"Secondary"),o.Kb(),o.Lb(67,"a",22),o.ic(68,"Success"),o.Kb(),o.Lb(69,"a",23),o.ic(70,"Danger"),o.Kb(),o.Lb(71,"a",24),o.ic(72,"Warning"),o.Kb(),o.Lb(73,"a",25),o.ic(74,"Info"),o.Kb(),o.Lb(75,"a",26),o.ic(76,"Light"),o.Kb(),o.Lb(77,"a",27),o.ic(78,"Dark"),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"blockquotes",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-blockquotes"]],decls:17,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],[1,"blockquote"],[1,"mb-0"],[1,"blockquote-footer"],["title","Source Title"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h4",2),o.ic(3,"Blockquotes"),o.Kb(),o.Lb(4,"blockquote",3),o.Lb(5,"p",4),o.ic(6," A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. "),o.Kb(),o.Kb(),o.Jb(7,"hr"),o.Lb(8,"h4",2),o.ic(9,"Naming a source"),o.Kb(),o.Lb(10,"blockquote",3),o.Lb(11,"p",4),o.ic(12,"Brothers, what we do in life echoes in eternity."),o.Kb(),o.Lb(13,"footer",5),o.ic(14,"Maximus in "),o.Lb(15,"cite",6),o.ic(16,"Gladiator"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"breadcrumb",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-breadcrumb"]],decls:25,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["aria-label","breadcrumb"],[1,"breadcrumb"],["aria-current","page",1,"breadcrumb-item","active"],[1,"breadcrumb-item"],["href","#"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Breadcrumbs"),o.Kb(),o.Lb(4,"nav",3),o.Lb(5,"ol",4),o.Lb(6,"li",5),o.ic(7,"Home"),o.Kb(),o.Kb(),o.Kb(),o.Lb(8,"nav",3),o.Lb(9,"ol",4),o.Lb(10,"li",6),o.Lb(11,"a",7),o.ic(12,"Home"),o.Kb(),o.Kb(),o.Lb(13,"li",5),o.ic(14,"Library"),o.Kb(),o.Kb(),o.Kb(),o.Lb(15,"nav",3),o.Lb(16,"ol",4),o.Lb(17,"li",6),o.Lb(18,"a",7),o.ic(19,"Home"),o.Kb(),o.Kb(),o.Lb(20,"li",6),o.Lb(21,"a",7),o.ic(22,"Library"),o.Kb(),o.Kb(),o.Lb(23,"li",5),o.ic(24,"Data"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"buttons",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-buttons"]],decls:49,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-secondary"],["type","button",1,"btn","btn-success"],["type","button",1,"btn","btn-danger"],["type","button",1,"btn","btn-warning"],["type","button",1,"btn","btn-info"],["type","button",1,"btn","btn-light"],["type","button",1,"btn","btn-dark"],["type","button",1,"btn","btn-link"],["type","button",1,"btn","btn-outline-primary"],["type","button",1,"btn","btn-outline-secondary"],["type","button",1,"btn","btn-outline-success"],["type","button",1,"btn","btn-outline-danger"],["type","button",1,"btn","btn-outline-warning"],["type","button",1,"btn","btn-outline-info"],["type","button",1,"btn","btn-outline-light"],["type","button",1,"btn","btn-outline-dark"],["type","button",1,"btn","btn-primary","btn-lg"],["type","button",1,"btn","btn-secondary","btn-lg"],["type","button",1,"btn","btn-primary","btn-sm"],["type","button",1,"btn","btn-secondary","btn-sm"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Buttons"),o.Kb(),o.Lb(4,"button",3),o.ic(5,"Primary"),o.Kb(),o.Lb(6,"button",4),o.ic(7,"Secondary"),o.Kb(),o.Lb(8,"button",5),o.ic(9,"Success"),o.Kb(),o.Lb(10,"button",6),o.ic(11,"Danger"),o.Kb(),o.Lb(12,"button",7),o.ic(13,"Warning"),o.Kb(),o.Lb(14,"button",8),o.ic(15,"Info"),o.Kb(),o.Lb(16,"button",9),o.ic(17,"Light"),o.Kb(),o.Lb(18,"button",10),o.ic(19,"Dark"),o.Kb(),o.Lb(20,"button",11),o.ic(21,"Link"),o.Kb(),o.Jb(22,"hr"),o.Lb(23,"button",12),o.ic(24,"Primary"),o.Kb(),o.Lb(25,"button",13),o.ic(26,"Secondary"),o.Kb(),o.Lb(27,"button",14),o.ic(28,"Success"),o.Kb(),o.Lb(29,"button",15),o.ic(30,"Danger"),o.Kb(),o.Lb(31,"button",16),o.ic(32,"Warning"),o.Kb(),o.Lb(33,"button",17),o.ic(34,"Info"),o.Kb(),o.Lb(35,"button",18),o.ic(36,"Light"),o.Kb(),o.Lb(37,"button",19),o.ic(38,"Dark"),o.Kb(),o.Jb(39,"hr"),o.Lb(40,"button",20),o.ic(41,"Large button"),o.Kb(),o.Lb(42,"button",21),o.ic(43,"Large button"),o.Kb(),o.Jb(44,"hr"),o.Lb(45,"button",22),o.ic(46,"Small button"),o.Kb(),o.Lb(47,"button",23),o.ic(48,"Small button"),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"tooltips",component:(()=>{class t{constructor(){}ngOnInit(){this.loadScript("./assets/params/js/tooltips.js")}loadScript(t){const e=document.createElement("script");e.type="text/javascript",e.src=t,e.async=!1,document.getElementsByTagName("head")[0].appendChild(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-tooltips"]],decls:12,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["type","button","data-toggle","tooltip","data-placement","top","title","Tooltip on top",1,"btn","btn-secondary"],["type","button","data-toggle","tooltip","data-placement","right","title","Tooltip on right",1,"btn","btn-secondary"],["type","button","data-toggle","tooltip","data-placement","bottom","title","Tooltip on bottom",1,"btn","btn-secondary"],["type","button","data-toggle","tooltip","data-placement","left","title","Tooltip on left",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Tooltips"),o.Kb(),o.Lb(4,"button",3),o.ic(5," Tooltip on top "),o.Kb(),o.Lb(6,"button",4),o.ic(7," Tooltip on right "),o.Kb(),o.Lb(8,"button",5),o.ic(9," Tooltip on bottom "),o.Kb(),o.Lb(10,"button",6),o.ic(11," Tooltip on left "),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"collapse",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-collapse"]],decls:55,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["data-toggle","collapse","href","#collapseExample","role","button","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn-primary"],["type","button","data-toggle","collapse","data-target","#collapseExample","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn-primary"],["id","collapseExample",1,"collapse"],[1,"card","card-body"],["data-toggle","collapse","href","#multiCollapseExample1","role","button","aria-expanded","false","aria-controls","multiCollapseExample1",1,"btn","btn-primary"],["type","button","data-toggle","collapse","data-target","#multiCollapseExample2","aria-expanded","false","aria-controls","multiCollapseExample2",1,"btn","btn-primary"],["type","button","data-toggle","collapse","data-target",".multi-collapse","aria-expanded","false","aria-controls","multiCollapseExample1 multiCollapseExample2",1,"btn","btn-primary"],[1,"row"],[1,"col"],["id","multiCollapseExample1",1,"collapse","multi-collapse"],["id","multiCollapseExample2",1,"collapse","multi-collapse"],["id","accordionExample",1,"accordion"],["id","headingOne",1,"card-header"],[1,"mb-0"],["type","button","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordionExample",1,"collapse","show"],["id","headingTwo",1,"card-header"],["type","button","data-toggle","collapse","data-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"btn","btn-link","collapsed"],["id","collapseTwo","aria-labelledby","headingTwo","data-parent","#accordionExample",1,"collapse"],["id","headingThree",1,"card-header"],["type","button","data-toggle","collapse","data-target","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"btn","btn-link","collapsed"],["id","collapseThree","aria-labelledby","headingThree","data-parent","#accordionExample",1,"collapse"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Collapse"),o.Kb(),o.Lb(4,"p"),o.Lb(5,"a",3),o.ic(6," Link with href "),o.Kb(),o.Lb(7,"button",4),o.ic(8," Button with data-target "),o.Kb(),o.Kb(),o.Lb(9,"div",5),o.Lb(10,"div",6),o.ic(11," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),o.Kb(),o.Kb(),o.Jb(12,"hr"),o.Lb(13,"p"),o.Lb(14,"a",7),o.ic(15,"Toggle first element"),o.Kb(),o.Lb(16,"button",8),o.ic(17,"Toggle second element"),o.Kb(),o.Lb(18,"button",9),o.ic(19,"Toggle both elements"),o.Kb(),o.Kb(),o.Lb(20,"div",10),o.Lb(21,"div",11),o.Lb(22,"div",12),o.Lb(23,"div",6),o.ic(24," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),o.Kb(),o.Kb(),o.Kb(),o.Lb(25,"div",11),o.Lb(26,"div",13),o.Lb(27,"div",6),o.ic(28," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Jb(29,"hr"),o.Lb(30,"div",14),o.Lb(31,"div",0),o.Lb(32,"div",15),o.Lb(33,"h2",16),o.Lb(34,"button",17),o.ic(35," Collapsible Group Item #1 "),o.Kb(),o.Kb(),o.Kb(),o.Lb(36,"div",18),o.Lb(37,"div",1),o.ic(38," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),o.Kb(),o.Kb(),o.Kb(),o.Lb(39,"div",0),o.Lb(40,"div",19),o.Lb(41,"h2",16),o.Lb(42,"button",20),o.ic(43," Collapsible Group Item #2 "),o.Kb(),o.Kb(),o.Kb(),o.Lb(44,"div",21),o.Lb(45,"div",1),o.ic(46," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),o.Kb(),o.Kb(),o.Kb(),o.Lb(47,"div",0),o.Lb(48,"div",22),o.Lb(49,"h2",16),o.Lb(50,"button",23),o.ic(51," Collapsible Group Item #3 "),o.Kb(),o.Kb(),o.Kb(),o.Lb(52,"div",24),o.Lb(53,"div",1),o.ic(54," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"dropdowns",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-dropdowns"]],decls:28,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"btn-group"],["type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-danger","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-divider"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Dropdowns"),o.Kb(),o.Lb(4,"div",3),o.Lb(5,"button",4),o.ic(6," Dropdown button "),o.Kb(),o.Lb(7,"div",5),o.Lb(8,"a",6),o.ic(9,"Action"),o.Kb(),o.Lb(10,"a",6),o.ic(11,"Another action"),o.Kb(),o.Lb(12,"a",6),o.ic(13,"Something else here"),o.Kb(),o.Kb(),o.Kb(),o.Jb(14,"hr"),o.Lb(15,"div",7),o.Lb(16,"button",8),o.ic(17," Action "),o.Kb(),o.Lb(18,"div",9),o.Lb(19,"a",6),o.ic(20,"Action"),o.Kb(),o.Lb(21,"a",6),o.ic(22,"Another action"),o.Kb(),o.Lb(23,"a",6),o.ic(24,"Something else here"),o.Kb(),o.Jb(25,"div",10),o.Lb(26,"a",6),o.ic(27,"Separated link"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"forms",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-forms"]],decls:41,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],[1,"form-group"],["for","exampleFormControlInput1"],["type","email","id","exampleFormControlInput1","placeholder","name@example.com",1,"form-control"],["for","exampleFormControlSelect1"],["id","exampleFormControlSelect1",1,"form-control"],["for","exampleFormControlSelect2"],["multiple","","id","exampleFormControlSelect2",1,"form-control"],["for","exampleFormControlTextarea1"],["id","exampleFormControlTextarea1","rows","3",1,"form-control"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Forms"),o.Kb(),o.Lb(4,"form"),o.Lb(5,"div",3),o.Lb(6,"label",4),o.ic(7,"Email address"),o.Kb(),o.Jb(8,"input",5),o.Kb(),o.Lb(9,"div",3),o.Lb(10,"label",6),o.ic(11,"Example select"),o.Kb(),o.Lb(12,"select",7),o.Lb(13,"option"),o.ic(14,"1"),o.Kb(),o.Lb(15,"option"),o.ic(16,"2"),o.Kb(),o.Lb(17,"option"),o.ic(18,"3"),o.Kb(),o.Lb(19,"option"),o.ic(20,"4"),o.Kb(),o.Lb(21,"option"),o.ic(22,"5"),o.Kb(),o.Kb(),o.Kb(),o.Lb(23,"div",3),o.Lb(24,"label",8),o.ic(25,"Example multiple select"),o.Kb(),o.Lb(26,"select",9),o.Lb(27,"option"),o.ic(28,"1"),o.Kb(),o.Lb(29,"option"),o.ic(30,"2"),o.Kb(),o.Lb(31,"option"),o.ic(32,"3"),o.Kb(),o.Lb(33,"option"),o.ic(34,"4"),o.Kb(),o.Lb(35,"option"),o.ic(36,"5"),o.Kb(),o.Kb(),o.Kb(),o.Lb(37,"div",3),o.Lb(38,"label",10),o.ic(39,"Example textarea"),o.Kb(),o.Jb(40,"textarea",11),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"list-group",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-list-group"]],decls:49,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],[1,"list-group"],[1,"list-group-item","active"],[1,"list-group-item"],["href","#",1,"list-group-item","list-group-item-action"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-primary"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-secondary"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-success"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-danger"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-warning"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-info"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-light"],["href","#",1,"list-group-item","list-group-item-action","list-group-item-dark"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","badge-primary","badge-pill"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"List group"),o.Kb(),o.Lb(4,"ul",3),o.Lb(5,"li",4),o.ic(6,"Cras justo odio"),o.Kb(),o.Lb(7,"li",5),o.ic(8,"Dapibus ac facilisis in"),o.Kb(),o.Lb(9,"li",5),o.ic(10,"Morbi leo risus"),o.Kb(),o.Lb(11,"li",5),o.ic(12,"Porta ac consectetur ac"),o.Kb(),o.Lb(13,"li",5),o.ic(14,"Vestibulum at eros"),o.Kb(),o.Kb(),o.Jb(15,"hr"),o.Lb(16,"div",3),o.Lb(17,"a",6),o.ic(18,"Dapibus ac facilisis in"),o.Kb(),o.Lb(19,"a",7),o.ic(20,"A simple primary list group item"),o.Kb(),o.Lb(21,"a",8),o.ic(22,"A simple secondary list group item"),o.Kb(),o.Lb(23,"a",9),o.ic(24,"A simple success list group item"),o.Kb(),o.Lb(25,"a",10),o.ic(26,"A simple danger list group item"),o.Kb(),o.Lb(27,"a",11),o.ic(28,"A simple warning list group item"),o.Kb(),o.Lb(29,"a",12),o.ic(30,"A simple info list group item"),o.Kb(),o.Lb(31,"a",13),o.ic(32,"A simple light list group item"),o.Kb(),o.Lb(33,"a",14),o.ic(34,"A simple dark list group item"),o.Kb(),o.Kb(),o.Jb(35,"hr"),o.Lb(36,"ul",3),o.Lb(37,"li",15),o.ic(38," Cras justo odio "),o.Lb(39,"span",16),o.ic(40,"14"),o.Kb(),o.Kb(),o.Lb(41,"li",15),o.ic(42," Dapibus ac facilisis in "),o.Lb(43,"span",16),o.ic(44,"2"),o.Kb(),o.Kb(),o.Lb(45,"li",15),o.ic(46," Morbi leo risus "),o.Lb(47,"span",16),o.ic(48,"1"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"modal",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-modal"]],decls:22,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["type","button","data-toggle","modal","data-target","#exampleModal",1,"btn","btn-primary"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Modal"),o.Kb(),o.Lb(4,"button",3),o.ic(5," Launch demo modal "),o.Kb(),o.Lb(6,"div",4),o.Lb(7,"div",5),o.Lb(8,"div",6),o.Lb(9,"div",7),o.Lb(10,"h5",8),o.ic(11,"Modal title"),o.Kb(),o.Lb(12,"button",9),o.Lb(13,"span",10),o.ic(14,"\xd7"),o.Kb(),o.Kb(),o.Kb(),o.Lb(15,"div",11),o.ic(16," ... "),o.Kb(),o.Lb(17,"div",12),o.Lb(18,"button",13),o.ic(19,"Close"),o.Kb(),o.Lb(20,"button",14),o.ic(21,"Save changes"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"pagination",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-pagination"]],decls:41,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["aria-label","..."],[1,"pagination"],[1,"page-item","disabled"],["href","#","tabindex","-1","aria-disabled","true",1,"page-link"],[1,"page-item"],["href","#",1,"page-link"],["aria-current","page",1,"page-item","active"],[1,"sr-only"],["aria-label","Page navigation example"],[1,"pagination","justify-content-center"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Pagination"),o.Kb(),o.Lb(4,"nav",3),o.Lb(5,"ul",4),o.Lb(6,"li",5),o.Lb(7,"a",6),o.ic(8,"Previous"),o.Kb(),o.Kb(),o.Lb(9,"li",7),o.Lb(10,"a",8),o.ic(11,"1"),o.Kb(),o.Kb(),o.Lb(12,"li",9),o.Lb(13,"a",8),o.ic(14,"2 "),o.Lb(15,"span",10),o.ic(16,"(current)"),o.Kb(),o.Kb(),o.Kb(),o.Lb(17,"li",7),o.Lb(18,"a",8),o.ic(19,"3"),o.Kb(),o.Kb(),o.Lb(20,"li",7),o.Lb(21,"a",8),o.ic(22,"Next"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Jb(23,"hr"),o.Lb(24,"nav",11),o.Lb(25,"ul",12),o.Lb(26,"li",5),o.Lb(27,"a",6),o.ic(28,"Previous"),o.Kb(),o.Kb(),o.Lb(29,"li",7),o.Lb(30,"a",8),o.ic(31,"1"),o.Kb(),o.Kb(),o.Lb(32,"li",7),o.Lb(33,"a",8),o.ic(34,"2"),o.Kb(),o.Kb(),o.Lb(35,"li",7),o.Lb(36,"a",8),o.ic(37,"3"),o.Kb(),o.Kb(),o.Lb(38,"li",7),o.Lb(39,"a",8),o.ic(40,"Next"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"popovers",component:(()=>{class t{constructor(){}ngOnInit(){this.loadScript("./assets/params/js/popovers.js")}loadScript(t){const e=document.createElement("script");e.type="text/javascript",e.src=t,e.async=!1,document.getElementsByTagName("head")[0].appendChild(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-popovers"]],decls:15,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["type","button","data-toggle","popover","title","Popover title","data-content","And here's some amazing content. It's very engaging. Right?",1,"btn","btn-lg","btn-danger"],["type","button","data-container","body","data-toggle","popover","data-placement","top","data-content","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-secondary"],["type","button","data-container","body","data-toggle","popover","data-placement","right","data-content","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-secondary"],["type","button","data-container","body","data-toggle","popover","data-placement","bottom","data-content","Vivamus\n    sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-secondary"],["type","button","data-container","body","data-toggle","popover","data-placement","left","data-content","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Popovers"),o.Kb(),o.Lb(4,"button",3),o.ic(5,"Click to toggle popover"),o.Kb(),o.Jb(6,"hr"),o.Lb(7,"button",4),o.ic(8," Popover on top "),o.Kb(),o.Lb(9,"button",5),o.ic(10," Popover on right "),o.Kb(),o.Lb(11,"button",6),o.ic(12," Popover on bottom "),o.Kb(),o.Lb(13,"button",7),o.ic(14," Popover on left "),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"progress",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-progress"]],decls:12,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],[1,"progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","25%"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","50%"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","75%"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","100%"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Progress"),o.Kb(),o.Lb(4,"div",3),o.Jb(5,"div",4),o.Kb(),o.Lb(6,"div",3),o.Jb(7,"div",5),o.Kb(),o.Lb(8,"div",3),o.Jb(9,"div",6),o.Kb(),o.Lb(10,"div",3),o.Jb(11,"div",7),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"spinners",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-spinners"]],decls:28,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"],["role","status",1,"spinner-border","text-secondary"],["role","status",1,"spinner-border","text-success"],["role","status",1,"spinner-border","text-danger"],["role","status",1,"spinner-border","text-warning"],["role","status",1,"spinner-border","text-info"],["role","status",1,"spinner-border","text-light"],["role","status",1,"spinner-border","text-dark"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Spinners"),o.Kb(),o.Lb(4,"div",3),o.Lb(5,"span",4),o.ic(6,"Loading..."),o.Kb(),o.Kb(),o.Lb(7,"div",5),o.Lb(8,"span",4),o.ic(9,"Loading..."),o.Kb(),o.Kb(),o.Lb(10,"div",6),o.Lb(11,"span",4),o.ic(12,"Loading..."),o.Kb(),o.Kb(),o.Lb(13,"div",7),o.Lb(14,"span",4),o.ic(15,"Loading..."),o.Kb(),o.Kb(),o.Lb(16,"div",8),o.Lb(17,"span",4),o.ic(18,"Loading..."),o.Kb(),o.Kb(),o.Lb(19,"div",9),o.Lb(20,"span",4),o.ic(21,"Loading..."),o.Kb(),o.Kb(),o.Lb(22,"div",10),o.Lb(23,"span",4),o.ic(24,"Loading..."),o.Kb(),o.Kb(),o.Lb(25,"div",11),o.Lb(26,"span",4),o.ic(27,"Loading..."),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"toasts",component:(()=>{class t{constructor(){}ngOnInit(){this.loadScript("./assets/params/js/toasts.js")}loadScript(t){const e=document.createElement("script");e.type="text/javascript",e.src=t,e.async=!1,document.getElementsByTagName("head")[0].appendChild(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-toasts"]],decls:16,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-primary"],["role","alert","aria-live","assertive","aria-atomic","true","id","myToast","data-delay","3000",1,"toast"],[1,"toast-header"],["src","...","alt","...",1,"rounded","mr-2"],[1,"mr-auto"],["type","button","data-dismiss","toast","aria-label","Close",1,"ml-2","mb-1","close"],["aria-hidden","true"],[1,"toast-body"]],template:function(t,e){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"h2",2),o.ic(3,"Toasts"),o.Kb(),o.Lb(4,"div",3),o.Lb(5,"div",4),o.Jb(6,"img",5),o.Lb(7,"strong",6),o.ic(8,"Bootstrap"),o.Kb(),o.Lb(9,"small"),o.ic(10,"11 mins ago"),o.Kb(),o.Lb(11,"button",7),o.Lb(12,"span",8),o.ic(13,"\xd7"),o.Kb(),o.Kb(),o.Kb(),o.Lb(14,"div",9),o.ic(15," Hello, world! This is a toast message. "),o.Kb(),o.Kb(),o.Kb(),o.Kb())},styles:[""]}),t})()},{path:"",redirectTo:"/bootstrap-prototype/alerts",pathMatch:"full"},{path:"**",component:l}]}];let d=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[n.c.forChild(s)],n.c]}),t})(),p=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[i.b,d]]}),t})()}}]);