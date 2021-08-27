import React from "react";
import './BoardComp.css'
import { ChessType } from "../types/enums";
import { ChessComp } from "./ChessComp";

interface IProps {
    chesses: ChessType[]
    isGameOver?: boolean
    onClick?: (index: number) => void
}

const BoardComp: React.FC<IProps> = function BoardComp(props) {
    const isGameOver = props.isGameOver!;

    const list = props.chesses.map((type, i) => <ChessComp
        key={i}
        type={type}
        onClick={() => {
            if (props.onClick && !isGameOver) {
                // if (props.onClick) {
                props.onClick(i);
            }
        }}
    />)
    return (
        <div className="board">
            {list}
        </div>
    )
}

BoardComp.defaultProps = {
    isGameOver: false
}

export { BoardComp }
