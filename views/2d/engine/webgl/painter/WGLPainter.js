// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../../../../core/libs/gl-matrix/mat4","../../../../webgl/FramebufferObject","../Dispatcher","../TextureManager","../GeometryUtils","../MaterialManager","../enums","./WGLTextPainter","./WGLIconPainter","./WGLFillPainter","./WGLLinePainter","./WGLBackgroundPainter","./TileInfoRenderer","./WGLHighlightPainter","./WGLHeatmapPainter","../Utils"],function(t,e,i,r,a,n,s,h,o,l,d,c,_,u,p,f,g,w,x){var y=new Uint8Array(4*x.C_HITTEST_SEARCH_SIZE*x.C_HITTEST_SEARCH_SIZE),M=new Uint32Array(y.buffer),b=new n,E=function(){function t(){this._textPainter=new d,this._iconPainter=new c,this._fillPainter=new _,this._linePainter=new u,this._backgroundPainter=new p,this._hlPainter=new g,this._heatmapPainter=new w,this._extrudeMatrix=new Float32Array(16),this._extrudeNoRotationMatrix=new Float32Array(16),this._extrudeRotateVector=new Float32Array([0,0,1]),this._extrudeScaleVector=new Float32Array([1,1,1]),this._state={rotation:0,width:0,height:0},this._cachedWidth=0,this._cachedHeight=0,this._cachedRotation=0,this._textureManager=new s,this._materialManager=new o}return t.prototype.initialize=function(t){this._materialManager.initialize(t)},t.prototype.update=function(t,e){this._state=t,(this._state.width!==this._cachedWidth||this._state.height!==this._cachedHeight||this._state.rotation!==this._cachedRotation)&&(this._extrudeScaleVector[0]=2/t.width,this._extrudeScaleVector[1]=-2/t.height,r.identity(this._extrudeMatrix),r.rotate(this._extrudeMatrix,this._extrudeMatrix,-t.rotation*h.C_DEG_TO_RAD,this._extrudeRotateVector),r.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),r.transpose(this._extrudeMatrix,this._extrudeMatrix),r.identity(this._extrudeNoRotationMatrix),r.scale(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix,this._extrudeScaleVector),r.transpose(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix),this._cachedWidth=this._state.width,this._cachedHeight=this._state.height,this._cachedRotation=this._state.rotation)},Object.defineProperty(t.prototype,"textureManager",{get:function(){return this._textureManager},enumerable:!0,configurable:!0}),t.prototype.setHighlightOptions=function(t){this._hlPainter.setHighlightOptions(t)},t.prototype.drawHeatmap=function(t,e,r,a){var n=this;if(this._heatmapPainter.bindHeatmapSurface(t,e.displayWidth*a,e.displayHeight*a),this._drawClippingRects(t,e.children),t.setBlendingEnabled(!0),t.setStencilWriteMask(0),t.setBlendFunctionSeparate(1,1,1,0),t.setStencilTestEnabled(!0),e.wglRendererInfo.symbolLevels.forEach(function(i){e.children.forEach(function(s){b.replayList(t,s.displayList,i,n,s,e.wglRendererInfo,l.WGLDrawPhase.GEOMETRY,r,a,!1)})}),t.setStencilTestEnabled(!1),this._heatmapPainter.drawHeatmap(t,e.wglRendererInfo,.75),i("esri-feature-tiles-debug")){this._tileInforenderer||(this._tileInforenderer=new f);for(var s=this._tileInforenderer,h=0,o=e.children;h<o.length;h++){var d=o[h];d.attached&&d.visible&&s.render(t,d)}}},t.prototype.draw=function(t,e,r,a,n){var s=this;if(this._drawClippingRects(t,e.children),t.setBlendingEnabled(!0),t.setStencilWriteMask(0),t.setBlendFunctionSeparate(1,771,1,771),t.setStencilTestEnabled(!0),e.wglRendererInfo.symbolLevels.forEach(function(i){e.children.forEach(function(h){h.displayList&&!h.displayList.empty&&b.replayList(t,h.displayList,i,s,h,e.wglRendererInfo,l.WGLDrawPhase.GEOMETRY,r,a,n)})}),t.setStencilTestEnabled(!1),i("esri-feature-tiles-debug")){this._tileInforenderer||(this._tileInforenderer=new f);for(var h=this._tileInforenderer,o=0,d=e.children;o<d.length;o++){var c=d[o];c.attached&&c.visible&&h.render(t,c)}}},t.prototype.highlight=function(t,e,i,r){var a=this,n=t.getViewport();this._hlPainter.setup(t,n.width,n.height),this._hlPainter.startMaskDraw(t),this._drawClippingRects(t,e.children),t.setBlendingEnabled(!0),t.setStencilWriteMask(0),t.setBlendFunctionSeparate(1,771,1,771),t.setStencilTestEnabled(!0),e.wglRendererInfo.symbolLevels.forEach(function(n){e.children.forEach(function(s){s.hlDisplayList&&!s.hlDisplayList.empty&&b.replayList(t,s.hlDisplayList,n,a,s,e.wglRendererInfo,l.WGLDrawPhase.HIGHLIGHT,i,r,!1)})}),this._hlPainter.draw(t)},t.prototype.hitTest=function(t,e,i,r,n){var s=this,h=x.C_HITTEST_SEARCH_SIZE,o=[0,0],d=[0,0],c=t.state;c.toMap(o,[0,0]),c.toMap(d,[h,h]);var _=r.children.filter(function(t){return!(o[0]>t.bounds[2]||d[0]<t.bounds[0]||o[1]<t.bounds[1]||d[1]>t.bounds[3])});if(0===_.length)return[];var u=t.context;this._hittestFBO||(this._hittestFBO=a.create(u,{colorTarget:0,depthStencilTarget:3,width:h,height:h}));var p=u.getViewport(),f=u.getBoundFramebufferObject();u.bindFramebuffer(this._hittestFBO),u.setViewport(0,0,h,h);var g=u.gl;u.setClearColor(1,1,1,1),u.clear(g.COLOR_BUFFER_BIT),this._drawClippingRects(u,_),u.setBlendingEnabled(!1),u.setStencilWriteMask(0),u.setStencilTestEnabled(!0),r.wglRendererInfo.symbolLevels.forEach(function(e){_.forEach(function(i){i.displayList&&!i.displayList.empty&&b.replayList(u,i.displayList,e,s,i,r.wglRendererInfo,l.WGLDrawPhase.HITTEST,n,t.devicePixelRatio,!1)})}),u.setStencilTestEnabled(!1),u.setBlendingEnabled(!0),this._hittestFBO.readPixels(0,0,h,h,6408,5121,y);for(var w=h*h,E=new Set,R=0;w>R;R++){var S=M[R];4294967295!==S&&E.add(S)}u.bindFramebuffer(f),u.setViewport(p.x,p.y,p.width,p.height);var T=[];return E.forEach(function(t){T.push(t)}),T},t.prototype.drawFill=function(t,e,i,r,a,n,s,h,o,l){this._fillPainter.draw(t,e,i,r,a,n,s,h,o,l,this._materialManager,this._textureManager)},t.prototype.drawLine=function(t,e,i,r,a,n,s,h,o){this._linePainter.draw(t,e,i,r,a,n,s,h,o,this._materialManager,this._textureManager,this._extrudeMatrix)},t.prototype.drawIcon=function(t,e,i,r,a,n,s){this._iconPainter.draw(t,e,i,r,a,n,s,this._materialManager,this._textureManager,this._extrudeMatrix,this._extrudeNoRotationMatrix)},t.prototype.drawText=function(t,e,i,r,a,n,s){this._textPainter.draw(t,e,i,r,a,n,s,this._materialManager,this._textureManager,this._extrudeMatrix,this._extrudeNoRotationMatrix)},t.prototype._drawClippingRects=function(t,e){if(0!==e.length){t.setDepthWriteEnabled(!1),t.setDepthTestEnabled(!1),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!1),t.setStencilOp(7680,7680,7681),t.setClearStencil(0);var i=t.gl;t.clear(i.STENCIL_BUFFER_BIT),t.setStencilWriteMask(255);for(var r,a=e.length,n=a,s=0;a>s;s++)r=e[s],r.stencilRef=n,t.setStencilFunctionSeparate(1032,519,n,255),n--,this._backgroundPainter.draw(t,r);t.setColorMask(!0,!0,!0,!0)}},t}();return E});