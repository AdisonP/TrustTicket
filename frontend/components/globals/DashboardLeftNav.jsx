export default function DashboardLeftNav({ key, logo }) {
    return (
      <div className="dashboardLeftNav-parent" key={key}>
        <div
          className="dashboardLeftNav-logo"
          style={{ backgroundImage: `url(${logo})` }}
        >
        
        </div>
      </div>
    );
  }
  