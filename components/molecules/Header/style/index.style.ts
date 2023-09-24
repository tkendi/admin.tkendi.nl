import { styled } from '@/styles/stitches.config';
import { Text } from '@/components/atoms/Text';

export const Wrap = styled('div', {
  width: 'calc(100% - 30px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px',
  marginBottom: '30px',
  backgroundColor: '#fefefe',

  '@sm': {},
});

export const LogoBox = styled('div', {
  width: '38px',
  height: '38px',
  padding: '10px',
});

export const LogoText = styled(Text, {
  fontFamily: 'var(--dosis-font)',
  fontSize: '34px',
  fontWeight: 600,
  lineHeight: '40px',
  textAlign: 'center',
});
