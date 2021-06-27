import React from "react";
import "./index.scss";

function Introduction() {
    return (
        <>
            <div className="introduction-header">
                <div className="icon-icon-vision"></div>
                <div className="brief-vision">
                    <h3>Vision</h3>
                    <p className="summary">
                        Enabling and empowering clinics, physicians and
                        hospitals through deep technology and build a path to
                        convenient, affordable and quality care for the billions
                    </p>
                </div>
            </div>
            <p className="healthcare-info">
                Please help us to provide some information in healthcare
            </p>
        </>
    );
}

export default Introduction;
