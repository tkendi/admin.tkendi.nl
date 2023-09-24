import { styled } from '@/styles/stitches.config';

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '470px',
  margin: '0 auto',
});

export const Wrap = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const RegisterWrap = styled('div', {
  width: 'calc(100% - 40px)',
  padding: '40px 20px',
  marginTop: '40px',
  borderRadius: '5px',
  border: '1px solid $Primary200',
});

export const RegisterForm = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const RegisterInputWrap = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& > div:first-of-type': {
    margin: '40px 0px 10px',
  },
});

export const ProgressWrap = styled('div', {
  width: '100%',
  maxWidth: '100px',
  height: '10px',
  position: 'relative',
  marginBottom: '20px',
  backgroundColor: '$Primary400',
  borderRadius: '15px',
});

export const Progress = styled('div', {
  height: '10px',
  position: 'absolute',
  background: '$Info600',
  borderRadius: '15px',
});

export const SubmitButton = styled('button', {
  width: '100%',
  height: '55px',
  borderRadius: '18px',
  marginTop: '40px',
  backgroundColor: '$Info400',
});
