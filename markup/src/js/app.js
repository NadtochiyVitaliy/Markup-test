import ready, { HTML } from './utils';
import initOpenClose from './components/openClose';

ready(() => {
  HTML.classList.add('is-loaded');
  initOpenClose();
});
