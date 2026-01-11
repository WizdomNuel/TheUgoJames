import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const LiquidMetalMesh = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  // Premium Monochromatic/Warm Palette
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#000000') }, // Deepest Black
      uColor2: { value: new THREE.Color('#121212') }, // Soft Charcoal
      uColor3: { value: new THREE.Color('#2a2a2a') }, // Metallic Grey Highlight
      uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) }
    }),
    [viewport]
  );

  useFrame((state) => {
    if (mesh.current) {
        // Slow, fluid movement
        const material = mesh.current.material as THREE.ShaderMaterial;
        material.uniforms.uTime.value = state.clock.getElapsedTime() * 0.2;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    // Fractal Brownian Motion for detail
    float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 3; i++) {
            value += amplitude * snoise(st);
            st *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }

    void main() {
      vec2 st = vUv;
      
      // Aspect ratio correction for organic circles
      // (assuming landscape for simplicity in this specific shader calc)
      
      float t = uTime;
      
      // Create a flowing height map
      // We warp the coordinates to create a fluid effect
      vec2 q = vec2(0.);
      q.x = fbm( st + 0.0 * t );
      q.y = fbm( st + vec2(1.0));

      vec2 r = vec2(0.);
      r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*t );
      r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*t );

      float f = fbm(st+r);

      // Gradient mix based on the noise value f
      // Dark base
      vec3 color = mix(uColor1, uColor2, clamp(f*f*4.0, 0.0, 1.0));
      
      // Add metallic highlights
      // We use the derivative of the noise to simulate light hitting ridges
      color = mix(color, uColor3, clamp(length(q), 0.0, 1.0));
      
      // Extra deep shadows
      color = mix(color, vec3(0.0), clamp(length(r.x), 0.0, 1.0));
      
      // Final smooth curve
      vec3 finalColor = color * 0.8; // dim it down slightly

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-brand-black">
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false, 
          depth: false,
          powerPreference: "high-performance"
        }}
      >
        <LiquidMetalMesh />
      </Canvas>
    </div>
  );
};