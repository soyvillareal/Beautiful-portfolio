import React from 'react';
import Button from '../UIElements/Button/Button';
import { ReactComponent as ToggleLightIcon } from '../../assets/toggle-light.svg';
import { ReactComponent as ToggleDarkIcon } from '../../assets/toggle-dark.svg';
import { useThemeContext } from '../../hooks/themeHook/themeHook';

const BtnToggleTheme = ({ toggleClassName }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = React.useMemo(
    () => (dark ? ToggleDarkIcon : ToggleLightIcon),
    [dark],
  );

  return (
    <Button addClass={toggleClassName} onClick={toggleTheme}>
      <ToggleThemeIcon />
    </Button>
  );
};

export default BtnToggleTheme;
