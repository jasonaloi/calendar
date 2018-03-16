class EventsController < ApplicationController

  def index
    @events = Event.order('event_time ASC')
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :event_time)
  end

end
