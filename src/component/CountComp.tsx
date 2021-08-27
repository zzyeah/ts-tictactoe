import React from "react";

interface IProps {
    num: number
    onChange?: (n: number) => void
}

// export const CountComp: React.FC<IProps> = function CountComp(props) {
//     return (
//         <div>
//             <button onClick={() => {
//                 if (props.onChange) {
//                     props.onChange(props.num - 1)
//                 }
//             }}>-</button>
//             <span>{props.num}</span>
//             <button onClick={() => {
//                 if (props.onChange) {
//                     props.onChange(props.num + 1)
//                 }
//             }}>+</button>
//         </div >
//     )
// }

interface IState {
    msg: string
    description: string
}

export class CountComp extends React.Component<IProps, IState> {

    state: IState = {
        msg: '',
        description: '',
    }

    render() {
        // this.state.msg

        return (
            <div>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num - 1)
                    }
                }}>-</button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num + 1)
                    }
                }}>+</button>
            </div >
        )
    }

}