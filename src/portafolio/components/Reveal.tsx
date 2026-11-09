import { useEffect, useRef, useState, type ReactNode } from "react"

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

function Reveal({ children, className = "", delay = 0 }: RevealProps) {

    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current

        if (!node || typeof IntersectionObserver === "undefined") {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

export default Reveal
