import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Top } from '../components/pages/Top';
import { initAction } from '../actions';
import { IState } from '../states/Top';

const mapStateToProps = ({ top }: { top: IState }) => ({
  text: top.text,
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    init: (text: string) => dispatch(initAction({ text })),
  };
}

const TopContainer: React.FC = (props: any) => {
  useEffect(() => {
    props.init('Learn React');
  });

  return <Top {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TopContainer);
