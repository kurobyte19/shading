#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

vec3 blueDark  = vec3(0.078, 0.180, 0.380);
vec3 blueLight = vec3(0.376, 0.580, 0.760);
vec3 orangeWarm = vec3(0.980, 0.502, 0.180);
vec3 orangeGlow  = vec3(1.000, 0.753, 0.310);

float modulus(float value){
    if(value >= 0.00){
        return value;
    } else{
        return -1.00 * value;
    }
}

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y)-
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);


    float eqn = 0.50 * sqrt(modulus((st.x * 0.1) - 0.06)) + 0.10;

    

    float height = smoothstep(0.1, 0.222474, st.y);
    // color = mix(mix(blueLight, blueDark, ocean), mix(orangeWarm, orangeGlow, sky), height);

    // lines = clamp(lines, 0.0, 1.0); 
    color = mix(colorB, colorA, color);

    gl_FragColor = vec4(color,1.0);
}
