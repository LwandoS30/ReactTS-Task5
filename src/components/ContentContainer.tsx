import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string
}

export const ContentContainer: React.FC<Props> = ({ children , className}) => {
    return(
        <div>
            <div className={className} style={{maxWidth: 1200, padding: 20, margin: 0}}>
                { children }
            </div>
        </div>
    )
}