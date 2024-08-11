import FriendListItem from '../FriendListItem/FriendListItem'
import './FriendList.module.css'

export default function FriendList({friends}) {
    return (
       <ul>
            {friends.map(item => {
                return (
                    <li key={item.id}>
                        <FriendListItem friend={item} />
                    </li>
                );
    })}
</ul> 
    )
}