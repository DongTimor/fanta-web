
import OContactsCard from '../../organisms/o-contacts-card/OContactsCard';
import OGroupsConversationsCard from '../../organisms/o-groups-conversations-card/OGroupsConversationsCard';

import OSider from '../../organisms/o-sidebar/OSider';
import './THomesiderRight.scss';

function THomesiderRight() {
    return (
        
            <OSider className="t-home-sider-right">
                <div className="t-home-sider-right-friend-contact">
                    <p className="Card_name_label">Contacts</p>
                    <OContactsCard />
                    <OContactsCard />
                    <OContactsCard />
                    <OContactsCard />
                    <OContactsCard />
                    <OContactsCard />
                    <OContactsCard />

                </div>
                <div className="t-home-sider-right-groups-conversation">
                    <p className="Card_name_label">Groups Conversation</p>
                    <OGroupsConversationsCard />
                    <OGroupsConversationsCard />
                    <OGroupsConversationsCard />


                </div>



            </OSider>
        
    );
}

export default THomesiderRight;