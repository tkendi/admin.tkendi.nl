import { styled } from '@/styles/stitches.config';
import { breakPoints } from '@/styles/breakPoints';

export const Container = styled('div', {
  maxWidth: breakPoints.lg,
  margin: '0 auto',

  '@me': {
    maxWidth: breakPoints.me,
  },

  '@sm': {
    maxWidth: breakPoints.sm,
  },
});
