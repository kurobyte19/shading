#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 color = vec2(1.0,1.0);
	gl_FragColor = vec4(sin(st.x-u_time*3.0) ,0 ,0 , 1.0) + vec4(0 ,sin(st.x - PI/2.0-u_time*3.0) ,0 , 1.0) + vec4(0 ,0 ,sin(st.x - PI-u_time*3.0) , 1.0);
}


// + vec4(0,0,cos(st.y),1.0) + vec4(cos(st.y-st.x),0,cos(st.y),1.0);
// 1.57