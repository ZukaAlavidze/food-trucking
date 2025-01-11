import React from 'react';
import { ClipboardList, Wrench, Stethoscope, Flame, Store, MapPin, HelpCircle } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  detailedInfo: {
    requirements: string[];
    tips: string[];
    commonIssues: string[];
  };
  contact: string;
  address: string;
  timeframe: string;
  cost: string;
  children: React.ReactNode;
}

function Card({ icon, title, detailedInfo, contact, address, timeframe, cost, children }: CardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div 
      className="relative h-[500px] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`absolute inset-0 transition-all duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow overflow-auto">
          <div className="mb-4">{icon}</div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
          {children}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="space-y-3 text-xs text-gray-500">
              <p><span className="font-semibold">Contact:</span> {contact}</p>
              <p><span className="font-semibold">Address:</span> {address}</p>
              <p><span className="font-semibold">Timeframe:</span> {timeframe}</p>
              <p><span className="font-semibold">Cost:</span> {cost}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white p-6 rounded-xl shadow-lg border border-blue-100 overflow-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Information</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Requirements</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {detailedInfo.requirements.map((req, index) => (
                  <li key={index}>• {req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Tips</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {detailedInfo.tips.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Common Issues</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {detailedInfo.commonIssues.map((issue, index) => (
                  <li key={index}>• {issue}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <HelpCircle className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`pb-6 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Food Truck Setup Guide</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Follow these steps in order to properly set up your food truck business. Each step must be completed before moving to the next.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 max-w-[1600px] mx-auto">
        {/* Step 1: Before You Build */}
        <Card
          detailedInfo={{
            requirements: [
              "Valid business registration number",
              "Proof of food safety certification",
              "Detailed floor plan of truck layout",
              "Equipment specifications list",
              "Proposed menu items"
            ],
            tips: [
              "Schedule a pre-consultation meeting",
              "Research local food truck events",
              "Join food truck associations",
              "Network with existing owners"
            ],
            commonIssues: [
              "Incomplete documentation",
              "Undersized equipment",
              "Inadequate power supply planning",
              "Missing ventilation specifications"
            ]
          }}
          icon={<ClipboardList className="w-8 h-8 text-blue-600" />}
          title="Step 1: Before You Build"
          contact="Business Development Office | (555) 234-5678"
          address="City Hall, 123 Main St, Suite 201"
          timeframe="2-3 weeks"
          cost="$200-300 (consultation fees)"
        >
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Business Plan Review</li>
            <li>• Zoning Requirements Check</li>
            <li>• Initial Health Consultation</li>
            <li>• Vehicle Requirements</li>
            <li>• Equipment Specifications</li>
            <li>• Budget Planning</li>
          </ul>
        </Card>

        {/* Step 2: After You Build */}
        <Card
          detailedInfo={{
            requirements: [
              "Completed vehicle modifications",
              "Electrical system certification",
              "Water system test results",
              "Gas line safety check",
              "Equipment installation verification"
            ],
            tips: [
              "Document all modifications",
              "Take photos of installations",
              "Keep all receipts and certifications",
              "Schedule inspections early"
            ],
            commonIssues: [
              "Non-commercial grade equipment",
              "Improper ventilation setup",
              "Insufficient power supply",
              "Inadequate water tank size"
            ]
          }}
          icon={<Wrench className="w-8 h-8 text-blue-600" />}
          title="Step 2: After You Build"
          contact="Vehicle Inspection Dept | (555) 345-6789"
          address="Vehicle Safety Center, 456 Tech Ave"
          timeframe="1-2 weeks"
          cost="$500-800 (inspection fees)"
        >
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Equipment Installation Check</li>
            <li>• Water System Test</li>
            <li>• Electrical Safety Inspection</li>
            <li>• Gas Line Certification</li>
            <li>• Ventilation Verification</li>
            <li>• Safety Equipment Check</li>
          </ul>
        </Card>

        {/* Step 3: Health Permit */}
        <Card
          detailedInfo={{
            requirements: [
              "Food handler certifications",
              "Health inspection checklist",
              "Temperature control logs",
              "Cleaning schedule",
              "Food storage plan"
            ],
            tips: [
              "Maintain detailed cleaning logs",
              "Install quality thermometers",
              "Create clear labeling system",
              "Train all staff on procedures"
            ],
            commonIssues: [
              "Improper food storage",
              "Missing temperature logs",
              "Inadequate hand washing setup",
              "Poor waste management"
            ]
          }}
          icon={<Stethoscope className="w-8 h-8 text-blue-600" />}
          title="Step 3: Health Permit"
          contact="Health Department | (555) 456-7890"
          address="Health & Safety Building, 789 Med Blvd"
          timeframe="3-4 weeks"
          cost="$350-450 (permit fee)"
        >
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Food Safety Certification</li>
            <li>• Kitchen Layout Approval</li>
            <li>• Food Handler Cards</li>
            <li>• Storage Compliance</li>
            <li>• Temperature Controls</li>
            <li>• Sanitation Procedures</li>
          </ul>
        </Card>

        {/* Step 4: Fire Permit */}
        <Card
          detailedInfo={{
            requirements: [
              "Fire suppression system",
              "Emergency exit plan",
              "Fire extinguisher placement",
              "Gas line certification",
              "Emergency procedures manual"
            ],
            tips: [
              "Regular system testing",
              "Staff fire safety training",
              "Keep inspection records",
              "Post emergency procedures"
            ],
            commonIssues: [
              "Expired extinguishers",
              "Blocked emergency exits",
              "Missing safety signage",
              "Improper gas line setup"
            ]
          }}
          icon={<Flame className="w-8 h-8 text-blue-600" />}
          title="Step 4: Fire Permit"
          contact="Fire Marshal Office | (555) 567-8901"
          address="Fire Department HQ, 321 Safety Rd"
          timeframe="1-2 weeks"
          cost="$250-400 (inspection & permit)"
        >
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Fire Suppression System</li>
            <li>• Emergency Exits</li>
            <li>• Fire Extinguishers</li>
            <li>• Gas Line Safety</li>
            <li>• Electrical Safety</li>
            <li>• Emergency Procedures</li>
          </ul>
        </Card>

        {/* Step 5: Hawkers License */}
        <Card
          detailedInfo={{
            requirements: [
              "Business registration",
              "Tax ID documentation",
              "Insurance certificates",
              "Background check results",
              "Vehicle registration"
            ],
            tips: [
              "Keep digital copies of all documents",
              "Set up renewal reminders",
              "Maintain good standing",
              "Track all payments"
            ],
            commonIssues: [
              "Incomplete insurance coverage",
              "Missing tax documents",
              "Late renewal applications",
              "Incorrect registration info"
            ]
          }}
          icon={<Store className="w-8 h-8 text-blue-600" />}
          title="Step 5: Hawkers License"
          contact="Business Licensing | (555) 678-9012"
          address="City Permits Office, 654 Gov Center"
          timeframe="2-3 weeks"
          cost="$450-600 (annual license)"
        >
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Business Registration</li>
            <li>• Tax ID Number</li>
            <li>• Insurance Coverage</li>
            <li>• Vehicle Registration</li>
            <li>• Background Check</li>
            <li>• Food Manager Certificate</li>
          </ul>
        </Card>

        {/* Step 6: Location */}
        <Card
          detailedInfo={{
            requirements: [
              "Zoning compliance check",
              "Parking permit application",
              "Route map submission",
              "Time restriction acknowledgment",
              "Location agreements"
            ],
            tips: [
              "Research high-traffic areas",
              "Check event calendars",
              "Network with property owners",
              "Document all agreements"
            ],
            commonIssues: [
              "Restricted zone parking",
              "Competitor proximity issues",
              "Missing event permits",
              "Time restriction violations"
            ]
          }}
          icon={<MapPin className="w-8 h-8 text-blue-600" />}
          title="Step 6: Location"
          contact="Zoning Department | (555) 789-0123"
          address="Urban Planning Dept, 987 City Square"
          timeframe="1-2 weeks"
          cost="$150-300 (varies by location)"
        >
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Zoning Approval</li>
            <li>• Parking Permits</li>
            <li>• Route Planning</li>
            <li>• Event Permissions</li>
            <li>• Time Restrictions</li>
            <li>• Location Agreements</li>
          </ul>
        </Card>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <FAQItem
            question="How long does the entire registration process take?"
            answer="The complete process typically takes 8-12 weeks, depending on your preparation and response time to inspection requirements. We recommend starting the process at least 3 months before your planned launch date."
          />
          <FAQItem
            question="Can I start the process before my truck is built?"
            answer="Yes, and it's recommended! Step 1 should be completed before building your truck to ensure you meet all requirements and avoid costly modifications later."
          />
          <FAQItem
            question="What's the total cost for all permits and licenses?"
            answer="The total cost ranges from $1,900 to $2,850, including all permits, licenses, and inspection fees. Additional costs may apply for express processing or special permits."
          />
          <FAQItem
            question="Do I need to renew all these permits?"
            answer="Yes, most permits require annual renewal. Health permits and hawker's licenses must be renewed annually, while fire inspections are required every six months."
          />
          <FAQItem
            question="What happens if I fail an inspection?"
            answer="If you fail an inspection, you'll receive a detailed report of required corrections. You typically have 30 days to make the necessary changes and schedule a re-inspection. Re-inspection fees may apply."
          />
        </div>
      </div>
    </div>
  );
}

export default App;