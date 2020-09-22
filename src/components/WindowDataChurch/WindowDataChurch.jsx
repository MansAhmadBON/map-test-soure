import React from "react";

const windowDataChurch = ({name, address, phone, url}) => {
    const strPhone = `tel:${phone}`;
    return (
        <div className="block">
            <div className="container">
                <h2 className="block__title">{name}</h2>
                <p className="block__text block__text--address">{address}</p>
                <a className="block__link block__link--phone" href={strPhone}>{phone}</a>
                <a className="block__link block__link--site" href={url}>{url}</a>
            </div>
        </div>
    )
};

export default windowDataChurch;