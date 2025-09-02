import { useState } from "react";
import { StatementData, LineItem } from "@/types/financial";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ItemSelectorProps {
  statementData: StatementData;
  selectedItems: Set<string>;
  onItemToggle: (itemId: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export const ItemSelector = ({ 
  statementData, 
  selectedItems, 
  onItemToggle, 
  onSelectAll, 
  onClearAll 
}: ItemSelectorProps) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['assets', 'currentAssets']));

  const toggleSection = (sectionKey: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionKey)) {
      newExpanded.delete(sectionKey);
    } else {
      newExpanded.add(sectionKey);
    }
    setExpandedSections(newExpanded);
  };

  const getSectionTitle = (sectionKey: string) => {
    switch (sectionKey) {
      case 'assets': return 'Non-current Assets';
      case 'currentAssets': return 'Current Assets';
      default: return sectionKey;
    }
  };

  const renderLineItem = (item: LineItem) => {
    if (item.isHeader || item.isSubHeader || item.category === 'total' || item.category === 'grand-total') {
      return null; // These are automatically included
    }

    return (
      <div key={item.id} className="flex items-center space-x-3 py-2 px-3 hover:bg-financial-gray-light rounded-md">
        <Checkbox
          id={item.id}
          checked={selectedItems.has(item.id)}
          onCheckedChange={() => onItemToggle(item.id)}
        />
        <label htmlFor={item.id} className="flex-1 text-sm cursor-pointer">
          {item.label}
        </label>
        {item.noteRef && item.noteRef !== 'xxx' && (
          <Badge variant="outline" className="text-xs">
            Note {item.noteRef}
          </Badge>
        )}
      </div>
    );
  };

  const totalSelectableItems = Object.values(statementData.sections)
    .flat()
    .filter(item => !item.isHeader && !item.isSubHeader && item.category !== 'total' && item.category !== 'grand-total')
    .length;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-financial-blue">
          Select Statement Items
        </CardTitle>
        <div className="flex gap-2 mt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onSelectAll}
            className="text-xs"
          >
            Select All
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearAll}
            className="text-xs"
          >
            Clear All
          </Button>
          <Badge variant="secondary" className="ml-auto">
            {selectedItems.size} / {totalSelectableItems} selected
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-96 overflow-y-auto">
        {Object.entries(statementData.sections).map(([sectionKey, items]) => (
          <div key={sectionKey} className="border border-border rounded-lg">
            <button
              onClick={() => toggleSection(sectionKey)}
              className="w-full px-4 py-3 text-left font-medium text-financial-blue hover:bg-financial-blue-light transition-colors flex items-center justify-between"
            >
              {getSectionTitle(sectionKey)}
              <span className={`transform transition-transform ${
                expandedSections.has(sectionKey) ? 'rotate-180' : ''
              }`}>
                ▼
              </span>
            </button>
            {expandedSections.has(sectionKey) && (
              <div className="px-2 pb-2 space-y-1">
                {items.map(renderLineItem)}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};