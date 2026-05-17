#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mouseNorm = u_mouse/u_resolution;

    float p = pow(st.x - mouseNorm.x, 2.00) + pow(st.y - mouseNorm.y, 2.00) - 0.001;
    float line = 1.00 - smoothstep(0.0, 0.0001, abs(p));

    vec3 canvas = vec3(1.00);
    vec3 color = (1.00 - line)*canvas + line*vec3(0,0,0);

    gl_FragColor = vec4(color,1);

}