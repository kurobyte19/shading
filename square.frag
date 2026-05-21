#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec2 color1 = step(vec2(0.1), st.xy);
    float pct1 = color1.x * color1.y;

    vec2 color2 = step(vec2(0.1), 1.00 - st.xy);
    float pct2 = color2.x * color2.y;

    float final = pct1 * pct2;

    gl_FragColor = vec4(vec3(final),1.00);
}

// things i wanna do
// 1. rotate the square (animation)