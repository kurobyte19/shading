#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float eqn = pow(st.x - 0.5, 2.00) + pow(st.y - 0.5, 2.00) - 0.25;
    float line = 1.00 - smoothstep(0.00, 0.01, abs(eqn));
    vec3 grad = vec3(0.00);
    vec3 color = (1.00-line)*grad + line*vec3(0.00, 1.00, 0.00);

    gl_FragColor = vec4(color,1);
}