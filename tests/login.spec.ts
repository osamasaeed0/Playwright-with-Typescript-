import { test } from '../fixtures/pom.fixtures';

test.describe('Login flow', () => {

  test('Successful login', async ({pm, validUser , }) => {
    await pm.loginPage.goto();
    await pm.loginPage.login(validUser.username, validUser.password);
    await pm.securePage.assertSuccessMessage();
    await pm.securePage.logout();
  
})
})