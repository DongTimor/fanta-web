
import OEventCard from '../../organisms/o-event-card/OEventCard';
import OFriendRequestCard from '../../organisms/o-friend-request-card/OFriendRequestCard';
import OGroupsCard from '../../organisms/o-groups-card/OGroupsCard';
import OSider from '../../organisms/o-sidebar/OSider';
import './THomesider.scss';

function THomesider() {
    return (
        
            <OSider className="t-home-sider">
                <div className="t-home-sider-left-friend-request">
                    <p className="Card_name_label" >Friend Requests</p>
                    <OFriendRequestCard />
                    <OFriendRequestCard />
                </div>
                <div className="t-home-sider-left-event">
                    <p className="Card_name_label">Events</p>
                    <OEventCard />
                    <OEventCard />

                </div>
                <div className="t-home-sider-left-group">
                    <p className="Card_name_label">Groups</p>
                    <OGroupsCard />
                    <OGroupsCard />

                </div>




            </OSider>
        
    );
}

export default THomesider;