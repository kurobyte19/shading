#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float val = smoothstep(0.00, 0.50, st.x);
    // smoothstep is special case of hermite interpolation
    // where both tangent vectors at both edges is set to zero
    // providing a smooth version of polynomial interpolation
    vec3 color = vec3(val);
    gl_FragColor = vec4(color, 1.00);
}