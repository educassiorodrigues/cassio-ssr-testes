import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

export function Button({children, ...props}: ButtonProps) {
    return (
        <button className="p-4 text-white bg-gray-600 rounded" {...props} >{children}</button>
    )
}