import React from "react";

export default function ItemCArd({
    url,
    cardTitle,
    subtitle,
    cardDiscription,
    cardButton,
    cardList,
}) {
    return (
        <div className="card">
            <img
                src={url}
                alt="immg"
                style={{ width: "100%", height: "100%" }}
            />
            <div className="card-body">
                <p className="card-title">{cardTitle}</p>
                <p className="subtitle">{subtitle}</p>
                {cardList ? (
                    <ul className="card-list">
                        {cardList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="card-description">{cardDiscription}</p>
                )}
                <div className="card-center-cont">
                    <button className="card-button">{cardButton}</button>
                </div>
            </div>
        </div>
    );
}
