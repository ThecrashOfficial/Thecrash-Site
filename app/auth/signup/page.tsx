"use client";

import { Navigation } from "@/components/navigation";
import { SignupForm } from "@/components/auth/signup-form";
import { Lock } from "lucide-react";

export default function SignupPage() {
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
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground text-sm">
              Join TheSoneHub and start your +1% improvement journey
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-primary/10 rounded-lg p-6 sm:p-8">
            <SignupForm />
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </main>
    </div>
  );
}
