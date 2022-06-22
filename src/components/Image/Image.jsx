import React from "react";
import Styles from "./Image.module.css"

const Image = ({src = "", alt = ""}) => {
    return (
        <img className={Styles.image} src={src} alt={alt} />
    )
}

export default Image;