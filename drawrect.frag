#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float drawRect(float length, float width, vec2 pos, vec2 st){
    float top = step(1.00 - (length + pos.y) , 1.00 - st.y);
    float bottom = step(pos.y , st.y);

    float left = step(pos.x, st.x);
    float right = step(1.00 - (width + pos.x), 1.00 - st.x);

    return (left * bottom * top * right);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float square = drawRect(0.1, 0.1, vec2(0.1,0.1), st);
    float rectangle = drawRect(0.2, 0.5, vec2(0.3,0.3), st);

    float finalDraw = clamp((square + rectangle), 0.00, 1.00);

    vec3 color = vec3(finalDraw);

    gl_FragColor = vec4(color, 1.00);
}