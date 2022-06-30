export interface Props {
  score: number;
}

function Score({ score }: Props) {
  return <div>{score}점</div>;
}

export default Score;
