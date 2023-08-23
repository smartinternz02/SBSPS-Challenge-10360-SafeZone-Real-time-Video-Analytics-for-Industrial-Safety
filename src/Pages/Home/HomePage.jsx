import LeftSideBar from "../Components/LeftSideBar";
import NavBar from "../Components/NavBar";
import React, { useState } from 'react';

export default function HomePage() {
    const [boxes, setBoxes] = useState([]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("image_file", file, "image_file");

        const response = await fetch("http://0.0.0.0:8080/detect", {
            method: "post",
            body: data
        });

        const boxesData = await response.json();
        setBoxes(boxesData);

        drawImageAndBoxes(file, boxesData);
    };

    const drawImageAndBoxes = (file, boxes) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            const canvas = document.querySelector("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.strokeStyle = "#00FF00";
            ctx.lineWidth = 3;
            ctx.font = "18px serif";

            boxes.forEach(([x1, y1, x2, y2, label]) => {
                ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
                ctx.fillStyle = "#00ff00";
                const width = ctx.measureText(label).width;
                ctx.fillRect(x1, y1, width + 10, 25);
                ctx.fillStyle = "#000000";
                ctx.fillText(label, x1, y1 + 18);
            });
        };
    };

    return (
        <div className="container-scroller">

            <LeftSideBar />
            <NavBar />
            <div className="container-fluid page-body-wrapper">
                <div className="content-wrapper">
                    <h1 className="h1">List of Camera</h1>
                    <div className="main-panel">
                        <div className="row">
                            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Construction Site-1</h4>
                                        <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div className="item">
                                                <div>
                                                    <input type="file" onChange={handleFileUpload} />
                                                    <canvas></canvas>
                                                </div>
                                                {/* <img src={`${process.env.PUBLIC_URL}/assets/images/cam.png`} alt="" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Construction Site-1</h4>
                                        <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div className="item">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/cam.png`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Construction Site-1</h4>
                                        <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div className="item">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/cam.png`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Construction Site-1</h4>
                                        <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div className="item">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/cam.png`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Construction Site-1</h4>
                                        <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div className="item">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/cam.png`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Construction Site-1</h4>
                                        <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div className="item">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/cam.png`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
