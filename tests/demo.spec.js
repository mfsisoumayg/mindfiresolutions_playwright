await page.getByRole('link', { name: 'Who Do We Serve' }).click();
await page.getByRole('banner').getByText('Services Custom Software').click();
await page.getByRole('banner').locator('li').filter({ hasText: 'Knowledge' }).click();
await page.getByText('Portfolio Case Studies Projects Success Stories Infographics Client Testimonial').click();
await page.getByRole('banner').getByText('People Culture Career People').click();
await page.getByRole('banner').locator('li').filter({ hasText: 'Contact Us' }).click();