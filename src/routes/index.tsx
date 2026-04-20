import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mark · AI 应用工程师" },
      {
        name: "description",
        content:
          "Mark — 拥有 5 年经验的 AI 应用工程师，专注于大模型应用、智能体系统与生产级 AI 产品落地。",
      },
      { property: "og:title", content: "Mark · AI 应用工程师" },
      {
        property: "og:description",
        content: "5 年经验的 AI 应用工程师，专注于 LLM 应用与智能体落地。",
      },
    ],
  }),
});

const skills = [
  {
    emoji: "🧠",
    title: "大模型应用",
    desc: "GPT · Claude · Gemini · Prompt 工程 · RAG · Fine-tuning",
    color: "var(--c-yellow)",
  },
  {
    emoji: "🤖",
    title: "智能体系统",
    desc: "LangChain · LlamaIndex · 多 Agent 协作 · Tool Use",
    color: "var(--c-pink)",
  },
  {
    emoji: "⚙️",
    title: "工程化落地",
    desc: "Python · TypeScript · FastAPI · Vector DB · 高并发推理",
    color: "var(--c-blue)",
  },
  {
    emoji: "📊",
    title: "数据与评测",
    desc: "数据闭环 · 自动化评测 · A/B 实验 · 模型可观测性",
    color: "var(--c-mint)",
  },
];

const stats = [
  { value: "5+", label: "年 AI 经验", color: "var(--c-yellow)" },
  { value: "20+", label: "AI 产品落地", color: "var(--c-pink)" },
  { value: "1M+", label: "日均请求", color: "var(--c-blue)" },
  { value: "30%", label: "成本降低", color: "var(--c-mint)" },
];

const achievements = [
  {
    year: "2024",
    title: "企业级 AI 助手平台",
    desc: "主导设计并交付面向 SaaS 客户的多租户 AI 助手平台，支持 RAG 与自定义工具调用，服务上千家企业客户。",
    color: "var(--c-pink)",
    emoji: "🚀",
  },
  {
    year: "2023",
    title: "智能体框架开源项目",
    desc: "开源一套轻量级多 Agent 编排框架，GitHub 收获 3k+ Stars，被多个团队用于生产环境。",
    color: "var(--c-yellow)",
    emoji: "⭐",
  },
  {
    year: "2022",
    title: "推理成本优化方案",
    desc: "通过模型蒸馏、缓存策略与动态路由，将线上 LLM 推理成本降低 30%，年节省成本超百万。",
    color: "var(--c-lavender)",
    emoji: "💡",
  },
  {
    year: "2021",
    title: "首个 NLP 产品上线",
    desc: "从 0 到 1 构建智能客服 NLP 系统，覆盖意图识别、实体抽取与对话管理，日均处理百万级请求。",
    color: "var(--c-mint)",
    emoji: "🎯",
  },
];

const tags = [
  { emoji: "🧠", label: "LLM", color: "var(--c-yellow)" },
  { emoji: "🤖", label: "Agent", color: "var(--c-pink)" },
  { emoji: "🔍", label: "RAG", color: "var(--c-blue)" },
  { emoji: "⚡", label: "推理优化", color: "var(--c-mint)" },
  { emoji: "🛠️", label: "MLOps", color: "var(--c-peach)" },
];

