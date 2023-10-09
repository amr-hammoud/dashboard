import React from "react";

const QuotesList = ({ quotes }) => {
    console.log("QTS: ", quotes);
    if (quotes.length > 0) {
        return (
            <div className="flex flex-col justify-start gap-3">
                <div className="p-3 bg-primary-200 font-figtree text-primary-950 rounded-lg">
                    <div></div>
                    <div>"{quotes[0].quoteText}"</div>
                    <div className="pt-3 text-right font-italic text-primary-500">
                        {quotes[0].quoteAuthor}
                    </div>
                </div>
            </div>
        );
    }
};

export default QuotesList;
