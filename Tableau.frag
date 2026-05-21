#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 red    = vec3(0.78, 0.12, 0.12);
vec3 yellow = vec3(0.98, 0.84, 0.08);
vec3 blue   = vec3(0.08, 0.35, 0.64);

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    // HL1
    float bottom1 = step(0.4, st.y - 0.47);
    float left1 = step(0.4, st.x + 0.6);
    float top1 = step(0.4, 1.00 - st.y + 0.3);
    float right1 = step(0.4, 1.00 - st.x + 0.6);
    float hl1 = bottom1 * left1 * top1 * right1;

    // HL 2
    float bottom2 = step(0.4, st.y - 0.32);
    float left2 = step(0.4, st.x + 0.6 );
    float top2 = step(0.4, 1.00 - st.y + 0.15);
    float right2 = step(0.4, 1.00 - st.x + 0.6 );
    float hl2 = bottom2 * left2 * top2 * right2;

    // HL 3
    float bottom3 = step(0.4, st.y + 0.3);
    float left3 = step(0.4, st.x + 0.2);
    float top3 = step(0.4, 1.00 - st.y - 0.47);
    float right3 =  step(0.4, 1.00 - st.x + 0.6);
    float hl3 = bottom3 * left3 * top3 * right3;

    // VL 1
    float bottom4 = step(0.4, st.y - 0.32);
    float left4 = step(0.4, st.x + 0.32);
    float top4 = step(0.4, 1.00 - st.y + 0.6);
    float right4 =  step(0.4, 1.00 - st.x - 0.48);
    float hl4 = bottom4 * left4 * top4 * right4;

    // VL 2
    float bottom5 = step(0.4, st.y + 0.6);
    float left5 = step(0.4, st.x + 0.2);
    float top5 = step(0.4, 1.00 - st.y + 0.6);
    float right5 =  step(0.4, 1.00 - st.x - 0.36);
    float hl5 = bottom5 * left5 * top5 * right5;

    // VL 3
    float bottom6 = step(0.4, st.y + 0.6);
    float left6 = step(0.4, st.x - 0.3);
    float top6 = step(0.4, 1.00 - st.y + 0.6);
    float right6 =  step(0.4, 1.00 - st.x + 0.14);
    float hl6 = bottom6 * left6 * top6 * right6;

    // VL 4
    float bottom7 = step(0.4, st.y + 0.6);
    float left7 = step(0.4, st.x - 0.52);
    float top7 = step(0.4, 1.00 - st.y + 0.6);
    float right7 =  step(0.4, 1.00 - st.x + 0.36);
    float hl7 = bottom7 * left7 * top7 * right7;

    // if ( st.x )

    // mix(red, black, if ());


    float color = clamp((hl1 + hl2 + hl3 + hl4 + hl5 + hl6 + hl7), 0.00, 1.00);
    gl_FragColor = vec4(vec3(color), 1.00);

}