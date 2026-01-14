"use client"; // Required if using Next.js App Router

import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface LenisProviderProps {
    children: ReactNode;
}

const LenisProvider = ({ children }: LenisProviderProps) => {
    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
                // Standard "expo" out easing
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default LenisProvider;
