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

uniform float timeFactor;
uniform float speed;

void main() {
    vTextureCoord = aTextureCoord;

    vec3 offset=vec3(0.0,0.0,0.0);
    float height =  0.08*sin(aVertexPosition.x+10.0);
    offset.z =  height *sin( speed*100.0 * timeFactor);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}