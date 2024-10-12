import { useId } from 'react';
import { Button } from '~/components/button';
import { useTheme } from '~/components/theme-provider';
import styles from './theme-toggle.module.css';

export const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;

  return (
<div></div>
  );
};
