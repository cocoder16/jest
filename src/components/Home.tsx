import { Link } from "react-router-dom";

function Home() {
  return (
    <Link data-testid="home" to="/score">
      go to score
    </Link>
  );
}

export default Home;
