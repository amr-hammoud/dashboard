import axios from "axios";

export const sendRequest = async (params) => {


    params.method = params.method || "GET";
    params.includeheaders = params.includeheaders || true;

    if (!params.route) throw Error("route required");

    const headers = params.includeheaders
        ? {
              Authorization: params.token,
              "Content-Type": "application/json",
          }
        : {};

    try {
        const response = await axios.request({
            method: params.method,
            url: params.route,
            data: params.body,
            headers,
        });

        return response;
    } catch (err) {
        throw err;
    }
};
