"use client";

import { useActionState } from "react";

import { initialInquiryState, submitInquiryAction } from "@/app/actions";
import { Section } from "@/components/Section";
import { contactContent } from "@/lib/site-content";

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    submitInquiryAction,
    initialInquiryState
  );

  return (
    <Section
      id="contact"
      delay={0.03}
      contentClassName="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] xl:items-start"
    >
      <div className="relative">
        <p aria-hidden="true" className="section-ghost">
          Inquiry
        </p>

        <div className="relative z-10 pt-4">
          <p className="section-eyebrow">{contactContent.eyebrow}</p>
          <h2 className="section-title mt-5 max-w-[9ch]">{contactContent.title}</h2>
          <p className="section-intro mt-6 max-w-[31rem]">{contactContent.intro}</p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {contactContent.details.map((detail) => (
              <div key={detail.label} className="studio-panel px-5 py-5">
                <div className="relative z-10">
                  <p className="section-eyebrow">{detail.label}</p>
                  {"href" in detail ? (
                    <a
                      href={detail.href}
                      className="mt-3 inline-flex text-[1rem] leading-7 text-text transition-colors duration-200 hover:text-white"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-[1rem] leading-7 text-muted">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[27rem] text-[0.94rem] leading-7 text-muted">
            {contactContent.helper}
          </p>
        </div>
      </div>

      <form action={formAction} className="studio-panel px-6 py-6 sm:px-8 sm:py-8">
        <div className="relative z-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="field-group">
              <span className="field-label">Name</span>
              <input name="name" type="text" className="field-input" />
              {state.fieldErrors?.name ? (
                <span className="field-error">{state.fieldErrors.name}</span>
              ) : null}
            </label>

            <label className="field-group">
              <span className="field-label">Email</span>
              <input name="email" type="email" className="field-input" />
              {state.fieldErrors?.email ? (
                <span className="field-error">{state.fieldErrors.email}</span>
              ) : null}
            </label>

            <label className="field-group">
              <span className="field-label">Subject</span>
              <select name="subject" className="field-input" defaultValue="">
                <option value="">Select</option>
                {contactContent.subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {state.fieldErrors?.subject ? (
                <span className="field-error">{state.fieldErrors.subject}</span>
              ) : null}
            </label>

            <label className="field-group">
              <span className="field-label">Project type</span>
              <select name="projectType" className="field-input" defaultValue="">
                <option value="">Select</option>
                {contactContent.projectTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {state.fieldErrors?.projectType ? (
                <span className="field-error">
                  {state.fieldErrors.projectType}
                </span>
              ) : null}
            </label>

            <label className="field-group md:col-span-2">
              <span className="field-label">Budget</span>
              <select name="budget" className="field-input" defaultValue="">
                <option value="">Select</option>
                {contactContent.budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field-group mt-5 block">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              className="field-textarea"
              rows={6}
              placeholder="Share the project stage, number of pages, expected mood, and what should feel different after launch."
            />
            {state.fieldErrors?.message ? (
              <span className="field-error">{state.fieldErrors.message}</span>
            ) : null}
          </label>

          <label className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              value="accepted"
              className="mt-1 h-4 w-4 rounded border border-border bg-transparent"
            />
            <span className="field-consent">{contactContent.consentLabel}</span>
          </label>
          {state.fieldErrors?.consent ? (
            <p className="field-error mt-3">{state.fieldErrors.consent}</p>
          ) : null}

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-6 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={isPending}
              className="button-base button-primary w-fit disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{isPending ? "Sending" : "Send inquiry"}</span>
              <span aria-hidden="true">→</span>
            </button>

            <div className="max-w-[22rem]">
              {state.message ? (
                <p
                  className={`text-[0.95rem] leading-7 ${
                    state.status === "success" ? "text-text" : "text-muted"
                  }`}
                >
                  {state.message}
                </p>
              ) : (
                <p className="text-[0.92rem] leading-7 text-muted">
                  First reply includes scope clarity, timeline fit, and the
                  recommended engagement path.
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
}
