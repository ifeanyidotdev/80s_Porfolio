import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mouseenter', () => setHidden(false));

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mouseenter', () => setHidden(false));

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorClasses = `fixed pointer-events-none z-50 transition-transform duration-150 ${
    hidden ? 'opacity-0' : 'opacity-100'
  }`;

  return (
    <>
      <div
        className={`${cursorClasses} w-5 h-5 rounded-full border-2 border-purple-500 transform -translate-x-1/2 -translate-y-1/2 ${
          clicked ? 'scale-90' : 'scale-100'
        } ${linkHovered ? 'scale-150 bg-purple-500/20' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${cursorClasses} w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
          clicked ? 'scale-150 opacity-50' : 'scale-100'
        } ${linkHovered ? 'opacity-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;