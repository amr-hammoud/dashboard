import React, { useEffect, useState } from "react";
import logo from "../../../../public/icons/logo_white.svg";
import { AiOutlinePlus } from 'react-icons/ai'

const DashboardPage = () => {

    return (
        <div>
            <header>
                <div className="flex justify-between bg-primary-700 h-fit px-5 py-5">
                    <div className="flex flex-wrap content-center gap-3">
                        <div className="grid place-content-center">
                            <img className="h-6" src={logo} alt="logo" />
                        </div>
                        <div className="grid place-content-center text-3xl text-neutral-50 font-coolvetica">
                            Dashboard.io
                        </div>
                    </div>
                    <div className="grid place-content-center text-2xl text-white pr-10 hover:text-neutral-200 hover:cursor-pointer">
                        <AiOutlinePlus />
                    </div>
                </div>
            </header>

            <main className="h-full w-full"></main>
        </div>
    );
};

export default DashboardPage;


