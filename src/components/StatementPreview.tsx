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
    const borderClass = isTotalRow ? 'border-t border-b border-statement-border' : '';
    const spacingClass = shouldAddSpacing ? 'pt-4' : '';

    return (
      <tr key={item.id} className={`${borderClass}`}>
        <td className={`py-1 px-3 text-left ${spacingClass} ${item.isBold ? 'font-semibold' : ''} ${
          item.isHeader ? 'text-statement-header font-bold' : ''
        } ${item.isSubHeader ? 'font-semibold' : ''}`}>
          {item.label}
        </td>
        <td className={`py-1 px-3 text-center text-sm text-financial-gray ${spacingClass}`}>
          {/* Notes to be filled manually */}
        </td>
        <td className={`py-1 px-3 text-right ${spacingClass}`}>
          {/* Empty space for values */}
        </td>
        <td className={`py-1 px-3 text-right ${spacingClass}`}>
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
                const prevItem = itemIndex > 0 ? sectionItems[itemIndex - 1] : null;
                const shouldAddSpacing = prevItem && (prevItem.isHeader || prevItem.isSubHeader) && !item.isHeader && !item.isSubHeader;
                
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