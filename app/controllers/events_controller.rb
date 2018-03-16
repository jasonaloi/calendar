class EventsController < ApplicationController

  def index
    @events = Event.order('event_time ASC')
    @event = Event.new
  end

  def create
    @event = Event.create(event_params)
    redirect_to :root
  end

  private

  def event_params
    params.require(:event).permit(:title, :event_time)
  end

end
