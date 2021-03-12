export interface ETF {
  symbol: string;
  name: string;
  category: string;
  price: number;
  expense_ratio: string;
  total_assets: string;
  description: string;
  link: string;
  number_of_stocks: number;
  largest_holdings: string[];
  allocation: Allocation[];
  allocation_type: string;
}

export interface Allocation {
  name: string;
  percent: number;
}

export class ExchangeTradedFund implements ETF {
  symbol: string;
  name: string;
  category: string;
  price: number;
  expense_ratio: string;
  total_assets: string;
  description: string;
  link: string;
  number_of_stocks: number;
  largest_holdings: string[];
  allocation: ETFAllocation[];
  allocation_type: string;

  constructor(
    symbol: string,
    name: string,
    category: string,
    price: number,
    expense_ratio: string,
    total_assets: string,
    description: string,
    link: string,
    number_of_stocks: number,
    largest_holdings: string[],
    allocation: ETFAllocation[],
    allocation_type: string) {

      this.symbol = symbol;
      this.name = name;
      this.category = category;
      this.price = price;
      this.expense_ratio = expense_ratio;
      this.total_assets = total_assets;
      this.description = description;
      this.link = link;
      this.number_of_stocks = number_of_stocks;
      this.largest_holdings = largest_holdings;
      this.allocation = allocation;
      this.allocation_type = allocation_type;
  }

  static createExchangeTradedFund(obj: any): ExchangeTradedFund {
    let etfAllocation: ETFAllocation[] = [];

    obj.allocation.forEach(function(item: any){
        etfAllocation.push(new ETFAllocation(item.name, item.percent));
    });

    return new ExchangeTradedFund(
        obj.symbol,
        obj.name,
        obj.category,
        obj.price,
        obj.expense_ratio,
        obj.total_assets,
        obj.description,
        obj.link,
        obj.number_of_stocks,
        obj.largest_holdings,
        etfAllocation,
        obj.allocation_type
    );    
  }
}

export class ETFAllocation implements Allocation {
  name: string;
  percent: number;

  constructor(
    name: string,
    percent: number) {
      this.name = name;
      this.percent = percent;
    }
}

