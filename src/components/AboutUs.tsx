"use client";

import { Heart, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader";

export default function AboutUs() {
  const t = useTranslations("AboutUs");
  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
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
    </section>
  );
}
