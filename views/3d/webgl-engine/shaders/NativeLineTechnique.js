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

define(["require","exports","tslib","../../../../core/maybe","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./NativeLine.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,i,r,a,o,n,l,p,s,u,d,c,h,f){Object.defineProperty(t,"__esModule",{value:!0});var g=function(t){function p(e,i){var r=t.call(this,e,i)||this;return r.stipplePattern=null,r.stippleTextureBind=null,r.stippleTextureRepository=e.stippleTextureRepository,r}return i.__extends(p,t),p.prototype.initializeProgram=function(e){var t=p.shader.get(),i=this.configuration,r=t.build({output:i.output,attributeColor:i.vertexColors,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleUVMaxEnabled:!1,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled});return new h(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),u.Default3D)},p.prototype.dispose=function(){t.prototype.dispose.call(this),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null},p.prototype.bindPass=function(e,t,i){if(this.stipplePattern!==t.stipplePattern){var a=t.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,a),this.stipplePattern=a}if(this.configuration.stippleEnabled){var o=r.isSome(this.stippleTextureBind)?this.stippleTextureBind(e,0)*i.pixelRatio:1;this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/o),this.program.setUniform2f("ndcToPixel",i.viewport[2]/2,i.viewport[3]/2)}if(0===this.configuration.output){if(this.program.setUniform4fv("constantColor",t.color),this.program.setUniform1f("alphaCoverage",Math.min(1,t.width*i.pixelRatio)),this.configuration.stippleOffColorEnabled){var l=r.unwrap(t.stippleOffColor);this.program.setUniform4f("stippleOffColor",l[0],l[1],l[2],l.length>3?l[3]:1)}}else n.OutputHighlight.bindOutputHighlight(e,this.program,i)},p.prototype.bindDraw=function(e){o.Transform.bindUniforms(this.program,e),a.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},p.prototype.initializePipeline=function(){var e=this.configuration,t=f.separateBlendingParams(770,1,771,771),i=function(t,i,r){return void 0===i&&(i=null),void 0===r&&(r=null),f.makePipelineState({blending:i,depthTest:d.depthCompareLess,depthWrite:r,colorWrite:f.defaultColorWriteParams,stencilWrite:e.sceneHasOcludees?d.stencilWriteMaskOn:null,stencilTest:e.sceneHasOcludees?t?d.stencilToolMaskBaseParams:d.stencilBaseAllZerosParams:null})};return 0===e.output?(this._occludeeState=i(!0,e.transparent||e.stippleEnabled?t:null,f.defaultDepthWriteParams),i(!1,e.transparent||e.stippleEnabled?t:null,f.defaultDepthWriteParams)):i(!1)},Object.defineProperty(p.prototype,"primitiveType",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"opaqueOccludeeState",{get:function(){return this._occludeeState},enumerable:!0,configurable:!0}),p.shader=new l.ReloadableShaderModule(c,(function(){return new Promise((function(t,i){e(["./NativeLine.glsl"],t,i)}))})),p}(p.ShaderTechnique);t.NativeLineTechnique=g;var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.output=0,t.slicePlaneEnabled=!1,t.sliceHighlightDisabled=!1,t.vertexColors=!1,t.transparent=!1,t.stippleEnabled=!1,t.stippleOffColorEnabled=!1,t.stippleIntegerRepeatsEnabled=!1,t.sceneHasOcludees=!1,t}return i.__extends(t,e),i.__decorate([s.parameter({count:7})],t.prototype,"output",void 0),i.__decorate([s.parameter()],t.prototype,"slicePlaneEnabled",void 0),i.__decorate([s.parameter()],t.prototype,"sliceHighlightDisabled",void 0),i.__decorate([s.parameter()],t.prototype,"vertexColors",void 0),i.__decorate([s.parameter()],t.prototype,"transparent",void 0),i.__decorate([s.parameter()],t.prototype,"stippleEnabled",void 0),i.__decorate([s.parameter()],t.prototype,"stippleOffColorEnabled",void 0),i.__decorate([s.parameter()],t.prototype,"stippleIntegerRepeatsEnabled",void 0),i.__decorate([s.parameter()],t.prototype,"sceneHasOcludees",void 0),t}(s.ShaderTechniqueConfiguration);t.NativeLineTechniqueConfiguration=b}));