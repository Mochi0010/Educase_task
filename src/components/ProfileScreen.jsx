import { Camera } from 'lucide-react';

export default function ProfileScreen({ user, onLogout }) {
  const name = user?.name || 'Marry Doe';
  const email = user?.email || 'Marry@Gmail.Com';

  return (
    <div className="screen slide-in">
      <div className="profile">
        <div className="profile__header">Account Settings</div>
        <div className="profile__body stagger">
          <div className="profile__user">
            <div className="profile__avatar-wrap">
              <img
                className="profile__avatar"
                src="/avatar.png"
                alt={name}
              />
              <div className="profile__badge">
                <Camera />
              </div>
            </div>
            <div className="profile__info">
              <span className="profile__name">{name}</span>
              <span className="profile__email">{email}</span>
            </div>
          </div>
          <p className="profile__bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          <hr className="profile__divider" />
        </div>
      </div>
    </div>
  );
}
