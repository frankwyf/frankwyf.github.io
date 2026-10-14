import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export const career = {
  currentRole: {
    company: 'DENTSU SOKEN SHANGHAI',
    title: 'Software Engineer',
    period: 'Jul 2024 – Present',
    growth: {
      en: 'Joined at an R1 level and progressed to R2 after the first year; the external title remains Software Engineer.',
      ja: 'R1レベルで入社し、1年後にR2へ昇格。対外的な職種名はSoftware Engineerです。',
      zh: '以 R1 级别加入，约一年后晋升至 R2；对外职位仍为 Software Engineer。',
    } satisfies LocalizedText,
  },
  positioning: {
    en: 'Software & Data Engineer transitioning into Applied AI Engineering.',
    ja: 'エンタープライズソフトウェアとデータを基盤に、応用AIへ進むソフトウェア・データエンジニア。',
    zh: '以企业软件与数据工程为基础，正在走向应用 AI 的软件与数据工程师。',
  } satisfies LocalizedText,
  experienceIntro: {
    en: 'My professional work spans enterprise software delivery, Python/SQL data integration, financial-data validation, and applied ML, alongside current research into enterprise workflow automation and AI feasibility.',
    ja: '企業向けソフトウェア、Python/SQLデータ連携、財務データ検証、実務MLに携わり、現在は企業ワークフローの自動化やAI活用の可能性も調査しています。',
    zh: '我的职业经历涵盖企业软件交付、Python/SQL 数据集成、财务数据验证和应用机器学习；近期也在研究企业工作流自动化与 AI 应用的可行性。',
  } satisfies LocalizedText,
  experienceHighlights: {
    en: [
      'Independently delivered the technical implementation, testing, and documentation for a Dalian Ryobi Python add-on that the customer deployed and continues to use; I provided partial follow-up maintenance, while a colleague handled on-site communication.',
      'Contributed model construction, data preparation, and validation to a B2B credit-scorecard POC, then aligned my assigned component for production integration; the resulting model is now used in the customer platform.',
      'Built Python/SQL data integration for PLM-to-SQL Server BOM workflows and validated it in Azure; this was environment validation, not an Azure production deployment.',
    ],
    ja: [
      'Dalian Ryobi向けPythonアドオンの技術実装、テスト、文書作成、引き継ぎを独立して担当。顧客が導入して継続利用しており、納品後の保守も一部担当しました。現地対応は同僚が担いました。',
      'B2B与信スコアカードPoCでモデル構築、データ準備、検証に貢献し、その後、担当コンポーネントの本番連携を調整。モデルは顧客プラットフォームで利用されています。',
      'PLMからSQL ServerへのBOMデータ連携にPython/SQLを用い、Azure環境で検証しました。Azureへの本番デプロイを示すものではありません。',
    ],
    zh: [
      '独立完成 Dalian Ryobi Python 插件的技术实现、测试、文档与交接；客户已部署并持续使用，我也承担部分后续维护。现场沟通由同事负责。',
      '参与 B2B 信用评分 POC 的模型构建、数据准备与验证，随后协调本人负责的组件进行生产集成；该模型目前已在客户平台中使用。',
      '使用 Python/SQL 将 PLM 流程中的 BOM 数据集成到 SQL Server，并在 Azure 环境验证；这不代表部署或运营了 Azure 生产服务。',
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
        'VB.NET maintenance and feature development, plus Java/Spring Boot enterprise project experience.',
      ],
      [
        'Data and finance',
        'Python/SQL ETL, data quality, reconciliation, credit-risk workflows, and financial validation.',
      ],
      [
        'Applied AI transition',
        'Professional ML POC, ongoing workflow-feasibility research, and private Applied AI portfolio systems.',
      ],
    ],
    ja: [
      ['企業向けソフトウェア', 'VB.NETによる保守・機能開発と、Java/Spring Bootの企業案件経験。'],
      ['データと財務', 'Python/SQL ETL、データ品質、照合、与信ワークフロー、財務データ検証。'],
      [
        '応用AIへの移行',
        '実務ML PoC、進行中の業務ワークフロー調査、非公開の応用AIポートフォリオ。',
      ],
    ],
    zh: [
      ['企业软件', 'VB.NET 系统维护与功能开发，以及 Java/Spring Boot 企业项目经验。'],
      ['数据与金融', 'Python/SQL ETL、数据质量、对账、信用风险流程与财务数据验证。'],
      ['走向应用 AI', '专业 ML POC、进行中的工作流可行性研究，以及私有源码应用 AI 个人项目。'],
    ],
  } satisfies Record<Locale, [string, string][]>,
} as const;
