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

define(["require","exports","tslib","../core/promiseUtils","../core/accessorSupport/decorators","./Widget","./DistanceMeasurement2D/DistanceMeasurement2DViewModel","./support/widget"],(function(e,s,t,i,n,a,r,l){var d="esri-button esri-button--secondary",o="esri-button--disabled",u="esri-icon-measure-line",c="esri-distance-measurement-2d",m="esri-widget",p="esri-widget--panel",_="esri-distance-measurement-2d__container",v="esri-distance-measurement-2d__hint",b="esri-distance-measurement-2d__hint-text",w="esri-distance-measurement-2d__panel--error",y="esri-distance-measurement-2d__measurement",M="esri-distance-measurement-2d__measurement-item",x="esri-distance-measurement-2d__measurement-item--disabled",h="esri-distance-measurement-2d__measurement-item-title",g="esri-distance-measurement-2d__measurement-item-value",f="esri-distance-measurement-2d__settings",O="esri-distance-measurement-2d__units",D="esri-distance-measurement-2d__units-label",k="esri-distance-measurement-2d__units-select esri-select",U="esri-distance-measurement-2d__units-select-wrapper",L="esri-distance-measurement-2d__actions",C="esri-distance-measurement-2d__clear-button";return function(e){function s(s,t){var i=e.call(this,s,t)||this;return i.iconClass=u,i.label=void 0,i.messages=null,i.unit=null,i.unitOptions=null,i.view=null,i.viewModel=new r,i}return t.__extends(s,e),s.prototype.render=function(){var e,s,t,i=this,n=this.id,a=this.messages,r=this.viewModel,u=this.visible,H=r.active,S=r.isSupported,q=r.measurementLabel,A=r.state,B=r.unit,E=r.unitOptions,I="disabled"===A,V="measuring"===A||"measured"===A,W=H&&"ready"===A?l.tsx("section",{key:"hint",class:v},l.tsx("p",{class:b},a.hint)):null,j=S?null:l.tsx("section",{key:"unsupported",class:w},l.tsx("p",null,a.unsupported)),z=V?l.tsx("section",{key:"measurement",class:y},(e=a.distance,t="distance",(s=q)?l.tsx("div",{key:t+"-enabled",class:M},l.tsx("span",{class:h},e),l.tsx("span",{class:g},s)):l.tsx("div",{key:t+"-disabled",class:i.classes(M,x),"aria-disabled":"true"},l.tsx("span",{class:h},e)))):null,F=n+"-units",G=V?l.tsx("section",{key:"units",class:O},l.tsx("label",{class:D,for:F},a.unit),l.tsx("div",{class:U},l.tsx("select",{class:k,id:F,onchange:this._changeUnit,bind:this,value:B},E.map((function(e){return l.tsx("option",{key:e,value:e},a.units[e])}))))):null,J=V?l.tsx("div",{key:"settings",class:f},G):null,K=!S||H&&!V?null:l.tsx("div",{class:L},l.tsx("button",{disabled:I,class:this.classes(d,C,I&&o),bind:this,onclick:this._newMeasurement,title:a.newMeasurement,"aria-label":a.newMeasurement},a.newMeasurement)),N=u?l.tsx("div",{class:_},j,W,J,z,K):null;return l.tsx("div",{class:this.classes(c,m,p)},N)},s.prototype._newMeasurement=function(){i.ignoreAbortErrors(this.viewModel.start())},s.prototype._changeUnit=function(e){var s=e.target,t=s.options[s.selectedIndex];t&&(this.viewModel.unit=t.value)},t.__decorate([n.aliasOf("viewModel.active"),l.renderable()],s.prototype,"active",void 0),t.__decorate([n.property()],s.prototype,"iconClass",void 0),t.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],s.prototype,"label",void 0),t.__decorate([n.property(),l.renderable(),l.messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],s.prototype,"messages",void 0),t.__decorate([n.aliasOf("viewModel.unit")],s.prototype,"unit",void 0),t.__decorate([n.aliasOf("viewModel.unitOptions")],s.prototype,"unitOptions",void 0),t.__decorate([n.aliasOf("viewModel.view")],s.prototype,"view",void 0),t.__decorate([n.property({type:r}),l.renderable(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurementLabel"])],s.prototype,"viewModel",void 0),t.__decorate([n.aliasOf("viewModel.visible"),l.renderable()],s.prototype,"visible",void 0),t.__decorate([l.accessibleHandler()],s.prototype,"_newMeasurement",null),t.__decorate([l.accessibleHandler()],s.prototype,"_changeUnit",null),s=t.__decorate([n.subclass("esri.widgets.DistanceMeasurement2D")],s)}(a)}));