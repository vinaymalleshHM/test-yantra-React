class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      home: false,
      login :false,
      acc : false

    })
  }

  homeContent = () => {
    this.setState({
      home :true,
      login : false,
      acc : false

    })
    return <h1>Home Content</h1>

  }
  loginContent = () => {
    this.setState({
      login :true,
      home:false,
      acc:false,
    })
    return <h1>Login Content</h1>

  }
  accountContent = () => {
    this.setState({
      login :false,
      home:false,
      acc:true,
    })
    
    return <h1>Account Content</h1>

  }


  render() {
    const img = <img src="https://cdn.pixabay.com/photo/2019/12/01/20/34/christmas-4666370__340.jpg" width="100%"></img>
    const lForm = <div>
      <form>

        <label placeholder="Enter Your Name" required>Name</label><br />
        <input type="text" name="email" id="" /><br />

        <label for="" placeholder="Enter Your Email" required>Email</label><br />
        <input type="email" name="" id="" /><br />

        <button type="submit" name="" className="btn btn-secondary offset-1">submit</button><br />

      </form>

    </div>

    const aForm =  <div>
    <form>

      <label placeholder="Enter Your Name" required>Name</label><br />
      <input type="text" name="email" id="" /><br />

      <label for="" placeholder="Enter Your Email" required>Email</label><br />
      <input type="email" name="" id="" /><br />

      <label for="" placeholder="Enter Your Email" required>Password</label><br />
      <input type="email" name="" id="" /><br />

      <label for="" placeholder="Enter Your Email" required>Conform Password</label><br />
      <input type="email" name="" id="" /><br />

      <label for="" placeholder="Enter Your Phone no" required>Phone no</label><br />
      <input type="tel" name="" id="" /><br />

      <button type="submit" name="" className="btn btn-secondary offset-1">submit</button><br />
    </form>

  </div>



    return (<div>
      <ul className="nav bg-secondary">
        <li className="nav-item active">
          <button className="nav-link btn btn-secondary" onClick={this.homeContent}>Home <span className="sr-only">(current)</span></button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-secondary" onClick={this.loginContent}>Login</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-secondary" onClick={this.accountContent}>Create Account</button>
        </li>
      </ul>
    <h1>{this.state.home? img:''}</h1>
    <h4>{this.state.login? lForm:''}</h4>
    <h4>{this.state.acc? aForm:''}</h4>
    <footer className="card fixed-bottom bg-secondary">
  <div className="card-header">
    Footer
  </div>
  
</footer>
    

    </div>)


  }
}

ReactDOM.render(<div><Header /></div >, document.getElementById('react-container'))
