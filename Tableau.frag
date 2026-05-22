// highly inefficient code

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 red    = vec3(0.78, 0.12, 0.12);
vec3 yellow = vec3(0.98, 0.84, 0.08);
vec3 blue   = vec3(0.08, 0.35, 0.64);
vec3 bg  = vec3(0.9059, 0.8627, 0.749);
float drawRect(float length, float width, vec2 pos, vec2 st){
    float top = step(1.00 - (length + pos.y) , 1.00 - st.y);
    float bottom = step(pos.y , st.y);

    float left = step(pos.x, st.x);
    float right = step(1.00 - (width + pos.x), 1.00 - st.x);

    return (left * bottom * top * right);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float vr1 = drawRect(0.66, 0.17, vec2(0.0,0.0), st);
    float vr2 = drawRect(0.56, 0.52, vec2(0.20,0.1), st);
    float vr3 = drawRect(0.15, 0.52, vec2(0.20,0.69), st);
    float vr4 = drawRect(0.15, 0.52, vec2(0.20,0.87), st);
    float vr5 = drawRect(0.07, 0.52, vec2(0.20,0.0), st);
    float vr6 = drawRect(0.07, 0.19, vec2(0.75,0.0), st);
    float vr7 = drawRect(0.07, 0.1, vec2(0.97,0.0), st);
    float vr8 = drawRect(0.56, 0.19, vec2(0.75,0.1), st);
    float vr9 = drawRect(0.15, 0.19, vec2(0.75,0.69), st);
    float vr10 = drawRect(0.15, 0.19, vec2(0.75,0.87), st);
    float vr11 = drawRect(0.56, 0.1, vec2(0.97,0.1), st);
    float vr12 = drawRect(0.15, 0.1, vec2(0.97,0.69), st);
    float vr13 = drawRect(0.15, 0.1, vec2(0.97,0.87), st);
    float vr14 = drawRect(0.15, 0.07, vec2(0.098,0.69), st);
    float vr15 = drawRect(0.15, 0.07, vec2(0.098,0.87), st);
    float vr16 = drawRect(0.15, 0.06, vec2(0.0,0.69), st);
    float vr17 = drawRect(0.15, 0.06, vec2(0.0,0.87), st);

    vec3 yellowBox = mix(vec3(0,0,0), yellow, (vr12 + vr13));
    vec3 blueBox = mix(vec3(0,0,0), blue, (vr6 + vr7));
    vec3 redBox = mix(vec3(0,0,0), red,(vr14 + vr15 + vr16 + vr17));
    vec3 normalBox = mix(vec3(0,0,0), bg, (vr1 + vr2 + vr3 + vr4 + vr5 + vr8 + vr9 + vr10 + vr11));

    vec3 color = vec3(yellowBox + blueBox + redBox + normalBox);

    gl_FragColor = vec4(color, 1.00);
}