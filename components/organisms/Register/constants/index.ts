import {
  emailPattern,
  passwordPattern,
} from '@/components/atoms/constants/validations';

export const REGISTER_INPUT_DATA = [
  {
    name: 'name',
    type: 'text',
    placeholder: '닉네임',
    title: ' 1.닉네임을 입력해 주세요',
    subTitle: '본인이름으로 가입하지 말아줘요',
    rules: {
      required: '닉네임을 입력해주세요',
    },
  },
  {
    name: 'email',
    type: 'text',
    placeholder: '이메일',
    title: ' 2.이메일를 입력해 주세요',
    subTitle: '본인 이메일로 가입해 줘요',
    rules: {
      required: '이메일을 확인해 주세요',
      pattern: emailPattern.value,
    },
  },
  {
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
    title: ' 3.패스워드를 입력해 주세요',
    subTitle: '숫자, 영문, 특수문자 조합 8자 이상으로 만들어줘요',
    rules: {
      required: '비밀번호의 규칙을 확인해 주세요',
      pattern: passwordPattern.value,
    },
  },
] as const;
