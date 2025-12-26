import React from 'react'
import { cn } from '@repo/ui'

type SectionProps = {
    className?: string,
    children: React.ReactNode
    isStack?: boolean
}

const Section: React.FC<SectionProps> = ({
    className = "",
    children,
    isStack = true
}) => {
    return (
        <div className={cn(`${isStack ? 'stack_layout' : ''} px-8 py-20 flex flex-col gap-16`, className)}>
            {children}
        </div>
    )
}

export default Section