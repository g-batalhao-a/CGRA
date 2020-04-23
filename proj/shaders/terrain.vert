#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {

	vTextureCoord = aTextureCoord;
	vec3 offset=vec3(0.0,0.0,0.0);

    if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
        offset= aVertexNormal*0.1;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}

