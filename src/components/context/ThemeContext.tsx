import { createContext } from "react";
import { Theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext(Theme);

export const ThemeContextProvider = ({
    children
}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>;
}