await page.getByRole('link', { name: 'Who Do We Serve' }).click();
await page.getByRole('banner').getByText('Services Custom Software').click();
await page.getByRole('banner').locator('li').filter({ hasText: 'Knowledge' }).click();
await page.getByText('Portfolio Case Studies Projects Success Stories Infographics Client Testimonial').click();
await page.getByRole('banner').getByText('People Culture Career People').click();
await page.getByRole('banner').locator('li').filter({ hasText: 'Contact Us' }).click();
await page.getByRole('link', { name: 'About Us ' }).click();
await page.getByRole('link', { name: 'Services ' }).click();
await page.getByRole('link', { name: 'Industries ' }).click();
await page.getByRole('link', { name: 'Custom Software Development ' }).click();

await page.goto('https://www.mindfiresolutions.com/');
await page.getByRole('link', { name: 'Knowledge' }).click();

await page.getByRole('link', { name: 'View Whitepapers' }).click();
await page.getByRole('link', { name: 'Industry' }).click();
await page.getByRole('link', { name: 'Tech', exact: true }).click();
await page.getByRole('link', { name: 'All', exact: true }).click();
await page.getByRole('link', { name: 'ASP.NET' }).click();
await page.getByRole('link', { name: 'PHP' }).click();
await page.getByRole('link', { name: 'Python' }).click();
await page.getByRole('link', { name: 'Java' }).click();
await page.getByRole('link', { name: 'Ruby on Rails' }).click();
await page.getByRole('link', { name: 'Mobile' }).click();
await page.getByRole('link', { name: 'Blockchain' }).click();
await page.getByRole('link', { name: 'Web' }).click();
await page.getByRole('link', { name: 'Testing' }).click();
await page.getByRole('link', { name: 'Industry' }).click();
await page.getByRole('link', { name: 'All', exact: true }).click();
await page.getByRole('link', { name: 'Healthcare', exact: true }).click();
await page.getByRole('link', { name: 'IT', exact: true }).click();
await page.getByRole('link', { name: 'The Right Technology Partner' }).click();
await page.getByRole('heading', { name: 'The Right Technology Partner' }).click();
await page.getByRole('heading', { name: 'Executive Summary' }).click();
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Download Whitepaper' }).click();
  const page1 = await page1Promise;

await page.getByRole('link', { name: 'Custom Software Development ' }).click();
await page.getByRole('link', { name: '.Net', exact: true }).click();

await page.goto('https://www.mindfiresolutions.com/who-do-we-serve/');
await page.getByRole('heading', { name: 'Igniting Ideas' }).click();
await page.getByRole('heading', { name: 'To Solutions' }).click();
await page.getByRole('heading', { name: 'Startups' }).click();
await page.getByRole('heading', { name: 'SMB' }).click();
await page.getByRole('heading', { name: 'Owners' }).click();
await page.getByRole('heading', { name: 'IT Business' }).click();
await page.getByRole('heading', { name: 'Executives/CTOs' }).click();
await page.getByText('CEOs ● Can the software').click();
await page.getByRole('heading', { name: 'CEOs' }).click();
await page.locator('#tm-row-65efa570ceefc').getByRole('link').click();
await page.getByRole('heading', { name: 'Over 2000+ Engagements' }).click();
await page.getByRole('heading', { name: 'Over 20+ Years' }).click();
await page.getByRole('heading', { name: '+ Clients' }).click();
await page.getByRole('heading', { name: '+ Seating Facilities' }).click();
await page.getByRole('heading', { name: 'Agile Methodology' }).click();