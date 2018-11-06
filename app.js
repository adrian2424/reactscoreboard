/// pass 3 argument
// const title = ' My First React Element ! ' ;
// const desc = 'I just learned how to create a React node and render it  into the DOM ' ;
// const myTitleID  = 'main-title';
// const name = 'Guil';
// // React.createElement(
// //   'h1',
// //   /// if u want to pass empty {}  or null
// //   { id: 'main-title', title: 'This is a title.'},
// //   'My First React Element!'
// //
// // );
//
// const header = (
//   <header>
//   <h1 id = {myTitleID}> { name }'s First React Element!</h1>
//
//   <p> { desc }</p>
//   <input value = {10 * 20}/>
//
//
//   </header>
//
// );

const players = [
  {
        name: "Guil",
        score: 50,
        id: 1
        },
        {
        name: "Treasure",
        score: 85,
        id: 2
        },
        {
        name: "Ashley",
        score: 95,
        id : 3
        },
        {
        name: "James",
        score: 80,
        id : 4
        }

];
const Header = (props) => {
  console.log(props);
  return (
      <header>
        <h1> {props.title }</h1>
        <span className="stats">Players: {props.totalPlayers} </span>
      </header>
  );
}
const Player = (props) => {
  return (
    <div className = "player ">
      <span className = "player-name">
      {props.name}
      </span>

      <Counter />
  </div>
  );

}
{/*Changing States functions*/}
class Counter extends React.Component{
  state = {
      score: 0
  };
  incrementScore = () =>{
    this.setState({
        score: this.state.score + 1
    });
  }


    decrementScore = () =>{
      this.setState({
          score: this.state.score - 1
      });
    }

  render(){
    return (
      <div className = "counter">
          <button className = "counter-action decrement" onClick ={this.decrementScore}> - </button>
          <span className = "counter-score">{ this.state.score}</span>
          <button className = "counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );

  }
}
const App = (props) => {
  return (
  <div className = "scoreboard">
    <Header title= "Scoreboard" totalPlayers ={1}/>
    {/*Players list*/}
    {props.initialPlayers.map ( player =>
      <Player
        name = {player.name}
        score = {player.score}
        key = {player.id.toString()}
      />

    )}

  </div>
);

}
ReactDOM.render(
  <App initialPlayers = {players}/>,
  document.getElementById('root')

);
