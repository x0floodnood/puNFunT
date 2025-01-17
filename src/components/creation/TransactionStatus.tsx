import React from "react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface TransactionStatusProps {
  status: "idle" | "processing" | "success" | "error";
  message?: string;
  progress?: number;
}

const TransactionStatus = ({
  status = "idle",
  message = "Transaction in progress...",
  progress = 0,
}: TransactionStatusProps) => {
  const renderStatus = () => {
    switch (status) {
      case "processing":
        return (
          <Alert className="bg-slate-900 border-blue-500">
            <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
            <AlertTitle className="text-blue-500">Processing</AlertTitle>
            <AlertDescription className="text-slate-300">
              {message}
            </AlertDescription>
            <Progress value={progress} className="mt-2" />
          </Alert>
        );
      case "success":
        return (
          <Alert className="bg-slate-900 border-green-500">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <AlertTitle className="text-green-500">Success</AlertTitle>
            <AlertDescription className="text-slate-300">
              {message}
            </AlertDescription>
          </Alert>
        );
      case "error":
        return (
          <Alert className="bg-slate-900 border-red-500">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertTitle className="text-red-500">Error</AlertTitle>
            <AlertDescription className="text-slate-300">
              {message}
            </AlertDescription>
          </Alert>
        );
      default:
        return (
          <Alert className="bg-slate-900 border-slate-700">
            <AlertTitle className="text-slate-400">Ready</AlertTitle>
            <AlertDescription className="text-slate-500">
              Waiting for transaction...
            </AlertDescription>
          </Alert>
        );
    }
  };

  return (
    <div className="w-full bg-slate-900 p-4 rounded-lg">{renderStatus()}</div>
  );
};

export default TransactionStatus;
