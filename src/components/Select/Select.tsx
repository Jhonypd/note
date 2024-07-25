import React from "react";

interface Option {
	value?: string;
	label?: string;
}

interface SelectProps {
	options: Option[];
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	id?: string;
	className?: string;
	label?: string;
	defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({
	options,
	value,
	onChange,
	id,
	className,
	label,
	defaultValue,
}) => {
	return (
		<div className="relative">
			{label && (
				<label
					id={`${id}-label`}
					htmlFor={id}
					className=" block text-sm font-medium text-gray-700 sr-only">
					{label}
				</label>
			)}
			<select
				id={id}
				value={value}
				onChange={onChange}
				className={`appearance-none bg-transparent ring-1 ring-gray-600 text-gray-300 placeholder-gray-500 text-sm font-bold rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-1 pr-2 outline-none ${className}`}
				aria-labelledby={label ? `${id}-label` : undefined}>
				{defaultValue && (
					<option value={""} disabled className="bg-gray-800 text-gray-300">
						{defaultValue}
					</option>
				)}
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className="bg-gray-800 text-gray-300">
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
