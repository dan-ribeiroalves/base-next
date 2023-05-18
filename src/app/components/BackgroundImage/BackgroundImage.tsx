import './BackgroundImage.scss';

export default function BackgroundImage({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="image">
      <div className="background--vertical">
        <div className="background--horizontal">{children}</div>
      </div>
    </div>
  );
}
