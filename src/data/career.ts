import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export const career = {
  currentRole: {
    company: 'DENTSU SOKEN SHANGHAI',
    title: 'Software Engineer',
    period: 'Jul 2024 – Present',
  },
  experienceIntro: {
    en: 'My work combines enterprise software delivery, Python/SQL data integration, financial-data validation, and recent AI-assisted engineering in a shared UAT environment.',
    ja: '企業向けソフトウェア、Python/SQLによるデータ連携、財務データ検証、共有UAT環境でのAI活用エンジニアリングに携わっています。',
    zh: '我的工作结合企业软件交付、Python/SQL 数据集成、财务数据验证，以及近期在共享 UAT 环境中的 AI 辅助工程实践。',
  } satisfies LocalizedText,
  experienceHighlights: {
    en: [
      'Designed end-to-end validation and regression workflows for connected enterprise planning features.',
      'Used Python/Playwright, browser and network evidence, source inspection, and structured Japanese defect reports.',
      'Kept state-changing actions human-approved while tracing parsing, filtering, routing, and data-correctness failures.',
    ],
    ja: [
      '連携する企業計画機能のエンドツーエンド検証と回帰ワークフローを設計。',
      'Python/Playwright、ブラウザ・ネットワーク証拠、ソース確認、構造化した日本語の不具合報告を活用。',
      '状態を変更する操作は人の承認下に置き、解析・フィルタ・ルーティング・データ整合性の問題を追跡。',
    ],
    zh: [
      '为相互连接的企业规划功能设计端到端验证与回归工作流。',
      '结合 Python/Playwright、浏览器与网络证据、源码检查和结构化日文缺陷报告。',
      '对改变状态的操作保留人工审批，并排查解析、过滤、路由和数据正确性问题。',
    ],
  } satisfies Record<Locale, string[]>,
  education: {
    en: 'University of Leeds · BSc Computer Science, First-Class Honours · 2024; joint undergraduate programme with Southwest Jiaotong University.',
    ja: 'リーズ大学・コンピュータサイエンス学士（First-Class Honours）・2024年。西南交通大学との共同学部課程。',
    zh: '利兹大学计算机科学学士，First-Class Honours，2024 年毕业；与西南交通大学联合本科项目。',
  } satisfies LocalizedText,
  evidence: {
    en: [
      [
        'Enterprise software',
        'C#/.NET applications, integration, testing, and production validation.',
      ],
      [
        'Data and finance',
        'Python/SQL ETL, data quality, reconciliation, and financial workflow validation.',
      ],
      [
        'AI-assisted engineering',
        'Controlled agent support, cross-layer diagnosis, evidence capture, and human review.',
      ],
    ],
    ja: [
      ['企業向けソフトウェア', 'C#/.NETアプリケーション、連携、テスト、運用検証。'],
      ['データと財務', 'Python/SQL ETL、データ品質、照合、財務ワークフロー検証。'],
      [
        'AI活用エンジニアリング',
        '制御されたエージェント支援、レイヤー横断診断、証拠取得、人による確認。',
      ],
    ],
    zh: [
      ['企业软件', 'C#/.NET 应用、系统集成、测试与生产验证。'],
      ['数据与金融', 'Python/SQL ETL、数据质量、对账和财务流程验证。'],
      ['AI 辅助工程', '受控的 Agent 辅助、跨层诊断、证据收集与人工复核。'],
    ],
  } satisfies Record<Locale, [string, string][]>,
} as const;
