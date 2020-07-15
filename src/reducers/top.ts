import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { initAction } from '../actions';
import Top from '../states/Top';

export const reducer = reducerWithInitialState(
  new Top()
).caseWithAction(initAction, (state: Top, { payload }) =>
  state.setText(payload.text)
);
