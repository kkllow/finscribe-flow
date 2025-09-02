export interface FinancialStatementSection {
  id: string;
  title: string;
  page: number;
}

export interface LineItem {
  id: string;
  label: string;
  category: string;
  noteRef?: string;
  isHeader?: boolean;
  isSubHeader?: boolean;
  isBold?: boolean;
  indentLevel?: number;
}

export interface StatementData {
  title: string;
  asAtDate: string;
  columns: string[];
  sections: {
    [key: string]: LineItem[];
  };
}

export const FINANCIAL_SECTIONS: FinancialStatementSection[] = [
  { id: "directors-statement", title: "Statement by Directors", page: 0 },
  { id: "auditors-report", title: "Independent Auditor's Report", page: 0 },
  { id: "profit-loss", title: "Statement of Profit or Loss and Other Comprehensive Income", page: 0 },
  { id: "financial-position", title: "Statement of Financial Position", page: 0 },
  { id: "changes-equity", title: "Statement of Changes in Equity", page: 0 },
  { id: "cash-flows", title: "Statement of Cash Flows", page: 0 },
  { id: "notes", title: "Notes to the Financial Statements", page: 0 }
];

export const FINANCIAL_POSITION_TEMPLATE: StatementData = {
  title: "Statement of Financial Position",
  asAtDate: "As at 31 December 2024",
  columns: ["Notes", "2024\n$'000", "2023\n$'000"],
  sections: {
    assets: [
      { id: "assets-header", label: "ASSETS", category: "header", isHeader: true, isBold: true },
      { id: "non-current-header", label: "Non-current assets", category: "subheader", isSubHeader: true, isBold: true },
      { id: "ppe", label: "Property, plant and equipment", category: "line-item" },
      { id: "rou-assets", label: "Right-of-use assets", category: "line-item" },
      { id: "investment-property", label: "Investment property", category: "line-item" },
      { id: "goodwill", label: "Goodwill", category: "line-item" },
      { id: "intangible-assets", label: "Intangible assets other than goodwill", category: "line-item" },
      { id: "biological-assets-nc", label: "Biological assets, non-current", category: "line-item" },
      { id: "investments-subsidiaries", label: "Investments in subsidiaries", category: "line-item" },
      { id: "investments-associates", label: "Investments in associates", category: "line-item" },
      { id: "investments-joint", label: "Investments in joint arrangements", category: "line-item" },
      { id: "deferred-tax-assets", label: "Deferred tax assets", category: "line-item" },
      { id: "other-nfa-nc", label: "Other non-financial assets, non-current", category: "line-item" },
      { id: "fa-fvtpl-derivs-nc", label: "Financial assets at FVTPL - derivatives, non-current", category: "line-item" },
      { id: "fa-fvtpl-nc", label: "Financial assets at FVTPL, non-current", category: "line-item" },
      { id: "other-fa-nc", label: "Other financial assets, non-current", category: "line-item" },
      { id: "fa-lease-recv-nc", label: "Financial assets - lease receivables, non-current", category: "line-item" },
      { id: "trade-recv-nc", label: "Trade and other receivables, non-current", category: "line-item" },
      { id: "total-nc-assets", label: "Total non-current assets", category: "total", isBold: true }
    ],
    currentAssets: [
      { id: "current-assets-header", label: "Current assets", category: "subheader", isSubHeader: true, isBold: true },
      { id: "assets-disposal", label: "Assets and disposal groups held for sale", category: "line-item" },
      { id: "inventories-dev", label: "Inventories - development properties, current", category: "line-item" },
      { id: "inventories", label: "Inventories", category: "line-item" },
      { id: "other-nfa-current", label: "Other non-financial assets, current", category: "line-item" },
      { id: "fa-fvtpl-derivs-current", label: "Financial assets at FVTPL - derivatives, current", category: "line-item" },
      { id: "fa-fvtpl-current", label: "Financial assets at FVTPL, current", category: "line-item" },
      { id: "fa-lease-recv-current", label: "Financial assets - lease receivables, current", category: "line-item" },
      { id: "trade-recv-current", label: "Trade and other receivables, current", category: "line-item" },
      { id: "other-fa-current", label: "Other financial assets, current", category: "line-item" },
      { id: "cash-equivalents", label: "Cash and cash equivalents", category: "line-item" },
      { id: "total-current-assets", label: "Total current assets", category: "total", isBold: true },
      { id: "total-assets", label: "Total assets", category: "grand-total", isBold: true }
    ],
    equity: [
      { id: "equity-liabilities-header", label: "EQUITY AND LIABILITIES", category: "header", isHeader: true, isBold: true },
      { id: "equity-header", label: "Equity", category: "subheader", isSubHeader: true, isBold: true },
      { id: "share-capital", label: "Share capital", category: "line-item" },
      { id: "treasury-shares", label: "Treasury shares", category: "line-item" },
      { id: "retained-earnings", label: "Retained earnings / (accumulated losses)", category: "line-item" },
      { id: "other-reserves", label: "Other reserves", category: "line-item" },
      { id: "total-equity", label: "Total equity / (adverse balance)", category: "total", isBold: true }
    ],
    nonCurrentLiabilities: [
      { id: "nc-liabilities-header", label: "Non-current liabilities", category: "subheader", isSubHeader: true, isBold: true },
      { id: "provisions-nc", label: "Provisions, non-current", category: "line-item" },
      { id: "deferred-tax-liabilities", label: "Deferred tax liabilities", category: "line-item" },
      { id: "other-nfl-nc", label: "Other non-financial liabilities, non-current", category: "line-item" },
      { id: "loans-borrowings-nc", label: "Loans and borrowings, non-current", category: "line-item" },
      { id: "fl-derivatives-fvtpl-nc", label: "Financial liabilities – derivatives and at FVTPL, non-current", category: "line-item" },
      { id: "lease-liabilities-nc", label: "Lease liabilities, non-current", category: "line-item" },
      { id: "trade-payables-nc", label: "Trade and other payables, non-current", category: "line-item" },
      { id: "other-fl-nc", label: "Other financial liabilities, non-current", category: "line-item" },
      { id: "total-nc-liabilities", label: "Total non-current liabilities", category: "total", isBold: true }
    ],
    currentLiabilities: [
      { id: "current-liabilities-header", label: "Current liabilities", category: "subheader", isSubHeader: true, isBold: true },
      { id: "liabilities-disposal", label: "Liabilities of a disposal group classified as held for sale", category: "line-item" },
      { id: "provisions-current", label: "Provisions, current", category: "line-item" },
      { id: "income-tax-payable", label: "Income tax payable", category: "line-item" },
      { id: "fl-derivatives-fvtpl-current", label: "Financial liabilities – derivatives and at FVTPL, current", category: "line-item" },
      { id: "other-nfl-current", label: "Other non-financial liabilities, current", category: "line-item" },
      { id: "loans-borrowings-current", label: "Loans and borrowings, current", category: "line-item" },
      { id: "lease-liabilities-current", label: "Lease liabilities, current", category: "line-item" },
      { id: "trade-payables-current", label: "Trade and other payables, current", category: "line-item" },
      { id: "other-fl-current", label: "Other financial liabilities, current", category: "line-item" },
      { id: "total-current-liabilities", label: "Total current liabilities", category: "total", isBold: true },
      { id: "total-liabilities", label: "Total liabilities", category: "total", isBold: true },
      { id: "total-equity-liabilities", label: "Total equity and liabilities", category: "grand-total", isBold: true }
    ]
  }
};