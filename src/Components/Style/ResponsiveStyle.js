const size = {
  mobile: '375px',
  tabletMin: '768px',
  tabletMax: '1023px',
  desktop: '1024px',
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tabletMin}, max-width: ${size.tabletMax})`,
  desktop: `(min-width: ${size.laptop})`,
};
