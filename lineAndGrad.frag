#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float line = 1.00 - smoothstep(0.00, 0.01, abs(st.y-st.x));
    vec3 grad = vec3(st.x);
    vec3 color = (1.00-line)*grad + line*vec3(0.00, 1.00, 0.00);

    gl_FragColor = vec4(color,1);
}
