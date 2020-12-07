import { get, set } from '../storage.utils';

export default function currentProgressUtils(value) {
  let currentProgressArr = get('currentProgress');
  currentProgressArr.push(value);
  set('currentProgress', currentProgressArr);
}
