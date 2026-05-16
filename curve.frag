#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float curvepwr = 8.00;
    float y = st.y - pow(st.x, curvepwr); // storing function as whole it seems?
    float parabola = 1.00 - smoothstep(0.00, 0.02, abs(y));

    vec3 grad = vec3(pow(st.x, curvepwr));
    vec3 color = (1.00 - parabola)*grad + parabola * vec3(0.00, 1.00, 0.00);

    gl_FragColor = vec4(color, 1.00);

}