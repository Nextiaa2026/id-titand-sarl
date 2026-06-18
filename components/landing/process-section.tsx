import { serviceProcess } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section className="bg-brand-muted py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="section-eyebrow">Notre Méthode</p>
          <h2 className="section-title mt-2 text-brand-dark">
            Comment nous travaillons avec vous
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {serviceProcess.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {index < serviceProcess.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-brand/20 md:block" />
              )}
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white shadow-lg shadow-brand/25">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-brand">{step.title}</h3>
              <p className="section-body mx-auto mt-2 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
