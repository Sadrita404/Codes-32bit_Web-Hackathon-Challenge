import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Download,
  Activity,
  TrendingUp
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [assessmentData, setAssessmentData] = useState(null);

  // Check if user has access to dashboard
  useEffect(() => {
    const hasAccess = localStorage.getItem('dashboardAccess');
    if (!hasAccess) {
      // Redirect to pricing if no access
      window.location.href = '/pricing';
      return;
    }
  }, []);

  // Get assessment data from URL params or localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('currentAssessment');
    const urlParams = {
      url: searchParams.get('url'),
      name: searchParams.get('name'),
      plan: searchParams.get('plan'),
      email: searchParams.get('email')
    };

    if (storedData) {
      setAssessmentData(JSON.parse(storedData));
    } else if (urlParams.url) {
      setAssessmentData({
        targetUrl: urlParams.url,
        websiteName: urlParams.name || 'Assessment',
        plan: urlParams.plan || 'Standard',
        contactEmail: urlParams.email || ''
      });
    }
  }, [searchParams]);

  // Default assessment data if none provided
  const currentAssessment = {
    name: assessmentData?.websiteName || "Example Company Assessment",
    url: assessmentData?.targetUrl || "https://example.com",
    plan: assessmentData?.plan || "Both Teams",
    email: assessmentData?.contactEmail || "",
    status: "In Progress",
    progress: 65
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Security Assessment Report', 20, 30);
    
    // Company info
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Assessment Name: ${currentAssessment.name}`, 20, 50);
    doc.text(`Target URL: ${currentAssessment.url}`, 20, 65);
    doc.text(`Assessment Type: ${currentAssessment.plan}`, 20, 80);
    doc.text(`Contact Email: ${currentAssessment.email}`, 20, 95);
    doc.text(`Status: ${currentAssessment.status}`, 20, 110);
    doc.text(`Progress: ${currentAssessment.progress}%`, 20, 125);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 140);
    
    // Findings section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Security Findings', 20, 170);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Critical Vulnerabilities: 2', 20, 190);
    doc.text('High Risk Issues: 5', 20, 205);
    doc.text('Medium Risk Issues: 12', 20, 220);
    doc.text('Quick Wins Available: 3', 20, 235);
    
    // Assessment details
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Assessment Details', 20, 260);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    
    let attackTypeDescription = '';
    if (currentAssessment.plan === 'Red Team') {
      attackTypeDescription = 'Red Team Assessment: Offensive security testing to identify vulnerabilities through simulated attacks.';
    } else if (currentAssessment.plan === 'Blue Team') {
      attackTypeDescription = 'Blue Team Assessment: Defensive security analysis focusing on detection and response capabilities.';
    } else {
      attackTypeDescription = 'Both Teams Assessment: Comprehensive security evaluation combining offensive testing and defensive analysis.';
    }
    
    // Split text to fit page width
    const splitText = doc.splitTextToSize(attackTypeDescription, 170);
    doc.text(splitText, 20, 280);
    
    // Save the PDF
    doc.save(`${currentAssessment.name.replace(/[^a-z0-9]/gi, '_')}_Security_Report.pdf`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <div className="space-y-1">
              <p className="text-muted-foreground">Target: <span className="text-cyber-green font-medium">{currentAssessment.url}</span></p>
              {currentAssessment.email && (
                <p className="text-sm text-muted-foreground">Contact: {currentAssessment.email}</p>
              )}
            </div>
          </div>
          <Badge className="bg-cyber-gradient text-background w-fit mt-4 md:mt-0">
            {currentAssessment.plan}
          </Badge>
        </div>

        {/* Current Assessment */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyber-green" />
                Current Assessment
              </CardTitle>
              <Badge variant="outline" className="text-cyber-green border-cyber-green">
                <Activity className="w-4 h-4 mr-1" />
                {currentAssessment.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{currentAssessment.name}</span>
                  <span className="text-muted-foreground">{currentAssessment.url}</span>
                </div>
                <Progress value={currentAssessment.progress} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currentAssessment.progress}% Complete</span>
                  <span>ETA: 2.5 hours</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-red-500/50" onClick={() => window.open('/red-team', '_blank')}>
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-red-500">
                <Target className="w-6 h-6 mr-3" />
                Red Team Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Offensive security testing simulating real-world attacks to identify vulnerabilities and weaknesses in your system.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-red-500/20">
                  Attack Simulation
                </Badge>
                <span className="text-sm text-muted-foreground">Click to open →</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-blue-500/50" onClick={() => window.open('/blue-team', '_blank')}>
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-blue-500">
                <Shield className="w-6 h-6 mr-3" />
                Blue Team Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Defensive security analysis focusing on detection capabilities, incident response, and security monitoring.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Defense Analysis
                </Badge>
                <span className="text-sm text-muted-foreground">Click to open →</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Graph */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-cyber-green" />
              Assessment Progress Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                progress: {
                  label: "Progress",
                  color: "hsl(var(--cyber-green))",
                },
              }}
              className="h-[300px]"
            >
              <AreaChart
                data={[
                  { time: "Day 1", progress: 10 },
                  { time: "Day 2", progress: 25 },
                  { time: "Day 3", progress: 40 },
                  { time: "Day 4", progress: 55 },
                  { time: "Day 5", progress: 65 },
                  { time: "Day 6", progress: 80 },
                  { time: "Day 7", progress: 100 },
                ]}
              >
                <defs>
                  <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--cyber-green))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--cyber-green))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="time" 
                  className="text-xs"
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis 
                  className="text-xs"
                  stroke="hsl(var(--muted-foreground))"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="progress"
                  stroke="hsl(var(--cyber-green))"
                  strokeWidth={2}
                  fill="url(#progressGradient)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Target className="w-4 h-4 mr-2 text-cyber-green" />
                Findings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Critical</span>
                  <span className="font-semibold text-destructive">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">High</span>
                  <span className="font-semibold text-warning">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Medium</span>
                  <span className="font-semibold text-info">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-cyber-green" />
                Quick Wins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-green mb-1">3</div>
                <p className="text-sm text-muted-foreground">Easy fixes available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Clock className="w-4 h-4 mr-2 text-cyber-green" />
                Time Remaining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">2.5h</div>
                <p className="text-sm text-muted-foreground">Until completion</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={generatePDF}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View Findings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;