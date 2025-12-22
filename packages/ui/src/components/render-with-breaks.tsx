import React from 'react'
import { cn } from '@repo/ui';

type RenderTextWithBreaksProps = {
    text: string;
    className?: string;
}

const RenderTextWithBreaks = ({ text, className }: RenderTextWithBreaksProps) => {
    return (
        <span className={cn('', className)}>
            {text?.split('\n').map((line: string, index: number) => {
                return (
                    <React.Fragment key={`${index}-${line.slice(0, 10)}`}>
                        {line}
                        <br />
                    </React.Fragment>
                )
            })}
        </span>
    )
}

export default RenderTextWithBreaks