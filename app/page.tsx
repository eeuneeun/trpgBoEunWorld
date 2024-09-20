export default function Home() {
  return (
    <div className="main">
      <ul className="flex-start">
        <li>
          <a href="/game">
            <h2>GAME</h2>
          </a>
        </li>
        <li>
          <a href="/chat">
            <h2>CHAT</h2>
          </a>
        </li>
        <li>
          <a href="/mypage">
            <h2>MY PAGE</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
