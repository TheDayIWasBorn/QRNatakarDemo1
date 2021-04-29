import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { configActions } from '../../redux/reducers/configSlice';
// import { Reducers } from '../../redux/store';

interface ThemeButtonProps {
  color: string;
}

export function ThemeButton(props: ThemeButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  // const config = useSelector((state: Reducers) => state.config);
  // const dispatch = useDispatch();

  // const oppositeTheme = config.theme == 'dark' ? 'light' : 'dark';
  const oppositeTheme = colorMode == 'dark' ? 'light' : 'dark';

  const handleButtonClick = () => {
    // dispatch(configActions.setTheme(oppositeTheme));
    toggleColorMode();
  };

  return (
    <Button
      variant="outline"
      colorScheme={props.color}
      onClick={handleButtonClick}
      children={`Set to ${oppositeTheme}`}
    />
  );
}
