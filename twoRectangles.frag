#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 red   = vec3(0.85, 0.08, 0.12);
vec3 gold  = vec3(0.95, 0.78, 0.25);

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float bottom = step(0.8, st.y);
    float left = step(0.00, st.x);
    float top = step(0.1, 1.00 - st.y);
    float right = step(0.00, 1.00 - st.x);

    float bottom1 = step(0.0, st.y);
    float left1 = step(0.8, st.x);
    float top1 = step(0.0, 1.00 - st.y);
    float right1 = step(0.1, 1.00 - st.x);

    // logical XOR arithmetically. 
    float finalDraw = abs((bottom * left * right * top) * 1.00 - (bottom1 * left1 * right1 * top1));

    vec3 color = mix(red, gold, finalDraw);

    gl_FragColor = vec4(color, 1.00);
}