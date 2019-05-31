import * as ThreeModule from 'three';

const THREE = {...ThreeModule};

export const TransparentWebGLRenderer = THREE.TransparentWebGLRenderer = THREE.WebGLRenderer;

TransparentWebGLRenderer.prototype.clear = function(color, depth, stencil) {
	var bits = 0;

	if ( color === undefined || color ) bits |= _gl.COLOR_BUFFER_BIT;
	if ( depth === undefined || depth ) bits |= _gl.DEPTH_BUFFER_BIT;
	if ( stencil === undefined || stencil ) bits |= _gl.STENCIL_BUFFER_BIT;
	_gl.clearColor(0, 0, 0, 0)
	_gl.clear( bits );
}