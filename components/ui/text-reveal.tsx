'use client';

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { ComponentProps, ComponentPropsWithoutRef, FC, ReactNode, useRef } from 'react';

import { cn } from '@/lib/utils';

export interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
	texts: string[];
	containerClassName?: ComponentProps<'div'>['className'];
	textClassName?: ComponentProps<'div'>['className'];
}

export const TextReveal = ({ children, texts, className, containerClassName, textClassName }: TextRevealProps) => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	if (!Array.isArray(texts) || !texts.every((text) => typeof text === 'string')) {
		throw new Error('TextReveal: texts must be an array of strings');
	}

	// Calculate total number of words across all texts for progress mapping
	const allWords = texts.map((text) => text.split(' '));
	const totalWords = allWords.reduce((sum, words) => sum + words.length, 0);

	// Calculate the range for the children's fade-up animation (starts after text reveal)
	const childrenFadeStart = 0.8; // Start fading children after 80% of text reveal
	const childrenFadeEnd = 1.0; // Complete fade at 100%

	// Transform for opacity and y-position of children
	const childrenOpacity = useTransform(scrollYProgress, [childrenFadeStart, childrenFadeEnd], [0, 1]);
	const childrenY = useTransform(scrollYProgress, [childrenFadeStart, childrenFadeEnd], [20, 0]); // Move up from 50px

	return (
		<div ref={targetRef} className={cn('relative z-0 h-[200vh]', className)}>
			<div
				className={cn(
					'sticky top-0 container flex h-[50%] flex-col items-center justify-center bg-transparent',
					containerClassName,
				)}
			>
				<div
					className={cn(
						'text-foreground font-heading flex flex-col gap-y-5 text-2xl font-bold md:text-3xl lg:text-4xl',
						textClassName,
					)}
				>
					{allWords.map((words, textIndex) => (
						<span key={textIndex} className="flex flex-wrap gap-1 md:gap-2">
							{words.map((word, wordIndex) => {
								// Calculate the start and end range for each word based on its position in the total word count
								const wordPosition = allWords.slice(0, textIndex).reduce((sum, w) => sum + w.length, 0) + wordIndex;
								const start = wordPosition / totalWords;
								const end = start + 1 / totalWords;
								return (
									<Word key={`${textIndex}-${wordIndex}`} progress={scrollYProgress} range={[start, end]}>
										{word}
									</Word>
								);
							})}
						</span>
					))}
				</div>
				{children && (
					<motion.div className="mt-8" style={{ opacity: childrenOpacity, y: childrenY }}>
						{children}
					</motion.div>
				)}
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: MotionValue<number>;
	range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span>
			<span className="absolute opacity-30">{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};
