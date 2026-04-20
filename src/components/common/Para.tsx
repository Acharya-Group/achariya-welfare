import React from 'react'

const Para = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            {children}
        </p>
    )
}

export default Para