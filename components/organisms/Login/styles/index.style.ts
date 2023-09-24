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

export const LoginWrap = styled('div', {
  width: 'calc(100% - 40px)',
  padding: '30px 20px',
  marginTop: '40px',
  borderRadius: '5px',
  border: '1px solid $Primary200',
});

export const LoginForm = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const LoginInputWrap = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& > div:first-of-type': {
    marginBottom: '20px',
  },
});

export const ErrorMsgWrap = styled('div', {
  marginTop: '30px',
});

export const ConfirmButtonWrap = styled('div', {
  width: '100%',
  textAlign: 'center',
  marginTop: '35px',
});

export const LoginButton = styled('button', {
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$Primary500',
  boxShadow: 'none',
  outline: 'none',
  border: 'none',
  borderRadius: '6px',
});

export const LoginSelectTextWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 10px',
  margin: '20px 0px',

  '&::before': {
    content: '',
    width: 'calc(50% - 30px)',
    height: '1px',
    backgroundColor: '$Info100',
  },

  '&::after': {
    content: '',
    width: 'calc(50% - 30px)',
    height: '1px',
    backgroundColor: '$Info100',
  },
});
