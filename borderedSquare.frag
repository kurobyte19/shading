#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float bottom = step(0.1, st.y);
    float left = step(0.1, st.x);

    float top = step(0.1, 1.00 - st.y);
    float right = step(0.1, 1.00 - st.x);

    float bottom1 = step(0.15, st.y);
    float left1 = step(0.15, st.x);

    float top1 = step(0.15, 1.00 - st.y);
    float right1 = step(0.15, 1.00 - st.x);

    float color1 = bottom1 * left1 * top1 * right1;
    float color = (bottom * left * top * right) * (1.00 - (bottom1 * left1 * top1 * right1)) ;

    gl_FragColor = vec4(vec3(1.00 - color), 1.00);
}