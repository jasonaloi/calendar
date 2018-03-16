var EventsContainer = createReactClass({
  getInitialState: function() {
    return {
      events: this.props.events,
      title: '',
      event_time: 'Tomorrow at 9am',
    }
  },

  onUserInput: function(obj) {
    this.setState(obj);
  },


  onFormSubmit: function() {
    var event = {title: this.state.title, event_time: this.state.event_time};
    var addNewEvent = this.addNewEvent;
    $.post('/events',
            {event: event})
          .done(function(data) {
            addNewEvent(data);
          });
  },

  addNewEvent: function(data) {
    var events = React.addons.update(this.state.events, { $push: [data]});
    this.setState({
      events: events.sort(function(a,b){
        return a.event_time - b.event_time;
      })
    });
  },

  render: function() {
    return (
      <div>
        <EventForm title={this.state.data} event_time={this.state.event_time} onUserInput={this.onUserInput} onFormSubmit={this.onFormSubmit}/>
        <Events events={this.state.events} />
      </div>
    );
  }
});
