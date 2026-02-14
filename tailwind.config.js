/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html"
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// New animations
				float3d: {
					'0%, 100%': { transform: 'translateY(0) translateX(0) rotateX(0deg) rotateY(0deg)' },
					'25%': { transform: 'translateY(-20px) translateX(10px) rotateX(2deg) rotateY(2deg)' },
					'50%': { transform: 'translateY(-10px) translateX(-10px) rotateX(-2deg) rotateY(-2deg)' },
					'75%': { transform: 'translateY(-15px) translateX(5px) rotateX(1deg) rotateY(1deg)' },
				},
				speedLine: {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' },
				},
				speedLineReverse: {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(-100%)', opacity: '0' },
				},
				drawChart: {
					'0%': { strokeDasharray: '0 1000', fillOpacity: '0' },
					'50%': { strokeDasharray: '1000 1000', fillOpacity: '0' },
					'100%': { strokeDasharray: '1000 1000', fillOpacity: '1' },
				},
				pulseSlow: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				orbit: {
					'0%': { transform: 'translate(0, 0) scale(1)' },
					'33%': { transform: 'translate(100px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-50px, 100px) scale(0.9)' },
					'100%': { transform: 'translate(0, 0) scale(1)' },
				},
				planetOrbit: {
					'0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
				},
				planetOrbitSm: {
					'0%': { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' },
				},
				particle: {
					'0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0' },
					'50%': { transform: 'translateY(-100px) scale(1.5)', opacity: '1' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				bounceSlow: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// New animations
				'float-3d': 'float3d 8s ease-in-out infinite',
				'speed-line': 'speedLine 2s linear infinite',
				'speed-line-reverse': 'speedLineReverse 1.5s linear infinite',
				'draw-chart': 'drawChart 2s ease-out forwards',
				'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'orbit': 'orbit 20s linear infinite',
				'particle': 'particle 6s ease-in-out infinite',
				'wiggle': 'wiggle 2s ease-in-out infinite',
				'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
				'planet-orbit': 'planetOrbit 18s linear infinite',
				'planet-orbit-slow': 'planetOrbit 26s linear infinite',
				'planet-orbit-sm': 'planetOrbitSm 16s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
