#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    float bottom = step(0.1, st.y);
    float left = step(0.2, st.x);

    vec2 color2 = step(vec2(0.1), 1.00 - st.xy);
    float pct2 = color2.x * color2.y;

    color = vec3(bottom * left * pct2);
    gl_FragColor = vec4(vec3(color), 1.00);
}