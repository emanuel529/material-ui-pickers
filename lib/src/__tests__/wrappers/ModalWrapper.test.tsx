import { ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { PureDateInput } from '../../_shared/PureDateInput';
import ModalWrapper, { ModalWrapperProps } from '../../wrappers/ModalWrapper';
import { shallow } from '../test-utils';

describe('ModalWrapper', () => {
  const onAcceptMock = jest.fn();
  let component: ShallowWrapper<ModalWrapperProps>;

  beforeEach(() => {
    component = shallow(
      <ModalWrapper
        open
        onDismiss={jest.fn()}
        onAccept={onAcceptMock}
        onClear={jest.fn()}
        onSetToday={jest.fn()}
        InputComponent={PureDateInput}
        DateInputProps={{
          inputValue: 'bar',
          onChange: jest.fn(),
        }}
      >
        <div>foo</div>
      </ModalWrapper>
    );
  });

  it('Should properly handle keyDownEvent on Modal', () => {
    const dispatchKeyDown = (key: string) => {
      component
        .find('WithStyles(ModalDialog)')
        .simulate('KeyDownInner', { key, preventDefault: jest.fn() });
    };

    dispatchKeyDown('Shift');
    expect(onAcceptMock).not.toBeCalled();
    jest.resetAllMocks();

    dispatchKeyDown('Enter');
    expect(onAcceptMock).toHaveBeenCalled();
  });
});
