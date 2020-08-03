import { nil } from './index';

test('nil', (): void => {
  const nil1: nil = null;
  expect(nil1).toBe(null);

  const nil2: nil = undefined;
  expect(nil2).toBe(undefined);
});
