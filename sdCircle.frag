#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float sdCircle(vec2 p, float r){
    return distance(p, vec2(0.5)) - r;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    // float eqn = pow(st.x - 0.50, 2.00) + pow(st.y - 0.50, 2.00) - 0.20;
    float d = smoothstep(0.100, 0.101 ,sdCircle(vec2(st), 0.10));
    vec3 color = vec3(d);
    gl_FragColor = vec4(color, 1.00);
}