// components/LenisProvider.tsx
"use client";

import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import "lenis/dist/lenis.css"; // Optional: Import recommended CSS

const LenisProvider = ({ children }: PropsWithChildren) => {
    return (
        <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
            {children}
        </ReactLenis>
    );
};

export default LenisProvider;
