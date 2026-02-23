import { useEffect, useState } from 'react';
import './Snowfall.css';

/**
 * Snowfall — A gentle CSS-animated snowfall effect.
 * Generates 100 snowflakes with random sizes, speeds, and positions.
 */
const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Generate snowflakes once on mount to avoid continuous re-renders
        const flakes = Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,   // 2–5s fall time
            animationDelay: `${Math.random() * 5}s`,           // Staggered start
            opacity: Math.random(),
            size: `${Math.random() * 5 + 2}px`                 // 2–7px diameter
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="snowfall-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        animationDuration: flake.animationDuration,
                        animationDelay: flake.animationDelay,
                        opacity: flake.opacity,
                        width: flake.size,
                        height: flake.size,
                    }}
                />
            ))}
        </div>
    );
};

export default Snowfall;
