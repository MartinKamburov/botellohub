// This file is a container of all the current best agents within the BotelloHub platform.
import { useState, useEffect, useRef } from 'react';

const robots = [
  { id: 1, name: 'Bot Alpha', img: '' },
  { id: 2, name: 'Bot Beta', img: '' },
  { id: 3, name: 'Bot Gamma', img: '' },
  { id: 4, name: 'Bot Delta', img: '' },
  { id: 5, name: 'Bot Phi', img: '' },
];


const FeaturedAgents = ({ data = robots, interval = 3000, visible = 3}) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const length = data.length;
  const timeoutRef = useRef(null);

  // Prepare extended data to allow seamless looping
  const extended = [...data, ...data.slice(0, visible)];
  const total = extended.length;

  // Auto-advance
  useEffect(() => {
    if (length <= visible) return;
    timeoutRef.current = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, interval);
    return () => clearInterval(timeoutRef.current);
  }, [length, interval, visible]);

  // Handle loop reset after sliding past original items
  const handleTransitionEnd = () => {
    if (current >= length) {
      setTransition(false);
      setCurrent(0);
    }
  };

  // Re-enable transition after resetting position
  useEffect(() => {
    if (!transition) {
      // re-enable transition on next tick
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  // Calculate translate percent per slide
  const translatePercent = -(current * (100 / visible));

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden px-12 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Top Rated Agents</h1>
      <div
        className="flex"
        style={{
          width: `${(total * 100) / visible}%`,
          transform: `translateX(${translatePercent}%)`,
          transition: transition ? 'transform 0.7s ease-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((item, idx) => (
          // narrow each slide slightly by using px instead of p
          <div key={idx} className="flex-shrink-0 w-1/3 px-6">
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-36 h-36 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              clearInterval(timeoutRef.current);
              setTransition(true);
              setCurrent(idx);
            }}
            className={`mx-1 w-3 h-3 rounded-full transition-colors duration-200 ${
              idx === (current % length) ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgents;
