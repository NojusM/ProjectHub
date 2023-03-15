interface AboutProps {
  text: string;
}

export default function About({ text }: AboutProps) {
  return (
    <div className="about">
      <h2>About</h2>
      <p>{text}</p>
    </div>
  );
}
