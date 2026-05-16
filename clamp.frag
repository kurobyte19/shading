#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float line = clamp(st.x, 0.20, 0.80);
    vec3 color = vec3(line);
    // clamp keep numbers in range
    // clamp(x, a, b) => returns a when x is less than a and 
    // b when x is greater than b. ANy values between them will
    // remain same
    gl_FragColor = vec4(color , 1.00);
}