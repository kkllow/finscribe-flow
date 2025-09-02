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
      { id: "ppe", label: "Property, plant and equipment", category: "line-item", noteRef: "13" },
      { id: "rou-assets", label: "Right-of-use assets", category: "line-item", noteRef: "14" },
      { id: "investment-property", label: "Investment property", category: "line-item", noteRef: "15" },
      { id: "goodwill", label: "Goodwill", category: "line-item", noteRef: "16" },
      { id: "intangible-assets", label: "Intangible assets other than goodwill", category: "line-item", noteRef: "16" },
      { id: "biological-assets-nc", label: "Biological assets, non-current", category: "line-item", noteRef: "xxx" },
      { id: "investments-subsidiaries", label: "Investments in subsidiaries", category: "line-item", noteRef: "17" },
      { id: "investments-associates", label: "Investments in associates", category: "line-item", noteRef: "18" },
      { id: "investments-joint", label: "Investments in joint arrangements", category: "line-item", noteRef: "19" },
      { id: "deferred-tax", label: "Deferred tax assets", category: "line-item", noteRef: "11" },
      { id: "other-nfa-nc", label: "Other non-financial assets, non-current", category: "line-item", noteRef: "20" },
      { id: "fa-fvtpl-derivs-nc", label: "Financial assets at FVTPL - derivatives, non-current", category: "line-item", noteRef: "21" },
      { id: "fa-fvtpl-nc", label: "Financial assets at FVTPL, non-current", category: "line-item", noteRef: "22" },
      { id: "other-fa-nc", label: "Other financial assets, non-current", category: "line-item", noteRef: "22A" },
      { id: "fa-lease-recv-nc", label: "Financial assets - lease receivables, non-current", category: "line-item", noteRef: "102" },
      { id: "trade-recv-nc", label: "Trade and other receivables, non-current", category: "line-item", noteRef: "23" },
      { id: "total-nc-assets", label: "Total non-current assets", category: "total", isBold: true }
    ],
    currentAssets: [
      { id: "current-assets-header", label: "Current assets", category: "subheader", isSubHeader: true, isBold: true },
      { id: "assets-disposal", label: "Assets and disposal groups held for sale", category: "line-item", noteRef: "102" },
      { id: "inventories-dev", label: "Inventories - development properties, current", category: "line-item", noteRef: "24" },
      { id: "inventories", label: "Inventories", category: "line-item", noteRef: "24" },
      { id: "other-nfa-current", label: "Other non-financial assets, current", category: "line-item", noteRef: "25" },
      { id: "fa-fvtpl-derivs-current", label: "Financial assets at FVTPL - derivatives, current", category: "line-item", noteRef: "21" },
      { id: "fa-fvtpl-current", label: "Financial assets at FVTPL, current", category: "line-item", noteRef: "22" },
      { id: "fa-lease-recv-current", label: "Financial assets - lease receivables, current", category: "line-item", noteRef: "102" },
      { id: "trade-recv-current", label: "Trade and other receivables, current", category: "line-item", noteRef: "26" },
      { id: "other-fa-current", label: "Other financial assets, current", category: "line-item", noteRef: "22" },
      { id: "cash-equivalents", label: "Cash and cash equivalents", category: "line-item", noteRef: "27" },
      { id: "total-current-assets", label: "Total current assets", category: "total", isBold: true },
      { id: "total-assets", label: "Total assets", category: "grand-total", isBold: true }
    ]
  }
};