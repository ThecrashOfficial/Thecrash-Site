"use client";

import { Navigation } from "@/components/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <Navigation />

      <main className="flex items-center justify-center min-h-screen px-4 pt-20 pb-8">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Sign In</h1>
            <p className="text-muted-foreground text-sm">
              Welcome back to TheSoneHub
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-primary/10 rounded-lg p-6 sm:p-8">
            <LoginForm />
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Need help?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
