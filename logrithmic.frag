#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float logrithmic = 1.00 - smoothstep(0.00, 0.01, st.y-log(st.x));
    vec3 curve = vec3(0.00, 1.00, 0.00) * logrithmic;

    gl_FragColor = vec4(curve,1);
}