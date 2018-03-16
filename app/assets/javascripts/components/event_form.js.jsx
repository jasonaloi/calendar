var EventForm = createReactClass({
  handleChange: function(e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" placeholder="Event Name" value={this.props.title} onChange={this.handleChange} />
        <br/>
        <input name="event_time" placeholder="Date & Time" value={this.props.event_time} onChange={this.handleChange} />
        <br/>
        <input type="submit" value="Add Event"/>
      </form>
    );
  }
});
