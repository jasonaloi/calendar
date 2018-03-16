var EventForm = createReactClass({

  render: function() {
    return (
      <form>
        <input name="title" placeholder="Event Name"/>
        <br/>
        <input name="event_time" placeholder="Date & Time"/>
        <br/>
        <input type="submit" value="Add Event"/>
      </form>
    );
  }
});
