#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float binaryToDecimal(vec2 bin){
    float dec = bin.x * pow(2.00 ,1.00) + bin.y * pow(2.00 ,0.00);
    return dec;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 value = step(vec2(0.50, 0.50), st);
    float value2 = binaryToDecimal(value);
    float x = u_time * 4.00;
    float cond = floor(4.00 * (x - floor(x)));
    vec3 color;
    if(cond == 0.00){
        if(value2 == 0.00){
            color = vec3(1.00, .00, 0.00); 
        } else if (value2 == 1.00){
            color = vec3(0.00, 1.00, 0.00); 
        } else if (value2 == 2.00){
            color = vec3(0.00, 0.00, 1.00); 
        } else {
            color = vec3(1.00, 1.00, 1.00); 
        }   
    } else if(cond == 1.00){
        if(value2 == 0.00){
            color = vec3(0.00, 1.00, 0.00); 
        } else if (value2 == 1.00){
            color = vec3(1.00, 1.00, 1.00); 
        } else if (value2 == 2.00){
            color = vec3(1.00, 0.00, 0.00); 
        } else {
            color = vec3(0.00, 0.00, 1.00); 
        }    
    } else if(cond == 2.00){
        if(value2 == 0.00){
            color = vec3(1.00, 1.00, 1.00); 
        } else if (value2 == 1.00){
            color = vec3(0.00, 0.00, 1.00); 
        } else if (value2 == 2.00){
            color = vec3(0.00, 1.00, 0.00); 
        } else {
            color = vec3(1.00, 0.00, 0.00); 
        }    
    } else {
        if(value2 == 0.00){
            color = vec3(0.00, 0.00, 1.00); 
        } else if (value2 == 1.00){
            color = vec3(1.00, 0.00, 0.00); 
        } else if (value2 == 2.00){
            color = vec3(1.00, 1.00, 1.00); 
        } else {
            color = vec3(0.00, 1.00, 0.00); 
        }    
    }

    // if(value2 == 0.00){
    //     color = vec3(1.00, 1.00, 0.00); 
    // } else if (value2 == 1.00){
    //     color = vec3(0.00, 1.00, 1.00); 
    // } else if (value2 == 2.00){
    //     color = vec3(1.00, 0.00, 1.00); 
    // } else {
    //     color = vec3(0.00, 0.00, 0.00); 
    // }
    gl_FragColor = vec4(color,1.00);
}