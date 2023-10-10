import React, { useEffect, useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import toast, { Toaster } from "react-hot-toast";
import { BiRefresh } from "react-icons/bi";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import { SketchPicker } from "react-color";
import { AiOutlineBgColors } from "react-icons/ai";
import { sendRequest } from "../../utils/request";
import QuotesList from "../../Components/QuotesList";
import Button from "../../Components/Button";
import Select from "../../Components/Select";
import ModalComponent from "../../Components/Modal";

const QuoteWidget = () => {
    const [colorModal, setColorModal] = useState(false);

    const [quoteWidget, setQuoteWidget] = useState({
        author: "",
        genre: "",
        authors: [],
        genres: [],
        quote: {},
        color: "#ffffff",
        loading: false,
    });

    const getCustomQuote = async () => {
        setQuoteWidget({
            ...quoteWidget,
            loading: true,
        });
        const quoteResponse = await sendRequest({
            route: `https://quote-garden.onrender.com/api/v3/quotes?limit=1${
                quoteWidget.author != "" ? `&author=${quoteWidget.author}` : ""
            }${quoteWidget.genre != "" ? `&genre=${quoteWidget.genre}` : ""}`,
        });
        if (quoteResponse.status == 200) {
            setQuoteWidget({
                ...quoteWidget,
                quote: quoteResponse.data.data[0],
            });
            toast.success("Quote Generated Successfully!");
        } else {
            toast.error("Quote Widget Error", { duration: 4000 });
        }
    };

    const populateQuoteWidget = async () => {
        setQuoteWidget({
            ...quoteWidget,
            loading: true,
        });
        const urls = [
            `https://quote-garden.onrender.com/api/v3/quotes?limit=1`,
            `https://quote-garden.onrender.com/api/v3/authors`,
            `https://quote-garden.onrender.com/api/v3/genres`,
        ];

        axios.all(urls.map((url) => axios.get(url))).then((response) => {
            setQuoteWidget({
                ...quoteWidget,
                quote: response[0].data.data[0],
                authors: response[1].data.data,
                genres: response[2].data.data,
            });
        });
    };

    useEffect(() => {
        populateQuoteWidget();
    }, []);

    return (
        <div>
            <div>
                <ModalComponent
                    showModal={colorModal}
                    onRequestClose={() => setColorModal(false)}
                >
                    <div className="flex flex-col flex-wrap justify-center content-center gap-3">
                        <div className="text-xl">Choose a background color</div>
                        <div className="grid place-content-center w-full">
                            <SketchPicker
                                color={quoteWidget.color}
                                onChangeComplete={(c) =>
                                    setQuoteWidget({
                                        ...quoteWidget,
                                        color: c.hex,
                                    })
                                }
                            />
                        </div>
                        <Button
                            label={"Save"}
                            color={"text-neutral-50"}
                            onClick={() => setColorModal(false)}
                        />
                    </div>
                </ModalComponent>
            </div>
            <div
                className={`p-5 gap-1 font-figtree cursor-default h-fit`}
                style={{ backgroundColor: quoteWidget.color }}
            >
                {quoteWidget?.quote?.quoteText != null ? (
                    !quoteWidget.loading ? (
                        <div>
                            <div className="flex flex-wrap justify-between content-center pb-2">
                                <div className="text-md font-bold text-primary-900 grid place-content-center">
                                    Quote of the day
                                </div>
                                <div className="flex flex-wrap content-center gap-3 text-neutral-50 h-full ">
                                    <div
                                        className="text-primary-500 hover:cursor-pointer hover:text-primary-700"
                                        onClick={() => setColorModal(true)}
                                    >
                                        <AiOutlineBgColors />
                                    </div>
                                    <Button
                                        label={<BiRefresh />}
                                        onClick={() => getCustomQuote()}
                                    />
                                </div>
                            </div>
                            <Select
                                label={"Author"}
                                value={quoteWidget.author}
                                options={quoteWidget.authors}
                                changeHandler={(s) =>
                                    setQuoteWidget({
                                        ...quoteWidget,
                                        author: s,
                                    })
                                }
                            />
                            <Select
                                label={"Genre"}
                                value={quoteWidget.genre}
                                options={quoteWidget.genres}
                                changeHandler={(s) =>
                                    setQuoteWidget({
                                        ...quoteWidget,
                                        genre: s,
                                    })
                                }
                            />
                            <div className="pt-3">
                                <QuotesList quotes={[quoteWidget.quote]} />
                            </div>
                        </div>
                    ) : (
                        <LoadingIcons.ThreeDots fill="#38aff9" speed={2} />
                    )
                ) : quoteWidget.loading ? (
                    <LoadingIcons.ThreeDots fill="#38aff9" speed={2} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default QuoteWidget;
