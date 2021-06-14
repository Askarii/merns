import React from 'react'
import Header from './header/Header'

const Landing = ({children}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Landing
