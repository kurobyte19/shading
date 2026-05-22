#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 skyLight = vec3(0.984, 0.502, 0.220);
vec3 skyDark  = vec3(0.204, 0.373, 0.612);
vec3 sunCore   = vec3(0.980, 0.320, 0.180);
vec3 sunEdge   = vec3(1.000, 0.580, 0.280);
vec3 black = vec3(0.00);
vec3 white = vec3(1.00);

float plotExplicit(float pct, vec2 st){
    return smoothstep(pct-0.01, pct, st.y);
}

float plotImplicit(float pct){
    return 1.00 - smoothstep(0.00, 0.0001, pct);
}

float genStarMask(float r, vec2 pos, vec2 st){
    return plotImplicit(pow(abs(st.x - pos.x), 0.5) 
    + pow(abs(st.y - pos.y), 0.5) 
    - pow(r, 0.5));
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    // float sparkle = abs(sin(u_time)) * 0.002 + 0.01;

    float circleMask =  pow(st.x - 0.5, 2.00) + pow(st.y  - 0.25, 2.00) - 0.02;
    float sineMaskone = sin(st.x * 4.24 + 0.8) * 0.5 - st.y;
    float sineMasktwo = sin((st.x * 4.24)- 1.9) * 0.5 - st.y;

    float bigDipper = genStarMask(0.009,vec2(0.15, 0.85), st);
    bigDipper += genStarMask(0.009,vec2(0.3, 0.9), st);
    bigDipper += genStarMask(0.009,vec2(0.42, 0.85), st);
    bigDipper += genStarMask(0.009,vec2(0.58, 0.8), st);
    bigDipper += genStarMask(0.009,vec2(0.68, 0.75), st);
    bigDipper += genStarMask(0.009,vec2(0.79, 0.89), st);
    bigDipper += genStarMask(0.009,vec2(0.83, 0.7), st);
    

    vec3 sun = vec3(mix(sunCore, sunEdge, st.y));
    vec3 sky = vec3(mix(skyLight, skyDark, st.y * 1.00));
    vec3 mountain = vec3(mix(black, white, 0.00));
    vec3 star = vec3(mix(black, white, 1.00));

    vec3 color1 = mix(sky, sun, plotImplicit(circleMask));
    vec3 color2 = mix(mountain, color1, (plotImplicit(sineMaskone)));
    vec3 color3 = mix(mountain, color2, (plotImplicit(sineMasktwo)));
    vec3 finalColor = mix(color3, star, bigDipper);
    
    gl_FragColor = vec4(finalColor , 1.0);
}

// additive blending wont work here becuase color value overflows 
// and becomes white inside the circle