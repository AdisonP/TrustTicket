export default function StatSquare({ key, description, title, img, logo }) {
  return (
    <div className="eventTileSmall" key={key}>
      <div
        className="dashboardStat-square"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="dashboardState-bg">
          <div className="dashboardState-test">
            <div
              className="dashboardStat-logo"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
            <div className="dashboardStat-title">{title}</div>
            <div className="dashboardStat-description ">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
