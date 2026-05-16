// #version 300 es
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// out vec4 fragColor;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 value = step(vec2(0.50, 0.50), st);
    float color;
    // if(ceil(sin(u_time*10.00)) == 1.00){
    //     if(value.x == value.y){
    //         color = 1.00;
    //     }else {
    //         color = 0.00;
    //     }
    // } else {
        // if(value.x == value.y){
        //     color = 0.00;
        // }else {
        //     color = 1.00;
        // }
    // }
    color = pow(value.x - value.y, 2.00); // bitewise xor in pure arthematic
    // float color = float(int(value.x) ^ int(value.y));
    gl_FragColor = vec4(color,color,color,1);
}