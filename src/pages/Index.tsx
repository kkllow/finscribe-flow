import { useState } from "react";
import { FINANCIAL_POSITION_TEMPLATE } from "@/types/financial";
import { StatementPreview } from "@/components/StatementPreview";
import { ItemSelector } from "@/components/ItemSelector";
import { SectionNavigator } from "@/components/SectionNavigator";
import { ExportControls } from "@/components/ExportControls";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("financial-position");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const handleItemToggle = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    const allItems = Object.values(FINANCIAL_POSITION_TEMPLATE.sections)
      .flat()
      .filter(item => !item.isHeader && !item.isSubHeader && item.category !== 'total' && item.category !== 'grand-total')
      .map(item => item.id);
    setSelectedItems(new Set(allItems));
    toast({
      title: "All items selected",
      description: `${allItems.length} line items have been selected.`,
    });
  };

  const handleClearAll = () => {
    setSelectedItems(new Set());
    toast({
      title: "Selection cleared",
      description: "All items have been deselected.",
    });
  };

  const handleSectionChange = (sectionId: string) => {
    if (sectionId !== "financial-position") {
      toast({
        title: "Coming Soon",
        description: "This section is not yet implemented. Currently showing Statement of Financial Position.",
        variant: "destructive",
      });
      return;
    }
    setCurrentSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-statement-header text-white py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">FinScribe Flow</h1>
          <p className="text-blue-100">Automated Financial Statement Template Generator</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1 space-y-6">
            <SectionNavigator 
              currentSection={currentSection}
              onSectionChange={handleSectionChange}
            />
            
            <ExportControls selectedItemsCount={selectedItems.size} />
          </div>

          {/* Middle Column - Item Selection */}
          <div className="lg:col-span-1">
            <ItemSelector
              statementData={FINANCIAL_POSITION_TEMPLATE}
              selectedItems={selectedItems}
              onItemToggle={handleItemToggle}
              onSelectAll={handleSelectAll}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-2">
            <StatementPreview
              statementData={FINANCIAL_POSITION_TEMPLATE}
              selectedItems={selectedItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
