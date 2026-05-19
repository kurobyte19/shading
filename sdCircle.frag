#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float sdCircle(vec2 p, float r){
    return distance(p, vec2(0.5)) - r;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    // float eqn = pow(st.x - 0.50, 2.00) + pow(st.y - 0.50, 2.00) - 0.20;
    // float d = smoothstep(0.100, 0.101 ,sdCircle(vec2(st), 0.10));
    float radius = abs(sin(u_time*2.00))*0.25;
    float d = sdCircle(vec2(st), radius);
    vec3 color = mix(colorA, colorB, d);
    gl_FragColor = vec4(color, 1.00);
}