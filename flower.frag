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
    float x = 0.125;
    float a = (x/2.00) * (1.00 + sin(u_time));

    float y = pow(st.x - 0.50, 2.00) + pow(st.y - 0.50, 2.00) 
    - x - a * sin(-10.00
    * (atan((st.y - 0.50), (st.x - 0.50)))+u_time*3.00);

    float line = smoothstep(0.0, 0.01, abs(y));

    vec3 canvas = vec3(1.00);

    vec3 color = (1.00 - line)*canvas + line*vec3(0,0,0);
    gl_FragColor = vec4(color,1);
}