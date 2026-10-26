// Photo block. Shows /public/<src> as a background when the file exists; if it is missing the
// navy placeholder + icon stays visible, so the layout never breaks while real photos are being collected.
import Icon from "./Icon";
export default function Photo({ src, icon = "buildings", className = "", children, style }) {
  return (
    <div className={"photo " + className} style={style}>
      <span className="photo-fallback"><Icon name={icon} size={46} sw={1.2} /></span>
      {src && <span className="photo-img" style={{ backgroundImage: `url(${src})` }} />}
      {children}
    </div>
  );
}
