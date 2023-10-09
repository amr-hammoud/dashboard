import React from "react";

export default function Select({
    options,
    label,
    value,
    disabled,
    changeHandler,
}) {
    if (options.length > 0) {
        return (
            <div className="flex flex-wrap flex-col justify-center content-center font-figtree h-fit my-1 w-full text-gunmetal">
                <div className=" text-sm flex content-center gap-1 cursor-default select-none">
                    <div className=" flex content-center flex-wrap">
                        {label}
                    </div>
                </div>
                <select
                    className="font-figtree w-full bg-neutral-50 border-neutral-700 rounded text-base text-gunmetal
							hover:cursor-pointer focus:ring-primary-500 focus:border-primary-500"
                    value={value}
                    disabled={disabled}
                    onChange={(e) => changeHandler(e.target.value)}
                >
                    {options.map((option, index) => {
                        return (
                            <option value={option} key={index}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}
