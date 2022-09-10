"use strict";(self.webpackChunkcase_study=self.webpackChunkcase_study||[]).push([[585],{8585:(k,g,n)=>{n.r(g),n.d(g,{ProductosModule:()=>F});var s=n(6895),T=n(2041),C=n(9197),t=n(4650),f=n(5315),p=n(1576),d=n(4859),c=n(3546),l=n(7392),h=n(4633);let Z=(()=>{class r{constructor(){this.onNuevaCompra=new t.vpe,this.compra={id:"",cantidad:0,foto:"",precio:0,nombre:"",existentes:0},this.cantidad=0}agregarAlCarrito(o){this.compra.cantidad=this.cantidad,this.compra.id=o.id,this.compra.foto=o.imagen,this.compra.precio=o.precio,this.compra.nombre=o.nombre,this.compra.existentes=o.existentes,this.onNuevaCompra.emit(this.compra),this.cantidad=0}agregar(o){this.cantidad+=o}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-tarjeta-producto"]],inputs:{producto:"producto"},outputs:{onNuevaCompra:"onNuevaCompra"},decls:25,vars:9,consts:[["mat-card-image","","alt","",3,"src"],[1,"ml"],["mat-mini-fab","","color","accent",3,"disabled","click"],["mat-mini-fab","","color","accent",1,"ml",3,"disabled","click"],["mat-button","","color","accent",3,"disabled","click"],["mat-list-icon",""]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()(),t._UZ(6,"img",0),t.TgZ(7,"mat-card-content")(8,"strong"),t._uU(9),t.TgZ(10,"small",1),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-card-actions")(13,"button",2),t.NdJ("click",function(){return a.agregar(-1)}),t.TgZ(14,"mat-icon"),t._uU(15,"remove"),t.qZA()(),t.TgZ(16,"button",3),t.NdJ("click",function(){return a.agregar(1)}),t.TgZ(17,"mat-icon"),t._uU(18,"add"),t.qZA()(),t.TgZ(19,"button",4),t.NdJ("click",function(){return a.agregarAlCarrito(a.producto)}),t._uU(20,"Agregar al "),t.TgZ(21,"mat-icon",5),t._uU(22,"shopping_cart"),t.qZA(),t.TgZ(23,"span",1),t._uU(24),t.qZA()()()()),2&o&&(t.xp6(3),t.Oqu(a.producto.nombre),t.xp6(2),t.Oqu(a.producto.descripcion),t.xp6(1),t.Q6J("src",a.producto.imagen,t.LSH),t.xp6(3),t.hij("$",a.producto.precio," "),t.xp6(2),t.hij("Existentes: ",a.producto.existentes,""),t.xp6(2),t.Q6J("disabled",a.cantidad<1),t.xp6(3),t.Q6J("disabled",a.cantidad>=a.producto.existentes),t.xp6(3),t.Q6J("disabled",a.cantidad<1),t.xp6(5),t.Oqu(a.cantidad))},dependencies:[d.lW,c.a8,c.dk,c.dn,c.n5,c.$j,c.hq,c.G2,l.Hw,h.Nh],styles:[".ml[_ngcontent-%COMP%]{margin-left:10px}"]}),r})();function v(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"div",3)(1,"app-tarjeta-producto",4),t.NdJ("onNuevaCompra",function(i){t.CHM(o);const m=t.oxw();return t.KtG(m.agregarCompra(i))}),t.qZA()()}if(2&r){const o=e.$implicit;t.xp6(1),t.Q6J("producto",o)}}let x=(()=>{class r{constructor(o){this.productoService=o,this.productos=[],this.arregloCompras=[]}ngOnInit(){this.productoService.listarProductos().subscribe(o=>{this.productos=o.productos}),localStorage.getItem("arregloCompras")&&(this.arregloCompras=JSON.parse(localStorage.getItem("arregloCompras")))}agregarCompra({id:o,cantidad:a,foto:i,precio:m,nombre:I,existentes:B}){let _=!0;this.arregloCompras.forEach(b=>{b.id===o&&(b.cantidad+=a,_=!1)}),_&&this.arregloCompras.push({id:o,cantidad:a,foto:i,precio:m,nombre:I,existentes:B})}ngOnDestroy(){localStorage.setItem("arregloCompras",JSON.stringify(this.arregloCompras))}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(f.k))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-comprar"]],decls:6,vars:1,consts:[[1,"text-center"],["fxLayout","row wrap","fxLayoutAlign","center","fLayoutGap","20px","fxLayout.xs","column"],["fxFlex","30","fxFlex.lg","15","fxFlex.sm","30","class","animate__animated animate__bounce",4,"ngFor","ngForOf"],["fxFlex","30","fxFlex.lg","15","fxFlex.sm","30",1,"animate__animated","animate__bounce"],[3,"producto","onNuevaCompra"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Productos"),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"div",1),t.YNc(5,v,2,1,"div",2),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",a.productos))},dependencies:[s.sg,p.xw,p.Wh,p.yH,Z],styles:["*[_ngcontent-%COMP%]{margin:15px}"]}),r})();var y=n(5226),u=n.n(y);let j=(()=>{class r{constructor(){this.onIdBorrar=new t.vpe,this.onCambiarCantidad=new t.vpe}agregar(o){this.compra.cantidad+=o,this.onCambiarCantidad.emit(this.compra)}eliminarCompra(o){this.onIdBorrar.emit(o)}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-tarjeta-carrito"]],inputs:{compra:"compra"},outputs:{onIdBorrar:"onIdBorrar",onCambiarCantidad:"onCambiarCantidad"},decls:20,vars:6,consts:[["mat-card-image","",1,"img-fluid",3,"src"],["mat-mini-fab","","color","accent",3,"disabled","click"],["mat-mini-fab","","color","accent",1,"ml",3,"disabled","click"],["mat-mini-fab","","color","accent",1,"ml",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"strong"),t._uU(8),t.qZA(),t._UZ(9,"img",0),t.qZA(),t.TgZ(10,"mat-card-actions")(11,"button",1),t.NdJ("click",function(){return a.agregar(-1)}),t.TgZ(12,"mat-icon"),t._uU(13,"remove"),t.qZA()(),t.TgZ(14,"button",2),t.NdJ("click",function(){return a.agregar(1)}),t.TgZ(15,"mat-icon"),t._uU(16,"add"),t.qZA()(),t.TgZ(17,"button",3),t.NdJ("click",function(){return a.eliminarCompra(a.compra.id)}),t.TgZ(18,"mat-icon"),t._uU(19,"delete"),t.qZA()()()()),2&o&&(t.xp6(3),t.hij("",a.compra.nombre," "),t.xp6(2),t.hij("Cantidad:",a.compra.cantidad,""),t.xp6(3),t.hij("Total:$ ",a.compra.precio*a.compra.cantidad,""),t.xp6(1),t.Q6J("src",a.compra.foto,t.LSH),t.xp6(2),t.Q6J("disabled",a.compra.cantidad<1),t.xp6(3),t.Q6J("disabled",a.compra.existentes===a.compra.cantidad))},dependencies:[d.lW,c.a8,c.dk,c.dn,c.n5,c.$j,c.hq,c.G2,l.Hw],styles:[".ml[_ngcontent-%COMP%]{margin-left:4px}.redondeo[_ngcontent-%COMP%]{border-radius:90px}"]}),r})();function J(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"div",6)(1,"app-tarjeta-carrito",7),t.NdJ("onIdBorrar",function(i){t.CHM(o);const m=t.oxw();return t.KtG(m.borrarCompra(i))})("onCambiarCantidad",function(i){t.CHM(o);const m=t.oxw();return t.KtG(m.cambiarCantidad(i))}),t.qZA()()}if(2&r){const o=e.$implicit;t.xp6(1),t.Q6J("compra",o)}}let A=(()=>{class r{constructor(o){this.ps=o,this.compras=[],this.realizarCompra=[],this.cargando=!1}ngOnInit(){localStorage.getItem("arregloCompras")&&(this.compras=JSON.parse(localStorage.getItem("arregloCompras")),this.compras.forEach(o=>{o.cantidad>o.existentes&&(o.cantidad=o.existentes)}))}borrarCompra(o){this.compras=this.compras.filter(a=>a.id!=o),localStorage.setItem("arregloCompras",JSON.stringify(this.compras))}cambiarCantidad(o){this.compras.forEach(a=>{a.id===o.id&&(a.cantidad=o.cantidad)}),localStorage.setItem("arregloCompras",JSON.stringify(this.compras))}comprar(){this.cargando=!0,this.compras.forEach(({id:o,cantidad:a})=>{this.realizarCompra.push({id:o,cantidad:-1*a})}),this.ps.comprarProductos(this.realizarCompra).subscribe(o=>{o.ok?(localStorage.removeItem("arregloCompras"),this.compras=[],u().fire("Compra exitosa!",o.mensaje,"success")):u().fire("Error, ",o.mensaje,"error"),this.cargando=!1})}cacelarCompra(){u().fire({title:"\xbfEstas seguro de eliminar la compra?",imageWidth:150,imageHeight:150,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si eliminar"}).then(o=>{o.isConfirmed&&(localStorage.removeItem("arregloCompras"),this.compras=[],this.ngOnInit())})}ngOnDestroy(){localStorage.setItem("arregloCompras",JSON.stringify(this.compras))}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(f.k))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-carrito"]],decls:14,vars:3,consts:[[1,"text-center"],[1,"container","justify-content-center","row","ms-4"],["mat-button","","color","basic",1,"borde","ms-5","mb-4",3,"disabled","click"],["mat-list-icon",""],["mat-button","",1,"borde","ms-5",3,"disabled","click"],["class","animate__animated animate__rubberBand row col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-6 mb-4",4,"ngFor","ngForOf"],[1,"animate__animated","animate__rubberBand","row","col-xl-2","col-lg-3","col-md-4","col-sm-5","col-xs-6","mb-4"],[3,"compra","onIdBorrar","onCambiarCantidad"]],template:function(o,a){1&o&&(t.TgZ(0,"h2",0),t._uU(1,"Carrito de compras"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",1)(4,"div")(5,"button",2),t.NdJ("click",function(){return a.comprar()}),t._uU(6," Comprar "),t.TgZ(7,"mat-icon",3),t._uU(8,"shopping_bag"),t.qZA()(),t.TgZ(9,"button",4),t.NdJ("click",function(){return a.cacelarCompra()}),t._uU(10," Cancelar comprar "),t.TgZ(11,"mat-icon",3),t._uU(12,"delete_forever"),t.qZA()()(),t.YNc(13,J,2,1,"div",5),t.qZA()),2&o&&(t.xp6(5),t.Q6J("disabled",a.compras.length<1||a.cargando),t.xp6(4),t.Q6J("disabled",a.compras.length<1||a.cargando),t.xp6(4),t.Q6J("ngForOf",a.compras))},dependencies:[s.sg,d.lW,l.Hw,h.Nh,j],styles:[".borde[_ngcontent-%COMP%]{border:PowderBlue 2px solid;border-radius:20px}.mt[_ngcontent-%COMP%]{margin-top:15px}.ml[_ngcontent-%COMP%]{margin-left:15px}"]}),r})();var N=n(123);const U=[{path:"",component:(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-home"]],decls:1,vars:0,template:function(o,a){1&o&&t._UZ(0,"app-home-page")},dependencies:[N.h],encapsulation:2}),r})(),children:[{path:"comprar",component:x},{path:"carrito",component:A},{path:"**",redirectTo:"comprar"}]}];let O=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[C.Bz.forChild(U),C.Bz]}),r})();var P=n(5823),S=n(4466);let F=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[s.ez,O,P.o9,T.q,S.m]}),r})()}}]);