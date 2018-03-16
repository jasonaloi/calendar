var Event = createReactClass({

  render: function() {
    return (
      <div>
        <h3>{this.props.event.title}</h3>
        <p>{formatDate(this.props.event.event_time)}</p>
      </div>
    );
  }
});
