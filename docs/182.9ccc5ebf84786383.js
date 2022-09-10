"use strict";(self.webpackChunkcase_study=self.webpackChunkcase_study||[]).push([[182],{3182:(R,Z,i)=>{i.r(Z),i.d(Z,{AuthModule:()=>Y});var c=i(6895),b=i(5823),s=i(9197),n=i(4006),t=i(4650),d=i(7266),m=i(1576),g=i(4859),p=i(9549),f=i(7392),v=i(4144),C=i(3162);function A(e,a){1&e&&t._UZ(0,"mat-progress-bar",10)}let T=(()=>{class e{constructor(o,r,u){this.fb=o,this.authService=r,this.router=u,this.cargando=!1,this.miFormulario=this.fb.group({username:["",[n.kI.required]],password:["",[n.kI.required]]})}login(){this.cargando=!0,this.authService.login(this.miFormulario.value.username,this.miFormulario.value.password).subscribe(o=>{!0===o&&this.router.navigate(["/productos"]),this.cargando=!1})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(d.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:22,vars:3,consts:[["fxLayoutAlign","center center",3,"formGroup","ngSubmit"],["fxLayout","column","fxFlex","30","fxLayoutGap","20px"],[1,"login100-form-title","p-b-49","p-t-90","text-t"],["type","text","formControlName","username","matInput","","required","","placeholder","Ingrese su usuario"],["type","password","formControlName","password","matInput","","required","","placeholder","Ingrese su contrase\xf1a"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/registro",1,"text-m"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(o,r){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(1,"div",1)(2,"span",2),t._uU(3,"Login"),t.qZA(),t.TgZ(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Usuario"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Contrase\xf1a"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"button",5),t.NdJ("click",function(){return r.login()}),t.TgZ(13,"mat-icon"),t._uU(14,"login"),t.qZA(),t._uU(15," Login "),t.qZA(),t.TgZ(16,"div",6)(17,"span",7),t._uU(18," \xbfNo tienes cuenta? "),t.qZA(),t.TgZ(19,"a",8),t._uU(20," Crear una aqu\xed "),t.qZA()()()(),t.YNc(21,A,1,0,"mat-progress-bar",9)),2&o&&(t.Q6J("formGroup",r.miFormulario),t.xp6(12),t.Q6J("disabled",r.miFormulario.invalid||r.cargando),t.xp6(9),t.Q6J("ngIf",r.cargando))},dependencies:[c.O5,s.yS,m.xw,m.SQ,m.Wh,m.yH,g.lW,p.KE,p.hX,f.Hw,v.Nt,C.pW,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:[".text-t[_ngcontent-%COMP%]{color:#a64bf4;-webkit-text-stroke:.5px aliceblue}.text-m[_ngcontent-%COMP%]{color:#a64bf4}"]}),e})();var y=i(5226),h=i.n(y);function F(e,a){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"person_add"),t.qZA())}function x(e,a){1&e&&t._UZ(0,"mat-progress-bar",14)}let I=(()=>{class e{constructor(o,r,u,Q){this.fb=o,this.authService=r,this.idRoute=u,this.router=Q,this.cargando=!1,this.usuario={id:"",name:"",username:"",password:"",email:"",intentos:0,image:"",createAt:new Date,enabled:!1,roles:[],idImage:""},this.files=[],this.foto="",this.idFoto="",this.cambiarImagen=!1,this.miFormulario=this.fb.group({email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(5)]],password2:["",[n.kI.required,n.kI.minLength(5)]],nombre:["",[n.kI.required]],usuario:["",[n.kI.required,n.kI.minLength(5)]]})}registro(){this.cargando=!0,this.usuario.email=this.miFormulario.value.email,this.usuario.password=this.miFormulario.value.password,this.usuario.name=this.miFormulario.value.nombre,this.usuario.username=this.miFormulario.value.usuario,this.authService.register(this.usuario).subscribe(o=>{o.ok?(h().fire("Felicidades!","Usuario creado con exito","success"),this.router.navigateByUrl("/auth/login")):h().fire("Opss!",o.mensaje,"error"),this.cargando=!1})}verificarPassword(){this.miFormulario.get("password")?.value===this.miFormulario.get("password2")?.value?this.miFormulario.get("password2")?.setErrors(null):this.miFormulario.get("password2")?.setErrors({noEsIgual:!0})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(d.e),t.Y36(s.gz),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:33,vars:5,consts:[["fxLayoutAlign","center center",3,"formGroup","ngSubmit"],["fxLayout","column","fxFlex","30","fxLayoutGap","20px"],[1,"login100-form-title","p-b-49","p-t-30","text-t"],["type","email","formControlName","email","matInput","","required","","placeholder","Ingrese su correo"],["type","text","formControlName","nombre","matInput","","required","","placeholder","Ingrese su nombre"],["type","text","formControlName","usuario","matInput","","required","","placeholder","Ingrese su usuario"],["type","password","formControlName","password","matInput","","required","","placeholder","Ingrese su contrase\xf1a",3,"input"],["type","password","formControlName","password2","matInput","","required","","placeholder","verifique su contrase\xf1a",3,"input"],["mat-raised-button","","color","primary",3,"disabled","click"],[4,"ngIf"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/login",1,"text-m"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(o,r){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.registro()}),t.TgZ(1,"div",1)(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Correo"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Nombre"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Usuario"),t.qZA(),t._UZ(15,"input",5),t.qZA(),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Contrase\xf1a"),t.qZA(),t.TgZ(19,"input",6),t.NdJ("input",function(){return r.verificarPassword()}),t.qZA()(),t.TgZ(20,"mat-form-field")(21,"mat-label"),t._uU(22,"Verificar contrase\xf1a"),t.qZA(),t.TgZ(23,"input",7),t.NdJ("input",function(){return r.verificarPassword()}),t.qZA()(),t.TgZ(24,"button",8),t.NdJ("click",function(){return r.registro()}),t.YNc(25,F,2,0,"mat-icon",9),t._uU(26," Crear "),t.qZA(),t.TgZ(27,"div",10)(28,"span",11),t._uU(29," \xbfYa tienes cuenta? "),t.qZA(),t.TgZ(30,"a",12),t._uU(31," Ingresar aqu\xed "),t.qZA()()()(),t.YNc(32,x,1,0,"mat-progress-bar",13)),2&o&&(t.Q6J("formGroup",r.miFormulario),t.xp6(3),t.hij("",r.usuario.id?"Editar":"Nuevo"," usuario"),t.xp6(21),t.Q6J("disabled",r.miFormulario.invalid||r.cargando),t.xp6(1),t.Q6J("ngIf",!r.usuario.id),t.xp6(7),t.Q6J("ngIf",r.cargando))},dependencies:[c.O5,s.yS,m.xw,m.SQ,m.Wh,m.yH,g.lW,p.KE,p.hX,f.Hw,v.Nt,C.pW,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:[".text-t[_ngcontent-%COMP%]{color:#a64bf4;-webkit-text-stroke:.5px aliceblue}.text-m[_ngcontent-%COMP%]{color:#a64bf4}"]}),e})();var U=i(3267);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:0,consts:[["fullscreen",""]],template:function(o,r){1&o&&(t.TgZ(0,"mat-sidenav-container",0),t._UZ(1,"router-outlet"),t.qZA())},dependencies:[s.lC,U.TM],encapsulation:2}),e})();var l=i(3546);let L=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-producto"]],inputs:{producto:"producto"},decls:12,vars:6,consts:[[1,"mt-3","mb-1","animate__animated","animate__fadeIn"],["mat-card-md-image","",1,"img-product",3,"src"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-title-group")(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t._UZ(7,"img",1),t.qZA(),t.TgZ(8,"mat-card-content")(9,"h1"),t._uU(10),t.ALo(11,"currency"),t.qZA()()()()),2&o&&(t.xp6(4),t.Oqu(r.producto.nombre),t.xp6(2),t.Oqu(r.producto.descripcion),t.xp6(1),t.Q6J("src",r.producto.imagen,t.LSH),t.xp6(3),t.hij("",t.lcZ(11,4,r.producto.precio)," "))},dependencies:[l.a8,l.C1,l.dn,l.n5,l.$j,l.nc,c.H9],encapsulation:2}),e})();function J(e,a){if(1&e&&(t.TgZ(0,"div",4),t._UZ(1,"app-producto",5),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.Q6J("producto",o)}}const _=[{path:"",component:q,children:[{path:"listado",component:(()=>{class e{constructor(o){this.authService=o,this.productos=[]}ngOnInit(){this.authService.listarProductos().subscribe(o=>{o.ok?this.productos=o.productos:h().fire("Erro","Opss!, Algo salio mal","error")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-listado"]],decls:7,vars:1,consts:[[1,"container","justify-content-center","text-center","row","mb-5"],[1,"row","mt-5","mb-5","justify-content-end"],["mat-button","","routerLink","/auth/login","color","accent",1,"col","col-2"],["class","col-lg-5 col-sm-10 col-md-10 col-xs-11",4,"ngFor","ngForOf"],[1,"col-lg-5","col-sm-10","col-md-10","col-xs-11"],[3,"producto"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t._uU(3," Login "),t.TgZ(4,"mat-icon"),t._uU(5,"login"),t.qZA()()(),t.YNc(6,J,2,1,"div",3),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngForOf",r.productos))},dependencies:[c.sg,s.rH,g.lW,f.Hw,L],encapsulation:2}),e})()},{path:"login",component:T},{path:"registro",component:I},{path:"**",redirectTo:"listado"}]}];let w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(_),s.Bz]}),e})();var N=i(2041),S=i(4466);let Y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,w,b.o9,N.q,S.m]}),e})()}}]);