#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    // vec2 mouseNorm = u_mouse/u_resolution;

    float x = u_time / 4.50;
    float path = abs(sin(st.x * 12.56) * 0.50); // wont work as expected

    float oscillator = abs(sin(x));

    float p = pow(st.x - oscillator, 2.00) + pow(st.y - path, 2.00) - 0.001;
    vec3 color;
    if(p > 0.00){
        color = vec3(0.00, 0.00, 0.00);
    } else if (p < 0.00){
        color = vec3(sin(st.x-u_time*3.0) ,0 ,0) + vec3(0 ,sin(st.x - PI/2.0-u_time*3.0) ,0) + vec3(0 ,0 ,sin(st.x - PI-u_time*3.0));
    }
    else{
        color = vec3(1.00, 1.00, 1.00);
    }
    float line = 1.00 - smoothstep(0.0, 0.0001, (p));

    vec3 canvas = vec3(1.00);
    vec3 object = (1.00 - line)*canvas + line*color;

    gl_FragColor = vec4(object,1);
}

// vec3(sin(st.x-u_time*3.0) ,0 ,0) + vec3(0 ,sin(st.x - PI/2.0-u_time*3.0) ,0) + vec3(0 ,0 ,sin(st.x - PI-u_time*3.0)