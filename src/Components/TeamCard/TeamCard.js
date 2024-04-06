import './TeamCard.scss';
import { TEAM_MEMBER } from '../../util/data';

function MemberItem({ memberImg, memberName }) {
  return(
    <div className='member-item'>
      <div className='member-img'>
        <img src={memberImg} alt='volunteer of gnanaveedu' />
      </div>
      <div className='member-name'>{memberName}</div>
    </div>
  );
}
function  TeamCard() {
  return (
    <section className='team-area-wrapper'>
      <div className='container'>
        <span className='content-label'>Meet Team</span>
        <h3 className='section-title'>Our Volunteers</h3>
        <div className='card-wrapper'>
          {TEAM_MEMBER.map((memberitem)=>(
            <MemberItem key={memberitem.memberId} {...memberitem}></MemberItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamCard;