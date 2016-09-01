class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = ReactDOM.findDOMNode(this.refs.user).value.trim();
    let text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    // Do nothing without user or text
    if (!user || !text) {
      return;
    }
    // Call the event on MessageBox
    this.props.onMessageSubmit({ user: user, text: text });
    // Remove the values on form
    this.refs.user.value = '';
    this.refs.text.value = '';
  }

  render () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="user" />
        <input type="text" placeholder="Message" ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

