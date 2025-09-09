import React from 'react';

export const ContentsPage = () => {
  return (
    <div className="bg-white rounded-lg border border-border shadow-sm p-6 mb-6">
      <div style={{marginLeft: '1in', marginRight: '1in'}}>
        <div className="mb-8">
          <h1 className="text-left mb-2 font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
            COMPANY (Registration No.: ____________)
          </h1>
        </div>

        <div className="mb-6">
          <h2 className="text-left mb-4 font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
            Statement by Directors and Financial Statements
          </h2>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              Contents
            </h3>
            <span className="font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Page</span>
          </div>

          <div className="space-y-0">
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Statement by Directors</span>
              <span className="text-right"></span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Independent Auditor's Report</span>
              <span className="text-right"></span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Statement of Profit or Loss and Other Comprehensive Income</span>
              <span className="text-right"></span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Statement of Financial Position</span>
              <span className="text-right"></span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Statement of Changes in Equity</span>
              <span className="text-right"></span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Statement of Cash Flows</span>
              <span className="text-right"></span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-left" style={{fontFamily: 'Arial', fontSize: '10pt'}}>Notes to the Financial Statements</span>
              <span className="text-right"></span>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <p className="text-left font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
            THIS DRAFT TO BE DESTROYED BY PDM AFTER PROOFING
          </p>
          
          <p className="text-left italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
            [Exempt private companies need not lodge the FS with ACRA]
          </p>
        </div>
      </div>
    </div>
  );
};