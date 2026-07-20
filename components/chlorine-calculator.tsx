'use client'

import { useMemo, useState } from 'react'
import { Calculator, Droplets, Info } from 'lucide-react'

type Shape = 'rectangular' | 'round' | 'liters'
type Treatment = 'maintenance' | 'shock'

export function ChlorineCalculator() {
  const [shape, setShape] = useState<Shape>('rectangular')
  const [length, setLength] = useState('8')
  const [width, setWidth] = useState('4')
  const [diameter, setDiameter] = useState('4.5')
  const [depth, setDepth] = useState('1.5')
  const [liters, setLiters] = useState('30000')
  const [treatment, setTreatment] = useState<Treatment>('maintenance')

  const volumeLiters = useMemo(() => {
    const d = parseFloat(depth) || 0
    if (shape === 'liters') return parseFloat(liters) || 0
    if (shape === 'round') {
      const r = (parseFloat(diameter) || 0) / 2
      return Math.round(Math.PI * r * r * d * 1000)
    }
    const l = parseFloat(length) || 0
    const w = parseFloat(width) || 0
    return Math.round(l * w * d * 1000)
  }, [shape, length, width, diameter, depth, liters])

  // Target dose: maintenance ~1.5 ppm, shock ~5 ppm.
  // 1 g of chlorine per m³ raises the level ~1 ppm. 1 m³ = 1000 L.
  const targetPpm = treatment === 'shock' ? 5 : 1.5
  const gramsChlorine = Math.round((volumeLiters / 1000) * targetPpm)

  const m3 = (volumeLiters / 1000).toFixed(1)

  return (
    <section id="calculadora" className="bg-secondary/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Calculator className="size-4" aria-hidden="true" />
            Free tool
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Chlorine Dosing Calculator
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Enter your pool's measurements and instantly calculate how much
            chlorine you need for daily maintenance or a shock treatment.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-foreground">
                Pool shape
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    ['rectangular', 'Rectangular'],
                    ['round', 'Round'],
                    ['liters', 'I know the volume'],
                  ] as [Shape, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setShape(value)}
                    className={`rounded-lg border px-2 py-2 text-sm font-medium transition-colors ${
                      shape === value
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-foreground hover:border-primary/50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 grid gap-4">
              {shape === 'liters' ? (
                <Field
                  label="Water volume (liters)"
                  value={liters}
                  onChange={setLiters}
                  unit="L"
                />
              ) : (
                <>
                  {shape === 'rectangular' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        label="Length"
                        value={length}
                        onChange={setLength}
                        unit="m"
                      />
                      <Field
                        label="Width"
                        value={width}
                        onChange={setWidth}
                        unit="m"
                      />
                    </div>
                  ) : (
                    <Field
                      label="Diameter"
                      value={diameter}
                      onChange={setDiameter}
                      unit="m"
                    />
                  )}
                  <Field
                    label="Average depth"
                    value={depth}
                    onChange={setDepth}
                    unit="m"
                  />
                </>
              )}

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-foreground">
                  Treatment type
                </legend>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      ['maintenance', 'Maintenance'],
                      ['shock', 'Shock treatment'],
                    ] as [Treatment, string][]
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setTreatment(value)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                        treatment === value
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary/50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Droplets className="size-5" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Result
                </span>
              </div>

              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Estimated volume
                </p>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  {volumeLiters.toLocaleString('en-US')} L
                </p>
                <p className="text-sm text-muted-foreground">{m3} m³</p>
              </div>

              <div className="mt-6 rounded-xl bg-card p-4">
                <p className="text-sm text-muted-foreground">
                  Chlorine needed ({treatment === 'shock' ? 'shock ~5 ppm' : 'maintenance ~1.5 ppm'})
                </p>
                <p className="font-serif text-4xl font-semibold text-primary">
                  {gramsChlorine.toLocaleString('en-US')} g
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  ≈ {(gramsChlorine / 1000).toFixed(2)} kg of chlorine
                </p>
              </div>
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              This is an approximate estimate. The actual dose depends on the
              type of chlorine (granular, tablets, or liquid) and the
              condition of the water. Always check the manufacturer's
              instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  unit,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  unit: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </span>
      <div className="flex items-center rounded-lg border border-border bg-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <input
          type="number"
          inputMode="decimal"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2 text-foreground outline-none"
        />
        <span className="px-3 text-sm text-muted-foreground">{unit}</span>
      </div>
    </label>
  )
}
