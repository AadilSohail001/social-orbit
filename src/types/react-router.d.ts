declare module "react-router" {
    import React from "react";

    export const BrowserRouter: React.FC<{ children?: React.ReactNode }>;
    export const Routes: React.FC<{ children?: React.ReactNode }>;
    export const Route: React.FC<{ path?: string; element?: React.ReactNode; children?: React.ReactNode }>;
    export const Link: React.FC<{ to: string; className?: string; children?: React.ReactNode }>;
    export const NavLink: React.FC<{
        to: string;
        className?: string | ((props: { isActive: boolean }) => string);
        children?: React.ReactNode;
        onClick?: () => void;
        key?: string;
    }>;
    export const Navigate: React.FC<{ to: string; replace?: boolean }>;
    export function useNavigate(): (to: string) => void;
    export function useLocation(): { pathname: string };
    export function useParams(): Record<string, string>;
    export const Outlet: React.FC;
}
