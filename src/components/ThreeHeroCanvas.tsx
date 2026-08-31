import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  darkMode: boolean;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ darkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central 3D Icosahedron Wireframe Core (compact size)
    const coreGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: darkMode ? 0x06b6d4 : 0x0284c7,
      wireframe: true,
      wireframeLinewidth: 1.2,
      transparent: true,
      opacity: darkMode ? 0.3 : 0.4,
      roughness: 0.2,
      metalness: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // 2. Inner Glowing Geometric Sphere (compact size)
    const innerGeometry = new THREE.OctahedronGeometry(2.4, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x38bdf8 : 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // 3. Floating Orbital Rings (compact radius)
    const ringGeometry1 = new THREE.TorusGeometry(6.2, 0.03, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x22d3ee : 0x0369a1,
      transparent: true,
      opacity: 0.35
    });
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(7.6, 0.025, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x818cf8 : 0x4338ca,
      transparent: true,
      opacity: 0.25
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 4. Background Particle Cloud (Constellation stars - compact distribution)
    const particleCount = 160;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      const r = THREE.MathUtils.randFloat(6, 18);
      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);

      scales[i] = Math.random() * 0.6 + 0.2;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: darkMode ? 0x67e8f9 : 0x0284c7,
      size: 0.25,
      transparent: true,
      opacity: darkMode ? 0.5 : 0.35,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, darkMode ? 0.8 : 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(darkMode ? 0x00ffff : 0x0284c7, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      targetX = (x - 0.5) * 2;
      targetY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width && height) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      group.rotation.y = elapsedTime * 0.15 + currentX * 0.5;
      group.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2 - currentY * 0.5;

      coreMesh.rotation.y = -elapsedTime * 0.1;
      innerMesh.rotation.x = elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.08;
      ring2.rotation.x = elapsedTime * 0.12;

      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [darkMode]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
