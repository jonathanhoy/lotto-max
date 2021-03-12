import * as React from "react"

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      answer: 0,
      lines: 0,
      encores: 0,
      total: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lines !== prevState.lines || this.state.encores !== prevState.encores) {
      this.calculateTotal(this.state.lines, this.state.encores)
    }
    if (this.state.amount !== prevState.amount && !isNaN(this.state.amount)) {
      this.calculateLines(this.state.amount);
      this.calculateEncores(this.state.amount);
    }
  }
  
  calculateTotal = (lines, encores) => {
    let total;
    const x = lines * 5;
    const y = encores;
    total =+ y + x;
    this.setState({
      total
    })
  }

  calculateLines = (amount) => {
    let lines = Math.floor((parseInt(amount)/5));
    if (isNaN(lines)) {
      lines = 0;
    }
    this.setState({
      lines
    })
  }

  calculateEncores = (amount) => {
    let encores = amount % 5;
    if (isNaN(encores)) {
      encores = 0;
    }
    this.setState({
      encores
    })
  }

  handleAmount = (e) => {
    let amount = parseInt(e.target.value);
    // this.setState({
    //   amount
    // }, () => {
    //   this.calculateLines(this.state.amount);
    //   this.calculateEncores(this.state.amount);
    // });
    if (isNaN(amount)) {
      amount = 0;
    }
    this.setState({
      amount
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Calculator</h1>
        <section>
          <h2>I know how much money I/my group will spend</h2>
          <form>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" onChange={this.handleAmount} />
          </form>
          <div>
            <p>Lines</p>
            <p>{!isNaN(this.state.lines) ? this.state.lines : 0}</p>
          </div>
          <div>
            <p>Encores</p>
            <p>{!isNaN(this.state.encores) ? this.state.encores : 0}</p>
          </div>
        </section>
        <section>
          <h2>I don't know how much money I/my group will spend</h2>
          <form>
            <label htmlFor="lines">Lines</label>
            <input id="lines" type="number" onChange={this.handleChange} />
            <label htmlFor="encores">Encores</label>
            <input id="encores" type="number" onChange={this.handleChange} />
          </form>
          <div>
            <p>Total</p>
            <p>{!isNaN(this.state.total) ? this.state.total : 0}</p>
          </div>
        </section>
      </>
    )
  }
}

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

export default IndexPage
