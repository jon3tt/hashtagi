import { useState, useEffect } from "react";

export const getCookie = (cookieName) => {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${cookieName}=`));

    return cookie ? cookie.split("=")[1] : "";
};


export const useCookie = (cookieName, path) => {
    const [cookieValue, setCookieValue] = useState("");
    useEffect(()=>{
        const cookie = document.cookie
            .split(";")
            .find((row) => row.startsWith(`${cookieName}=`))

        setCookieValue(cookie ? cookie.split("=")[1] : "");
    }, [cookieName]);

    const setCookie = (value, expirationDate) => {
        document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=${path}`;
    };
    const deleteCookie = () => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    };

    return [cookieValue, setCookie, deleteCookie];
}

