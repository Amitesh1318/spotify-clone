"use client";

import exp from "constants";
import { Toaster } from "react-hot-toast";

const Toasterprovider = () => {
    return(
        <Toaster 
            toastOptions={{
                style: {
                    background: '#333',
                    color: '#ff'
                }
            }}
        />
    );
};

export default Toasterprovider;