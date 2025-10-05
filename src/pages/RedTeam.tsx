import Layout from "@/components/Layout";
import { Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RedTeam = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-cyber-green hover:text-cyber-green-bright mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex items-center mb-8">
          <Target className="w-8 h-8 mr-4 text-red-500" />
          <h1 className="text-4xl font-bold text-red-500">Red Team</h1>
        </div>

        {/* Content placeholder */}
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Red Team assessment tools and reports will be available here.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RedTeam;