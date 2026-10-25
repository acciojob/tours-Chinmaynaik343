
import React, { useState } from "react";

function Tour({ id, name, image, price, info, removeTour }) {
    const [readMore, setReadMore] = useState(false);

    const description = info || "";
    const isLongDescription = description.length > 200;

    const displayedDescription =
        readMore || !isLongDescription
            ? description
            : `${description.slice(0, 200)}...`;

    return (
        <article className="tour">
            <img src={image} alt={name} className="tour-img" />

            <div className="tour-info">
                <div className="tour-header">
                    <h3>{name}</h3>
                    <span className="tour-price">${price}</span>
                </div>

                <p className="tour-description">
                    {displayedDescription}{" "}

                    {isLongDescription && (
                        <button
                            className="read-more"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "See less" : "Show more"}
                        </button>
                    )}
                </p>

                <button
                    className="remove-btn"
                    onClick={() => removeTour(id)}
                >
                    Remove
                </button>
            </div>
        </article>
    );
}

export default Tour;
