import React, { useEffect } from "react";

import NavBar from "./Components/NavBar";

const findTeacher = () => {
    useEffect(() => {
        const mainDiv = document.querySelector("#mainDiv");
        const sub = window.location.search.split("=")[1];
        fetch("/api/fetchTeacher?sub=" + sub)
            .then((res) => res.json())
            .then((data) => {
                data.rows.forEach((element) => {
                    const innerDiv = document.createElement("a");
                    innerDiv.href = "/teacherProfile?tid=" + element.tid;
                    innerDiv.classList.add("border-2");
                    innerDiv.classList.add("border-white");
                    innerDiv.classList.add("rounded-lg");
                    innerDiv.classList.add("shadow-md");
                    innerDiv.classList.add("shadow-black");
                    innerDiv.classList.add("text-center");
                    innerDiv.classList.add("text-white");
                    innerDiv.classList.add("font-semibold");
                    innerDiv.classList.add("p-5");

                    const img = document.createElement("img");
                    img.src = "/pics/teacherProfilePic.webp";
                    img.width = 100;
                    img.height = 100;
                    img.classList.add("rounded-full");
                    img.classList.add("bg-teal-400");
                    img.classList.add("mt-4");
                    img.classList.add("border-4");
                    img.classList.add("shadow-md");
                    img.classList.add("shadow-black");
                    img.classList.add("border-white");
                    img.classList.add("mx-auto");

                    const teacherName = document.createElement("p");
                    teacherName.textContent = element.name;

                    const span = document.createElement("span");
                    span.classList.add("flex");
                    span.classList.add("justify-between");

                    const subName = document.createElement("p");
                    subName.textContent = element.subject;

                    const rating = document.createElement("p");
                    if (element.no_of_ratings == 0) {
                        rating.textContent = 0 + "⭐";
                    } else {
                        rating.textContent =
                            (
                                parseFloat(element.rating) /
                                parseFloat(element.no_of_ratings)
                            ).toFixed(1) + "⭐";
                    }

                    span.appendChild(subName);
                    span.appendChild(rating);

                    innerDiv.appendChild(img);
                    innerDiv.appendChild(teacherName);
                    innerDiv.appendChild(span);

                    mainDiv.appendChild(innerDiv);
                });
            });
    }, []);
    return (
        <>
            <NavBar />
            <div id="mainDiv" className="grid grid-cols-5 gap-10 px-5"></div>
        </>
    );
};

export default findTeacher;
