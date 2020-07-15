import { Record } from 'immutable';

export interface IState {
  text: string;
}

const TopRecord = Record<IState>({
  text: '',
});

class Top extends TopRecord {
  setText(text: string): Top {
    return this.set('text', text);
  }
}

export default Top;
