import { getDependenciesDataForOrg, getLicenseDataForOrg } from '../../src/lib/api/org';
import { generateLicenseData } from '../../src/lib';

describe('Get org licenses', () => {
  const OLD_ENV = process.env;
  process.env.SNYK_TOKEN = process.env.SNYK_TEST_TOKEN;
  const ORG_ID = process.env.TEST_ORG_ID as string;

  afterAll(async () => {
    process.env = { ...OLD_ENV };
  });
  test('SNYK_TOKEN & ORG_ID are set', async () => {
    expect(process.env.SNYK_TOKEN).not.toBeNull();
    expect(process.env.ORG_ID).not.toBeNull();
  });
  test('License results are returned from API', async () => {
    const licenseRes = await generateLicenseData(ORG_ID, {});
    expect(Object.keys(licenseRes).length > 0).toBeTruthy();
  }, 5000);
});
