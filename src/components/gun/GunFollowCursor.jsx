import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const GunFollowCursor = ({ mouse, canAim }) => {
  const gunRef = useRef();
  const { scene } = useGLTF('./desktop_pc/gun_model/scene.gltf');

  useFrame(() => {
    if (canAim && gunRef.current) {
      gunRef.current.rotation.y = mouse.x * Math.PI;
      gunRef.current.rotation.x = mouse.y * 0.2 * Math.PI;
    }
  });

  const fire = () => {
    if (!canAim) return;
    console.log('🔫 Bang!');
    // Optional: add sound/muzzle flash here
  };

  return (
    <primitive
      ref={gunRef}
      object={scene}
      scale={0.001}
      position={[0, -1, 0]}
      onClick={fire}
    />
  );
};

export default GunFollowCursor;
