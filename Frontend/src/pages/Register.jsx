import React, { useEffect } from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { AuthFormCard } from '@/components/sections/AuthFormCard';
import { analytics } from '@/core/services/AnalyticsService';

export const Register = () => {
  useEffect(() => {
    analytics.pageView('/register', 'Create Account — NOROZZ');
  }, []);

  return (
    <div className="min-h-[85vh] bg-surface-soft/40 flex items-center justify-center">
      <SeoHead
        title="Create an Account — NOROZZ"
        description="Join NOROZZ to book background-checked pros for cleaning, electrical, plumbing, carpentry and more."
        noIndex={true}
      />
      <SafeComponent name="RegisterForm">
        <AuthFormCard mode="register" />
      </SafeComponent>
    </div>
  );
};

export default Register;
