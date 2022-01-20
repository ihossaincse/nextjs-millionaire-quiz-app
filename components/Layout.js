import React from 'react';
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-between h-full min-h-screen text-xl text-white md:flex-row">
                {children}
            </main>
        </>
    )
}

export default Layout
