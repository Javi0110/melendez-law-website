export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-navy-dark/90">
      <div className="page-container py-8 text-sm text-white/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-base font-semibold text-white">
              Meléndez López &amp; Robles LLC
            </p>
            <p>Urb Santa Rosa Ave Aguas Buenas 16-30, Bayamón PR 00959</p>
            <p>PO Box 55056, Bayamón PR 00960-4056</p>
          </div>
          <div className="space-y-1 sm:text-right">
            <p>Phone: 787-946-1810</p>
            <p>Email: bufetemlyr@outlook.com</p>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Meléndez López &amp; Robles LLC. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

