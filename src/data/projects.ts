import type { Locale } from '../i18n';
import { localizedPath } from '../i18n';

type LocalizedText = Record<Locale, string>;

export interface Project {
  slug: string;
  title: string;
  summary: LocalizedText;
  outcome: LocalizedText;
  kind: 'professional' | 'flagship' | 'engineering';
  maturity:
    | 'delivered'
    | 'poc'
    | 'production-integration'
    | 'ai-assisted'
    | 'portfolio-system'
    | 'public-source'
    | 'in-progress'
    | 'research';
  visibility: 'case-study-only' | 'private-source' | 'public-source';
  technologies: string[];
  localizedTitle?: LocalizedText;
  client?: string;
  period?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'nx-python-add-on-delivery',
    title: 'Python engineering add-on for Siemens NX',
    localizedTitle: {
      en: 'Python engineering add-on for Siemens NX',
      ja: 'Siemens NX向けPythonエンジニアリングアドオン',
      zh: '用于 Siemens NX 的 Python 工程插件',
    },
    summary: {
      en: 'A rule-based Python tool for NC instruction checks and schedule-file generation, deployed and still used by Dalian Ryobi.',
      ja: 'NC命令のルール検証と日程ファイル生成を行うPythonツール。Dalian Ryobiが導入し、現在も利用しています。',
      zh: '用于按规则检查 NC 指令并生成日程文件的 Python 工具，已由 Dalian Ryobi 部署并持续使用。',
    },
    outcome: {
      en: 'I independently delivered the technical implementation, testing, user documentation, and handoff, then provided partial follow-up maintenance; a colleague handled on-site communication.',
      ja: '技術実装、テスト、ユーザー文書、引き継ぎを独立して担当し、納品後の保守も一部行いました。現地での顧客対応は同僚が担いました。',
      zh: '我独立完成技术实现、测试、用户文档和交接，并承担部分后续维护；现场客户沟通由同事负责。',
    },
    kind: 'professional',
    maturity: 'delivered',
    visibility: 'case-study-only',
    client: 'Dalian Ryobi',
    period: 'Sep–Oct 2025',
    technologies: ['Python', 'Siemens NX', 'Rule-based validation', 'Windows executable'],
  },
  {
    slug: 'b2b-credit-management-ml-poc',
    title: 'B2B credit scorecard: POC and production integration',
    localizedTitle: {
      en: 'B2B credit scorecard: POC and production integration',
      ja: 'B2B与信スコアカード：PoCと本番連携',
      zh: 'B2B 信用评分模型：POC 与生产集成',
    },
    summary: {
      en: 'A 2025 professional POC followed by production integration of my assigned model component in 2026; the resulting model is now used in the customer’s platform.',
      ja: '2025年の実務PoCに続き、2026年に担当モデルコンポーネントを本番連携。モデルは顧客の業務プラットフォームで現在利用されています。',
      zh: '2025 年专业 POC 后，于 2026 年将本人负责的模型组件与客户平台进行生产集成；该模型目前已在客户平台中使用。',
    },
    outcome: {
      en: 'Shows model work from POC through assigned-component integration without claiming independent deployment or ownership of the full production platform.',
      ja: 'PoCから担当コンポーネントの連携までを示し、単独でのデプロイや本番プラットフォーム全体の所有は主張しません。',
      zh: '展示从 POC 到负责组件集成的经历，但不声称独立部署或拥有完整生产平台。',
    },
    kind: 'professional',
    maturity: 'production-integration',
    visibility: 'case-study-only',
    client: 'Canon Optics China',
    period: 'Aug–Nov 2025 · Mar–Jun 2026',
    technologies: ['Python', 'Scorecard methodology', 'Data preprocessing', 'Technical validation'],
  },
  {
    slug: 'enterprise-ai-assisted-engineering',
    title: 'Enterprise planning-system UAT assignment',
    localizedTitle: {
      en: 'Enterprise planning-system UAT assignment',
      ja: '企業計画システムのUAT業務',
      zh: '企业计划系统 UAT 工作',
    },
    summary: {
      en: 'An ongoing project-level UAT assignment. My individual scope, tools, defect work, and outcomes are not yet confirmed and are not claimed here.',
      ja: '進行中のプロジェクトレベルのUAT業務です。個人の担当範囲、ツール、不具合対応、成果は未確認のため、ここでは主張しません。',
      zh: '进行中的项目级 UAT 工作。本人具体职责、工具、缺陷处理和结果尚未确认，因此不在此作具体声明。',
    },
    outcome: {
      en: 'Kept separate from delivered work; this is not presented as a completed AI-agent or test-automation system.',
      ja: '納品済みの実務とは分けて記載し、完成したAIエージェントやテスト自動化システムとしては紹介しません。',
      zh: '与已交付工作分开列示；不将其描述为已完成的 AI Agent 或测试自动化系统。',
    },
    kind: 'professional',
    maturity: 'in-progress',
    visibility: 'case-study-only',
    technologies: ['Enterprise planning system', 'UAT (project-level)'],
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
      en: 'A multi-client gym management platform with Spring Boot business and admin backends, a Vue admin panel, a React Native mobile app, and a WeChat Mini Program.',
      ja: 'Spring Bootの業務・管理バックエンド、Vue管理画面、React Nativeアプリ、WeChatミニプログラムで構成されたジム管理プラットフォーム。',
      zh: '多客户端健身房管理平台，包含 Spring Boot 业务与管理后端、Vue 管理面板、React Native 移动应用和微信小程序。',
    },
    outcome: {
      en: 'Shows backend integration across web and mobile client surfaces.',
      ja: 'Webとモバイルの各クライアントを支えるバックエンド連携を示します。',
      zh: '展示面向 Web 与移动客户端的后端集成。',
    },
    kind: 'engineering',
    maturity: 'public-source',
    visibility: 'public-source',
    technologies: ['Java', 'Spring Boot', 'Vue', 'WeChat Mini Program'],
    url: 'https://github.com/frankwyf/Gym_Product',
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
