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

define(["require","exports","tslib","../../core/Accessor","../../core/Evented","../../core/Logger","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators","../../core/libs/gl-matrix-2/vec2","../../core/libs/gl-matrix-2/vec3","../../core/libs/gl-matrix-2/vec3f64","../../geometry/support/webMercatorUtils","../../support/elevationInfoUtils","../../symbols/support/defaults","../../symbols/support/ElevationInfo","../support/drapedUtils"],(function(e,t,o,r,i,n,a,l,c,s,p,h,y,u,d,b,g){Object.defineProperty(t,"__esModule",{value:!0});var m=n.getLogger("esri.views.interactive.GraphicManipulator"),_=function(e){function t(t){var o=e.call(this,t)||this;return o.layer=null,o.interactive=!0,o.selectable=!1,o.grabbable=!0,o.dragging=!1,o.cursor=null,o.events=new i.EventEmitter,o._circleCollisionCache=null,o._graphicSymbolChangedHandle=null,o._originalSymbol=null,o}return o.__extends(t,e),Object.defineProperty(t.prototype,"graphic",{set:function(e){"mesh"!==a.get(e.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()):m.error("Mesh geometries are not supported")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elevationInfo",{get:function(){var e="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=u.getGraphicEffectiveElevationMode(this.graphic),o=e?e.offset:0;return new b({mode:t,offset:o})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"focusedSymbol",{set:function(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"grabbing",{set:function(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hovering",{set:function(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selected",{set:function(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_focused",{get:function(){return this._get("hovering")||this._get("grabbing")},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)},t.prototype.intersectionDistance=function(e){var t=this._get("graphic");if(!1===t.visible)return null;var o=this._get("focusedSymbol"),r=a.isSome(o)?o:t.symbol,i=t.geometry;if(a.isNone(i))return null;var n=this._get("view");return"2d"===n.type?this._intersectDistance2D(e,n,i,r):this._intersectDistance3D(e,n,t)},t.prototype.attach=function(){this.attachSymbolChanged(),a.isSome(this.layer)&&this.layer.add(this.graphic)},t.prototype.detach=function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),a.isSome(this.layer)&&this.layer.remove(this.graphic)},t.prototype.attachSymbolChanged=function(){var e=this;this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(function(t){a.isSome(t)&&t!==e.focusedSymbol&&t!==e._originalSymbol&&(e._originalSymbol=t,e._focused&&a.isSome(e.focusedSymbol)&&(e.graphic.symbol=e.focusedSymbol))}),!0)},t.prototype.detachSymbolChanged=function(){a.isSome(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)},t.prototype._updateGraphicSymbol=function(){this.graphic.symbol=this._focused&&a.isSome(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol},t.prototype._resetGraphicSymbol=function(){this.graphic.symbol=this._originalSymbol},t.prototype._intersectDistance2D=function(e,t,o,r){if(r=r||d.getDefaultSymbol2D(o),a.isNone(r))return null;var i=this._circleCollisionCache;if("point"!==o.type||"simple-marker"!==r.type){var n=g.intersectsDrapedGeometry(e,o,t);return a.isSome(n)?1:null}if(a.isNone(i)||!i.originalPoint.equals(o)){var c=o,p=t.spatialReference;if(y.canProject(c,p)){n=y.project(c,p);i={originalPoint:c.clone(),mapPoint:n,radiusPx:l.pt2px(r.size)},this._circleCollisionCache=i}}if(a.isSome(i)){var h=l.screenPointObjectToArray(e,v),u=t.state.toScreen(S,i.mapPoint.x,i.mapPoint.y),b=i.radiusPx;return s.vec2.squaredDistance(h,u)<b*b?1:null}return null},t.prototype._intersectDistance3D=function(e,t,o){var r=t.toMap(e,{include:[o]});if(!r)return null;var i=f;return t.renderCoordsHelper.toRenderCoords(r,i)?p.vec3.distance(i,t.state.camera.eye):null},o.__decorate([c.property({constructOnly:!0,nonNullable:!0})],t.prototype,"graphic",null),o.__decorate([c.property({readOnly:!0,dependsOn:["graphic"]})],t.prototype,"elevationInfo",null),o.__decorate([c.property({constructOnly:!0,nonNullable:!0})],t.prototype,"view",void 0),o.__decorate([c.property({value:null})],t.prototype,"focusedSymbol",null),o.__decorate([c.property({constructOnly:!0})],t.prototype,"layer",void 0),o.__decorate([c.property()],t.prototype,"interactive",void 0),o.__decorate([c.property()],t.prototype,"selectable",void 0),o.__decorate([c.property()],t.prototype,"grabbable",void 0),o.__decorate([c.property({value:!1})],t.prototype,"grabbing",null),o.__decorate([c.property()],t.prototype,"dragging",void 0),o.__decorate([c.property()],t.prototype,"hovering",null),o.__decorate([c.property({value:!1})],t.prototype,"selected",null),o.__decorate([c.property()],t.prototype,"cursor",void 0),t=o.__decorate([c.subclass("esri.views.interactive.GraphicManipulator")],t)}(r);t.GraphicManipulator=_;var f=h.vec3f64.create(),v=l.createScreenPointArray(),S=l.createScreenPointArray()}));