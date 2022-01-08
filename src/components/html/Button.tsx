type ButtonProps = {
    variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return <button
        className={`class-with-${variant}`}
        {...rest}
    >
        {children}
    </button>;
};