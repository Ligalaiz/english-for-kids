import './styles/main.scss';
import { routerUtils } from './app/utils/router.utils';
import eventHandlersUtils from './app/utils/eventHandlers.utils';
import checkStateUtils from './app/utils/checkState.utils';

checkStateUtils();

document.addEventListener('DOMContentLoaded', () =>
  eventHandlersUtils(routerUtils)
);