export const etfs = [
    {
      symbol: "VOO",
      name: "Vanguard S&P 500 ETF",
      category: "Large Blend",
      price: 355.37,
      expense_ratio: "0.03%",
      total_assets: "$630.7B",
      description: "Seeks to track the performance of the S&P 500 Index, representing 500 of the largest U.S. companies.",
      link: "https://investor.vanguard.com/etf/profile/VOO",
      number_of_stocks: 509,
      largest_holdings: [
        "Apple Inc.",
        "Microsoft Corp.",
        "Amazon.com Inc.",
        "Alphabet Inc.",
        "Facebook Inc.",
        "Tesla Inc.",
        "Berkshire Hathaway Inc.",
        "Johnson & Johnson",
        "JPMorgan Chase & Co.",
        "Visa Inc."
      ],
      allocation: [
        {
          "name": "Communication Services",
          "percent": 10.70
        },
        {
          "name": "Consumer Discretionary",
          "percent": 12.90
        },
        {
          "name": "Consumer Staples",
          "percent": 6.20
        },
        {
          "name": "Energy",
          "percent": 2.40
        },
        {
          "name": "Financials",
          "percent": 10.30
        },
        {
          "name": "Health Care",
          "percent": 13.80
        },
        {
          "name": "Industrials",
          "percent": 8.10
        },
        {
          "name": "Information Technology",
          "percent": 27.80
        },
        {
          "name": "Materials",
          "percent": 2.60
        },
        {
          "name": "Real Estate",
          "percent": 2.50
        },
        {
          "name": "Utilities",
          "percent": 2.70
        }
      ],
      allocation_type: "sector"
    },
    {
      symbol: "VTI",
      name: "Vanguard Total Stock Market ETF",
      category: "Large Blend",
      price: 203.27,
      expense_ratio: "0.03%",
      total_assets: "$1.1T",
      description: "Seeks to track the performance of the CRSP US Total Market Index.",
      link: "https://investor.vanguard.com/etf/profile/VTI",
      number_of_stocks: 3640,
      largest_holdings: [
        "Apple Inc.",
        "Microsoft Corp.",
        "Amazon.com Inc.",
        "Alphabet Inc.",
        "Facebook Inc.",
        "Tesla Inc.",
        "Johnson & Johnson",
        "Berkshire Hathaway Inc.",
        "JPMorgan Chase & Co.",
        "Visa Inc."
      ],
      allocation: [
        {
          "name": "Basic Materials",
          "percent": 1.90
        },
        {
          "name": "Consumer Discretionary",
          "percent": 16.70
        },
        {
          "name": "Consumer Staples",
          "percent": 5.00
        },
        {
          "name": "Energy",
          "percent": 2.50
        },
        {
          "name": "Financials",
          "percent": 10.40
        },
        {
          "name": "Health Care",
          "percent": 14.00
        },
        {
          "name": "Industrials",
          "percent": 13.30
        },
        {
          "name": "Technology",
          "percent": 26.60
        },
        {
          "name": "Telecommunications",
          "percent": 3.30
        },
        {
          "name": "Real Estate",
          "percent": 3.40
        },
        {
          "name": "Utilities",
          "percent": 2.90
        }
      ],
      allocation_type: "sector"
    },
    {
      symbol: "VT",
      name: "Vanguard Total World Stock ETF",
      category: "World Stock",
      price: 96.44,
      expense_ratio: "0.08%",
      total_assets: "$24.6B",
      description: "Seeks to track the performance of the FTSE Global All Cap Index, which covers both well-established and still-developing markets.",
      link: "https://investor.vanguard.com/etf/profile/VT",
      number_of_stocks: 8847,
      largest_holdings: [
        "Apple Inc.",
        "Microsoft Corp.",
        "Amazon.com Inc.",
        "Alphabet Inc.",
        "Facebook Inc.",
        "Tesla Inc.",
        "TSMC",
        "Tencent Holdings Ltd.",
        "Alibaba Group Holding Ltd.",
        "Berkshire Hathaway Inc."
      ],
      allocation: [
        {
          "name": "North America",
          "percent": 59.10
        },
        {
          "name": "Europe",
          "percent": 16.60
        },
        {
          "name": "Pacific",
          "percent": 12.50
        },
        {
          "name": "Emerging Markets",
          "percent": 11.40
        },
        {
          "name": "Middle East",
          "percent": 0.20
        },
        {
          "name": "Other",
          "percent": 0.20
        }
      ],
      allocation_type: "region"      
    },
    {
      symbol: "VYM",
      name: "Vanguard High Dividend Yield ETF",
      category: "Large Value",
      price: 96.79,
      expense_ratio: "0.06%",
      total_assets: "$40.0B",
      description: "Seeks to track the performance of the FTSE High Dividend Yield Index, which measures the investment return of common stocks of companies characterized by high dividend yields.",
      link: "https://investor.vanguard.com/etf/profile/VYM",
      number_of_stocks: 410,
      largest_holdings: [
        "Johnson & Johnson",
        "JPMorgan Chase & Co.",
        "Procter & Gamble Co.",
        "Bank of America Corp.",
        "Intel Corp.",
        "Verizon Communications Inc.",
        "Comcast Corp.",
        "AT&T Inc.",
        "Pfizer Inc.",
        "Walmart Inc."
      ],
      allocation: [
        {
          "name": "Basic Materials",
          "percent": 3.80
        },
        {
          "name": "Consumer Discretionary",
          "percent": 6.10
        },
        {
          "name": "Consumer Staples",
          "percent": 13.10
        },
        {
          "name": "Energy",
          "percent": 6.30
        },
        {
          "name": "Financials",
          "percent": 20.60
        },
        {
          "name": "Health Care",
          "percent": 14.20
        },
        {
          "name": "Industrials",
          "percent": 9.90
        },
        {
          "name": "Technology",
          "percent": 9.30
        },
        {
          "name": "Telecommunications",
          "percent": 7.90
        },
        {
          "name": "Utilities",
          "percent": 8.80
        }
      ],
      allocation_type: "sector"
    },
    {
      symbol: "VUG",
      name: "Vanguard Growth ETF",
      category: "Large Growth",
      price: 226.22,
      expense_ratio: "0.04%",
      total_assets: "$143.4B",
      description: "Seeks to track the performance of the CRSP US Large Cap Growth Index.",
      link: "https://investor.vanguard.com/etf/profile/VUG",
      number_of_stocks: 257,
      largest_holdings: [
        "Apple Inc.",
        "Microsoft Corp.",
        "Amazon.com Inc.",
        "Alphabet Inc.",
        "Facebook Inc.",
        "Tesla Inc.",
        "Visa Inc.",
        "NVIDIA Corp.",
        "Home Depot Inc.",
        "Mastercard Inc."
      ],
      allocation: [
        {
          "name": "Basic Materials",
          "percent": 1.30
        },
        {
          "name": "Consumer Discretionary",
          "percent": 23.10
        },
        {
          "name": "Consumer Staples",
          "percent": 1.20
        },
        {
          "name": "Energy",
          "percent": 0.20
        },
        {
          "name": "Financials",
          "percent": 2.50
        },
        {
          "name": "Health Care",
          "percent": 8.60
        },
        {
          "name": "Industrials",
          "percent": 12.20
        },
        {
          "name": "Technology",
          "percent": 47.00
        },
        {
          "name": "Telecommunications",
          "percent": 1.10
        },
        {
          "name": "Real Estate",
          "percent": 2.70
        },
        {
          "name": "Utilities",
          "percent": 0.10
        }
      ],
      allocation_type: "sector"
    },
    {
      symbol: "VV",
      name: "Vanguard Large-Cap ETF",
      category: "Large Blend",
      price: 181.67,
      expense_ratio: "0.04%",
      total_assets: "$32.7B",
      description: "Seeks to track the performance of the CRSP US Large Cap Index.",
      link: "https://investor.vanguard.com/etf/profile/VV",
      number_of_stocks: 560,
      largest_holdings: [
        "Apple Inc.",
        "Microsoft Corp.",
        "Amazon.com Inc.",
        "Alphabet Inc.",
        "Facebook Inc.",
        "Tesla Inc.",
        "Johnson & Johnson",
        "Berkshire Hathaway Inc.",
        "JPMorgan Chase & Co.",
        "Visa Inc."
      ],
      allocation: [
        {
          "name": "Basic Materials",
          "percent": 1.70
        },
        {
          "name": "Consumer Discretionary",
          "percent": 16.90
        },
        {
          "name": "Consumer Staples",
          "percent": 5.30
        },
        {
          "name": "Energy",
          "percent": 2.20
        },
        {
          "name": "Financials",
          "percent": 10.00
        },
        {
          "name": "Health Care",
          "percent": 13.30
        },
        {
          "name": "Industrials",
          "percent": 12.60
        },
        {
          "name": "Technology",
          "percent": 28.80
        },
        {
          "name": "Telecommunications",
          "percent": 3.60
        },
        {
          "name": "Real Estate",
          "percent": 2.60
        },
        {
          "name": "Utilities",
          "percent": 3.30
        }
      ],
      allocation_type: "sector"
    },
    {
      symbol: "VTV",
      name: "Vanguard Value ETF",
      category: "Large Value",
      price: 126.37,
      expense_ratio: "0.04%",
      total_assets: "97.3B",
      description: "Seeks to track the performance of the CRSP US Large Cap Value Index, which measures the investment return of large-capitalization value stocks.",
      link: "https://investor.vanguard.com/etf/profile/VTV",
      number_of_stocks: 328,
      largest_holdings: [
        "Johnson & Johnson",
        "Berkshire Hathaway Inc.",
        "JPMorgan Chase & Co..",
        "Procter & Gamble Co.",
        "UnitedHealth Group Inc.",
        "Walt Disney Co.",
        "Bank of America Corp.",
        "Intel Corp.",
        "Verizon Communications Inc.",
        "Comcast Corp."
      ],
      allocation: [
        {
          "name": "Basic Materials",
          "percent": 2.20
        },
        {
          "name": "Consumer Discretionary",
          "percent": 9.10
        },
        {
          "name": "Consumer Staples",
          "percent": 10.60
        },
        {
          "name": "Energy",
          "percent": 4.70
        },
        {
          "name": "Financials",
          "percent": 19.40
        },
        {
          "name": "Health Care",
          "percent": 19.30
        },
        {
          "name": "Industrials",
          "percent": 13.10
        },
        {
          "name": "Technology",
          "percent": 5.70
        },
        {
          "name": "Telecommunications",
          "percent": 6.70
        },
        {
          "name": "Real Estate",
          "percent": 2.60
        },
        {
          "name": "Utilities",
          "percent": 6.60
        }
      ],
      allocation_type: "sector"
    }
  ];