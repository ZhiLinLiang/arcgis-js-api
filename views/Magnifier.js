// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Accessor","../core/accessorSupport/decorators"],(function(e,o,t,r,p){return function(e){function o(o){var t=e.call(this,o)||this;return t.factor=1.5,t.offsetX=0,t.offsetY=0,t.position=null,t.visible=!1,t}return t.__extends(o,e),Object.defineProperty(o.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.__decorate([p.property({type:Number})],o.prototype,"factor",void 0),t.__decorate([p.property({type:Number})],o.prototype,"offsetX",void 0),t.__decorate([p.property({type:Number})],o.prototype,"offsetY",void 0),t.__decorate([p.property()],o.prototype,"position",void 0),t.__decorate([p.property({readOnly:!0,dependsOn:["factor","offsetX","offsetY","position","visible"]})],o.prototype,"version",null),t.__decorate([p.property({type:Boolean})],o.prototype,"visible",void 0),o=t.__decorate([p.subclass("esri.views.Magnifier")],o)}(r)}));