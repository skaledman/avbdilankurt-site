"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export type StyledSelectOption = {
  value: string;
  label: string;
};

type StyledSelectProps = {
  name: string;
  label: string;
  options: StyledSelectOption[];
  placeholder: string;
  required?: boolean;
  defaultValue?: string;
};

export function StyledSelect({
  name,
  label,
  options,
  placeholder,
  required,
  defaultValue = "",
}: StyledSelectProps) {
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const optionsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    if (!defaultValue) return 0;
    const idx = options.findIndex((o) => o.value === defaultValue);
    return idx >= 0 ? idx : 0;
  });

  const selected = useMemo(
    () => options.find((o) => o.value === value) ?? null,
    [options, value],
  );

  const selectIndex = (index: number) => {
    const option = options[index];
    if (!option) return;
    setValue(option.value);
    setActiveIndex(index);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const openAndFocus = (index: number) => {
    setOpen(true);
    setActiveIndex(index);
    window.requestAnimationFrame(() => {
      optionsRef.current[index]?.focus();
    });
  };

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && !root.contains(e.target)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      {/* Keeps native validation & form submit without showing a native <select>. */}
      <input
        name={name}
        required={required}
        readOnly
        value={value}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />

      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-label={label}
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => {
          if (open) {
            setOpen(false);
            return;
          }
          const startIndex = selected
            ? Math.max(0, options.findIndex((o) => o.value === selected.value))
            : 0;
          openAndFocus(startIndex);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            if (!open) openAndFocus(activeIndex);
            else {
              const next = Math.min(options.length - 1, activeIndex + 1);
              setActiveIndex(next);
              optionsRef.current[next]?.focus();
            }
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!open) openAndFocus(activeIndex);
            else {
              const prev = Math.max(0, activeIndex - 1);
              setActiveIndex(prev);
              optionsRef.current[prev]?.focus();
            }
          } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (open) selectIndex(activeIndex);
            else openAndFocus(activeIndex);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        className={[
          "h-11 w-full rounded-xl border bg-[#0B1120] px-4 text-left text-base outline-none transition-all",
          "border-white/[0.1] text-white",
          "hover:border-[rgba(201,168,76,0.55)]",
          "focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.18)]",
        ].join(" ")}
      >
        <span className="flex items-center justify-between gap-3">
          <span
            className={
              selected
                ? "text-white"
                : "text-[rgba(240,236,228,0.45)]"
            }
          >
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            size={16}
            className={[
              "shrink-0 text-[var(--gold)] transition-transform duration-200",
              open ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden
          />
        </span>
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,13,24,0.98)] p-1 shadow-[0_18px_40px_rgba(0,0,0,0.34)]"
        >
          {options.map((opt, idx) => {
            const isSelected = value === opt.value;
            const isActive = activeIndex === idx;
            return (
              <button
                key={opt.value}
                ref={(el) => {
                  optionsRef.current[idx] = el;
                }}
                type="button"
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => selectIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = Math.min(options.length - 1, idx + 1);
                    setActiveIndex(next);
                    optionsRef.current[next]?.focus();
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev = Math.max(0, idx - 1);
                    setActiveIndex(prev);
                    optionsRef.current[prev]?.focus();
                  } else if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectIndex(idx);
                  } else if (e.key === "Escape") {
                    setOpen(false);
                    buttonRef.current?.focus();
                  }
                }}
                className={[
                  "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors outline-none",
                  isSelected
                    ? "bg-[rgba(201,168,76,0.12)] text-[var(--gold)]"
                    : "text-[var(--text-soft)]",
                  isActive && !isSelected ? "bg-white/[0.06] text-white" : "",
                  "hover:bg-[rgba(201,168,76,0.08)] hover:text-[var(--gold)]",
                  "focus:bg-[rgba(201,168,76,0.08)] focus:text-[var(--gold)]",
                ].join(" ")}
              >
                <span>{opt.label}</span>
                {isSelected ? (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                    ✓
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

