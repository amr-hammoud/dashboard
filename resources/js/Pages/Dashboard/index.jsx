import React, { useEffect, useState } from "react";
import logo from "../../../../public/icons/logo_white.svg";
import { AiOutlinePlus } from "react-icons/ai";
import GridComponent from "../../Components/Grid";

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
                </div>
            </header>

            <main className="h-full w-full p-3">
                <GridComponent />
            </main>
        </div>
    );
};

export default DashboardPage;
