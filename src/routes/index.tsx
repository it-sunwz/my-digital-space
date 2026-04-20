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
    desc: "GPT / Claude / Gemini · Prompt 工程 · RAG · Fine-tuning",
  },
  {
    emoji: "🤖",
    title: "智能体系统",
    desc: "LangChain · LlamaIndex · 多 Agent 协作 · Tool Use",
  },
  {
    emoji: "⚙️",
    title: "工程化落地",
    desc: "Python · TypeScript · FastAPI · Vector DB · 高并发推理",
  },
  {
    emoji: "📊",
    title: "数据与评测",
    desc: "数据闭环 · 自动化评测 · A/B 实验 · 模型可观测性",
  },
];

const stats = [
  { value: "5+", label: "年 AI 工程经验" },
  { value: "20+", label: "个 AI 产品落地" },
  { value: "1M+", label: "日均请求服务" },
  { value: "30%", label: "推理成本降低" },
];

const achievements = [
  {
    year: "2024",
    title: "企业级 AI 助手平台",
    desc: "主导设计并交付面向 SaaS 客户的多租户 AI 助手平台，支持 RAG 与自定义工具调用，服务上千家企业客户。",
  },
  {
    year: "2023",
    title: "智能体框架开源项目",
    desc: "开源一套轻量级多 Agent 编排框架，GitHub 收获 3k+ Stars，被多个团队用于生产环境。",
  },
  {
    year: "2022",
    title: "推理成本优化方案",
    desc: "通过模型蒸馏、缓存策略与动态路由，将线上 LLM 推理成本降低 30%，年节省成本超百万。",
  },
  {
    year: "2021",
    title: "首个 NLP 产品上线",
    desc: "从 0 到 1 构建智能客服 NLP 系统，覆盖意图识别、实体抽取与对话管理，日均处理百万级请求。",
  },
];

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
        className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-blob-2)" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <div className="group relative mb-8">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "var(--gradient-avatar)" }}
            />
            <div
              className="relative flex h-32 w-32 items-center justify-center rounded-full border border-border bg-card text-7xl shadow-elegant transition-transform duration-500 hover:scale-105 hover:rotate-6"
              role="img"
              aria-label="Mark 的头像"
            >
              <span className="animate-wave inline-block">🧑‍💻</span>
            </div>
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            AI Engineer · 5 Years
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            我是{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-text)" }}
            >
              Mark
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            一名拥有 <span className="text-foreground font-medium">5 年经验</span>的
            <span className="text-foreground font-medium"> AI 应用工程师</span>，
            专注于把前沿的大模型能力转化为真实可用、可规模化的产品 ✨
            <br className="hidden sm:block" />
            擅长 LLM 应用架构、智能体系统设计与生产级工程化落地。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { emoji: "🧠", label: "LLM" },
              { emoji: "🤖", label: "Agent" },
              { emoji: "🔍", label: "RAG" },
              { emoji: "⚡", label: "高性能推理" },
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
        </section>

        {/* Stats */}
        <section className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div
                className="font-display text-4xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mt-24">
          <header className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Skills
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              我的技能栈
            </h2>
          </header>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: "var(--gradient-avatar)" }}
                />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-2xl">
                    {s.emoji}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-24">
          <header className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Achievements
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              个人业绩
            </h2>
          </header>
          <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
            {achievements.map((a) => (
              <li key={a.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background sm:-left-[41px]"
                  style={{ background: "var(--gradient-text)" }}
                />
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-elegant">
                  <div className="mb-1 flex items-baseline gap-3">
                    <span
                      className="font-display text-xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: "var(--gradient-text)" }}
                    >
                      {a.year}
                    </span>
                    <h3 className="text-base font-semibold text-card-foreground">
                      {a.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-24 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mark · Built with curiosity & ☕
        </footer>
      </div>
    </main>
  );
}
