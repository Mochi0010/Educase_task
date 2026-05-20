export default function MobileFrame({ children }) {
  return (
    <div className="mobile-frame">
      <div className="screen-container">
        {children}
      </div>
    </div>
  );
}
