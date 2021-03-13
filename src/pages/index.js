import * as React from "react"
import GlobalStyle from "../styles/Global";
import "fontsource-open-sans";
import "@fontsource/oswald"
import { Header, PageHeading } from "../styles/Header";
import { Card } from "../styles/Card";
import { Form } from "../styles/Form";
import { Instructions, Copy } from "../styles/Instructions";
import { GroupPlay } from "../styles/GroupPlay";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      plays: "",
      encores: "",
      players: 1,
      costPerPerson: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.plays !== prevState.plays || this.state.encores !== prevState.encores) {
      this.calculateAmount(this.state.plays, this.state.encores)
    };
    if (this.state.amount !== prevState.amount) {
      this.calculatePlays(this.state.amount);
      this.calculateEncores(this.state.amount);
      this.calculateCostPerPerson(this.state.amount, this.state.players);
    };
    if (this.state.players !== prevState.players) {
      this.calculateCostPerPerson(this.state.amount, this.state.players);
    }
  }

  calculateCostPerPerson = (amount, players) => {
    if (amount !== "" && amount > 0) {
      const costPerPerson = (amount / players).toFixed(2);
      this.setState({
        costPerPerson
      })
    }
  }

  calculateAmount = (plays, encores) => {
    let amount;
    const x = plays * 5;
    const y = encores;
    amount =+ y + x;
    if (isNaN(amount) || amount === 0) {
      amount = "";
    };
    this.setState({
      amount
    });
  }

  calculatePlays = (amount) => {
    let plays = Math.floor((parseInt(amount)/5));
    if (isNaN(plays) || amount === 0 || plays === 0) {
      plays = "";
    };
    this.setState({
      plays
    });
  }

  calculateEncores = (amount) => {
    let encores = amount % 5;
    if (isNaN(encores) || amount === 0 || encores === 0) {
      encores = "";
    };
    this.setState({
      encores
    });
  }

  handleChange = (e) => {
    let value = e.target.value;
    if (isNaN(value)) {
      value = "";
    }
    this.setState({
      [e.target.id]: value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      amount: "",
      plays: "",
      encores: "",
      costPerPerson: "",
    });
  }

  handleIncrease = () => {
    let players = this.state.players;
    players += 1;
    this.setState({
      players
    })
  }

  handleDecrease = () => {
    let players = this.state.players;
    if (players - 1 === 0) {
      return;
    }
    players -= 1;
    this.setState({
      players
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header>
          <PageHeading>Lotto Max</PageHeading>
        </Header>
        <main>
          <Card>
            <Form >
              <div className="inputs">
                <div>
                  <label htmlFor="amount">Amount ($)</label>
                  <input 
                    id="amount"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.amount}
                  />
                </div>
                <div>
                  <label htmlFor="plays">Plays</label>
                  <input 
                    id="plays"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.plays}
                  />
                </div>
                <div>
                  <label htmlFor="encores">Encores</label>
                  <input 
                    id="encores"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.encores}
                  />
                </div>
                <div className="button">
                  <button onClick={this.handleClick}>Clear</button>
                </div>
              </div>
            </Form>
            <Instructions>
                <GroupPlay>
                  <div className="button-group">
                    <div className="copy-container">
                      <p>People in group: <span>{this.state.players}</span></p>
                      <p>Cost per person: ${this.state.costPerPerson}</p>
                    </div>
                    <div className="button-container">
                      <button onClick={this.handleIncrease}><span role="img" aria-label="Up arrow emoji">⬆️</span></button>
                      <button onClick={this.handleDecrease}><span role="img" aria-label="Down arrow emoji">⬇️</span></button>
                    </div>
                  </div>
                </GroupPlay>
                <Copy>
                  <p>Entering a dollar amount will calculate the most plays and encores you can buy (emphasizing plays over encores).</p>
                  <p>Entering the number of plays and encores you plan to buy will calculate the cost.</p>
                  <p>Plays are $5 each, encores are $1 each.</p>
                </Copy>
            </Instructions>
          </Card>
        </main>
      </>
    )
  }
}

export default IndexPage
