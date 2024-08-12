import css from './FriendListItem.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div className={css.friendListItem}>
  <img className={css.picture} src={avatar} alt="Avatar" width="48" />
  <p className={css.friend}>{name}</p>
  <p>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}