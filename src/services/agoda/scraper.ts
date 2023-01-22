import puppeteer from 'puppeteer';

type Scrapper = {
    price: string;
    hotelName: string;
};

export const scraper = async (url: string): Promise<Scrapper> => {
    try {
        const priceSelector: string =
            '#contentContainer > div:nth-child(4) > ol > li:nth-child(1) > div > a > div.Gridstyled__GridStyled-sc-dfh2k0-0.kEJDDi.PropertyCard__Container > div.Itemstyled__Item-sc-12uga7p-0.cNsNca.PropertyCard__Section.PropertyCard__Section--pricingInfo > div > div.Box-sc-kv6pi1-0.eQFPTY > aside > ul > li > div > span.PropertyCardPrice__Value';
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url);
        await page.waitForSelector(priceSelector);

        const scapedData = await page.evaluate(() => {
            const price = document.querySelector(
                '#contentContainer > div:nth-child(4) > ol > li:nth-child(1) > div > a > div.Gridstyled__GridStyled-sc-dfh2k0-0.kEJDDi.PropertyCard__Container > div.Itemstyled__Item-sc-12uga7p-0.cNsNca.PropertyCard__Section.PropertyCard__Section--pricingInfo > div > div.Box-sc-kv6pi1-0.eQFPTY > aside > ul > li > div > span.PropertyCardPrice__Value'
            ).textContent;
            const hotelName = document.querySelector(
                '#contentContainer > div:nth-child(4) > ol > li:nth-child(1) > div > a > div.Gridstyled__GridStyled-sc-dfh2k0-0.kEJDDi.PropertyCard__Container > div.Itemstyled__Item-sc-12uga7p-0.ewNxOO.PropertyCard__Section.PropertyCard__Section--propertyInfo > div > header > div.sc-bdfBwQ.sc-gsTCUz.ljntSB > h3'
            ).textContent;

            return { price, hotelName };
        });

        await browser.close();

        return scapedData;
    } catch (err) {
        console.log(err);
        throw new Error('Unexpected Error');
    }
};
