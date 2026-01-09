import { Random } from '@woowacourse/mission-utils';

export function canMove() {
  const randomNum = Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) return true;
  return false;
}
