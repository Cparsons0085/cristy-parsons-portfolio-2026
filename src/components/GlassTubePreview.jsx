import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function GlassTubePreview() {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div
      className={`glass-preview${hasInteracted ? ' is-interacted' : ''}`}
      onPointerDown={() => setHasInteracted(true)}
      onPointerMove={(event) => {
        if (event.buttons > 0) {
          setHasInteracted(true);
        }
      }}
    >
      <Spline scene="https://prod.spline.design/RHE2pxVbcvVuVkrq/scene.splinecode" />
      <span className="glass-preview-badge">Drag to interact</span>
    </div>
  );
}
