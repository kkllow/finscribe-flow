import { StatementData, LineItem } from "@/types/financial";

interface StatementPreviewProps {
  statementData: StatementData;
  selectedItems: Set<string>;
}

export const StatementPreview = ({ statementData, selectedItems }: StatementPreviewProps) => {
  const renderLineItem = (item: LineItem, shouldAddSpacing: boolean = false) => {
    if (!selectedItems.has(item.id) && !item.isHeader && !item.isSubHeader && item.category !== 'total' && item.category !== 'grand-total') {
      return null;
    }
    
    const isVisible = selectedItems.has(item.id) || item.isHeader || item.isSubHeader || item.category === 'total' || item.category === 'grand-total';
    
    if (!isVisible) return null;
    
    const isTotalRow = item.label.toLowerCase().includes('total') && (item.category === 'total' || item.category === 'grand-total');
    const isGrandTotal = item.label.toLowerCase().includes('total assets') || item.label.toLowerCase().includes('total equity and liabilities');
    
    // Determine border classes for columns 3 and 4 only
    let column3BorderClass = '';
    let column4BorderClass = '';
    
    if (isTotalRow) {
      if (isGrandTotal) {
        // Double line below and single line above for grand totals
        column3BorderClass = 'border-t border-statement-border relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:border-b-2 after:border-statement-border after:mb-[-1px]';
        column4BorderClass = 'border-t border-statement-border relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:border-b-2 after:border-statement-border after:mb-[-1px]';
      } else {
        // Single line above and below for section totals
        column3BorderClass = 'border-t border-b border-statement-border';
        column4BorderClass = 'border-t border-b border-statement-border';
      }
    }
    
    const spacingClass = shouldAddSpacing ? 'pt-4' : '';
    
    return (
      <tr key={item.id}>
        <td className={`py-1 px-3 text-left ${spacingClass} ${item.isBold ? 'font-semibold' : ''} ${
          item.isHeader ? 'text-statement-header font-bold' : ''
        } ${item.isSubHeader ? 'font-semibold' : ''}`}>
          {item.label}
        </td>
        <td className={`py-1 px-3 text-center text-sm text-financial-gray ${spacingClass}`}>
          {/* Notes to be filled manually */}
        </td>
        <td className={`py-1 px-3 text-right ${spacingClass} ${column3BorderClass}`}>
          {/* Empty space for values */}
        </td>
        <td className={`py-1 px-3 text-right ${spacingClass} ${column4BorderClass}`}>
          {/* Empty space for values */}
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-statement-header mb-2 text-left">
          {statementData.title}
        </h2>
        <p className="text-financial-gray font-medium text-left">
          {statementData.asAtDate}
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-3 text-left font-semibold">
                {/* Empty for line item names */}
              </th>
              {statementData.columns.map((column, index) => (
                <th
                  key={index}
                  className="py-3 px-3 text-center font-semibold text-sm whitespace-pre-line"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(statementData.sections).map(([sectionKey, items]) =>
              items.map((item, itemIndex, sectionItems) => {
                const nextItem = itemIndex < sectionItems.length - 1 ? sectionItems[itemIndex + 1] : null;
                
                // Add spacing after section totals (before next major section)
                const shouldAddSpacing = item.label.toLowerCase().includes('total') && 
                                        (item.category === 'total' || item.category === 'grand-total') &&
                                        nextItem && 
                                        (nextItem.isHeader || nextItem.isSubHeader);
                
                return renderLineItem(item, shouldAddSpacing);
              })
            )}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-left">
        <p className="text-sm text-financial-gray italic">
          The accompanying notes form an integral part of these financial statements
        </p>
      </div>
    </div>
  );
};