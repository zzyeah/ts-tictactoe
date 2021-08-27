import React from 'react';
import { CountComp } from './component/CountComp';

// function App() {
//   return (
//     <div >
//       <CountComp num={2} onChange={(n) => {

//       }} />
//     </div>
//   );
// }

interface IState {
  num: number
}

export class App extends React.Component<{}, IState> {

  state = {
    num: 0
  }

  render() {
    return (
      <CountComp num={this.state.num} onChange={n => {
        this.setState({
          num: n
        })
      }} />
    )
  }
}

