import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
  <div className={css.profileCard}>

      <div className={css.userProfile}>
  
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profilName}>{name}</p>
        <p className={css.profilTag}>@{tag}</p>
        <p className={css.profilLocation}>{location}</p>
      </div>
      
      <ul className={css.userStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>   
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>        
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>

    </div>)
}