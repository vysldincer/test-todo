import React from "react";

const Item = (props) => {
    const items = props.items;
    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            {index} - {item}
                            <a
                                onClick={() => props.handleDeleteText(index)} >
                                Kaldır
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Item;