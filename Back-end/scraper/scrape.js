const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); // Remove timeout limit completely
    await page.goto('https://www.sviet.ac.in/', { waitUntil: 'networkidle0' });

    const result = await page.evaluate(() => {
      const data = {
        title: document.title,
        phone: null,
        email: null,
        address: null,
        about: null,
      };

      const allText = document.body.innerText;

      const emailMatch = allText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      const phoneMatch = allText.match(/(\+91[\s-]?)?[6-9]\d{9}/);

      data.email = emailMatch ? emailMatch[0] : "Not found";
      data.phone = phoneMatch ? phoneMatch[0] : "Not found";

      const aboutSection = document.querySelector('#about p')?.innerText ||
                           document.querySelector('.elementor-widget-container p')?.innerText;

      data.about = aboutSection || "Not found";

      const footerText = document.querySelector('footer')?.innerText || '';
      const addressLine = footerText.split('\n').find(line => line.includes('Punjab') || line.includes('Chandigarh'));
      data.address = addressLine || "Not found";

      return data;
    });

    fs.writeFileSync('scraper/output.json', JSON.stringify(result, null, 2));
    console.log("✅ Data scraped successfully.");
    await browser.close();
  } catch (error) {
    console.error("❌ Scraping error:", error.message);
  }
})();
