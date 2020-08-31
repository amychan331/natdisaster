import React from 'react';
import { act } from 'react-test-renderer';
import { render } from 'react-native-testing-library';
import App from '../App';

jest.mock(
  '../node_modules/react-native/Libraries/Animated/src/NativeAnimatedHelper'
);

describe('App', () => {
  it('renders the basic components', async () => {
    const { queryByText } = render(<App />);
    // Use of act since there is React state update to ForwardRef(NavigationContainer)
    await act(async () => {
      expect(queryByText('Home Screen')).not.toBeNull();
      expect(queryByText('Map Component')).toBeNull();
    });
  });
});
