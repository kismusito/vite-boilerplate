export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 150],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 150],
    'header-max-length': [2, 'always', 150],
  },
};
