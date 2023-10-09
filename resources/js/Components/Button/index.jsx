import React from "react";

const Button = ({type, label, name, disabled, bgColor, color, hoverColor, onClick}) => {

	return (
		<div className="flex flex-wrap flex-col justify-center content-center h-full">
			<button
				type={type || "button"}
				name={name}
				disabled={disabled}
				className={`peer/${name} rounded h-full min-h-[20px] w-full px-5 text-base
				${bgColor ? bgColor : "bg-primary-500"} ${color ? color : "text-neutral-0"}
				font-medium ${hoverColor ? hoverColor : "hover:bg-primary-700"}
				disabled:bg-primary-300`}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
}

export default Button;