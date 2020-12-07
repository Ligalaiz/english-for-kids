import createStarsUtils from './game/createStars.utils';
import { get, set } from './storage.utils';

export default function restoreCurrentProgressUtils() {
  const currentProgressArr = get('currentProgress');

  currentProgressArr.forEach((item) => {
    switch (item.state) {
      case 'true':
        createStarsUtils('true');
        break;
      case 'false':
        createStarsUtils('false');
        break;
    }
  });
  set('currentProgress', currentProgressArr);
}
