import React, { cloneElement } from "react";

export default function Familia(props) {
    // erro de tipo, nao considera map como função
    // console.log(typeof props.children);
    return (
        <div>
            {React.Children.map(props.children, (child) => {
                return cloneElement(child, props);
            })}
        </div>
    );
}
