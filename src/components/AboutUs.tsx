"use client";

import { Heart, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader";

export default function AboutUs() {
  const t = useTranslations("AboutUs");
  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <figure>
            <img
              src="/images/workers_diverse_bolivia.jpg"
              alt="Trabajadores de distintos oficios en Bolivia"
              className="w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] object-cover rounded-3xl"
              loading="lazy"
            />
            <figcaption className="mt-4 text-base font-semibold text-ink-soft">
              {t("badge_role")} · {t("badge_desc")}
            </figcaption>
          </figure>

          <div>
            <SectionHeader
              align="left"
              eyebrow={t("section_tag")}
              title={
                <>
                  {t("title_part1")}
                  <span className="accent-underline">{t("title_part2")}</span>
                </>
              }
            />

            <div className="mt-6 space-y-5 text-lg leading-relaxed font-medium text-ink-soft">
              <p>{t("p1")}</p>
              <p>
                {t("p2_part1")}
                <strong className="font-bold text-ink">{t("p2_part2")}</strong>
                {t("p2_part3")}
                <strong className="font-bold text-ink">{t("p2_part4")}</strong>
                {t("p2_part5")}
              </p>
              <p>
                {t("p3_part1")}
                <strong className="font-bold text-ink">{t("p3_part2")}</strong>
                {t("p3_part3")}
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t-2 border-line pt-8">
              <div className="flex gap-4">
                <Heart className="w-7 h-7 shrink-0 text-accent-strong transition-colors duration-300" aria-hidden="true" />
                <div>
                  <dt className="text-lg font-bold text-ink">{t("purpose_title")}</dt>
                  <dd className="mt-1 text-base font-medium text-ink-soft">{t("purpose_desc")}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="w-7 h-7 shrink-0 text-accent-strong transition-colors duration-300" aria-hidden="true" />
                <div>
                  <dt className="text-lg font-bold text-ink">{t("vision_title")}</dt>
                  <dd className="mt-1 text-base font-medium text-ink-soft">{t("vision_desc")}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
