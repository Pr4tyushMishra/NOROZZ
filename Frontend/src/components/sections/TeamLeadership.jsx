import React from 'react';
import { teamMembers } from '@/core/repositories/ExtendedRepositories';
import { Container } from '@/components/layout/Container';

export const TeamLeadership = ({ members = teamMembers }) => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
            Leadership Behind the Mission
          </h2>
          <p className="text-sm sm:text-base text-slate-muted mt-2">
            Meet our specialized leadership team dedicated to raising the standard of home care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-card transition-all duration-200 text-left group"
            >
              <div className="aspect-square overflow-hidden bg-slate-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-navy font-heading">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-primary mt-0.5">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-xs text-slate-muted mt-2 line-clamp-2">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
