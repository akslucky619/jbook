interface FrontPageProps {
  onClickStarted: (bool: boolean) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ onClickStarted }) => {
  return (
    <div>
      <div
        onClick={() => onClickStarted(false)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1 style={{ fontSize: "34px" }}>Get Started</h1>
      </div>
      <div style={{ width: "90%", left: "5%", position: "relative" }}>
        <img
          src="https://www.linkpicture.com/q/Screenshot-from-2022-01-24-22-17-02_1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FrontPage;
