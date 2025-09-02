import { StatementData, LineItem } from "@/types/financial";

interface StatementPreviewProps {
  statementData: StatementData;
  selectedItems: Set<string>;
}

export const StatementPreview = ({ statementData, selectedItems }: StatementPreviewProps) => {
  const renderLineItem = (item: LineItem) => {
    if (!selectedItems.has(item.id) && !item.isHeader && !item.isSubHeader && item.category !== 'total' && item.category !== 'grand-total') {
      return null;
    }

    const isVisible = selectedItems.has(item.id) || item.isHeader || item.isSubHeader || item.category === 'total' || item.category === 'grand-total';
    
    if (!isVisible) return null;

    return (
      <tr key={item.id} className="border-b border-statement-border">
        <td className={`py-1 px-3 text-left ${item.isBold ? 'font-semibold' : ''} ${
          item.isHeader ? 'text-statement-header font-bold' : ''
        } ${item.isSubHeader ? 'font-semibold' : ''}`}>
          {item.label}
        </td>
        <td className="py-1 px-3 text-center text-sm text-financial-gray">
          {/* Notes to be filled manually */}
        </td>
        <td className="py-1 px-3 text-right border-r border-statement-border">
          {/* Empty space for values */}
        </td>
        <td className="py-1 px-3 text-right">
          {/* Empty space for values */}
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm p-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-statement-header mb-2">
          {statementData.title}
        </h2>
        <p className="text-financial-gray font-medium">
          {statementData.asAtDate}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-statement-border">
          <thead>
            <tr className="bg-financial-gray-light">
              <th className="py-3 px-3 text-left font-semibold border-r border-statement-border">
                {/* Empty for line item names */}
              </th>
              {statementData.columns.map((column, index) => (
                <th
                  key={index}
                  className={`py-3 px-3 text-center font-semibold text-sm whitespace-pre-line ${
                    index < statementData.columns.length - 1 ? 'border-r border-statement-border' : ''
                  }`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(statementData.sections).map(([sectionKey, items]) =>
              items.map(renderLineItem)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};