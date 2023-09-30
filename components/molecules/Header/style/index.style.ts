import { Text } from '@/components/atoms/Text';
import { styled } from '@/styles/stitches.config';

export const Wrap = styled('div', {
  width: 'calc(100% - 72px)',
  height: "54px",
  display: 'flex',
  alignItems: "center",
  margin: "0 auto",
  backgroundColor: '#fefefe',
});

export const LogoBox = styled('div', {
  width: "max-content",
  height: "max-content",
});

export const LogoText = styled(Text, {
  fontFamily: "SUIT Variable",
  fontSize: '13px',
  fontWeight: 500,
  textAlign: "center",
  color: "$Primary500"
});
