import VerifiedStatus from "./VerifiedStatus";

export default function EventTileSmall({ key, price, official, img }) {
  return (
    <div className="eventTileSmall" key={key}>
      <div
        className="eventTileSmall-square"
        style={{ backgroundImage: `url(${img})` }}
      >
        <VerifiedStatus official={official} />
      </div>
      <div className="eventTileSmall-price">{price}€</div>
    </div>
  );
}
