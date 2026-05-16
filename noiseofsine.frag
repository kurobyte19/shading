#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(float pct, vec2 st){
    return smoothstep(pct - 0.01, pct, st.y) 
    - smoothstep(pct , pct + 0.01, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float y = floor(st.x / 0.1 ) * 0.1;
    float line = plot(y, st);
    vec3 canvas = vec3(1.00);

    vec3 color = (1.00 - line)*canvas + line*vec3(0,0,0);
    gl_FragColor = vec4(color,1);
}