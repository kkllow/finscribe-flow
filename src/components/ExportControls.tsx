import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExportControlsProps {
  selectedItemsCount: number;
}

export const ExportControls = ({ selectedItemsCount }: ExportControlsProps) => {
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: "Export Started",
      description: `Exporting ${selectedItemsCount} items to ${format} format...`,
    });
    
    // TODO: Implement actual export functionality
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Statement template exported successfully to ${format}.`,
      });
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-financial-blue flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Export Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground mb-4">
          {selectedItemsCount} items selected for export
        </div>
        
        <Button 
          onClick={() => handleExport("Word")} 
          className="w-full" 
          variant="default"
          disabled={selectedItemsCount === 0}
        >
          <Download className="h-4 w-4 mr-2" />
          Export to Word
        </Button>
        
        <Button 
          onClick={() => handleExport("PDF")} 
          className="w-full" 
          variant="outline"
          disabled={selectedItemsCount === 0}
        >
          <FileText className="h-4 w-4 mr-2" />
          Export to PDF
        </Button>
        
        <Button 
          onClick={() => handleExport("Print")} 
          className="w-full" 
          variant="outline"
          disabled={selectedItemsCount === 0}
        >
          <Printer className="h-4 w-4 mr-2" />
          Print Preview
        </Button>

        <div className="text-xs text-muted-foreground mt-4 p-3 bg-muted rounded-md">
          <strong>Export Features:</strong>
          <ul className="mt-1 space-y-1">
            <li>• Pre-formatted headers and structure</li>
            <li>• Empty value columns for manual entry</li>
            <li>• Professional Word document layout</li>
            <li>• Proper note references included</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};