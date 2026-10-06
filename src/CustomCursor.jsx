import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMove);

    // Hide default system cursor globally
    document.documentElement.style.cursor = 'none';

    // Smooth trailing animation loop for outer ring
    const animate = () => {
      const speed = 0.12;
      outerPos.current.x += (pos.current.x - outerPos.current.x) * speed;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * speed;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x}px, ${outerPos.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.style.cursor = 'auto';
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring — trails slowly */}
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1.5px solid #333',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-100px, -100px)',
          marginLeft: '-22px',
          marginTop: '-22px',
        }}
      />

      {/* Inner: cursor arrow SVG icon — snaps instantly */}
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 100000,
          transform: 'translate(-100px, -100px)',
          // offset so tip of arrow sits at exact cursor position
          marginLeft: '-2px',
          marginTop: '-2px',
        }}
      >
        {/* Standard arrow cursor SVG */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L9.5 19L12.5 12.5L19 9.5L2 2Z"
            fill="#111"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
