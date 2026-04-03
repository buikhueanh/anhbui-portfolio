/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useMemo, useState } from 'react'

type Props = {
	phrases: string[]
	typingMs?: number
	deletingMs?: number
	pauseMs?: number
	cursor?: string
	cursorBlinkMs?: number
	className?: string
}

export function TypewriterText({
	phrases,
	typingMs = 42,
	deletingMs = 22,
	pauseMs = 900,
	cursor = '█',
	cursorBlinkMs = 520,
	className,
}: Props) {
	const safePhrases = useMemo(
		() => phrases.filter(Boolean),
		[phrases]
	)

	const [phraseIndex, setPhraseIndex] = useState(0)
	const [typedCount, setTypedCount] = useState(0)
	const [mode, setMode] = useState<'typing' | 'deleting'>('typing')
	const [blink, setBlink] = useState(true)

	const phrase = safePhrases[phraseIndex] ?? ''
	const visibleText = phrase.slice(0, typedCount)

	useEffect(() => {
		const t = window.setInterval(() => setBlink((b) => !b), cursorBlinkMs)
		return () => window.clearInterval(t)
	}, [cursorBlinkMs])

	useEffect(() => {
		if (safePhrases.length === 0) return

		if (mode === 'typing') {
			if (typedCount >= phrase.length) {
				const t = window.setTimeout(() => setMode('deleting'), pauseMs)
				return () => window.clearTimeout(t)
			}
			const t = window.setTimeout(() => setTypedCount((n) => n + 1), typingMs)
			return () => window.clearTimeout(t)
		}

		// deleting
		if (typedCount <= 0) {
			const t = window.setTimeout(() => {
				setPhraseIndex((i) => (i + 1) % safePhrases.length)
				setMode('typing')
			}, pauseMs)
			return () => window.clearTimeout(t)
		}

		const t = window.setTimeout(() => setTypedCount((n) => n - 1), deletingMs)
		return () => window.clearTimeout(t)
	}, [safePhrases.length, phrase.length, typedCount, mode, typingMs, deletingMs, pauseMs])

	if (safePhrases.length === 0) return null

	// Preserve the number of lines for the *current phrase* even before the
	// user has "typed" the newline characters, to avoid vertical layout shifts.
	const fullLines = phrase.split('\n')
	let remaining = typedCount
	const visibleLines = fullLines.map((line, idx) => {
		if (remaining <= 0) return ''
		const take = Math.min(remaining, line.length)
		const part = line.slice(0, take)
		remaining -= take
		// Consume the newline separator between lines (if we've typed past it).
		if (idx < fullLines.length - 1 && remaining > 0) remaining -= 1
		return part
	})

	return (
		<span className={className} aria-label={phrase} suppressHydrationWarning>
			{visibleLines.map((p, idx) => (
				<span key={idx}>
					{p}
					{idx < visibleLines.length - 1 ? <br /> : null}
				</span>
			))}
			<span aria-hidden="true" style={{ opacity: blink ? 1 : 0 }}>
				{cursor}
			</span>
		</span>
	)
}

