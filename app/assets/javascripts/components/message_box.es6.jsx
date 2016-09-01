class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: [
      { id: 1, user: 'Tom', text: 'Good morning' },
      { id: 2, user: 'John', text: 'Good afternoon' },
      { id: 3, user: 'Emily', text: 'Good evening' }
    ]};
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  handleMessageSubmit(message) {
    message.id = new Date();
    let newMessages = this.state.messages.concat(message);
    this.setState({ messages: newMessages });
  }

  render () {
    let messageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} message={message} />
      );
    });

    return (
      <div className="messageBox">
        {messageItems}
        <MessageForm onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
}
