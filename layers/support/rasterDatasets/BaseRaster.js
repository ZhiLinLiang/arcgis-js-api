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

define(["require","exports","tslib","../../../geometry","../../../request","../../../core/Error","../../../core/JSONSupport","../../../core/maybe","../../../core/Promise","../../../core/promiseUtils","../../../core/urlUtils","../../../core/accessorSupport/decorators","../commonProperties","../TileInfo","./RawBlockCache","../rasterFormats/RasterCodec","../rasterFunctions/pixelUtils","../rasterFunctions/rasterProjectionHelper"],(function(e,t,r,n,o,i,a,s,l,u,c,f,p,h,d,m,y,g){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rasterJobHandler=null,t.datasetName=null,t.datasetFormat=null,t.rasterInfo=null,t.ioConfig={sampling:"closest"},t}return r.__extends(t,e),t.prototype.init=function(){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return e=g.load(),this.addResolvingPromise(e),[4,this.when()];case 1:return t.sent(),[2]}}))}))},t.prototype.normalizeCtorArgs=function(e){return e&&e.ioConfig&&(e=r.__assign(r.__assign({},e),{ioConfig:r.__assign({resolution:null,bandIds:null,sampling:"closest",tileInfo:h.create()},e.ioConfig)})),e},Object.defineProperty(t.prototype,"url",{set:function(e){var t=c.urlToObject(e);this._set("url",t.path)},enumerable:!0,configurable:!0}),t.prototype.open=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){throw new i("BaseRaster:open-not-implemented","open() is not implemented")}))}))},t.prototype.fetchTile=function(e,t,o,i){return void 0===i&&(i={}),r.__awaiter(this,void 0,void 0,(function(){var a,s,l,u;return r.__generator(this,(function(r){return a=i.tileInfo,s=a.lodAt(e),l=new n.Point({x:s.resolution,y:s.resolution,spatialReference:a.spatialReference}),u=this._getTileExtent(l,t,o,a),[2,this.fetchPixels(u,a.size[0],a.size[1],i)]}))}))},t.prototype.identify=function(e,t){return void 0===t&&(t={}),r.__awaiter(this,void 0,void 0,(function(){var n,o,i,a,l,u,c,f,p,h,m,y,x,v,_,w,b,R;return r.__generator(this,(function(r){switch(r.label){case 0:return n=this.rasterInfo,o=n.spatialReference,i=n.extent,a=t.datumTransformation,l=g.projectPoint(e,o,a),i.intersects(l)?(u=0,t.srcResolution?(c=g.snapPyramid(t.srcResolution,this.rasterInfo,this.ioConfig.sampling),u=c.pyramidLevel,[3,3]):[3,1]):[2,{location:l,value:null}];case 1:return[4,this.computeBestPyramidLevelForLocation(e,t)];case 2:if(null==(u=r.sent()))return[2,{location:l,value:null}];r.label=3;case 3:return null===(f=this.identifyPixelLocation(l,u,null))?[2,{location:l,value:null}]:(p=f.row,h=f.col,m=f.rowOffset,y=f.colOffset,x=this.url,v=u+"/"+p+"/"+h,_=d.getBlock(x,null,v),s.isSome(_)||(_=this.fetchRawTile(u,p,h,t),d.putBlock(x,null,v,_)),[4,_]);case 4:return(w=r.sent())&&w.pixels&&w.pixels.length>0?(b=m*this.rasterInfo.storageInfo.blockHeight+y,R=!w.mask||w.mask[b]?w.pixels.map((function(e){return e[b]})):null,[2,{location:l,value:R,pyramidLevel:u}]):[2,{location:l,value:null}]}}))}))},t.prototype.fetchPixels=function(e,t,o,i){return void 0===i&&(i={}),r.__awaiter(this,void 0,void 0,(function(){var a,s,l,u,c,f,p,h,d,m,x,v,_,w,b,R,I,k,P,B,C,M,S,T,j;return r.__generator(this,(function(r){switch(r.label){case 0:return a=e.clone().normalize(),e=a[0],s=this.rasterInfo.spatialReference,l=!e.spatialReference.equals(s),u=i.datumTransformation,c=new n.Point({x:(e.xmax-e.xmin)/t,y:(e.ymax-e.ymin)/o,spatialReference:e.spatialReference}),(f=i.srcResolution||(l?g.projectResolution(c,s,e,u):c))?(p=g.snapPyramid(f,this.rasterInfo,this.ioConfig.sampling),h=p.pyramidLevel,d=p.pyramidResolution,p.excessiveReading?[2,null]:(m=this.rasterInfo.storageInfo,null==(x=l?g.projectExtent(e,s,u):e)?[2,null]:(v={x:Math.floor((x.xmin-m.origin.x)/d.x+.1),y:Math.floor((m.origin.y-x.ymax)/d.y+.1)},_=Math.ceil((x.xmax-x.xmin)/d.x-.1),w=Math.ceil((x.ymax-x.ymin)/d.y-.1),_/t>8||w/o>8?[2,null]:[4,this.fetchRawPixels(h,v,{width:_,height:w},i)]))):[2,null];case 1:return(b=r.sent())?(R=h>0?m.pyramidBlockWidth:m.blockWidth,I=h>0?m.pyramidBlockHeight:m.blockHeight,!l&&1===b.pixelBlocks.length&&R===t&&I===o&&f.x===c.x&&f.y===c.y?[2,{extent:e,srcExtent:x,pixelBlock:b.pixelBlocks[0],transformGrid:null}]:(k=g.getProjectionOffsetGrid(e,b.extent,c,u),B=!i.requestRawData,C={rows:k.spacing[0],cols:k.spacing[1]},M=b.pixelBlocks,S=b.mosaicSize,T=b.isPartiallyFilled,this.rasterJobHandler?[4,this.rasterJobHandler.mosaicAndTransform({srcPixelBlocks:M,srcMosaicSize:S,destDimension:B?{width:t,height:o}:null,coefs:B?k.coefficients:null,sampleSpacing:B?C:null},i)]:[3,3])):[2,null];case 2:return P=r.sent(),[3,4];case 3:j=y.mosaic(M,S),P=B?y.approximateTransform(j,{width:t,height:o},k.coefficients,C):j,r.label=4;case 4:return[2,{srcExtent:x,pixelBlock:P,transformGrid:k,extent:e,isPartiallyFilled:T}]}}))}))},t.prototype.fetchRawPixels=function(e,t,o,i){return r.__awaiter(this,void 0,void 0,(function(){var a,s,l,c,f,p,h,d,m,y,g,x,v,_,w,b,R,I,k,P,B,C,M,S,T,j;return r.__generator(this,(function(r){switch(r.label){case 0:if(a=this.rasterInfo.storageInfo,s=a.origin,l=a.blockBoundary,c=e>0?this.rasterInfo.storageInfo.pyramidBlockWidth:this.rasterInfo.storageInfo.blockWidth,f=e>0?this.rasterInfo.storageInfo.pyramidBlockHeight:this.rasterInfo.storageInfo.blockHeight,p=Math.floor(t.x/c),h=Math.floor(t.y/f),d=Math.floor((t.x+o.width-1)/c),m=Math.floor((t.y+o.height-1)/f),y=this.rasterInfo,g=y.pixelSize,x=y.spatialReference,!(v=l[e]))return[2,null];if(_=v.minRow,w=v.minCol,b=v.maxCol,R=v.maxRow,m<_||d<w||h>R||p>b)return[2,null];for(I=[],P=!1,B=h;B<=m;B++)for(C=p;C<=d;C++)B>=_&&C>=w&&R>=B&&b>=C?(k=this._fetchRawTile(e,B,C,i),this.ioConfig.allowPartialFill&&(k=u.create((function(e){k.then((function(t){return e(t)})).catch((function(){P=!0,e(null)}))}))),I.push(k)):I.push(null);return 0===I.length?[2,null]:[4,u.all(I)];case 1:return M=r.sent(),S={height:(m-h+1)*c,width:(d-p+1)*f},T=g.x*Math.pow(2,e),j=g.y*Math.pow(2,e),[2,{extent:new n.Extent({xmin:s.x+p*c*T,xmax:s.x+(d+1)*c*T,ymin:s.y-(m+1)*f*j,ymax:s.y-h*f*j,spatialReference:x}),pixelBlocks:M,mosaicSize:S,isPartiallyFilled:P}]}}))}))},t.prototype.fetchRawTile=function(e,t,n,o){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){throw new i("BaseRaster:read-not-implemented","fetchRawTile() is not implemented")}))}))},t.prototype.computeExtent=function(e){return g.projectExtent(this.rasterInfo.extent,e)},t.prototype.decodePixelBlock=function(e,t){return this.rasterJobHandler?this.rasterJobHandler.decode({data:e,options:t}):m.decode(e,t)},t.prototype.request=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,i,a,s,l,u,c;return r.__generator(this,(function(f){switch(f.label){case 0:n=this.ioConfig.customFetchParameters,i=e.url,a=e.range,s=e.query,l=e.responseType,null==e.retryCount&&this.ioConfig.retryCount&&(e.retryCount=this.ioConfig.retryCount),u=a?{Range:"bytes="+a.from+"-"+a.to}:null,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,o(i,{query:r.__assign(r.__assign({},s),n),headers:u,responseType:l,signal:t})];case 2:return[2,f.sent().data];case 3:if(c=f.sent(),e.retryCount>0)return e.retryCount--,[2,this.request(e,t)];throw c;case 4:return[2]}}))}))},t.prototype.getSliceIndex=function(e){var t=this.rasterInfo.multidimensionalInfo;if(!t||0===e.length)return null;for(var r=0,n=e[0].variableName,o=function(o){var i=t.variables[o],a=i.dimensions;if(i.name!==n)return r+=a.map((function(e){return e.values.length})).reduce((function(e,t){return e+t})),"break";for(var s=a.map((function(e){return e.values.length})),l=a.length,u=function(t){var n=e.filter((function(e){return e.dimensionName===a[t].name}))[0];if(null==n)return{value:null};var o=Array.isArray(n.values[0])?n.values[0][0]:n.values[0],i=a[t].values.indexOf(o);if(-1===i)return{value:null};s.shift(),r+=t===l-1?i:i*s.reduce((function(e,t){return e+t}))},c=0;c<l;c++){var f=u(c);if("object"==typeof f)return f}},i=0;i<t.variables.length;i++){var a=o(i);if("object"==typeof a)return a.value;if("break"===a)break}return r},t.prototype.computeBestPyramidLevelForLocation=function(e,t){return void 0===t&&(t={}),r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,0]}))}))},t.prototype.identifyPixelLocation=function(e,t,r){var n=this.rasterInfo,o=n.spatialReference,i=n.pixelSize,a=n.extent,s=this.rasterInfo.storageInfo,l=s.blockWidth,u=s.blockHeight,c=s.maximumPyramidLevel,f=s.pyramidScalingFactor,p=s.origin,h=g.projectPoint(e,o,r);if(!a.intersects(h))return null;if(t<0||t>c)return null;var d=Math.pow(f,t),m=d*i.x,y=d*i.y,x=(p.y-h.y)/y/u,v=(h.x-p.x)/m/l,_=Math.min(u-1,Math.floor((x-Math.floor(x))*u)),w=Math.min(l-1,Math.floor((v-Math.floor(v))*l));return{pyramidLevel:t,row:Math.floor(x),col:Math.floor(v),rowOffset:_,colOffset:w,srcLocation:h}},t.prototype._getTileExtent=function(e,t,r,o){var i=o.origin,a=o.spatialReference,s=o.size[0],l=o.size[1],u=i.x+r*s*e.x,c=u+s*e.x,f=i.y-t*l*e.y,p=f-l*e.y;return new n.Extent({xmin:u,xmax:c,ymin:p,ymax:f,spatialReference:a})},t.prototype._fetchRawTile=function(e,t,n,o){var i=this.url,a=e+"/"+t+"/"+n,l=d.getBlock(i,o.registryId,a);if(!s.isSome(l)){var c=u.createAbortController();l=this.fetchRawTile(e,t,n,r.__assign(r.__assign({},o),{signal:c.signal})),d.putBlock(i,o.registryId,a,l,c),l.catch((function(){d.deleteBlock(i,o.registryId,a)}))}return o.signal&&u.onAbort(o,(function(){d.decreaseRefCount(i,o.registryId,a)})),l},r.__decorate([f.property(p.url)],t.prototype,"url",null),r.__decorate([f.property({type:String,json:{write:!0}})],t.prototype,"datasetName",void 0),r.__decorate([f.property({type:String,json:{write:!0}})],t.prototype,"datasetFormat",void 0),r.__decorate([f.property()],t.prototype,"rasterInfo",void 0),r.__decorate([f.property()],t.prototype,"ioConfig",void 0),r.__decorate([f.property()],t.prototype,"sourceJSON",void 0),t=r.__decorate([f.subclass("esri.layers.support.rasterDatasets.BaseRaster")],t)}(l.EsriPromiseMixin(a.JSONSupport))}));