function SectionLabel({
  children,
  color = "var(--c-yellow)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-foreground"
      style={{ background: color, boxShadow: "var(--shadow-soft-sm)" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--c-yellow)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--c-pink)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--c-blue)" }}
      />

      <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Top bar */}
        <nav
          className="mb-12 flex items-center justify-between rounded-full border-2 border-foreground bg-card px-5 py-2.5"
          style={{ boxShadow: "var(--shadow-soft-sm)" }}
        >
          <span className="font-display text-sm font-bold text-foreground">
            ✦ mark.dev
          </span>
          <span className="hidden font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground sm:inline">
            AI Engineer · since 2019
          </span>
          <span
            className="rounded-full border-2 border-foreground px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-foreground"
            style={{ background: "var(--c-mint)" }}
          >
            ● 招呼ing
          </span>
        </nav>

        {/* Hero */}
        <section className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[36px] opacity-70 blur-xl"
              style={{ background: "var(--c-pink)" }}
            />
            <div
              className="animate-float relative flex h-32 w-32 items-center justify-center rounded-3xl border-2 border-foreground text-7xl"
              style={{
                background: "var(--c-yellow)",
                boxShadow: "var(--shadow-soft-lg)",
              }}
              role="img"
              aria-label="Mark 的头像"
            >
              <span className="animate-wave inline-block">🧑‍💻</span>
            </div>
          </div>

          <div>
            <SectionLabel color="var(--c-blue)">Hello / 你好</SectionLabel>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              我是{" "}
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded-md"
                  style={{ background: "var(--c-pink)" }}
                />
                <span className="relative z-10">Mark</span>
              </span>{" "}
              <span className="inline-block">👋</span>
            </h1>
          </div>
        </section>

        {/* Intro card */}
        <section
          className="mt-10 rounded-3xl border-2 border-foreground bg-card p-6 sm:p-8"
          style={{ boxShadow: "var(--shadow-soft-lg)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--c-pink)" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--c-yellow)" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--c-mint)" }}
            />
            <span className="ml-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              about.md
            </span>
          </div>

          <p className="mt-5 text-lg leading-relaxed text-card-foreground sm:text-xl">
            一名拥有{" "}
            <mark
              className="rounded-md px-1.5 font-semibold text-foreground"
              style={{ background: "var(--c-yellow)" }}
            >
              5 年经验
            </mark>{" "}
            的{" "}
            <mark
              className="rounded-md px-1.5 font-semibold text-foreground"
              style={{ background: "var(--c-blue)" }}
            >
              AI 应用工程师
            </mark>
            。把前沿大模型能力转化为{" "}
            <mark
              className="rounded-md px-1.5 font-semibold text-foreground"
              style={{ background: "var(--c-mint)" }}
            >
              真实可用、可规模化
            </mark>{" "}
            的产品。擅长 LLM 应用架构、智能体系统设计与生产级工程化落地 ✨
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground px-3.5 py-1.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                style={{
                  background: tag.color,
                  boxShadow: "var(--shadow-soft-sm)",
                }}
              >
                <span>{tag.emoji}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <SectionLabel color="var(--c-peach)">// stats</SectionLabel>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border-2 border-foreground p-5 text-center transition-transform hover:-translate-y-1"
                style={{
                  background: s.color,
                  boxShadow: "var(--shadow-soft)",
                  transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
              >
                <div className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <SectionLabel color="var(--c-lavender)">// skills</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            我的技能栈 🧰
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {skills.map((s) => (
              <article
                key={s.title}
                className="group rounded-3xl border-2 border-foreground bg-card p-6 transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-foreground text-3xl transition-transform group-hover:rotate-6"
                  style={{
                    background: s.color,
                    boxShadow: "var(--shadow-soft-sm)",
                  }}
                >
                  {s.emoji}
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-16">
          <SectionLabel color="var(--c-mint)">// achievements</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            个人业绩 🏆
          </h2>
          <ol className="mt-6 space-y-5">
            {achievements.map((a) => (
              <li
                key={a.year}
                className="grid gap-4 rounded-3xl border-2 border-foreground bg-card p-5 transition-transform hover:-translate-y-1 sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border-2 border-foreground"
                  style={{
                    background: a.color,
                    boxShadow: "var(--shadow-soft-sm)",
                  }}
                >
                  <span className="text-2xl">{a.emoji}</span>
                  <span className="mt-1 font-mono text-xs font-bold text-foreground">
                    {a.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-card-foreground sm:text-xl">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer
          className="mt-16 flex flex-col items-center justify-between gap-3 rounded-3xl border-2 border-foreground p-6 text-center sm:flex-row sm:text-left"
          style={{
            background: "var(--c-yellow)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <p className="font-display text-base font-bold text-foreground">
            想一起做点有趣的 AI 产品？
          </p>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
            © {new Date().getFullYear()} Mark · made with ❤️ & ☕
          </p>
        </footer>
      </div>
    </main>
  );
}
