import { useColorMode } from '@docusaurus/theme-common';

export default function TechIcon({ name, iconUrl, Svg, lightColor, darkColor, size = 48 }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  if (iconUrl) {
    return <img src={iconUrl} alt={name} width={size} height={size} />;
  }

  if (Svg) {
    const fill = isDark ? darkColor || '#fff' : lightColor || '#000';
    return <Svg width={size} height={size} fill={fill} aria-label={name} role="img" />;
  }

  return null;
}
