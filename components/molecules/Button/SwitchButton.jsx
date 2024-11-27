import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../../../provider/ThemeContext';

const SwitchButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Switch
      value={isDarkMode}
      onValueChange={toggleTheme}
      thumbColor={isDarkMode ? '#6200EE' : '#BB86FC'}
      trackColor={{
        false: '#767577',
        true: '#767577',
      }}
    />
  );
};

export default SwitchButton;
