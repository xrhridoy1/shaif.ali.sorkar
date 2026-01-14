"use client";

import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css"; // Essential for automatic scroll management

interface LenisProviderProps {
    children: ReactNode;
}

const LenisProvider = ({ children }: LenisProviderProps) => {
    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                // autoRaf: true is default in newer versions, 
                // but check your specific version requirements
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default LenisProvider;
