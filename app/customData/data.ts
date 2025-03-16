import type { InputData } from '~/types/types'

export const inputData: InputData[] = [
  {
    label: 'Name:',
    type: 'text',
    forInput: 'name',
    warnText: 'The name must begin with a capital letter.',
  },
  {
    label: 'Age:',
    type: 'number',
    forInput: 'age',
    warnText: 'Age must be a positive number.',
  },
  {
    label: 'Email:',
    type: 'email',
    forInput: 'email',
    warnText: 'example@gmail.com',
  },
  {
    label: 'Password:',
    type: 'password',
    forInput: 'password',
    warnText:
      'The password must contain at least 8 characters, one uppercase and lowercase letter, a number and a special character.',
  },
  {
    label: 'Repead Password:',
    type: 'password',
    forInput: 'confirmPassword',
    warnText: 'Passwords must match',
  },
]

export const countres = [
  'United States',
  'Canada',
  'Germany',
  'Australia',
  'India',
  'Brazil',
  'Japan',
  'China',
  'Russia',
  'Mexico',
  'Kazakhstan',
  'Uzbekistan',
  'Turkmenistan',
  'Kyrgyzstan',
  'Tajikistan',
]
