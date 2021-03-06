export default {
  key: "external",
  options: [
    {
      value: "robinhood",
      label: "robinhood",
      link: (s) => "https://robinhood.com/stocks/" + s,
    },
    {
      value: "googleSearch",
      label: "google search",
      link: (s) => "https://www.google.com/search?q=quote " + s,
      isDefault: true,
    },
    {
      value: "googleFinance",
      label: "google finance",
      link: (s) => "https://www.google.com/finance/quote/" + s + ":NYSE",
    },
    {
      value: "yahoo",
      label: "yahoo finance",
      link: (s) => "https://finance.yahoo.com/quote/" + s,
    },
    {
      value: "wsj",
      label: "wall street journal",
      link: (s) => "https://www.wsj.com/market-data/quotes/US/" + s,
    },
    {
      value: "market",
      label: "market watch",
      link: (s) => "https://www.marketwatch.com/investing/stock/" + s,
    },
  ],
};
