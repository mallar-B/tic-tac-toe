import React, { useState } from "react";
import Square from "@/components/Square";

export default () => {
    const initialValues = Array(9).fill("");
    const [values, setValues] = useState(initialValues);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState<string | null>(null);
    const [isDraw, setIsDraw] = useState(false);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            width: '400px',
            height: '450px',
            border: '1px solid black',
        },
        board: {
            position: 'relative',
            width: '300px',
            height: '300px',
        },
        box: (x: number, y: number) => ({
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            fontSize: '5rem',
        }),
        playerTurn: {
            marginBottom: '20px',
            fontSize: '1.5rem',
        },
    };

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = (newValues: string[]) => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (newValues[a] && newValues[a] === newValues[b] && newValues[a] === newValues[c]) {
                return newValues[a];
            }
        }
        return null;
    };

    const handleClick = (index: number) => {
        if (values[index] === "" && !winner && !isDraw) {
            const newValues = [...values];
            newValues[index] = player === 1 ? "X" : "O";
            setValues(newValues);
            const winner = checkWinner(newValues);
            if (winner) {
                setWinner(winner);
            } else if (newValues.every(value => value !== "")) {
                setIsDraw(true);
            } else {
                setPlayer(player === 1 ? 2 : 1);
            }
        }
    };

    const squares = [
        { id: 1, x: 0, y: 0 },
        { id: 2, x: 100, y: 0 },
        { id: 3, x: 200, y: 0 },
        { id: 4, x: 0, y: 100 },
        { id: 5, x: 100, y: 100 },
        { id: 6, x: 200, y: 100 },
        { id: 7, x: 0, y: 200 },
        { id: 8, x: 100, y: 200 },
        { id: 9, x: 200, y: 200 },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.playerTurn}>
                {winner ? `Player ${winner} wins!` : isDraw ? "It's a draw!" : `Player ${player}'s turn`}
            </div>
            <div style={styles.board}>
                {squares.map((square, index) => (
                    <Square
                        key={square.id}
                        value={values[index]}
                        style={styles.box(square.x, square.y)}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}