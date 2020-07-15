import actionCreatorFactory from 'typescript-fsa';

export interface InitActionPayload {
  text: string;
}

const actionCreator = actionCreatorFactory();

export const InitActionType = 'INIT_TOP_PAGE';
export const initAction = actionCreator<InitActionPayload>(InitActionType);
