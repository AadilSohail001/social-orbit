import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Navbar />
            <main className="pt-0">{children}</main>
            <Footer />
        </>
    );
}