import React, { useEffect, useState } from "react";
import ModalComponent from "../../Components/Modal";
import Button from "../../Components/Button";
import toast from "react-hot-toast";
import { sendRequest } from "../../utils/request";
import LineChart from "../../Components/LineChart";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BiCalendarEdit } from 'react-icons/bi'


const WeatherWidget = () => {
    const [Modal, setModal] = useState(false);

    const [weatherWidget, setWeatherWidget] = useState({
        weather: {
            address: "",
            currentConditions: {},
            days: [{}],
        },
        color: "#ffffff",
        loading: false,
        startDate: "",
        endDate: "",
    });

    const populateWeatherWidget = async (url) => {
        // setWeatherWidget({
        //     ...weatherWidget,
        //     loading: true,
        // });
        url
            ? url
            : (url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lebanon?unitGroup=metric&key=WMNV945P6S2JK7NW4RDDDLCVT&contentType=json`);

        const weatherResponse = await sendRequest({
            route: url,
        });
        if (weatherResponse.status == 200) {
            setWeatherWidget({
                ...weatherWidget,
                weather: weatherResponse.data,
            });
        } else {
            toast.error("Weather Widget Error", { duration: 4000 });
        }
    };

    useEffect(() => {
        populateWeatherWidget();
    }, []);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSelect = (ranges) => {
        const startDate = ranges.selection.startDate;
        const endDate = ranges.selection.endDate;
        setDateRange({
            ...dateRange,
            startDate,
            endDate,
        });

        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const startDateObject = new Date(startDate);
        const endDateObject = new Date(endDate);
        setWeatherWidget({
            ...weatherWidget,
            startDate: formatDate(startDateObject),
            endDate: formatDate(endDateObject),
        });
    };

    const getCustomTemperature = async () => {
        console.log(weatherWidget);
        const weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lebanon/${weatherWidget.startDate}/${weatherWidget.endDate}?unitGroup=metric&key=WMNV945P6S2JK7NW4RDDDLCVT&contentType=json`;
        await populateWeatherWidget(weatherUrl);
        setModal(false);
    };

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    return (
        <div>
            <div>
                <ModalComponent
                    showModal={Modal}
                    onRequestClose={() => setModal(false)}
                >
                    <div className="flex flex-col flex-wrap justify-center content-center gap-3">
                        <div className="text-xl">Choose a Date Range</div>
                        <div className="grid place-content-center w-full">
                            <DateRangePicker
                                ranges={[dateRange]}
                                onChange={(e) => handleSelect(e)}
                            />
                        </div>
                        <Button
                            label={"Save"}
                            color={"text-neutral-50"}
                            onClick={() => getCustomTemperature()}
                        />
                    </div>
                </ModalComponent>
            </div>
            <div
                className={`flex flex-col p-5 gap-1 font-figtree cursor-default h-fit`}
                style={{ backgroundColor: weatherWidget.color }}
            >
                <div className="flex w-full justify-end px-10 text-xl
                            hover:cursor-pointer hover:text-primary-700 text-primary-500" onClick={() => setModal(true)}><BiCalendarEdit /></div>
                <LineChart chartData={weatherWidget.weather} />
            </div>
        </div>
    );
};

export default WeatherWidget;
