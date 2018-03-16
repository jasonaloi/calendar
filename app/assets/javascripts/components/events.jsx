var Events = createReactClass({

  render: function() {
    return (
      <div>
        {this.props.events.map(function(event) {
          return (
            <Event event={event} key={parseInt(Math.random()*1000000000)}/>
          )
        })}
      </div>
    );
  }
});
