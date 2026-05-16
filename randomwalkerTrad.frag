#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float randNumGen(float x){
    return fract(sin(x)*43758.5453123);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float x = 0.00;
    float y = 0.00;
    float direction = floor(randNumGen(floor(u_time)) * 4.0);
    if(direction == 0.00){
        x += 0.1;
    } else if(direction == 1.00){
        x += -0.1;
    } else if(direction == 2.00){
        y += 0.1;
    } else{
        y += -0.1;
    }

    float p = pow(st.x - 0.50 + x, 2.00) + pow(st.y - 0.50 + y, 2.00) - 0.001;

    float line = 1.00 - smoothstep(0.0, 0.0001, (p));

    vec3 canvas = vec3(1.00);
    vec3 color = (1.00 - line)*canvas + line*vec3(0,0,0);

    gl_FragColor = vec4(color,1);

}