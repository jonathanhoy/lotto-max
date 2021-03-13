import * as React from "react"
import GlobalStyle from "../styles/Global";
import { Header, PageHeading } from "../styles/Header";
import { Container } from "../styles/Container";
import { Form } from "../styles/Form";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      lines: "",
      encores: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lines !== prevState.lines || this.state.encores !== prevState.encores) {
      this.calculateAmount(this.state.lines, this.state.encores)
    };
    if (this.state.amount !== prevState.amount) {
      this.calculateLines(this.state.amount);
      this.calculateEncores(this.state.amount);
    };
  }

  reset = () => {
    this.setState({
      amount: "",
      lines: "",
      encores: "",
    })
  }
  
  calculateAmount = (lines, encores) => {
    let amount;
    const x = lines * 5;
    const y = encores;
    amount =+ y + x;
    if (isNaN(amount) || amount === 0) {
      amount = "";
    };
    this.setState({
      amount
    });
  }

  calculateLines = (amount) => {
    let lines = Math.floor((parseInt(amount)/5));
    if (isNaN(lines) || amount === 0 || lines === 0) {
      lines = "";
    };
    this.setState({
      lines
    });
  }

  calculateEncores = (amount) => {
    let encores = amount % 5;
    if (isNaN(encores) || amount === 0 || encores === 0) {
      encores = "";
    };
    console.log('encore changing', encores);
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
      lines: "",
      encores: "",
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header>
          <PageHeading>Calculator</PageHeading>
        </Header>
        <main>
          <Container>
            <Form >
              <div>
                <label htmlFor="amount">Amount</label>
                <input 
                  id="amount"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.amount}
                />
              </div>
              <div>
                <label htmlFor="lines">Lines</label>
                <input 
                  id="lines"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.lines}
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
              <button onClick={this.handleClick}>Clear</button>
            </Form>
          </Container>
        </main>
      </>
    )
  }
}

export default IndexPage
