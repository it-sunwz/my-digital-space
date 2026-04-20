import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "你好，我是 Alex · 个人主页" },
      {
        name: "description",
        content: "Alex 的个人主页 — 一名热爱设计与代码的创造者，专注于打造优雅的数字产品。",
      },
      { property: "og:title", content: "你好，我是 Alex · 个人主页" },
      {
        property: "og:description",
        content: "Alex 的个人主页 — 一名热爱设计与代码的创造者。",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-blob-1)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-blob-2)" }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Emoji avatar */}
        <div className="group relative mb-8">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "var(--gradient-avatar)" }}
          />
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full border border-border bg-card text-7xl shadow-elegant transition-transform duration-500 hover:scale-105 hover:rotate-6"
            role="img"
            aria-label="个人头像"
          >
            <span className="animate-wave inline-block">👋</span>
          </div>
        </div>

        {/* Name */}
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Hello · 你好 · Bonjour
        </p>
        <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          我是{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-text)" }}
          >
            Alex
          </span>
        </h1>

        {/* Intro */}
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          一名热爱<span className="text-foreground">设计</span>与
          <span className="text-foreground">代码</span>的创造者。
          相信简洁的力量，喜欢把复杂的想法变成优雅的产品 ✨
        </p>

        {/* Tag chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { emoji: "🎨", label: "设计" },
            { emoji: "💻", label: "前端" },
            { emoji: "📚", label: "阅读" },
            { emoji: "☕", label: "咖啡" },
          ].map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <span>{tag.emoji}</span>
              {tag.label}
            </span>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex · Made with ❤️
        </footer>
      </section>
    </main>
  );
}
