#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    // vec2 mouseNorm = u_mouse/u_resolution;

    float x = u_time / 2.50;
    float path = abs(sin(x * 12.56) * 0.50); // wont work as expected

    float oscillator = abs(sin(u_time));

    float p = pow(st.x - oscillator, 2.00) + pow(st.y - path, 2.00) - 0.001;
    float line = 1.00 - smoothstep(0.0, 0.0001, abs(p));

    vec3 canvas = vec3(1.00);
    vec3 color = (1.00 - line)*canvas + line*vec3(0,0,0);

    gl_FragColor = vec4(color,1);
}