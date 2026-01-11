import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Trophy,
  Calendar,
  MapPin,
  Clock,
  Cpu,
  BookOpen,
  UserPlus,
  X,
  Medal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoboOlympiad = () => {
  const navigate = useNavigate();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const googleFormsLink = "https://registration.austrc.com/Robo-olympiad";

  const segment = {
    id: 8,
    name: "Robo Olympiad",
    badge: "Ultimate Robotics Challenge",
    category: "Multi-Event Competition · Team Strategy",
    prizePool: "To be Announced",
    image:
      "https://ik.imagekit.io/mekt2pafz/Robomania%202.0/robo%20olympiad.png?updatedAt=1765578419230",
    tagline:
      "A multi-event robotics competition that challenges teams to excel across diverse robotic disciplines.",
    detailedDescription:
      "The Robot Olympiad is the knowledge-driven segment of Robomania 2.0, designed to test the intellectual depth, analytical thinking, and technical understanding of individuals passionate about robotics, automation, and artificial intelligence. This solo competition is crafted to evaluate not just what you know—but how you apply it. If you’re confident in your concepts, theories, and problem-solving skills, the Robot Olympiad is your arena.",
    highlights: [
      "Multiple events showcasing different robotics disciplines and skills.",
      "Emphasis on innovation, precision, and team coordination.",
      "Competitive environment with top teams recognized and awarded.",
      "Opportunities for networking with fellow robotics enthusiasts.",
    ],
    schedule: "To be Announced",
    place: "AUST Campus",
    registrationDeadline: "12 January, 2026",
  };

  return (
    <section className="min-h-screen px-4 py-10 text-white md:py-16 bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Back button */}
        <motion.button
          whileHover={{ scale: 1.05, x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F5CB7A]/60 bg-black/60 px-4 py-2 text-sm font-semibold text-[#F5CB7A] hover:bg-[#1AB7AA]/20 transition-colors duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </motion.button>

        {/* Main content card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="relative rounded-3xl border border-[#D1BA83]/60 
                     bg-gradient-to-br from-[#050506]/95 via-[#0d0902]/95 to-[#1a0f00]/80 
                     shadow-[0_0_70px_rgba(245,203,122,0.28)]"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5CB7A] to-transparent opacity-80" />

          {/* Content */}
          <div className="px-5 sm:px-8 pt-8 pb-8">
            {/* Top row: badge + category */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.3 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3"
            >
              {segment.badge && (
                <div className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-[#D1BA83]/70 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#F5CB7A]" />
                  <span className="text-[11px] font-semibold tracking-wide text-[#F5CB7A] uppercase">
                    {segment.badge}
                  </span>
                </div>
              )}

              {segment.category && (
                <div className="rounded-full bg-black/60 border border-[#1AB7AA]/70 px-3 py-1">
                  <span className="text-[11px] font-medium text-[#CCF5EE]">
                    {segment.category}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Image + basic details side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-5 md:gap-7 items-start">
              {/* Image card */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: 4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="relative rounded-3xl border border-[#D1BA83]/60 
                           bg-gradient-to-br from-[#18100a]/95 via-[#0b0804]/95 to-[#140b02]/95 
                           p-3 shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
              >
                <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#F5CB7A]/30 via-transparent to-[#1AB7AA]/30 opacity-40 blur-xl" />

                <div className="relative rounded-2xl bg-black/60 border border-[#D1BA83]/70 aspect-[4/3] overflow-hidden flex items-center justify-center">
                  <img
                    src={segment.image}
                    alt={segment.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <p className="relative mt-3 text-[11px] text-neutral-300/80 leading-snug">
                  Designed visual for{" "}
                  <span className="text-[#F5CB7A] font-semibold">
                    {segment.name}
                  </span>{" "}
                  — as seen in Robomania 2.0 branding.
                </p>
              </motion.div>

              {/* Text + metrics */}
              <div className="space-y-4">
                {/* Title + tagline */}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14, duration: 0.35 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-[#F5CB7A] via-[#1AB7AA] to-[#F5CB7A] bg-clip-text text-transparent">
                      {segment.name}
                    </span>
                  </h1>
                  {segment.tagline && (
                    <p className="mt-3 text-xs sm:text-sm text-neutral-200/85 leading-relaxed">
                      {segment.tagline}
                    </p>
                  )}
                </motion.div>
                {/* Compact Prize Pool Card (with shimmer + larger text/icons) */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.35 }}
                  className="mb-6 flex justify-center"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="group relative w-full max-w-sm overflow-hidden rounded-2xl
               border border-[#F5CB7A]/50 bg-black/50
               shadow-[0_0_45px_rgba(245,203,122,0.18)]
               px-4 py-3.5"
                  >
                    {/* Soft glow */}
                    <div
                      className="pointer-events-none absolute -inset-0.5 rounded-2xl
                 bg-gradient-to-br from-[#F5CB7A]/20 via-transparent to-[#1AB7AA]/20
                 opacity-40 blur-xl"
                    />

                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-y-1/2 -left-1/2 w-1/2
             bg-gradient-to-r from-transparent via-white/12 to-transparent
             rotate-[-18deg] opacity-60"
                      initial={{ x: "-120%", y: "0%" }}
                      animate={{
                        x: ["-120%", "220%"],
                        y: ["-10%", "10%"],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Header */}
                    <div className="relative text-center">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-300/70">
                        Prize Pool
                      </p>
                      <div className="mx-auto mt-1 h-px w-20 border-t border-dashed border-[#F5CB7A]/55" />
                    </div>

                    {/* Champion */}
                    <div className="relative mt-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5CB7A]/15">
                          <Trophy className="h-5 w-5 text-[#F5CB7A]" />
                        </div>
                        <p className="text-[15px] font-semibold text-[#F5CB7A]">
                          Champion
                        </p>
                      </div>

                      <p className="text-xl font-extrabold text-[#F5CB7A]">
                        2,000{" "}
                        <span className="text-xs font-semibold text-neutral-300">
                          BDT
                        </span>
                      </p>
                    </div>

                    {/* Separator */}
                    <div className="relative mx-auto my-3.5 h-px w-full border-t border-dashed border-[#F5CB7A]/30" />

                    {/* Runner-up */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1AB7AA]/15">
                          <Trophy className="h-5 w-5 text-[#1AB7AA]" />
                        </div>
                        <p className="text-[15px] font-semibold text-[#CCF5EE]">
                          Runner-up
                        </p>
                      </div>

                      <p className="text-lg font-bold text-[#CCF5EE]">
                        1,000{" "}
                        <span className="text-xs font-semibold text-neutral-300">
                          BDT
                        </span>
                      </p>
                    </div>

                    {/* Separator */}
                    <div className="relative mx-auto my-3.5 h-px w-full border-t border-dashed border-[#F5CB7A]/20" />

                    {/* Special note */}
                    <p className="relative text-center text-[11.5px] text-white leading-relaxed">
                      <span className="text-[#1AB7AA] font-semibold">
                        SPECIAL NOTE:
                      </span>{" "}
                      All winners will receive exclusive gifts,courses & discounts from our partners.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Metrics grid */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.35 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                >
                  {segment.schedule && (
                    <div className="rounded-2xl border border-[#F5CB7A]/40 bg-black/45 px-3 py-2.5 flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-[#F5CB7A]/10">
                        <Calendar className="h-4 w-4 text-[#F5CB7A]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] uppercase tracking-wide text-neutral-300/70">
                          Schedule
                        </p>
                        <p className="text-sm font-semibold text-[#F5CB7A]">
                          {segment.schedule}
                        </p>
                      </div>
                    </div>
                  )}

                  {segment.place && (
                    <div className="rounded-2xl border border-[#1AB7AA]/40 bg-black/45 px-3 py-2.5 flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-[#1AB7AA]/10">
                        <MapPin className="h-4 w-4 text-[#1AB7AA]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] uppercase tracking-wide text-neutral-300/70">
                          Place
                        </p>
                        <p className="text-sm font-semibold text-[#CCF5EE]">
                          {segment.place}
                        </p>
                      </div>
                    </div>
                  )}

                  {segment.registrationDeadline && (
                    <div className="rounded-2xl border border-red-500/40 bg-black/45 px-3 py-2.5 flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-red-500/10">
                        <Clock className="h-4 w-4 text-red-500" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] uppercase tracking-wide text-neutral-300/70">
                          Registration Deadline
                        </p>
                        <p className="text-sm font-semibold text-red-500">
                          {segment.registrationDeadline}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.35 }}
                  className="mt-6 flex flex-wrap gap-3 sm:gap-4"
                >
                  <a
                    href="https://tinyurl.com/Robo-Olympiad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-[#D1BA83]/60 bg-black/50 px-4 py-2.5 text-sm font-semibold text-[#D1BA83] hover:bg-[#D1BA83]/10 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    Rule Book
                  </a>
                  <button
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#1AB7AA] to-[#0fa399] px-4 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#1AB7AA]/50 transition-all duration-200 flex items-center justify-center gap-2"
                    onClick={() => window.open(googleFormsLink, "_blank")}
                  >
                    <UserPlus className="h-4 w-4" />
                    Register Now
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="my-8 h-px origin-left bg-gradient-to-r from-[#F5CB7A]/30 via-[#F5CB7A]/60 to-transparent"
            />

            {/* Main description */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.35 }}
              className="mb-8 space-y-3"
            >
              <p className="text-neutral-100 text-sm sm:text-base leading-relaxed border-l-4 border-[#1AB7AA] pl-4 py-2 bg-white/5 rounded-md">
                {segment.detailedDescription}
              </p>
            </motion.div>

            {/* Key highlights card */}
            {segment.highlights && segment.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.35 }}
                className="rounded-2xl border border-[#1AB7AA]/35 bg-black/40 px-4 py-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="h-4 w-4 text-[#1AB7AA]" />
                  <p className="text-xs font-semibold tracking-wide text-[#CCF5EE] uppercase">
                    Key Highlights
                  </p>
                </div>
                <ul className="space-y-2">
                  {segment.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1AB7AA] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Coming Soon Modal */}
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowComingSoon(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl border border-[#D1BA83]/60 bg-gradient-to-br from-[#050506]/95 via-[#0d0902]/95 to-[#1a0f00]/80 shadow-[0_0_70px_rgba(245,203,122,0.28)] p-8 max-w-md w-full text-center"
            >
              {/* Close button */}
              <button
                onClick={() => setShowComingSoon(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#D1BA83]/10 transition-colors duration-200"
              >
                <X className="h-5 w-5 text-[#D1BA83]" />
              </button>

              {/* Content */}
              <div className="space-y-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl font-bold bg-gradient-to-r from-[#F5CB7A] via-[#1AB7AA] to-[#F5CB7A] bg-clip-text text-transparent"
                >
                  🎉
                </motion.div>

                <h2 className="text-3xl font-bold text-[#F5CB7A]">
                  Coming Soon!
                </h2>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  The rule book for this segment is being prepared with all the
                  exciting details and guidelines.
                </p>

                <p className="text-neutral-400 text-xs">
                  Check back soon for the complete ruleset and competition
                  guidelines.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowComingSoon(false)}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#1AB7AA] to-[#0fa399] px-4 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#1AB7AA]/50 transition-all duration-200"
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RoboOlympiad;
