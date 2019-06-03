import * as ThreeModule from 'three';

const THREE = {...ThreeModule};

const TransparentWebGLRenderer = function(params) {
	THREE.WebGLRenderer.call(this, params);
	var self = this;
	this.clear = function(color, depth, stencil) {
		var bits = 0;
		var _gl = self.getContext();
		if ( color === undefined || color ) bits |= _gl.COLOR_BUFFER_BIT;
		if ( depth === undefined || depth ) bits |= _gl.DEPTH_BUFFER_BIT;
		if ( stencil === undefined || stencil ) bits |= _gl.STENCIL_BUFFER_BIT;
		_gl.clearColor(0, 0, 0, 0)
		_gl.clear( bits );
	}
} 

TransparentWebGLRenderer.prototype = Object.create(THREE.WebGLRenderer.prototype);

export default TransparentWebGLRenderer;