import { FINANCIAL_SECTIONS, FinancialStatementSection } from "@/types/financial";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SectionNavigatorProps {
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const SectionNavigator = ({ currentSection, onSectionChange }: SectionNavigatorProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-financial-blue mb-4">
          Financial Statement Sections
        </h3>
        <div className="space-y-2">
          {FINANCIAL_SECTIONS.map((section: FinancialStatementSection) => (
            <Button
              key={section.id}
              variant={currentSection === section.id ? "default" : "ghost"}
              className="w-full justify-between text-left h-auto py-3 px-4"
              onClick={() => onSectionChange(section.id)}
            >
              <div className="flex flex-col items-start">
                <span className="font-medium">{section.title}</span>
                {section.id === "financial-position" && (
                  <span className="text-xs text-muted-foreground mt-1">
                    Currently implemented
                  </span>
                )}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};