import type { Locale } from '../i18n';
import { localizedPath } from '../i18n';

type LocalizedText = Record<Locale, string>;

export interface Project {
  slug: string;
  title: string;
  summary: LocalizedText;
  outcome: LocalizedText;
  kind: 'professional' | 'flagship' | 'engineering';
  maturity: 'delivered' | 'poc' | 'ai-assisted' | 'portfolio-system' | 'public-source';
  visibility: 'case-study-only' | 'private-source' | 'public-source';
  technologies: string[];
  client?: string;
  period?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'nx-python-add-on-delivery',
    title: 'End-to-end NX Python engineering add-on delivery',
    summary: {
      en: 'Independent customer delivery for Dalian Ryobi, from technical investigation and proposal through implementation, documentation, handoff, and maintenance.',
      ja: 'Dalian Ryobi向けに、技術調査・提案から実装、文書化、納品、保守までを一貫して担当したNX Pythonアドオン。',
      zh: '为 Dalian Ryobi 独立交付 NX Python 工程插件，覆盖技术调查、提案、实现、文档、交付与维护。',
    },
    outcome: {
      en: 'Shows scoped ownership, customer communication, and a complete engineering delivery loop without invented impact metrics.',
      ja: '推測のない成果指標で、範囲を持った所有、顧客との技術コミュニケーション、一貫したデリバリーを示します。',
      zh: '在不虚构影响指标的前提下，展示明确范围内的所有权、客户沟通和完整工程交付闭环。',
    },
    kind: 'professional',
    maturity: 'delivered',
    visibility: 'case-study-only',
    client: 'Dalian Ryobi',
    period: 'Sep–Oct 2025',
    technologies: ['Python', 'NX add-on', 'Technical proposal', 'Customer delivery'],
  },
  {
    slug: 'b2b-credit-management-ml-poc',
    title: 'B2B credit-management ML proof of concept',
    summary: {
      en: 'Professional POC contribution for Canon Optics China covering model construction, part of data preprocessing, technical validation, and architecture discussion.',
      ja: 'Canon Optics China向けB2B与信管理ML PoCで、モデル構築、データ前処理の一部、技術検証、アーキテクチャ議論に貢献。',
      zh: '参与 Canon Optics China 的 B2B 信用管理 ML POC，覆盖模型构建、部分数据预处理、技术验证与架构讨论。',
    },
    outcome: {
      en: 'Provides professional Applied ML and financial-data evidence while remaining explicitly a proof of concept, not a production deployment.',
      ja: '本番展開ではなくPoCであることを明確にした、実務での応用MLと財務データ活用の証拠です。',
      zh: '明确保持 POC 边界，展示专业 Applied ML 与金融数据实践，而非生产部署经历。',
    },
    kind: 'professional',
    maturity: 'poc',
    visibility: 'case-study-only',
    client: 'Canon Optics China',
    period: 'Aug 2025 · Nov 2025 · Mar–Jun 2026',
    technologies: ['Python', 'Scorecard methodology', 'Data preprocessing', 'Technical validation'],
  },
  {
    slug: 'enterprise-ai-assisted-engineering',
    title: 'AI-assisted enterprise engineering',
    summary: {
      en: 'End-to-end UAT and engineering automation for connected enterprise planning workflows, combining Python/Playwright, browser and network evidence, AI-assisted regression work, and human verification.',
      ja: '企業の計画管理ワークフローを対象に、Python/Playwright、ブラウザ・ネットワークの証拠、AIを活用した回帰作業、人による検証を組み合わせたエンドツーエンドUAT。',
      zh: '面向企业规划流程的端到端 UAT 与工程自动化，结合 Python/Playwright、浏览器与网络证据、AI 辅助回归和人工验证。',
    },
    outcome: {
      en: 'Shows controlled AI-assisted engineering, cross-layer debugging, and safe handling of shared operational data.',
      ja: 'AIを活用した制御可能なエンジニアリング、レイヤー横断のデバッグ、共有業務データの安全な扱いを示します。',
      zh: '展示受控的 AI 辅助工程、跨层调试和共享业务数据的安全处理。',
    },
    kind: 'professional',
    maturity: 'ai-assisted',
    visibility: 'case-study-only',
    technologies: ['Python', 'Playwright', 'UAT', 'Debugging', 'AI-assisted engineering'],
  },
  {
    slug: 'ai-revenue-credit-operations',
    title: 'AI Revenue & Credit Operations Platform',
    summary: {
      en: 'A multi-tenant B2B operations platform combining deterministic finance, grounded contract retrieval, controlled tools, human approval, and audit.',
      ja: '決定論的な財務計算、根拠付き契約検索、制御されたツール、人による承認、監査を統合したマルチテナントB2B業務基盤。',
      zh: '结合确定性财务计算、有依据的合同检索、受控工具、人工审批与审计的多租户 B2B 运营平台。',
    },
    outcome: {
      en: 'Shows how Applied AI can operate inside financial, tenant, authorization, and approval boundaries.',
      ja: '応用AIを財務、テナント、権限、承認の境界内で運用する設計を示します。',
      zh: '展示应用 AI 如何在财务、租户、权限和审批边界内运行。',
    },
    kind: 'flagship',
    maturity: 'portfolio-system',
    visibility: 'private-source',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'RAG',
      'RBAC',
      'Evaluation',
      'AWS',
    ],
  },
  {
    slug: 'openscorecard',
    title: 'OpenScorecard',
    summary: {
      en: 'A reproducible B2B credit decisioning and model-governance lab using synthetic SME portfolios, temporal validation, explainable scorecards, and policy separation.',
      ja: '合成SMEポートフォリオ、時系列検証、説明可能なスコアカード、ポリシー分離を備えたB2B信用判断・モデルガバナンス環境。',
      zh: '使用合成中小企业组合、时间验证、可解释评分卡和政策分离的 B2B 信用决策与模型治理实验室。',
    },
    outcome: {
      en: 'Demonstrates leakage control, out-of-time evidence, model governance, and reviewable credit policy.',
      ja: 'リーケージ制御、時点外評価、モデルガバナンス、レビュー可能な信用ポリシーを示します。',
      zh: '展示泄漏控制、OOT 证据、模型治理和可复核的信用政策。',
    },
    kind: 'flagship',
    maturity: 'portfolio-system',
    visibility: 'private-source',
    technologies: [
      'Python',
      'FastAPI',
      'Scorecard',
      'OOT Validation',
      'Model Governance',
      'Synthetic Data',
    ],
  },
  {
    slug: 'yolo-region-mapping',
    title: 'YOLO Region Mapping',
    summary: {
      en: 'Region-aware computer-vision analytics with polygon zones, coordinate normalization, and machine-readable events.',
      ja: 'ポリゴン領域、座標正規化、機械可読イベントを備えた領域対応コンピュータビジョン分析。',
      zh: '支持多边形区域、坐标归一化和机器可读事件的区域感知计算机视觉分析。',
    },
    outcome: {
      en: 'Turns detections into operational spatial signals.',
      ja: '検出結果を運用可能な空間シグナルへ変換します。',
      zh: '把检测结果转化为可运营的空间信号。',
    },
    kind: 'engineering',
    maturity: 'public-source',
    visibility: 'public-source',
    technologies: ['Python', 'YOLO', 'Computer Vision'],
    url: 'https://github.com/frankwyf/yolo-heatmap',
  },
  {
    slug: 'heat-simulation',
    title: 'Heat Simulation & Optimization',
    summary: {
      en: 'Reproducible simulation workflows comparing genetic algorithms, particle swarm optimization, and simulated annealing.',
      ja: '遺伝的アルゴリズム、粒子群最適化、焼きなまし法を比較する再現可能なシミュレーション。',
      zh: '对比遗传算法、粒子群优化和模拟退火的可复现仿真工作流。',
    },
    outcome: {
      en: 'Connects numerical experimentation with structured artifacts and repeatable evaluation.',
      ja: '数値実験を構造化成果物と再現可能な評価へ接続します。',
      zh: '把数值实验连接到结构化产物和可重复评估。',
    },
    kind: 'engineering',
    maturity: 'public-source',
    visibility: 'public-source',
    technologies: ['Python', 'Simulation', 'Optimization', 'Streamlit'],
    url: 'https://github.com/frankwyf/heat_simulation',
  },
  {
    slug: 'python-search-tooling',
    title: 'Python Search & Data Tooling',
    summary: {
      en: 'Crawler, inverted-index search, API, analytics, exports, logging, and regression-oriented tooling.',
      ja: 'クローラ、転置インデックス検索、API、分析、エクスポート、ログ、回帰テストを備えたツール群。',
      zh: '包含爬虫、倒排索引搜索、API、分析、导出、日志和回归测试的数据工具。',
    },
    outcome: {
      en: 'Shows an end-to-end path from acquisition to searchable, testable data products.',
      ja: 'データ取得から検索可能でテスト可能なプロダクトまでの流れを示します。',
      zh: '展示从数据获取到可搜索、可测试数据产品的完整路径。',
    },
    kind: 'engineering',
    maturity: 'public-source',
    visibility: 'public-source',
    technologies: ['Python', 'Search', 'API', 'Data Processing'],
    url: 'https://github.com/frankwyf/web_crawling',
  },
  {
    slug: 'gym-product',
    title: 'Gym Product Modernization',
    summary: {
      en: 'A multi-client business application spanning Spring Boot, Vue, and a WeChat Mini Program.',
      ja: 'Spring Boot、Vue、WeChatミニプログラムで構成されたマルチクライアント業務アプリケーション。',
      zh: '横跨 Spring Boot、Vue 和微信小程序的多客户端业务应用。',
    },
    outcome: {
      en: 'Demonstrates product modernization across backend, web, and mobile surfaces.',
      ja: 'バックエンド、Web、モバイルを横断するプロダクト近代化を示します。',
      zh: '展示后端、Web 和移动端协同的产品现代化。',
    },
    kind: 'engineering',
    maturity: 'public-source',
    visibility: 'public-source',
    technologies: ['Java', 'Spring Boot', 'Vue', 'WeChat Mini Program'],
    url: 'https://github.com/frankwyf/Gym_Product',
  },
  {
    slug: 'qt-responsive-layout',
    title: 'Qt Responsive Layout',
    summary: {
      en: 'A C++17 responsive-layout engine that brings media-query-like behavior to native Qt Widgets.',
      ja: 'ネイティブQt Widgetsにメディアクエリ風の動作を導入するC++17レスポンシブレイアウトエンジン。',
      zh: '为原生 Qt Widgets 带来类似媒体查询行为的 C++17 响应式布局引擎。',
    },
    outcome: {
      en: 'Packages native UI behavior as a reusable component instead of page-specific logic.',
      ja: 'ネイティブUIの挙動を画面固有ロジックではなく再利用可能な部品として提供します。',
      zh: '把原生 UI 行为封装成可复用组件，而不是页面专用逻辑。',
    },
    kind: 'engineering',
    maturity: 'public-source',
    visibility: 'public-source',
    technologies: ['C++17', 'Qt Widgets', 'CMake'],
    url: 'https://github.com/frankwyf/qt-responsive-layout',
  },
];

export function projectHref(project: Project, locale: Locale): string {
  if (project.kind !== 'engineering') return localizedPath(locale, `projects/${project.slug}`);
  return project.url ?? localizedPath(locale, 'projects');
}
