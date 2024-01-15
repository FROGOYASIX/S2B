const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	let id = 0;
	await page.goto('https://buff.163.com/goods/'+ id +'?from=market#tab=selling');

	const t = await page.$eval(".f_Strong:first-child", e => e.innerText);
	console.log(t);
	

	await browser.close();
})()