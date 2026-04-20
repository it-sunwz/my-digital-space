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
    color: "var(--brutal-yellow)",
  },
  {
    emoji: "🤖",
    title: "智能体系统",
    desc: "LangChain · LlamaIndex · 多 Agent 协作 · Tool Use",
    color: "var(--brutal-pink)",
  },
  {
    emoji: "⚙️",
    title: "工程化落地",
    desc: "Python · TypeScript · FastAPI · Vector DB · 高并发推理",
    color: "var(--brutal-cyan)",
  },
  {
    emoji: "📊",
    title: "数据与评测",
    desc: "数据闭环 · 自动化评测 · A/B 实验 · 模型可观测性",
    color: "var(--brutal-lime)",
  },
];

const stats = [
  { value: "5+", label: "年 AI 工程经验", color: "var(--brutal-yellow)" },
  { value: "20+", label: "个 AI 产品落地", color: "var(--brutal-pink)" },
  { value: "1M+", label: "日均请求服务", color: "var(--brutal-cyan)" },
  { value: "30%", label: "推理成本降低", color: "var(--brutal-lime)" },
];

const achievements = [
  {
    year: "2024",
    title: "企业级 AI 助手平台",
    desc: "主导设计并交付面向 SaaS 客户的多租户 AI 助手平台，支持 RAG 与自定义工具调用，服务上千家企业客户。",
    color: "var(--brutal-pink)",
  },
  {
    year: "2023",
    title: "智能体框架开源项目",
    desc: "开源一套轻量级多 Agent 编排框架，GitHub 收获 3k+ Stars，被多个团队用于生产环境。",
    color: "var(--brutal-yellow)",
  },
  {
    year: "2022",
    title: "推理成本优化方案",
    desc: "通过模型蒸馏、缓存策略与动态路由，将线上 LLM 推理成本降低 30%，年节省成本超百万。",
    color: "var(--brutal-cyan)",
  },
  {
    year: "2021",
    title: "首个 NLP 产品上线",
    desc: "从 0 到 1 构建智能客服 NLP 系统，覆盖意图识别、实体抽取与对话管理，日均处理百万级请求。",
    color: "var(--brutal-lime)",
  },
];

const tags = [
  { emoji: "🧠", label: "LLM", color: "var(--brutal-yellow)" },
  { emoji: "🤖", label: "AGENT", color: "var(--brutal-pink)" },
  { emoji: "🔍", label: "RAG", color: "var(--brutal-cyan)" },
  { emoji: "⚡", label: "推理优化", color: "var(--brutal-lime)" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block border-2 border-foreground bg-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-background"
      style={{ boxShadow: "var(--shadow-brutal-sm)" }}
    >
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Top bar */}
        <div className="mb-12 flex items-center justify-between border-2 border-foreground bg-card px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest"
          style={{ boxShadow: "var(--shadow-brutal-sm)" }}
        >
          <span>★ MARK.DEV</span>
          <span className="hidden sm:inline">// AI ENGINEER · EST. 2019</span>
          <span className="sm:hidden">// 2019</span>
        </div>

        {/* Hero */}
        <section className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
          {/* Avatar */}
          <div
            className="flex h-32 w-32 items-center justify-center border-4 border-foreground bg-[var(--brutal-yellow)] text-7xl"
            style={{ boxShadow: "var(--shadow-brutal-lg)" }}
            role="img"
            aria-label="Mark 的头像"
          >
            <span className="animate-wave inline-block">🧑‍💻</span>
          </div>

          <div>
            <SectionLabel>Hello / 你好</SectionLabel>
            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              我是{" "}
              <span
                className="inline-block border-4 border-foreground bg-[var(--brutal-pink)] px-3 py-1"
                style={{ boxShadow: "var(--shadow-brutal)" }}
              >
                MARK
              </span>
            </h1>
          </div>
        </section>

        {/* Intro card */}
        <section
          className="mt-10 border-4 border-foreground bg-card p-6 sm:p-8"
          style={{ boxShadow: "var(--shadow-brutal-lg)" }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
            // ABOUT.txt
          </p>
          <p className="mt-4 text-lg leading-relaxed text-card-foreground sm:text-xl">
            一名拥有{" "}
            <mark className="bg-[var(--brutal-yellow)] px-1.5 font-bold text-foreground">
              5 年经验
            </mark>{" "}
            的{" "}
            <mark className="bg-[var(--brutal-cyan)] px-1.5 font-bold text-foreground">
              AI 应用工程师
            </mark>
            。 把前沿大模型能力转化为真实可用、可规模化的产品。 擅长 LLM 应用架构、智能体系统设计与生产级工程化落地。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 border-2 border-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-transform hover:-translate-y-0.5 hover:translate-x-0"
                style={{
                  background: tag.color,
                  boxShadow: "var(--shadow-brutal-sm)",
                }}
              >
                <span className="text-base">{tag.emoji}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <SectionLabel>// Stats</SectionLabel>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-4 border-foreground p-5 text-center transition-transform hover:-translate-y-1 hover:translate-x-0"
                style={{
                  background: s.color,
                  boxShadow: "var(--shadow-brutal)",
                }}
              >
                <div className="font-display text-4xl text-foreground sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <SectionLabel>// Skills</SectionLabel>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            技能栈
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {skills.map((s) => (
              <article
                key={s.title}
                className="border-4 border-foreground bg-card p-6 transition-transform hover:-translate-y-1 hover:translate-x-0"
                style={{ boxShadow: "var(--shadow-brutal)" }}
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center border-2 border-foreground text-3xl"
                  style={{
                    background: s.color,
                    boxShadow: "var(--shadow-brutal-sm)",
                  }}
                >
                  {s.emoji}
                </div>
                <h3 className="font-display text-xl uppercase text-card-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-16">
          <SectionLabel>// Achievements</SectionLabel>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            个人业绩
          </h2>
          <ol className="mt-6 space-y-5">
            {achievements.map((a) => (
              <li
                key={a.year}
                className="grid gap-4 border-4 border-foreground bg-card p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
                style={{ boxShadow: "var(--shadow-brutal)" }}
              >
                <div
                  className="flex h-16 w-20 items-center justify-center border-2 border-foreground font-display text-2xl text-foreground"
                  style={{
                    background: a.color,
                    boxShadow: "var(--shadow-brutal-sm)",
                  }}
                >
                  {a.year}
                </div>
                <div>
                  <h3 className="font-display text-lg uppercase text-card-foreground sm:text-xl">
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
          className="mt-16 border-4 border-foreground bg-foreground p-5 text-center font-mono text-xs font-bold uppercase tracking-widest text-background"
          style={{ boxShadow: "var(--shadow-brutal)" }}
        >
          © {new Date().getFullYear()} MARK · BUILT WITH CURIOSITY & ☕ · ALL RIGHTS RESERVED
        </footer>
      </div>
    </main>
  );
}
