import { FC, ReactNode, ButtonHTMLAttributes } from "react";

const buttonVariants = {
	default: "bg-blue-500 text-white",
	destructive: "bg-red-700 text-white",
	outlineDefault: "bg-transparent text-blue-500 border border-blue-500",
	outlineDestructive: "bg-transparent text-red-700 border border-red-700",
	success: "bg-green-500 ",
	outlineSuccess: "bg-transparent text-green-500 border border-green-500",
	info: "bg-teal-500 text-white",
	outlineInfo: "bg-transparent text-teal-500 border border-teal-500",
	warning: "bg-yellow-500 text-black",
	outlineWarning: "bg-transparent text-yellow-500 border border-yellow-500",
	help: "bg-purple-500 text-white",
	outlineHelp: "bg-transparent text-purple-500 border border-purple-500",
	dark: "bg-gray-800 text-white",
	outlineDark: "bg-transparent text-gray-800 border border-gray-800",
} as const;

const buttonSizes = {
	small: "px-2 py-1 text-sm",
	medium: "px-4 py-2 text-base",
	large: "px-6 py-3 text-lg",
	icon: "px-2 py-1 text-base",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: keyof typeof buttonVariants;
	size?: keyof typeof buttonSizes;
	className?: string;
	ariaLabel?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	variant = "default",
	size = "medium",
	className = "",
	ariaLabel,
	...props
}) => {
	const buttonClass = `${buttonVariants[variant]} ${buttonSizes[size]} rounded cursor-pointer hover:opacity-80 ${className}`;

	return (
		<button className={buttonClass} aria-label={ariaLabel} {...props}>
			{children}
		</button>
	);
};

export default Button;
