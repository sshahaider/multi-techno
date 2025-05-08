import React, { useId } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const backGroundVariants = cva('z--10 absolute inset-0 h-full w-full', {
	variants: {
		variant: {
			grid: 'bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)10%,transparent)_1px,transparent_1px)]',
			dot: 'bg-[radial-gradient(color-mix(in_oklab,var(--foreground)30%,transparent)_1px,transparent_1px)]',
		},
		mask: {
			rounded: '[mask-image:radial-gradient(ellipse_at_center,var(--background)_30%,transparent)]',
			toTop: '[mask-image:linear-gradient(to_bottom,var(--background),transparent)]',
			toBottom: '[mask-image:linear-gradient(to_bottom,transparent,var(--background))]',
			topBottom: '[mask-image:linear-gradient(to_bottom,transparent,var(--background),transparent)]',
			none: '',
		},
		size: {
			sm: 'bg-[size:24px_24px]',
			md: 'bg-[size:28px_28px]',
			lg: 'bg-[size:32px_32px]',
		},
	},
	defaultVariants: {
		variant: 'grid',
		mask: 'none',
		size: 'sm',
	},
});

type BackGroundProps = React.ComponentProps<'div'> & VariantProps<typeof backGroundVariants>;

const BackGround = ({ variant, mask, size, className, ...props }: BackGroundProps) => {
	return <div className={cn(backGroundVariants({ variant, mask, size, className }))} {...props} />;
};
BackGround.displayName = 'BackGround';

const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
	const p = pattern ?? [
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
	];
	return (
		<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
			<div className="from-muted/30 to-muted/10 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
				<GridPattern
					width={size ?? 20}
					height={size ?? 20}
					x="-12"
					y="4"
					squares={p}
					className="fill-muted/50 stroke-muted absolute inset-0 h-full w-full mix-blend-overlay"
				/>
			</div>
		</div>
	);
};

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y]) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}`}
							width={width + 1}
							height={height + 1}
							x={x * width}
							y={y * height}
						/>
					))}
				</svg>
			)}
		</svg>
	);
}

export { BackGround, Grid, GridPattern };
