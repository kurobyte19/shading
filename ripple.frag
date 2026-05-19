#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.000,0.392,0.588);
vec3 colorB = vec3(0.624,0.969,1.000);

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    float radiusGen = sin(fract(u_time)/1.57);
    float radiusOne = radiusGen;
    float eqn = pow(st.x - 0.5, 2.00) + pow(st.y - 0.5, 2.00) - radiusOne;

    float line = 1.00 - smoothstep(0.00, 0.001, abs(eqn));

    vec3 color = mix(colorA, colorB, line);

    gl_FragColor = vec4(color,1);
}