import React from "react";

interface SquareProps {
    value: any;
    onClick: () => void;
    style: React.CSSProperties;
}

const Square: React.FC<SquareProps> = ({ value, onClick, style }) => {
    return (
        <button onClick={onClick} style={style}>
            {value}
        </button>
    );
};

export default Square;