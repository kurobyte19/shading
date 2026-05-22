#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 blue   = vec3(0.3725, 0.6745, 1.0);

float drawRect(float length, float width, vec2 pos, vec2 st){
    float top = step(1.00 - (length + pos.y) , 1.00 - st.y);
    float bottom = step(pos.y , st.y);

    float left = step(pos.x, st.x);
    float right = step(1.00 - (width + pos.x), 1.00 - st.x);

    return (left * bottom * top * right);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 square = vec3(drawRect(0.1, 0.1, vec2(0.1,0.1), st)) * blue;
    vec3 square1 = vec3(drawRect(0.1, 0.1, vec2(0.1,0.1), st)) * blue;

    gl_FragColor = vec4(square + square1, 1.00);
}