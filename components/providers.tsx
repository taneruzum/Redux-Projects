"use client";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { GlobalStore } from "@/lib/store";
import Modal from "./Modal";

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {

    return (
        <Provider store={GlobalStore}>
            <ThemeProvider attribute="class">
                <Modal />
                {children}
            </ThemeProvider>
        </Provider>
    );
}
