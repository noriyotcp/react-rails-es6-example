class MessageForm extends React.Component {
  render () {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Message" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

