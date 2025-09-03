import React from 'react';

export const ContentsPage = () => {
  return (
    <div className="bg-white rounded-lg border border-border shadow-sm p-6 mb-6">
      <div className="mb-8">
        <h1 className="text-lg font-bold text-left mb-2">
          COMPANY (Registration No.: ____________)
        </h1>
      </div>

      <div className="mb-6">
        <h2 className="text-base font-bold text-left mb-4">
          Statement by Directors and Financial Statements
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-base font-bold text-left mb-6">
          Contents
        </h3>

        <div className="space-y-0">
          <div className="flex justify-between items-center py-2">
            <span className="text-left">Statement by Directors</span>
            <span className="text-right font-bold">Page</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-left">Independent Auditor's Report</span>
            <span className="text-right">____</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-left">Statement of Profit or Loss and Other Comprehensive Income</span>
            <span className="text-right">____</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-left">Statement of Financial Position</span>
            <span className="text-right">____</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-left">Statement of Changes in Equity</span>
            <span className="text-right">____</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-left">Statement of Cash Flows</span>
            <span className="text-right">____</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-left">Notes to the Financial Statements</span>
            <span className="text-right">____</span>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <p className="text-left font-bold">
          THIS DRAFT TO BE DESTROYED BY PDM AFTER PROOFING
        </p>
        
        <p className="text-left italic">
          [Exempt private companies need not lodge the FS with ACRA]
        </p>
      </div>
    </div>
  );
};