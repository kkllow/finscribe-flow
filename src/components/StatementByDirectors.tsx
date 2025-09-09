import React from 'react';

export const StatementByDirectors = () => {
  return (
    <div className="space-y-6">
      {/* Page 1 */}
      <div className="bg-white rounded-lg border border-border shadow-sm p-6">
        <div style={{marginLeft: '0.5in', marginRight: '1in'}}>
          <div className="mb-6">
            <h1 className="font-bold text-left mb-4" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              COMPANY
            </h1>
            
            <h2 className="font-bold text-left mb-6" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              Statement by Directors
            </h2>
          </div>

          <div className="space-y-6 text-left">
            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              The directors of the company are pleased to present the financial statements of the company for the 
              reporting year ended 31 December 2024. <u>The reporting year covers the period since incorporation 
              on _____ 2024 to _____ 2024</u>.
            </p>

            <p className="italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              [If there is change of name] Before 31 July 2024 the company was known as CLA Pte Ltd, which 
              was changed to its present name.
            </p>

            <div className="space-y-4">
              <h3 className="font-bold mb-2" style={{fontFamily: 'Arial', fontSize: '10pt'}}>1&nbsp;&nbsp;&nbsp;&nbsp;Opinion of the directors</h3>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>In the opinion of the directors,</p>

              <div className="space-y-4">
                <div style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '0.3in', textIndent: '-0.3in'}}>
                  (a)&nbsp;&nbsp;&nbsp;&nbsp;the accompanying financial statements are drawn up so as to give a true and fair view of the 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;financial position and performance of the company for the reporting year covered by the 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;financial statements; and
                </div>

                <div style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '0.3in', textIndent: '-0.3in'}}>
                  (b)&nbsp;&nbsp;&nbsp;&nbsp;at the date of the statement there are reasonable grounds to believe that the company 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;will be able to pay its debts as and when they fall due.
                </div>
              </div>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>The board of directors approved and authorised these financial statements for issue.</p>

              <h3 className="font-bold mt-8" style={{fontFamily: 'Arial', fontSize: '10pt'}}>2&nbsp;&nbsp;&nbsp;&nbsp;Directors</h3>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>The directors of the company in office at the date of this statement are:</p>

              <div className="space-y-2 mt-4" style={{marginLeft: '1.5in'}}>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>Mr ____________________</p>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>Mr ____________________</p>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>Ms ____________________</p>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>M ____________________</p>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>________________________</p>
              </div>

              <h3 className="font-bold mt-8" style={{fontFamily: 'Arial', fontSize: '10pt'}}>3&nbsp;&nbsp;&nbsp;&nbsp;Directors' interests in shares and debentures</h3>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                The directors of the company holding office at the end of the reporting year had no interests in 
                shares in or debentures of the company or other related body corporate as recorded in the register 
                of directors' interests in shares in or debentures kept by the company under section 164 of the 
                Companies Act 1967, ("the Act"). <span className="text-red-600 italic">[If applicable, add]</span> except as follows:
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="bg-white rounded-lg border border-border shadow-sm p-6">
        <div style={{marginLeft: '0.5in', marginRight: '1in'}}>
          <div className="space-y-6 text-left">
            <div className="overflow-x-auto" style={{marginLeft: '1.5in'}}>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-3 text-center font-semibold underline" style={{fontFamily: 'Arial', fontSize: '10pt'}} colSpan={1}>Name of directors or companies in which interests are held</th>
                    <th className="py-2 px-3 text-center font-semibold underline" style={{fontFamily: 'Arial', fontSize: '10pt'}}>At beginning of the reporting year or date of appointment if later</th>
                    <th className="py-2 px-3 text-center font-semibold underline" style={{fontFamily: 'Arial', fontSize: '10pt'}}>At end of the reporting year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1 px-3 text-center font-semibold underline" style={{fontFamily: 'Arial', fontSize: '10pt'}} colSpan={3}>
                      Number of shares of no par value
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>COMPANY (the company)</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>M_____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>M_____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>XYZ Ltd (Parent company)</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>Ms_____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-center font-semibold underline" style={{fontFamily: 'Arial', fontSize: '10pt'}} colSpan={3}>
                      Deemed interest in number of shares of no par value
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>COMPANY (the company)</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>Mr MNO (resigned on 13 Jan 2024)</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-center font-semibold underline" style={{fontFamily: 'Arial', fontSize: '10pt'}} colSpan={3}>
                      Options /// and or /// Warrants
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>COMPANY (the company)</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}></td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3 text-left" style={{fontFamily: 'Arial', fontSize: '10pt', paddingLeft: '1.5in'}}>M_____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                    <td className="py-1 px-3 text-center" style={{fontFamily: 'Arial', fontSize: '10pt'}}>____</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <p className="text-red-600 italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                [Disclose deemed interest if applicable – eg. interests held by another party. The interests held by 
                a spouse and minor children of this director are the "direct" interest of the director.]
              </p>
              
              <p className="text-red-600 italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                Disclosures are required for all <u>interest in all the corporations in the group</u> and in the interests held 
                by other entities in the same group as the director may be required to disclose this under any 
                share option scheme of the parent or related company incorporated locally or overseas. <u>Interests 
                includes options, warrants, shares as per s 7(6) (4A).</u>
              </p>

              <p className="text-red-600 italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                [If it applicable. For a wholly owned subsidiary of a Singapore company]. However, disclosures 
                are still required in the FS under FRS 24 (7(6) 79) Mr AAA, Mr BBB, [if JVJM] All the directors of the 
                company in [1st also appear] of XYZ Ltd which is incorporated in Singapore which owns all the shares 
                of the company. The interests of the directors are recorded in the register of directors' interests in 
                shares in or debentures kept under section 164 of the Act by XYZ Ltd which owns all the shares of 
                Singapore and are therefore not disclosed in this report.
              </p>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                Mr XXX and Ms YYY, the other directors of ZZZ Ltd have no interests in the shares or debentures 
                of this company and any other related body corporates of the company.
              </p>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                By virtue of section 7 of the Act the above directors with interests are deemed to have an interest in 
                the company and in all the related body corporates of the company
              </p>

              <p className="text-red-600 italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                [Note: SGX 1207 (7) For listed companies, directors' interests as at the 21st day after the end of the 
                reporting year should be disclosed.]
              </p>
              
              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                The directors' interests as at 21 January 2024 were the same as those at the end of the reporting 
                year.
              </p>

              <h3 className="font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>4&nbsp;&nbsp;&nbsp;&nbsp;Arrangements to enable directors to acquire benefits by means of the acquisition of shares and debentures</h3>

              <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                Neither at the end of the reporting year nor at any time during the reporting year did there subsist 
                arrangements to which the company is a party, being arrangements whose objects are, or one of 
                whose objects is to enable directors of the company to acquire benefits by means of the 
                acquisition of shares in or debentures of the company or any other body corporate, <u>except for the 
                options rights and other rights mentioned below, <span className="text-red-600">/// or ///</span> except as disclosed below.</u>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div className="bg-white rounded-lg border border-border shadow-sm p-6">
        <div style={{marginLeft: '0.5in', marginRight: '1in'}}>
          <div className="space-y-6 text-left">
            <h3 className="font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>5&nbsp;&nbsp;&nbsp;&nbsp;Options</h3>

            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              During the reporting year, no option to take up unissued shares of the company was granted. <span className="text-red-600 italic">[/// or 
              #2 if applicable, where the reporting company is a member of a group, with no options]</span>. During the 
              reporting year, no option to take up unissued shares of the company or other body corporate in the 
              group was granted. <span className="text-red-600 italic">[/// or #3, if applicable where <u>the company is a member of a Singapore group, 
              with options</u>]</span>. During the reporting year, no option to take up unissued shares of the company or 
              other body corporate in the group was granted except for those disclosed in the directors' statement 
              of the holding company in Singapore.
            </p>

            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              [If there are options of the company please also disclose them here by repeating Note 20A and 20B 
              of AcG 102 only from the financial statements on options and or warrants here. SGX 853. SGX 
              1207(5)].
            </p>

            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              During the reporting year, there were no shares issued by virtue of the exercise of an option to take 
              up unissued shares. <u>/// except for those disclosed in the above paragraph.</u>
            </p>

            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              At the end of the reporting year, there were no unissued shares under option. <u>/// except for those 
              disclosed in the above paragraph.</u>
            </p>

            <h3 className="font-bold" style={{fontFamily: 'Arial', fontSize: '10pt'}}>6&nbsp;&nbsp;&nbsp;&nbsp;Independent auditor</h3>

            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>RSM SG Assurance LLP has expressed willingness to accept re-appointment</p>

            <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>On behalf of the directors (b)</p>

            <div className="mt-12 space-y-8">
              <div className="flex justify-between" style={{gap: '10ch'}}>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>...................................(s)</p>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>...................................(s)</p>
              </div>

              <div className="flex justify-between" style={{gap: '10ch'}}>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>________________ 2025</p>
                <p style={{fontFamily: 'Arial', fontSize: '10pt'}}>________________ 2025</p>
              </div>

              <div className="space-y-2" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
                <p><strong>a)</strong> If directors' names are not available, there is no need to insert them here.</p>
                <p><strong>b)</strong> No need to use this phrase if there are only one or two directors in total.</p>
                <p><strong>c)</strong> If there is only one director, change the plural words to singular use.</p>
                <p><strong>d)</strong> Opinion - Para 1b above. To explain or modify if directors' opinion is not consistent with the audit 
                report (eg. MURGC, EOM or qualified audit report on going concern or subject to continuing 
                financial support from parent company etc.). Refer to SSA 720 on inconsistency of other 
                information. Guidance with regard to Directors' Statement and ISCA Guidance with regard to 
                Directors' Statement.</p>
              </div>
            </div>

            <p className="mt-8 text-left italic" style={{fontFamily: 'Arial', fontSize: '10pt'}}>
              [Exempt private companies need not lodge the FS with ACRA]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};