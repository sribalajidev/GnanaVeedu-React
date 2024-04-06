import './EventList.scss';
import { EVENTLIST } from '../../util/data';;

function EventItem({ eventImg, eventTitle, eventDate, eventTime, eventLocation }) {
  return (
    <div className='event-item-wrapper'>
      <div className='img-wrapper'>
        <img src={eventImg} alt='event list imag' />
      </div>
      <div className='event-details'>
        <div className='content-left'>
          <h4>{eventTitle}</h4>
          <div className='time-location'>
            <div className='event-date'><i className='fa fa-calendar'></i> {eventDate}</div>
            <div className='event-time'><i className='fa fa-clock-o'></i> {eventTime}</div>
            <div className='event-location'><i className='fa fa-location-dot'></i> {eventLocation}</div>
          </div>
        </div>
        <div className='enroll-btn'>
          <a href="https://docs.google.com/forms/" target='_blank'>Enroll Now</a>
        </div>
      </div>
    </div>
  );
}
function EventList() {
  return(
    <section className='event-list-wrapper'>
      <div className='container'>
        <span className='content-label'>Let's join together</span>
        <h3>Upcoming Events</h3>
        <div className='event-list'>
          {EVENTLIST.map((eventItem) => (
            <EventItem key={eventItem.eventId} {...eventItem}></EventItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventList;