// in progress

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 blueDark  = vec3(0.078, 0.180, 0.380);
vec3 blueLight = vec3(0.376, 0.580, 0.760); 
vec3 orangeWarm = vec3(0.8196, 0.5412, 0.3529);
vec3 orangeGlow  = vec3(1.0, 0.9059, 0.7333);

vec3 waterDeep   = vec3(0.065, 0.145, 0.290);   // Deep dark water (base)
vec3 waterReflect = vec3(0.980, 0.580, 0.320);  // Warm orange-gold reflection

float plot(float pct, vec2 st){
    return 1.00 - smoothstep(pct , pct+0., st.y) ;
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float vanishLine = plot(0.1, st);
    
    // horizan
    float horizan = 0.9 * pow(abs((st.x * 0.80 ) - 0.5), 2.0) + 0.25;

    vec3 color = vec3(0.00);

    float line = plot(horizan, st);

    float final = clamp(line + vanishLine, 0.0, 1.0);

    vec3 water = mix(blueLight, blueDark, st.y / 0.5 + 0.2);
    vec3 sky   = mix(orangeGlow, orangeWarm, (st.y + st.x) - 0.1);
    vec3 reflection = mix(waterReflect, waterDeep, pow(st.y, 1.6));
    vec3 lower = mix(reflection, water, line);
    color = mix(sky, lower, final);

    gl_FragColor = vec4(color,1.00);
}

