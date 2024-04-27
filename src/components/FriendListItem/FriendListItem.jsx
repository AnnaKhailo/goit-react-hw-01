import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
  friendData: { avatar, name, isOnline },
}) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.text, isOnline === true ? css.online : css.offline)}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
