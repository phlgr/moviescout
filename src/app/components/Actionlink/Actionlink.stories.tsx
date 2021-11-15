import Actionlink from './Actionlink';

export default {
  title: 'Component/Actionlink',
  component: Actionlink,
};

export const Imdb = (): JSX.Element =>
  Actionlink({ url: 'Imdb.com', text: 'Visit Imdb' });
