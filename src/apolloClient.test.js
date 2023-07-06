test('REACT_APP_GITHUB_API_KEY environment variable is present', () => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

  expect(apiKey).not.toBeUndefined();
  expect(apiKey).toBeTruthy();
});
