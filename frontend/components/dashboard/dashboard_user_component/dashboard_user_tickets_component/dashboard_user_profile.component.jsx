import {
  UserProfile,
  UserLogo,
  UserInfos,
  UserDashboardButton,
} from "./dashboard_user_profile.styled";

export default function DashboardUserProfile() {
  return (
    <UserProfile>
      <UserLogo style={{ backgroundImage: `url("/julnft.jpeg")` }} />
      <UserInfos>
        <div className="user-dashboard-infos-tickets">
          <p className="user-dashboard-infos-tickets-title">Tickets</p>
          <p>0</p>
        </div>
        <div className="user-dashboard-infos-wallet">
          <p className="user-dashboard-infos-wallet-title">Wallet</p>
          <p>0xb...0j</p>
        </div>
      </UserInfos>
      <UserDashboardButton>
        <a href="/profile">Modifier</a>
      </UserDashboardButton>
    </UserProfile>
  );
}
