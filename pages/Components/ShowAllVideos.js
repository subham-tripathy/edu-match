import React, { useEffect } from "react";

const ShowAllVideos = () => {
    useEffect(() => {
        function getCookie(name) {
            const cookieString = document.cookie;
            const cookies = cookieString
                .split(";")
                .map((cookie) => cookie.trim());
            for (const cookie of cookies) {
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }

        fetch("/api/fetchvideos?tid=" + getCookie("emuser"))
            .then((res) => res.json())
            .then((data) => {
                data.rows.forEach((element) => {
                    // console.log(element);
                    const videoElement = document.createElement("video");
                    videoElement.src = element.video.slice(6);
                    videoElement.setAttribute("id", element.vid);
                    videoElement.controls = true;
                    videoElement.width = 400;
                    videoElement.height = 400;
                    document
                        .getElementById("allvideos")
                        .appendChild(videoElement);
                });
            });
    }, []);

    return (
        <div className="bg-slate-400 text-center p-10">
            <h1 className="dark:text-white dark:text-shadow text-4xl font-bold underline">
                VIDEOS
            </h1>
            <div id="allvideos" className="grid grid-cols-4 gap-5 my-20"></div>
        </div>
    );
};

export default ShowAllVideos;
