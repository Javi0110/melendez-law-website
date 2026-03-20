\"use client\";

import { FormEvent, useState } from \"react\";

export function ContactForm() {
  const [status, setStatus] = useState<\"idle\" | \"submitting\" | \"success\" | \"error\">(\"idle\");
  const [message, setMessage] = useState(\"\");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(\"submitting\");
    setMessage(\"\");

    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(\"/api/contact\", {
        method: \"POST\",
        headers: { \"Content-Type\": \"application/json\" },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        throw new Error(\"Failed to send message\");
      }

      setStatus(\"success\");
      setMessage(\"Thank you. Your message has been sent.\");
      event.currentTarget.reset();
    } catch {
      setStatus(\"error\");
      setMessage(\"There was a problem sending your message. Please try again or contact us by phone or email.\");
    }
  }

  return (
    <form onSubmit={handleSubmit} className=\"space-y-4\">
      <div className=\"grid gap-4 sm:grid-cols-2\">
        <div>
          <label className=\"block text-sm font-medium text-white/80\">
            Name
          </label>
          <input
            name=\"name\"
            required
            className=\"mt-1 w-full rounded-lg border border-white/10 bg-navy-dark/80 px-3 py-2 text-sm text-white outline-none ring-gold/50 placeholder:text-white/40 focus:border-gold/60 focus:ring-2\"
            placeholder=\"Your full name\"
          />
        </div>
        <div>
          <label className=\"block text-sm font-medium text-white/80\">
            Email
          </label>
          <input
            type=\"email\"
            name=\"email\"
            required
            className=\"mt-1 w-full rounded-lg border border-white/10 bg-navy-dark/80 px-3 py-2 text-sm text-white outline-none ring-gold/50 placeholder:text-white/40 focus:border-gold/60 focus:ring-2\"
            placeholder=\"you@example.com\"
          />
        </div>
      </div>
      <div>
        <label className=\"block text-sm font-medium text-white/80\">
          Phone (optional)
        </label>
        <input
          name=\"phone\"
          className=\"mt-1 w-full rounded-lg border border-white/10 bg-navy-dark/80 px-3 py-2 text-sm text-white outline-none ring-gold/50 placeholder:text-white/40 focus:border-gold/60 focus:ring-2\"
          placeholder=\"787-000-0000\"
        />
      </div>
      <div>
        <label className=\"block text-sm font-medium text-white/80\">
          How can we help?
        </label>
        <textarea
          name=\"message\"
          required
          rows={5}
          className=\"mt-1 w-full rounded-lg border border-white/10 bg-navy-dark/80 px-3 py-2 text-sm text-white outline-none ring-gold/50 placeholder:text-white/40 focus:border-gold/60 focus:ring-2\"
          placeholder=\"Briefly describe your matter.\"
        />
      </div>
      <div className=\"flex items-center justify-between gap-3\">
        <button
          type=\"submit\"
          className=\"btn-primary\"
          disabled={status === \"submitting\"}
        >
          {status === \"submitting\" ? \"Sending...\" : \"Send Message\"}
        </button>
        <p className=\"text-xs text-white/50\">
          Please do not send confidential information through this form.
        </p>
      </div>
      {message && (
        <p
          className={`text-sm ${
            status === \"success\" ? \"text-emerald-400\" : \"text-rose-400\"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

