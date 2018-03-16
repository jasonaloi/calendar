var Events = createReactClass({

  render: function() {
    return (
      <div>
        <EventForm />
        {this.props.events.map(function(event) {
          return (
            <Event event={event}/>
          )
        })}
      </div>
    );
  }
});
