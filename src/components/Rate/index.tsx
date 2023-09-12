import { Container } from './styles';
import stars_5 from '../../assets/5_stars.svg';
import stars_4 from '../../assets/4_stars.svg';
import stars_3 from '../../assets/3_stars.svg';
import stars_2 from '../../assets/2_stars.svg';
import stars_1 from '../../assets/1_stars.svg';

interface RateProps {
  rating: number;
}

export function Rate({ rating }: RateProps) {

  let starImage;

  switch (rating) {
    case 1:
      starImage = stars_1;
      break;
    case 2:
      starImage = stars_2;
      break;
    case 3:
      starImage = stars_3;
      break;
    case 4:
      starImage = stars_4;
      break;
    case 5:
      starImage = stars_5;
      break;
    default:
      starImage = null;
  }

  return (
    <Container>
      {starImage && <img src={starImage} alt={`${rating} stars`} />}
    </Container>
  );
}