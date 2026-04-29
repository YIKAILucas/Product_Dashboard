const ROLE_OPTIONS = [
  { id: "full", label: "全量视图", seed: "project-director", cue: "全局" },
  { id: "product", label: "产品视图", seed: "product-manager", cue: "产品" },
  { id: "uiux", label: "UI / UX 视图", seed: "ux-designer", cue: "设计" },
  { id: "frontend", label: "前端视图", seed: "frontend-engineer", cue: "前端" },
  { id: "backend", label: "后端视图", seed: "backend-engineer", cue: "后端" },
  { id: "algorithm", label: "算法视图", seed: "algorithm-engineer", cue: "算法" },
  { id: "qa", label: "测试视图", seed: "qa-engineer", cue: "测试" },
  { id: "management", label: "管理/评审视图", seed: "review-lead", cue: "评审" },
  { id: "custom", label: "自定义视图", seed: "custom-user", cue: "自定" },
];

const PAGE_STATUS_OPTIONS = {
  confirmed: "已确定",
  reviewed: "已评审",
  pending_review: "待评审",
  incomplete: "待完善",
};

const SECTION_META = [
  { key: "focus", title: "当前角色关注重点", anchor: "focus" },
  { key: "modules", title: "页面区域", anchor: "modules" },
  { key: "designs", title: "设计稿", anchor: "designs" },
  { key: "apis", title: "接口", anchor: "apis" },
  { key: "resources", title: "资源", anchor: "resources" },
  { key: "details", title: "折叠详情区", anchor: "details" },
];

const BASE_VIEW_LAYOUT = {
  product: {
    focus: ["goals", "scope", "structure"],
    modules: ["header_module", "cards_module", "info_module"],
    designs: ["design_main"],
    apis: ["api_template"],
    resources: [],
    details: ["rules", "acceptance", "risks", "states"],
  },
  uiux: {
    focus: ["structure", "goals"],
    modules: ["header_module", "cards_module", "info_module"],
    designs: ["design_main", "design_cards", "design_info"],
    apis: ["api_template"],
    resources: [],
    details: ["states", "fields", "rules", "acceptance"],
  },
  frontend: {
    focus: ["structure", "flow"],
    modules: ["header_module", "cards_module", "info_module"],
    designs: ["design_main", "design_cards", "design_info"],
    apis: ["api_template"],
    resources: ["mock_data"],
    details: ["fields", "states", "acceptance", "rules"],
  },
  backend: {
    focus: ["goals", "flow"],
    modules: ["header_module", "cards_module", "info_module"],
    designs: [],
    apis: ["api_template"],
    resources: ["mock_data"],
    details: ["fields", "rules", "acceptance", "states"],
  },
  algorithm: {
    focus: ["goals", "flow", "structure"],
    modules: ["header_module", "cards_module", "info_module"],
    designs: [],
    apis: ["api_template"],
    resources: ["mock_data"],
    details: ["fields", "rules", "states", "risks", "acceptance"],
  },
  qa: {
    focus: ["flow", "structure"],
    modules: ["header_module", "cards_module", "info_module"],
    designs: [],
    apis: ["api_template"],
    resources: ["mock_data"],
    details: ["rules", "states", "acceptance", "fields"],
  },
  management: {
    focus: ["goals", "structure"],
    modules: ["header_module", "cards_module"],
    designs: ["design_main"],
    apis: ["api_template"],
    resources: [],
    details: ["acceptance", "risks"],
  },
};

const STORAGE_KEY = "gse-workbench-custom-views-v1";
const FIELD_COLUMNS = [
  { key: "area", label: "所属区域" },
  { key: "name", label: "字段名" },
  { key: "label", label: "中文名" },
  { key: "type", label: "类型" },
  { key: "unit", label: "单位" },
  { key: "required", label: "必填" },
  { key: "source", label: "来源" },
  { key: "example", label: "示例" },
  { key: "display", label: "展示规则" },
  { key: "validation", label: "校验规则" },
  { key: "fallback", label: "兜底" },
];

const deepClone = (value) => JSON.parse(JSON.stringify(value));
const buildViews = () => deepClone(BASE_VIEW_LAYOUT);

const WORKSPACE_MOCK_MARKDOWN = `### 1. 集中式光伏上网
光+电网
### 2. 光储并网电站
光+储+电网
### 3. 风光储氢氨醇一体化
风+光+储+氢氨醇+电网
### 4. 工商业源网荷储一体化
光+储+负荷+电网
### 5. 离网光储电站
光+储+负荷
### 6. 光储一体化AIDC
光伏 + 储能 + 电网 + 算力中心负荷
### 7. 光储充一体站
光+储+充电桩+电网
### 8. 工业柔性负荷园区
光+储+电网+工业负荷`;

const EXPLORE_MOCK_MARKDOWN = `# 预制模板

## 模板池
- 工业园区光储充一体化项目
- 海岛微电网风光储柴协同项目
- 算力中心源网荷储协同项目
- 绿电制氢示范项目
- 风光储荷一体化零碳园区项目
- 光伏+储能+柔性负荷工商业项目

## 页面布局草案

第一行
1. 工商业光储项目
2. 园区级源网荷储一体化项目
3. 海岛 / 离网微电网项目

第二行
1. 风光储充项目
2. 算力中心源网荷储项目
3. 绿电制氢 / 氢氨醇耦合项目

## 关键结果口径
- 关键结果不统一固定，按场景展示“该类电站最关心的结果”
- 每个模板默认展示 2 个关键结果
- 指标优先选择决策指标，而不是泛指标

## icon 选项

### 发电侧
- 光伏
- 风机
- 柴油机

### 负荷侧
- 算力中心
- 充电桩
- 工厂
- 商场
- 氢氨醇

### 储能侧
- 电池储能
- 储氢
- 储热
- 储冷

## mode 选项
- Utility-Scale：公用事业级 / 大型集中式
- C&I：工商业
- Microgrid：微电网
- Off-Grid：离网型
- Offshore：海上型 / 海洋场
- Integrated Energy：综合能源
- VPP：虚拟电厂
- PtX：电转 X / 绿电转化
- Industrial Hub：工业枢纽 / 工业能源中心
- Campus Energy：园区能源

## 特性 Tag 选项
- AI 调度
- 电力交易
- 削峰填谷
- 需求响应
- 多能协同
- 高可靠性

# 案例

下面案例改造成更适合前端直接读取的结构。每个案例统一包含：
- id
- title
- alias
- mode
- description
- metrics
- icons
- tags

\`\`\`json
[
  {
    "id": "ci-flexible-pv-storage",
    "title": "光伏+储能+柔性负荷工商业项目",
    "alias": "工商业柔性光储项目",
    "mode": ["C&I"],
    "description": "面向工商业用户侧场景，结合分时电价、负荷特征与光伏自发自用需求，配置分布式光伏与储能系统，实现峰谷套利、需量管理和综合用电成本优化。",
    "metrics": [
      { "key": "self_consumption_ratio", "label": "自发自用率", "value": 82, "unit": "%" },
      { "key": "lcoe", "label": "LCOE", "value": 0.41, "unit": "元/kWh" }
    ],
    "icons": ["光伏", "电池储能", "工厂"],
    "tags": ["AI 调度", "削峰填谷", "需求响应"]
  },
  {
    "id": "zero-carbon-campus-integrated",
    "title": "风光储荷一体化零碳园区项目",
    "alias": "园区级源网荷储一体化项目",
    "mode": ["Campus Energy", "Integrated Energy"],
    "description": "面向工业园区、产业园和综合园区场景，统筹光伏、风电、储能、电网与园区负荷，通过源网荷储协同优化提升绿电消纳能力、降低综合能源成本并增强供能可靠性。",
    "metrics": [
      { "key": "green_power_ratio", "label": "绿电占比", "value": 76, "unit": "%" },
      { "key": "carbon_reduction", "label": "碳减排量", "value": 18.6, "unit": "万吨/年" }
    ],
    "icons": ["光伏", "风机", "电池储能", "工厂"],
    "tags": ["多能协同", "AI 调度", "高可靠性"]
  },
  {
    "id": "island-microgrid-wind-pv-storage-diesel",
    "title": "海岛微电网风光储柴协同项目",
    "alias": "海岛 / 离网微电网项目",
    "mode": ["Microgrid", "Off-Grid"],
    "description": "面向海岛和离网供电场景，通过风、光、储、柴协同配置构建高可靠微电网系统，在弱网或孤网条件下保障关键负荷连续供电并兼顾系统经济性。",
    "metrics": [
      { "key": "critical_load_supply_ratio", "label": "关键负荷保障率", "value": 99.95, "unit": "%" },
      { "key": "lcoe", "label": "LCOE", "value": 0.68, "unit": "元/kWh" }
    ],
    "icons": ["光伏", "风机", "柴油机", "电池储能"],
    "tags": ["多能协同", "高可靠性", "AI 调度"]
  },
  {
    "id": "aidc-source-grid-load-storage",
    "title": "算力中心源网荷储协同项目",
    "alias": "算力中心源网荷储项目",
    "mode": ["Industrial Hub", "Integrated Energy"],
    "description": "面向 AIDC 算力中心等高可靠供电场景，协同配置风电、光伏、储能、电网与算力负荷，兼顾供电安全、绿电占比和综合用能成本，支撑新型算力基础设施建设。",
    "metrics": [
      { "key": "green_power_ratio", "label": "绿电占比", "value": 64, "unit": "%" },
      { "key": "critical_load_supply_ratio", "label": "关键负荷保障率", "value": 99.99, "unit": "%" }
    ],
    "icons": ["光伏", "风机", "电池储能", "算力中心"],
    "tags": ["高可靠性", "AI 调度", "多能协同"]
  },
  {
    "id": "green-hydrogen-demo",
    "title": "绿电制氢示范项目",
    "alias": "绿电制氢 / 氢氨醇耦合项目",
    "mode": ["PtX"],
    "description": "面向绿电制氢及相关电转化场景，通过风光发电、储能和制氢负荷协同优化，提升新能源消纳能力，支撑绿色氢能示范应用和下游耦合产业发展。",
    "metrics": [
      { "key": "hydrogen_cost", "label": "制氢成本", "value": 18.7, "unit": "元/kg" },
      { "key": "electrolyzer_utilization_hours", "label": "电解槽利用小时", "value": 4320, "unit": "小时/年" }
    ],
    "icons": ["光伏", "风机", "储氢", "氢氨醇"],
    "tags": ["多能协同", "AI 调度", "高可靠性"]
  },
  {
    "id": "industrial-park-pv-storage-charging",
    "title": "工业园区光储充一体化项目",
    "alias": "风光储充项目",
    "mode": ["C&I", "Campus Energy"],
    "description": "面向工业园区和集中充电场景，统筹光伏、储能与充电负荷协同运行，缓解充电高峰对配电容量和电网侧需量的冲击，提升绿电消纳水平，并优化站点综合运营收益。",
    "metrics": [
      { "key": "annual_revenue", "label": "年收益", "value": 2350, "unit": "万元/年" },
      { "key": "peak_demand_reduction", "label": "峰值需量下降", "value": 22, "unit": "%" }
    ],
    "icons": ["光伏", "电池储能", "充电桩", "工厂"],
    "tags": ["削峰填谷", "AI 调度", "需求响应", "多能协同"]
  }
]
\`\`\`

## 说明
- title：正式模板名称，建议前端主标题使用
- alias：页面简写名 / 卡片短标题候选
- mode：用于筛选和角标展示
- metrics：统一为数组，便于前端循环渲染
- icons：统一为字符串数组，便于映射到图标资源
- tags：统一为字符串数组，便于标签渲染和筛选

## 前端展示建议
- 卡片主标题使用 alias 或 title
- 卡片副标题使用 mode
- 中间摘要区展示 description
- 底部展示前两个 metrics
- 右下角展示 tags
- 图标区根据 icons 数组组合渲染`;

const WORKSPACE_MOCK_VISUAL = {
  source: "Mock数据/工作区模板.md",
  summary: [
    { label: "模板数量", value: "8" },
    { label: "核心对象", value: "项目模板" },
    { label: "覆盖场景", value: "并网 / 离网 / 工商业 / AIDC" },
  ],
  templates: [
    { title: "集中式光伏上网", components: ["光", "电网"] },
    { title: "光储并网电站", components: ["光", "储", "电网"] },
    { title: "风光储氢氨醇一体化", components: ["风", "光", "储", "氢氨醇", "电网"] },
    { title: "工商业源网荷储一体化", components: ["光", "储", "负荷", "电网"] },
    { title: "离网光储电站", components: ["光", "储", "负荷"] },
    { title: "光储一体化 AIDC", components: ["光伏", "储能", "电网", "算力中心负荷"] },
    { title: "光储充一体站", components: ["光", "储", "充电桩", "电网"] },
    { title: "工业柔性负荷园区", components: ["光", "储", "电网", "工业负荷"] },
  ],
};

const EXPLORE_MOCK_VISUAL = {
  source: "Mock数据/探索（模板）.md",
  summary: [
    { label: "模板案例", value: "6" },
    { label: "页面布局", value: "2 行 x 3 卡片" },
    { label: "关键结果", value: "每卡 2 个" },
  ],
  layoutRows: [
    ["工商业光储项目", "园区级源网荷储一体化项目", "海岛 / 离网微电网项目"],
    ["风光储充项目", "算力中心源网荷储项目", "绿电制氢 / 氢氨醇耦合项目"],
  ],
  cases: [
    {
      title: "工商业柔性光储项目",
      mode: ["C&I"],
      icons: ["光伏", "电池储能", "工厂"],
      metrics: ["自发自用率 82%", "LCOE 0.41 元/kWh"],
      tags: ["AI 调度", "削峰填谷", "需求响应"],
    },
    {
      title: "园区级源网荷储一体化项目",
      mode: ["Campus Energy", "Integrated Energy"],
      icons: ["光伏", "风机", "电池储能", "工厂"],
      metrics: ["绿电占比 76%", "碳减排量 18.6 万吨/年"],
      tags: ["多能协同", "AI 调度", "高可靠性"],
    },
    {
      title: "海岛 / 离网微电网项目",
      mode: ["Microgrid", "Off-Grid"],
      icons: ["光伏", "风机", "柴油机", "电池储能"],
      metrics: ["关键负荷保障率 99.95%", "LCOE 0.68 元/kWh"],
      tags: ["多能协同", "高可靠性", "AI 调度"],
    },
    {
      title: "算力中心源网荷储项目",
      mode: ["Industrial Hub", "Integrated Energy"],
      icons: ["光伏", "风机", "电池储能", "算力中心"],
      metrics: ["绿电占比 64%", "关键负荷保障率 99.99%"],
      tags: ["高可靠性", "AI 调度", "多能协同"],
    },
    {
      title: "绿电制氢 / 氢氨醇耦合项目",
      mode: ["PtX"],
      icons: ["光伏", "风机", "储氢", "氢氨醇"],
      metrics: ["制氢成本 18.7 元/kg", "电解槽利用小时 4320 小时/年"],
      tags: ["多能协同", "AI 调度", "高可靠性"],
    },
    {
      title: "风光储充项目",
      mode: ["C&I", "Campus Energy"],
      icons: ["光伏", "电池储能", "充电桩", "工厂"],
      metrics: ["年收益 2350 万元/年", "峰值需量下降 22%"],
      tags: ["削峰填谷", "AI 调度", "需求响应", "多能协同"],
    },
  ],
};

function createPlaceholderPage({
  id,
  name,
  position,
  subtitle,
  moduleBTitle,
  moduleBDescription,
  moduleCTitle,
  moduleCDescription,
  endpointMethod = "GET",
  endpointPath,
  endpointName,
  endpointDescription,
  endpoints,
  mockHint,
  fieldHint,
  ruleHint,
  stateHint,
  riskHint,
}) {
  return {
    id,
    name,
    position,
    subtitle,
    modules_count: 0,
    api_focus: "待定",
    risks_count: 0,
    blocks: {
      summary: {
        id: "summary",
        kind: "summary",
        title: "页面摘要",
        summaryCards: [
          {
            label: "页面定位",
            value: name,
            detail: subtitle,
          },
          {
            label: "核心目标",
            value: "待补充",
            detail: "页面目标、输入输出和核心流程待定义",
          },
          {
            label: "本期范围",
            value: "占位",
            detail: "先建立页面 Tab 和交付块容器",
          },
          {
            label: "非本期范围",
            value: "待补充",
            detail: "后续根据页面流程确认",
            tone: "muted",
          },
        ],
        items: [
          `${name}当前为占位页面。`,
          "后续需要补充页面流程、页面区域、字段定义、接口、Mock 数据、验收标准和风险依赖。",
        ],
      },
      goals: {
        id: "goals",
        kind: "focus",
        title: "页面目标与业务价值",
        status: "missing",
        items: [`待补充：${name}目标、业务价值和目标用户。`],
      },
      scope: {
        id: "scope",
        kind: "focus",
        title: "页面范围与版本边界",
        status: "missing",
        items: ["待补充：本期范围、非本期范围和后续扩展边界。"],
      },
      structure: {
        id: "structure",
        kind: "focus",
        title: "页面结构",
        status: "missing",
        items: ["待补充：页面主要区域、区域层级和信息架构。"],
      },
      flow: {
        id: "flow",
        kind: "focus",
        title: "用户流程 / 页面内流程",
        status: "missing",
        items: [`待补充：进入${name}后的完整用户流程。`],
      },
      header_module: {
        id: "header_module",
        kind: "module",
        title: "A. Header 区域",
        description: `占位区域，后续定义${name}标题、上下文信息和关键操作。`,
        status: "missing",
        items: ["待补充：Header 展示内容和操作入口。"],
      },
      cards_module: {
        id: "cards_module",
        kind: "module",
        title: moduleBTitle,
        description: moduleBDescription,
        status: "missing",
        items: ["待补充：区域内容、控件、输入输出和用户动作。"],
      },
      info_module: {
        id: "info_module",
        kind: "module",
        title: moduleCTitle,
        description: moduleCDescription,
        status: "missing",
        items: ["待补充：区域内容、结果展示和后续动作。"],
      },
      design_main: {
        id: "design_main",
        kind: "design",
        title: "页面原型图",
        status: "missing",
        caption: `${name}原型图待补充。`,
      },
      design_cards: {
        id: "design_cards",
        kind: "design",
        title: "核心区域原型图",
        status: "missing",
        caption: `${name}核心区域原型图待补充。`,
      },
      design_info: {
        id: "design_info",
        kind: "design",
        title: "结果 / 信息区原型图",
        status: "missing",
        caption: `${name}结果或信息区原型图待补充。`,
      },
      api_template: {
        id: "api_template",
        kind: "api",
        title: "接口模板",
        status: "missing",
        apiStatus: "待定义",
        owner: "后端",
        updatedAt: "待补充",
        embed: {
          provider: "Apifox / Swagger",
          url: "",
          allowEmbed: true,
        },
        platformLinks: [
          { label: "Swagger", url: "" },
          { label: "Apifox", url: "" },
          { label: "OpenAPI JSON", url: "" },
        ],
        endpoints: endpoints ?? [
          {
            method: endpointMethod,
            path: endpointPath,
            name: endpointName,
            description: endpointDescription,
            status: "待定义",
          },
        ],
        items: ["接口待定义。"],
      },
      mock_data: {
        id: "mock_data",
        kind: "resource",
        title: "mock 数据",
        status: "missing",
        items: [mockHint],
      },
      fields: {
        id: "fields",
        kind: "detail",
        title: "字段定义",
        status: "missing",
        items: [fieldHint],
      },
      rules: {
        id: "rules",
        kind: "detail",
        title: "业务规则",
        status: "missing",
        items: [ruleHint],
      },
      states: {
        id: "states",
        kind: "detail",
        title: "状态与交互",
        status: "missing",
        items: [stateHint],
      },
      acceptance: {
        id: "acceptance",
        kind: "detail",
        title: "验收标准",
        status: "missing",
        items: [`待补充：${name}验收标准。`],
      },
      risks: {
        id: "risks",
        kind: "detail",
        title: "风险 / 待确认项 / 依赖项",
        status: "missing",
        items: [riskHint],
      },
    },
    views: buildViews(),
  };
}

const pages = [
  {
    id: "workspace",
    name: "工作区页面",
    position: 2,
    subtitle: "当前项目管理中心",
    modules_count: 2,
    api_focus: "中",
    risks_count: 2,
    blocks: {
      summary: {
        id: "summary",
        kind: "summary",
        title: "页面摘要",
        items: [
          "这是当前项目管理中心，给产品、前后端、测试和评审角色统一使用。",
          "核心目标是集中呈现资产组合规模、经济性表现与绿色价值，降低信息切换成本。",
          "本期范围：Header 概览 + 电站卡片区 + 角色视图组合展示。",
          "非本期范围：项目管理详情流程（保留占位）。",
        ],
      },
      goals: {
        id: "goals",
        kind: "focus",
        title: "页面目标与业务价值",
        items: [
          "让团队在首屏 10 秒内看懂当前项目盘子的规模和健康度。",
          "统一查看项目状态（已发布 / 规划中）并支持快速进入“规划电站”。",
          "为后续跨角色协同（产品、研发、测试）提供统一交付容器。",
        ],
      },
      scope: {
        id: "scope",
        kind: "focus",
        title: "页面范围与版本边界",
        items: [
          "本期做：资产组合概览、经济性指标、绿色价值指标、电站卡片列表。",
          "本期不做：项目管理流程页、审批链路、外部系统同步配置。",
          "占位项：接口错误码细节、变更版本历史。",
        ],
      },
      structure: {
        id: "structure",
        kind: "focus",
        title: "页面结构",
        items: [
          "A. Header 概览：资产组合规模 / 经济性表现 / 绿色价值。",
          "B. 电站卡片区：项目卡片、状态标签、核心经济指标、参与人、规划按钮。",
        ],
      },
      flow: {
        id: "flow",
        kind: "focus",
        title: "用户流程 / 页面内流程",
        items: [
          "进入工作区 -> 查看 Header 指标总览 -> 识别项目状态差异。",
          "浏览电站卡片 -> 比较 IRR/LCOE/回收周期 -> 决策下一步动作。",
          "点击“规划电站”进入规划流程（当前页面提供入口，不展开细节流程）。",
        ],
      },
      header_module: {
        id: "header_module",
        kind: "module",
        title: "A. Header 概览区域",
        description: "首屏固定为 3 个概览分组。开发重点是把指标按分组稳定渲染，并确保单位、空值和分量明细清楚。",
        interactionItems: [
          "本区域首期不要求点击跳转。",
          "加载中时三栏保持骨架结构，避免页面高度跳动。",
          "部分指标缺失时，只影响对应指标，不隐藏整栏。",
          "首屏可以明确看到 3 个分组：规模、经济性、绿色价值。",
          "总装机量、IRR、LCOE、年碳减排量都有明确单位。",
          "分量指标不会和主指标混在一起，层级清楚。",
          "空值、0 值和异常值都有可读兜底。",
        ],
        prdDetailed: [
          {
            title: "区域目标",
            items: [
              "用户进入工作区后，第一眼能判断当前项目组合的规模、收益水平和绿色价值。",
              "Header 只做概览，不承载列表筛选、项目详情或规划动作。",
            ],
          },
          {
            title: "布局结构",
            items: [
              "三栏横向排列：资产组合规模、经济性表现、绿色价值。",
              "每栏必须有主标题、1 个主指标、若干辅助指标。",
              "主指标数字要比辅助指标更醒目，单位紧跟数值展示。",
            ],
          },
          {
            title: "字段与展示规则",
            items: [
              "资产组合规模：展示总装机量，并展示光伏、风电、储能、氢氨醇分量。",
              "经济性表现：展示加权平均 IRR、平均 LCOE。",
              "绿色价值：展示年碳减排量、绿电比例、绿证量。",
              "所有数值字段必须显示单位；字段为空时展示“待补充”，不要展示 undefined/null。",
            ],
          },
          {
            title: "交互与状态",
            items: [
              "本区域首期不要求点击跳转。",
              "加载中时三栏保持骨架结构，避免页面高度跳动。",
              "部分指标缺失时，只影响对应指标，不隐藏整栏。",
            ],
          },
          {
            title: "关键验收点",
            items: [
              "首屏可以明确看到 3 个分组：规模、经济性、绿色价值。",
              "总装机量、IRR、LCOE、年碳减排量都有明确单位。",
              "分量指标不会和主指标混在一起，层级清楚。",
              "空值、0 值和异常值都有可读兜底。",
            ],
          },
        ],
        items: [
          "区域目标：首屏展示项目组合的规模、收益和绿色价值，帮助用户快速判断项目盘面。",
          "布局要求：固定 3 栏，分别是资产组合规模、经济性表现、绿色价值。",
          "资产组合规模：主指标是总装机量；辅助指标是光伏、风电、储能、氢氨醇分量。",
          "经济性表现：展示加权平均 IRR 和平均 LCOE，必须带单位或口径。",
          "绿色价值：展示年碳减排量、绿电比例、绿证量，缺失值显示“待补充”。",
          "开发验收：所有指标必须有数值、单位、空值兜底和清晰层级。",
        ],
      },
      cards_module: {
        id: "cards_module",
        kind: "module",
        title: "B. 电站卡片区区域",
        description: "项目列表以卡片呈现。开发重点是让每张卡片的信息结构一致，用户能快速比较项目并进入规划动作。",
        interactionItems: [
          "用户浏览卡片 -> 对比状态和收益指标 -> 点击“规划电站”。",
          "点击“规划电站”进入电站规划页，首期只需要提供入口，不在当前卡片展开规划表单。",
          "卡片本身不承载审批流、完整详情页和复杂筛选。",
          "每张卡片都能看到地址、状态、项目名称、设备容量、三项指标、参与人和规划按钮。",
          "多张卡片并排展示时，指标顺序和按钮位置保持一致。",
          "已发布和规划中两种状态有明显视觉区分。",
          "字段缺失时卡片结构不变，显示兜底文案。",
        ],
        prdDetailed: [
          {
            title: "区域目标",
            items: [
              "用统一卡片承载每个电站项目的状态、位置、规模、收益和协作入口。",
              "让用户可以横向比较多个项目，并快速进入“规划电站”。",
            ],
          },
          {
            title: "卡片信息结构",
            items: [
              "顶部区域：项目地址在左侧，状态标签在右上角。",
              "主体区域：项目名称作为主标题，子系统装机量 icon 作为项目构成说明。",
              "指标区域：固定展示 IRR、LCOE、投资回收周期三类核心指标。",
              "底部区域：展示参与人信息，并提供“规划电站”按钮。",
            ],
          },
          {
            title: "字段与展示规则",
            items: [
              "项目地址为空时展示“地址待补充”。",
              "状态标签只允许已发布、规划中；后续新增状态需要同步测试用例。",
              "子系统装机量 icon 需要展示设备类型和容量，不允许只展示图标。",
              "IRR、LCOE、投资回收周期必须保持固定顺序，方便跨卡片比较。",
              "参与人为空时展示“参与人待补充”。",
            ],
          },
          {
            title: "交互与边界",
            items: [
              "用户浏览卡片 -> 对比状态和收益指标 -> 点击“规划电站”。",
              "点击“规划电站”进入电站规划页，首期只需要提供入口，不在当前卡片展开规划表单。",
              "卡片本身不承载审批流、完整详情页和复杂筛选。",
            ],
          },
          {
            title: "关键验收点",
            items: [
              "每张卡片都能看到地址、状态、项目名称、设备容量、三项指标、参与人和规划按钮。",
              "多张卡片并排展示时，指标顺序和按钮位置保持一致。",
              "已发布和规划中两种状态有明显视觉区分。",
              "字段缺失时卡片结构不变，显示兜底文案。",
            ],
          },
        ],
        items: [
          "区域目标：用统一卡片展示电站项目，支持用户比较项目并进入规划。",
          "顶部信息：左侧展示项目地址，右上角展示状态标签；状态范围是已发布、规划中。",
          "主体信息：项目名称作为主标题；子系统装机量用 icon + 容量文字展示。",
          "指标信息：固定展示 IRR、LCOE、投资回收周期，顺序不能随数据变化。",
          "底部动作：展示参与人信息，并提供“规划电站”按钮跳转到电站规划页。",
          "开发验收：字段缺失要有兜底，卡片高度和指标顺序要保持稳定。",
        ],
      },
      design_main: {
        id: "design_main",
        kind: "design",
        title: "页面原型图",
        image: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604202030415.png",
        caption: "工作区页面整体原型",
        link: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604202030415.png",
      },
      design_cards: {
        id: "design_cards",
        kind: "design",
        title: "卡片原型图",
        image: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604201936560.jpg",
        caption: "电站卡片区原型",
        link: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604201936560.jpg",
      },
      api_template: {
        id: "api_template",
        kind: "api",
        title: "接口模板",
        status: "missing",
        apiStatus: "待定义",
        owner: "后端",
        updatedAt: "待补充",
        embed: {
          provider: "Apifox / Swagger",
          url: "",
          allowEmbed: true,
        },
        platformLinks: [
          { label: "Swagger", url: "" },
          { label: "Apifox", url: "" },
          { label: "OpenAPI JSON", url: "" },
        ],
        endpoints: [
          {
            method: "GET",
            path: "/api/workspace/projects",
            name: "获取工作区项目列表",
            description: "返回电站卡片所需项目状态、经济性指标、参与人和规划入口信息。",
            status: "待定义",
          },
          {
            method: "GET",
            path: "/api/workspace/overview",
            name: "获取工作区概览指标",
            description: "返回资产组合规模、经济性表现和绿色价值指标。",
            status: "待定义",
          },
        ],
        items: [
          "请求/返回字段模板待补充。",
          "错误码与前后端字段映射待确认。",
        ],
      },
      mock_data: {
        id: "mock_data",
        kind: "resource",
        title: "mock 数据",
        visualType: "workspaceMock",
        source: WORKSPACE_MOCK_VISUAL.source,
        visual: WORKSPACE_MOCK_VISUAL,
        markdown: WORKSPACE_MOCK_MARKDOWN,
        items: [
          "数据来源：Mock数据/工作区模板.md。",
          "集中式光伏上网：光 + 电网。",
          "光储并网电站：光 + 储 + 电网。",
          "风光储氢氨醇一体化：风 + 光 + 储 + 氢氨醇 + 电网。",
          "工商业源网荷储一体化：光 + 储 + 负荷 + 电网。",
          "离网光储电站：光 + 储 + 负荷。",
          "光储一体化 AIDC：光伏 + 储能 + 电网 + 算力中心负荷。",
          "光储充一体站：光 + 储 + 充电桩 + 电网。",
          "工业柔性负荷园区：光 + 储 + 电网 + 工业负荷。",
        ],
      },
      fields: {
        id: "fields",
        kind: "detail",
        title: "字段定义",
        fieldGroups: [
          {
            title: "A. Header 概览字段",
            rows: [
              {
                area: "Header 概览",
                name: "total_capacity_value",
                label: "总装机量数值",
                type: "number",
                unit: "MW",
                required: "是",
                source: "后端聚合计算",
                example: "1280",
                display: "按 MW/GW 自动格式化，保留 1 位小数",
                validation: ">= 0",
                fallback: "--",
              },
              {
                area: "Header 概览",
                name: "capacity_breakdown",
                label: "装机量分项",
                type: "object[]",
                unit: "MW",
                required: "是",
                source: "后端返回",
                example: "[{ type: 'PV', value: 820 }]",
                display: "按光伏、风电、储能、氢氨醇顺序展示",
                validation: "type 为字符串，value >= 0",
                fallback: "隐藏缺失分项",
              },
              {
                area: "Header 概览",
                name: "weighted_irr",
                label: "加权平均 IRR",
                type: "number",
                unit: "%",
                required: "否",
                source: "后端计算",
                example: "8.6",
                display: "保留 1 位小数并追加 %",
                validation: "0 <= value <= 100",
                fallback: "--",
              },
              {
                area: "Header 概览",
                name: "average_lcoe",
                label: "平均 LCOE",
                type: "number",
                unit: "元/kWh",
                required: "否",
                source: "后端计算",
                example: "0.42",
                display: "保留 2 位小数",
                validation: ">= 0",
                fallback: "--",
              },
              {
                area: "Header 概览",
                name: "annual_carbon_reduction",
                label: "年碳减排量",
                type: "number",
                unit: "万吨/年",
                required: "否",
                source: "后端计算",
                example: "36.8",
                display: "保留 1 位小数",
                validation: ">= 0",
                fallback: "--",
              },
              {
                area: "Header 概览",
                name: "green_power_ratio",
                label: "绿电比例",
                type: "number",
                unit: "%",
                required: "否",
                source: "后端计算",
                example: "72",
                display: "保留 0-1 位小数并追加 %",
                validation: "0 <= value <= 100",
                fallback: "--",
              },
            ],
          },
          {
            title: "B. 电站卡片字段",
            rows: [
              {
                area: "电站卡片",
                name: "project_address",
                label: "项目地址",
                type: "string",
                unit: "无",
                required: "是",
                source: "后端返回",
                example: "广东省深圳市",
                display: "卡片顶部展示，超长 1 行截断",
                validation: "1-80 个字符",
                fallback: "未填写地址",
              },
              {
                area: "电站卡片",
                name: "project_status",
                label: "项目状态",
                type: "string",
                unit: "无",
                required: "是",
                source: "后端返回",
                example: "published",
                display: "映射为状态标签",
                validation: "published | planning",
                fallback: "planning",
              },
              {
                area: "电站卡片",
                name: "project_name",
                label: "项目名称",
                type: "string",
                unit: "无",
                required: "是",
                source: "后端返回",
                example: "华南零碳园区项目",
                display: "主标题，最多 2 行",
                validation: "1-60 个字符",
                fallback: "未命名项目",
              },
              {
                area: "电站卡片",
                name: "subsystem_icons",
                label: "子系统图标",
                type: "array<string>",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "['PV', 'BESS']",
                display: "按数组顺序渲染图标",
                validation: "枚举值需在图标映射表内",
                fallback: "隐藏图标区",
              },
              {
                area: "电站卡片",
                name: "irr",
                label: "IRR",
                type: "number",
                unit: "%",
                required: "否",
                source: "后端计算",
                example: "9.2",
                display: "保留 1 位小数",
                validation: "0 <= value <= 100",
                fallback: "--",
              },
              {
                area: "电站卡片",
                name: "lcoe",
                label: "LCOE",
                type: "number",
                unit: "元/kWh",
                required: "否",
                source: "后端计算",
                example: "0.39",
                display: "保留 2 位小数",
                validation: ">= 0",
                fallback: "--",
              },
              {
                area: "电站卡片",
                name: "payback_period",
                label: "投资回收周期",
                type: "number",
                unit: "年",
                required: "否",
                source: "后端计算",
                example: "6.5",
                display: "保留 1 位小数",
                validation: ">= 0",
                fallback: "--",
              },
              {
                area: "电站卡片",
                name: "participants",
                label: "参与人",
                type: "object[]",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "[{ name: '张三', role: 'Owner' }]",
                display: "头像或姓名列表，最多展示 3 个",
                validation: "name 必须为字符串",
                fallback: "隐藏参与人区",
              },
            ],
          },
        ],
        items: [
          "project_address(string)：项目地址。",
          "project_status(enum)：已发布 / 规划中。",
          "irr(number, %)：内部收益率。",
          "lcoe(number, 元/kWh)：平准化度电成本。",
          "payback_period(number, 年)：投资回收周期。",
        ],
      },
      rules: {
        id: "rules",
        kind: "detail",
        title: "业务规则",
        items: [
          "状态标签规则：状态取值仅允许“已发布 / 规划中”。",
          "指标展示规则：IRR、LCOE、回收周期缺失时标记“—”。",
          "排序规则：默认按项目更新时间倒序。",
        ],
      },
      states: {
        id: "states",
        kind: "detail",
        title: "状态与交互",
        items: [
          "加载态：Header 与卡片区显示骨架屏。",
          "空态：无项目时提示“暂无项目，请新建规划电站”。",
          "错误态：接口失败时展示重试按钮。",
          "无权限态：仅显示基础信息并提示联系管理员开通权限。",
        ],
      },
      acceptance: {
        id: "acceptance",
        kind: "detail",
        title: "验收标准",
        items: [
          "首屏可读：10 秒内可识别规模、经济性和绿色价值三类重点信息。",
          "卡片完整：项目地址/状态/名称/指标/参与人/按钮均可见。",
          "角色差异：前端视图与后端视图重点信息明显不同。",
        ],
      },
      risks: {
        id: "risks",
        kind: "detail",
        title: "风险 / 待确认项 / 依赖项",
        items: [
          "待确认：状态枚举是否增加“建设中”等中间态。",
          "依赖项：经济性指标口径需与后端计算服务保持一致。",
          "风险点：部分历史项目可能缺失 IRR/LCOE，需兜底展示策略。",
        ],
      },
    },
    views: buildViews(),
  },
  {
    id: "explore",
    name: "探索页",
    position: 1,
    subtitle: "标杆项目探索中心",
    modules_count: 3,
    api_focus: "高",
    risks_count: 1,
    blocks: {
      summary: {
        id: "summary",
        kind: "summary",
        title: "页面摘要",
        summaryCards: [
          {
            label: "页面定位",
            value: "标杆项目探索中心",
            detail: "服务方案设计、售前、产品与研发协作",
          },
          {
            label: "核心目标",
            value: "展示标杆项目，供给模板",
            detail: "沉淀可复用的场景方案输入",
          },
          {
            label: "本期范围",
            value: "Header / 案例卡片区 / 信息区",
            detail: "覆盖搜索、模板案例和外部情报展示",
          },
          {
            label: "非本期范围",
            value: "外部情报自动抓取",
            detail: "本期前端写死，或接口固定 JSON",
            tone: "muted",
          },
        ],
        items: [
          "这是标杆项目探索中心，面向方案设计、售前、产品与研发协作使用。",
          "核心目标是展示标杆项目，供给模板，沉淀可复用的场景方案输入。",
          "本期范围：Header + 案例卡片区 + 全球战略情报/市场趋势信息区。",
          "非本期范围：外部情报自动抓取。",
        ],
      },
      goals: {
        id: "goals",
        kind: "focus",
        title: "页面目标与业务价值",
        items: [
          "通过模板卡片降低新项目方案探索成本。",
          "将“项目案例 + 市场情报”放在同一页面提升决策效率。",
          "强化方案复用：支持快速引用模板进入后续规划流程。",
        ],
      },
      scope: {
        id: "scope",
        kind: "focus",
        title: "页面范围与版本边界",
        items: [
          "本期做：搜索、模板卡片、加载更多、信息区双栏展示。",
          "本期不做：标签多维筛选器、智能推荐排序。",
          "占位项：情报来源可追溯链路、实时数据订阅。",
        ],
      },
      structure: {
        id: "structure",
        kind: "focus",
        title: "页面结构",
        items: [
          "A. Header：页面标题、Sub Title、搜索框。",
          "B. 案例卡片区：标杆项目案例卡片与“加载更多项目”。",
          "C. 信息区：C1 全球战略情报 + C2 市场趋势。",
        ],
      },
      flow: {
        id: "flow",
        kind: "focus",
        title: "用户流程 / 页面内流程",
        items: [
          "输入关键词搜索标杆项目。",
          "浏览案例卡片并查看核心指标，高亮指标从当前案例的 metrics 中选择。",
          "引用模板并进入后续项目规划流程。",
        ],
      },
      header_module: {
        id: "header_module",
        kind: "module",
        title: "A. Header 区域",
        description: "用于搜索与定位探索主题。",
        prdDetailed: [
          {
            title: "区域目标",
            items: [
              "说明探索页用于展示标杆项目并供给模板，同时提供项目搜索入口。",
            ],
          },
          {
            title: "用户故事",
            items: [
              "作为售前人员，我希望快速搜索标杆项目，用于方案沟通和模板复用。",
            ],
          },
          {
            title: "功能边界",
            items: [
              "展示页面标题、副标题和项目搜索框。",
              "不在 Header 中承载筛选器详情、案例详情或推荐逻辑。",
            ],
          },
          {
            title: "主流程",
            items: [
              "进入探索页 -> 理解页面用途 -> 输入关键词搜索标杆项目。",
            ],
          },
          {
            title: "关键验收点",
            items: [
              "Title、Sub Title 和搜索框均可见，搜索对象说明清晰。",
            ],
          },
        ],
        items: [
          "展示页面 Title。",
          "展示 Sub Title。",
          "提供搜索框，用于按项目标题、项目类型、场景关键词和标签搜索案例项目。",
        ],
      },
      cards_module: {
        id: "cards_module",
        kind: "module",
        title: "B. 案例卡片区区域",
        description: "标杆项目案例卡片，聚合案例信息与引用动作。",
        prdDetailed: [
          {
            title: "区域目标",
            items: [
              "展示标杆项目案例，帮助用户判断案例价值并供给可复用模板。",
            ],
          },
          {
            title: "用户故事",
            items: [
              "作为方案设计人员，我希望比较不同案例的场景、设备组合和关键指标。",
              "作为售前人员，我希望引用标杆项目模板，快速进入后续规划流程。",
            ],
          },
          {
            title: "功能边界",
            items: [
              "展示案例卡片和引用模板入口。",
              "不在卡片内展开完整规划参数、算法推荐或详情页能力。",
            ],
          },
          {
            title: "主流程",
            items: [
              "浏览案例卡片 -> 判断是否匹配当前场景 -> 引用模板进入后续流程。",
            ],
          },
          {
            title: "关键验收点",
            items: [
              "案例卡片能完整表达标签、图片、标题、简介、设备、mode、亮点指标和引用动作。",
            ],
          },
        ],
        items: [
          "展示文字标签。",
          "展示电站图片。",
          "展示项目标题。",
          "展示一句话项目简述。",
          "展示相关设备 icon，支持 Solar、BESS、Wind、氢氨醇、工厂、商场、V2G、Smart。",
          "展示总装机量。",
          "展示模式。",
          "展示亮点指标，从自发自用率、LCOE、绿电占比、碳减排量、关键负荷保障率、制氢成本、电解槽利用小时、年收益、峰值需量下降中选择。",
          "提供“引用模板”按钮。",
          "提供“加载更多项目”按钮。",
        ],
      },
      info_module: {
        id: "info_module",
        kind: "module",
        title: "C. 信息区区域",
        description: "补充外部情报，支持方案讨论。",
        prdDetailed: [
          {
            title: "区域目标",
            items: [
              "补充全球战略情报和市场趋势，帮助用户理解标杆项目的外部环境。",
            ],
          },
          {
            title: "用户故事",
            items: [
              "作为售前人员，我希望在同一页面看到案例和趋势信息，减少跨资料查找。",
            ],
          },
          {
            title: "功能边界",
            items: [
              "展示全球战略情报和市场趋势。",
              "本期不做外部情报自动抓取或复杂情报分析。",
            ],
          },
          {
            title: "主流程",
            items: [
              "浏览案例 -> 查看情报和趋势 -> 辅助方案讨论。",
            ],
          },
          {
            title: "关键验收点",
            items: [
              "全球战略情报和市场趋势能同时展示，并与案例探索场景相关。",
            ],
          },
        ],
        items: [
          "C1 全球战略情报。",
          "C2 市场趋势。",
        ],
      },
      design_main: {
        id: "design_main",
        kind: "design",
        title: "页面原型图",
        image: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604201956989.png",
        caption: "探索页整体原型",
        link: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604201956989.png",
      },
      design_cards: {
        id: "design_cards",
        kind: "design",
        title: "卡片原型图",
        image: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604271540539.png",
        caption: "模板卡片原型",
        link: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604271540539.png",
      },
      design_info: {
        id: "design_info",
        kind: "design",
        title: "信息区原型图",
        image: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604202102043.jpg",
        caption: "全球战略情报 / 市场趋势原型",
        link: "https://vimeracke.oss-cn-shenzhen.aliyuncs.com/picgo/202604202102043.jpg",
      },
      api_template: {
        id: "api_template",
        kind: "api",
        title: "接口模板",
        status: "missing",
        apiStatus: "待定义",
        owner: "后端",
        updatedAt: "待补充",
        embed: {
          provider: "Apifox / Swagger",
          url: "",
          allowEmbed: true,
        },
        platformLinks: [
          { label: "Swagger", url: "" },
          { label: "Apifox", url: "" },
          { label: "OpenAPI JSON", url: "" },
        ],
        endpoints: [
          {
            method: "GET",
            path: "/api/explore/templates",
            name: "获取标杆项目案例列表",
            description: "返回案例卡片所需标题、标签、图片、设备 icon、mode、metrics 和分页信息。",
            status: "待定义",
          },
          {
            method: "GET",
            path: "/api/explore/intelligence",
            name: "获取信息区内容",
            description: "返回全球战略情报和市场趋势内容。本期也可由前端写死或接口固定 JSON 返回。",
            status: "待定义",
          },
          {
            method: "POST",
            path: "/api/explore/templates/{template_id}/quote",
            name: "引用案例模板",
            description: "点击引用模板后，将模板核心参数带入后续规划流程。",
            status: "待定义",
          },
        ],
        items: [
          "项目列表接口字段待补充：标签、指标、设备集合。",
          "情报数据接口与更新时间字段待补充。",
        ],
      },
      mock_data: {
        id: "mock_data",
        kind: "resource",
        title: "mock 数据",
        visualType: "exploreMock",
        source: EXPLORE_MOCK_VISUAL.source,
        visual: EXPLORE_MOCK_VISUAL,
        markdown: EXPLORE_MOCK_MARKDOWN,
        items: [
          "数据来源：Mock数据/探索（模板）.md。",
          "模板池：工业园区光储充一体化项目、海岛微电网风光储柴协同项目、算力中心源网荷储协同项目、绿电制氢示范项目、风光储荷一体化零碳园区项目、光伏+储能+柔性负荷工商业项目。",
          "页面布局第一行：工商业光储项目、园区级源网荷储一体化项目、海岛 / 离网微电网项目。",
          "页面布局第二行：风光储充项目、算力中心源网荷储项目、绿电制氢 / 氢氨醇耦合项目。",
          "关键结果口径：每个模板默认展示 2 个关键结果，优先展示决策指标。",
          "ci-flexible-pv-storage：光伏+储能+柔性负荷工商业项目；alias=工商业柔性光储项目；mode=C&I；icons=光伏、电池储能、工厂；tags=AI 调度、削峰填谷、需求响应；metrics=自发自用率 82%、LCOE 0.41 元/kWh。",
          "zero-carbon-campus-integrated：风光储荷一体化零碳园区项目；alias=园区级源网荷储一体化项目；mode=Campus Energy、Integrated Energy；icons=光伏、风机、电池储能、工厂；tags=多能协同、AI 调度、高可靠性；metrics=绿电占比 76%、碳减排量 18.6 万吨/年。",
          "island-microgrid-wind-pv-storage-diesel：海岛微电网风光储柴协同项目；alias=海岛 / 离网微电网项目；mode=Microgrid、Off-Grid；icons=光伏、风机、柴油机、电池储能；tags=多能协同、高可靠性、AI 调度；metrics=关键负荷保障率 99.95%、LCOE 0.68 元/kWh。",
          "aidc-source-grid-load-storage：算力中心源网荷储协同项目；alias=算力中心源网荷储项目；mode=Industrial Hub、Integrated Energy；icons=光伏、风机、电池储能、算力中心；tags=高可靠性、AI 调度、多能协同；metrics=绿电占比 64%、关键负荷保障率 99.99%。",
          "green-hydrogen-demo：绿电制氢示范项目；alias=绿电制氢 / 氢氨醇耦合项目；mode=PtX；icons=光伏、风机、储氢、氢氨醇；tags=多能协同、AI 调度、高可靠性；metrics=制氢成本 18.7 元/kg、电解槽利用小时 4320 小时/年。",
          "industrial-park-pv-storage-charging：工业园区光储充一体化项目；alias=风光储充项目；mode=C&I、Campus Energy；icons=光伏、电池储能、充电桩、工厂；tags=削峰填谷、AI 调度、需求响应、多能协同；metrics=年收益 2350 万元/年、峰值需量下降 22%。",
        ],
      },
      fields: {
        id: "fields",
        kind: "detail",
        title: "字段定义",
        fieldGroups: [
          {
            title: "A. Header 字段",
            rows: [
              {
                area: "Header",
                name: "page_title",
                label: "页面 Title",
                type: "string",
                unit: "无",
                required: "是",
                source: "前端配置或接口返回",
                example: "标杆项目探索中心",
                display: "页面主标题，最多 1 行",
                validation: "1-30 个字符",
                fallback: "探索页",
              },
              {
                area: "Header",
                name: "sub_title",
                label: "Sub Title",
                type: "string",
                unit: "无",
                required: "否",
                source: "前端写死",
                example: "展示标杆项目，供给模板，沉淀场景方案输入",
                display: "标题下方说明，最多 2 行",
                validation: "0-80 个字符",
                fallback: "隐藏副标题",
              },
              {
                area: "Header",
                name: "search_placeholder",
                label: "搜索框占位文案",
                type: "string",
                unit: "无",
                required: "否",
                source: "前端写死",
                example: "搜索项目类型、场景或标签",
                display: "搜索框 placeholder",
                validation: "0-40 个字符",
                fallback: "搜索模板",
              },
              {
                area: "Header",
                name: "search_keyword",
                label: "搜索关键词",
                type: "string",
                unit: "无",
                required: "否",
                source: "用户输入",
                example: "光储",
                display: "不直接展示，用于列表过滤",
                validation: "0-50 个字符，前端 trim",
                fallback: "空字符串",
              },
            ],
          },
          {
            title: "B. 案例卡片字段",
            rows: [
              {
                area: "案例卡片",
                name: "text_tag",
                label: "文字标签",
                type: "string",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "AI 调度",
                display: "卡片左上角标签，最多 2 个",
                validation: "0-12 个字符",
                fallback: "隐藏标签",
              },
              {
                area: "案例卡片",
                name: "station_image_url",
                label: "电站图片",
                type: "string",
                unit: "无",
                required: "否",
                source: "后端返回或 CDN",
                example: "https://example.com/station.png",
                display: "16:9 图片区域，object-fit: cover",
                validation: "合法 URL",
                fallback: "展示默认占位图",
              },
              {
                area: "案例卡片",
                name: "project_title",
                label: "项目标题",
                type: "string",
                unit: "无",
                required: "是",
                source: "后端返回",
                example: "工商业柔性光储项目",
                display: "卡片主标题，最多 2 行",
                validation: "1-40 个字符",
                fallback: "未命名模板",
              },
              {
                area: "案例卡片",
                name: "project_brief",
                label: "一句话项目简述",
                type: "string",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "结合分时电价与储能配置优化用能成本",
                display: "卡片摘要，最多 3 行",
                validation: "0-120 个字符",
                fallback: "隐藏摘要",
              },
              {
                area: "案例卡片",
                name: "equipment_icons",
                label: "相关设备 icon",
                type: "array<string>",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "['Solar', 'BESS', 'Factory']",
                display: "按数组顺序展示设备图标",
                validation: "Solar | BESS | Wind | HydrogenAmmoniaMethanol | Factory | Mall | V2G | Smart",
                fallback: "隐藏 icon 区",
              },
              {
                area: "案例卡片",
                name: "installed_capacity_value",
                label: "总装机量数值",
                type: "number",
                unit: "MW",
                required: "否",
                source: "后端返回",
                example: "120",
                display: "与单位组合展示，可自动转 kW/MW/GW",
                validation: ">= 0",
                fallback: "--",
              },
              {
                area: "案例卡片",
                name: "mode",
                label: "模式",
                type: "array<string>",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "['C&I', 'Campus Energy']",
                display: "标签形式展示，最多 2 个",
                validation: "枚举值需在 mode 选项内",
                fallback: "隐藏模式标签",
              },
              {
                area: "案例卡片",
                name: "highlight_metric_key",
                label: "亮点指标类型",
                type: "string",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "LCOE",
                display: "决定高亮指标名称和单位",
                validation: "self_consumption_ratio | lcoe | green_power_ratio | carbon_reduction | critical_load_supply_ratio | hydrogen_cost | electrolyzer_utilization_hours | annual_revenue | peak_demand_reduction",
                fallback: "不展示亮点指标",
              },
              {
                area: "案例卡片",
                name: "highlight_metric_label",
                label: "亮点指标名称",
                type: "string",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "LCOE",
                display: "展示在亮点指标数值上方或左侧",
                validation: "自发自用率 | LCOE | 绿电占比 | 碳减排量 | 关键负荷保障率 | 制氢成本 | 电解槽利用小时 | 年收益 | 峰值需量下降",
                fallback: "按 highlight_metric_key 映射",
              },
              {
                area: "案例卡片",
                name: "highlight_metric_value",
                label: "亮点指标数值",
                type: "number",
                unit: "按 highlight_metric_unit",
                required: "否",
                source: "后端计算或模板配置",
                example: "0.41",
                display: "按 unit 格式化展示",
                validation: "必须为有限数字",
                fallback: "--",
              },
              {
                area: "案例卡片",
                name: "highlight_metric_unit",
                label: "亮点指标单位",
                type: "string",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "元/kWh",
                display: "拼接在亮点指标数值后",
                validation: "% | 元/kWh | 万吨/年 | 元/kg | 小时/年 | 万元/年",
                fallback: "按 metric_key 默认单位",
              },
            ],
          },
          {
            title: "C. 信息区字段",
            rows: [
              {
                area: "信息区",
                name: "global_strategy_items",
                label: "全球战略情报",
                type: "object[]",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "[{ title: '欧盟绿电政策', summary: '...' }]",
                display: "C1 区域列表展示",
                validation: "title 必填，summary 可选",
                fallback: "隐藏 C1 区域",
              },
              {
                area: "信息区",
                name: "market_trend_items",
                label: "市场趋势",
                type: "object[]",
                unit: "无",
                required: "否",
                source: "后端返回",
                example: "[{ title: '储能成本下降', summary: '...' }]",
                display: "C2 区域列表展示",
                validation: "title 必填，summary 可选",
                fallback: "隐藏 C2 区域",
              },
              {
                area: "信息区",
                name: "updated_at",
                label: "更新时间",
                type: "string",
                unit: "ISO 8601",
                required: "否",
                source: "后端返回",
                example: "2026-04-27T15:30:00+08:00",
                display: "格式化为 YYYY-MM-DD HH:mm",
                validation: "合法时间字符串",
                fallback: "不展示更新时间",
              },
            ],
          },
        ],
        items: [
          "A. Header 字段",
          "page_title(string)：页面 Title。",
          "sub_title(string)：Sub Title，可由前端写死。",
          "B. 案例卡片字段",
          "text_tag(string)：文字标签。",
          "station_image(string)：电站图片 URL。",
          "project_title(string)：项目标题。",
          "project_brief(string)：一句话项目简述。",
          "equipment_icons(array<string>)：相关设备 icon，value 使用字符串，可选值：Solar、BESS、Wind、HydrogenAmmoniaMethanol、Factory、Mall、V2G、Smart。",
          "installed_capacity(string)：总装机量。",
          "mode(string)：模式。",
          "highlight_metric_key(string)：亮点指标类型，value 使用字符串，可选值：self_consumption_ratio、lcoe、green_power_ratio、carbon_reduction、critical_load_supply_ratio、hydrogen_cost、electrolyzer_utilization_hours、annual_revenue、peak_demand_reduction。",
          "highlight_metric_label(string)：亮点指标名称，可选值：自发自用率、LCOE、绿电占比、碳减排量、关键负荷保障率、制氢成本、电解槽利用小时、年收益、峰值需量下降。",
          "highlight_metric_value(number)：亮点指标数值。",
          "highlight_metric_unit(string)：亮点指标单位，可选值：%、元/kWh、万吨/年、元/kg、小时/年、万元/年。",
        ],
      },
      rules: {
        id: "rules",
        kind: "detail",
        title: "业务规则",
        items: [
          "亮点指标展示规则：从当前案例的 metrics 数组中选择 1 个作为高亮指标；可选指标包括自发自用率、LCOE、绿电占比、碳减排量、关键负荷保障率、制氢成本、电解槽利用小时、年收益、峰值需量下降。",
          "搜索规则：按标题、标签、场景关键词进行包含匹配。",
          "引用模板规则：点击后保留模板核心参数进入后续页面。",
        ],
      },
      states: {
        id: "states",
        kind: "detail",
        title: "状态与交互",
        items: [
          "加载态：案例卡片区与信息区均展示骨架屏。",
          "空态：无匹配模板时提示更换关键词。",
          "错误态：加载失败可重试，并保留当前搜索词。",
        ],
      },
      acceptance: {
        id: "acceptance",
        kind: "detail",
        title: "验收标准",
        items: [
          "案例卡片信息完整覆盖：标签、图片、标题、简介、设备、装机量、模式、亮点指标。",
          "信息区可同时展示全球战略情报与市场趋势。",
          "引用模板动作可触发并带出模板信息。",
        ],
      },
      risks: {
        id: "risks",
        kind: "detail",
        title: "风险 / 待确认项 / 依赖项",
        items: [
          "待确认：情报内容更新频率与数据来源可信度。",
          "依赖项：模板库标签体系统一，否则搜索召回质量下降。",
        ],
      },
    },
    views: buildViews(),
  },
  createPlaceholderPage({
    id: "station-planning",
    name: "电站规划页",
    position: 3,
    subtitle: "电站方案规划与参数配置",
    moduleBTitle: "B. 规划配置区域",
    moduleBDescription: "占位区域，后续定义规划参数、设备配置和约束条件。",
    moduleCTitle: "C. 规划结果区域",
    moduleCDescription: "占位区域，后续定义算法结果、方案指标和对比能力。",
    endpoints: [
      {
        method: "POST",
        path: "/algorithm/jobs",
        name: "创建算法任务",
        description: "请求体包含 job_id、input_uri、algorithm_type、solver_config、output_spec；返回 accepted、algorithm_job_id、status。",
        status: "待定义",
      },
      {
        method: "GET",
        path: "/algorithm/jobs/{algorithm_job_id}",
        name: "查询算法任务状态",
        description: "返回 status、progress、stage、heartbeat_at、started_at、finished_at、error。",
        status: "待定义",
      },
      {
        method: "POST",
        path: "/algorithm/jobs/{algorithm_job_id}/cancel",
        name: "取消算法任务",
        description: "用于取消指定算法任务，取消后的状态和错误处理规则待补充。",
        status: "待定义",
      },
      {
        method: "GET",
        path: "/algorithm/jobs/{algorithm_job_id}/manifest",
        name: "获取结果清单",
        description: "返回算法任务输出结果清单，用于后续运行结果、财务结果和文件下载入口。",
        status: "待定义",
      },
    ],
    mockHint: "待补充：算法任务输入 URI、solver_config、output_spec、任务状态和 manifest 样例。",
    fieldHint: "待补充：job_id、input_uri、algorithm_type、solver_config、output_spec、algorithm_job_id、status、progress、stage、heartbeat_at、started_at、finished_at、error、manifest 字段表。",
    ruleHint: "待补充：任务创建、状态轮询、取消任务、结果清单获取和错误处理规则。",
    stateHint: "待补充：待创建、已接受、排队中、运行中、成功、失败、取消中、已取消、超时等状态。",
    riskHint: "待确认：算法任务幂等性、轮询频率、心跳超时、取消语义、manifest 结构和输出文件生命周期。",
  }),
  createPlaceholderPage({
    id: "station-operation-animation",
    name: "电站运行动画页",
    position: 4,
    subtitle: "电站运行过程动画与调度过程展示",
    moduleBTitle: "B. 运行动画区域",
    moduleBDescription: "占位区域，后续定义电站运行、能量流和调度动作的动画展示。",
    moduleCTitle: "C. 调度说明区域",
    moduleCDescription: "占位区域，后续定义算法判断、动作反馈和运行说明。",
    endpointMethod: "GET",
    endpointPath: "/api/station-operation/animation",
    endpointName: "获取运行动画数据",
    endpointDescription: "占位接口，后续用于返回时间序列、设备状态、能量流和调度动作。",
    mockHint: "待补充：运行时序、设备状态、能量流、调度动作样例。",
    fieldHint: "待补充：运行动画页字段表。",
    ruleHint: "待补充：动画播放、时间轴、设备状态和调度说明规则。",
    stateHint: "待补充：加载态、播放中、暂停、无数据、错误态。",
    riskHint: "待确认：动画数据粒度、时间步长、算法动作解释和性能约束。",
  }),
  createPlaceholderPage({
    id: "station-operation-results",
    name: "电站运行结果页",
    position: 5,
    subtitle: "电站运行结果、曲线与关键指标展示",
    moduleBTitle: "B. 运行指标区域",
    moduleBDescription: "占位区域，后续定义发电、负荷、储能、并网和调度指标展示。",
    moduleCTitle: "C. 曲线与明细区域",
    moduleCDescription: "占位区域，后续定义运行曲线、表格明细和异常说明。",
    endpointMethod: "GET",
    endpointPath: "/api/station-operation/results",
    endpointName: "获取运行结果",
    endpointDescription: "占位接口，后续用于返回运行指标、曲线数据和结果明细。",
    mockHint: "待补充：8760 曲线、运行指标、设备出力、负荷和并网数据样例。",
    fieldHint: "待补充：运行结果页字段表。",
    ruleHint: "待补充：指标口径、曲线聚合、异常点和单位展示规则。",
    stateHint: "待补充：加载态、空数据、曲线渲染失败、导出中、错误态。",
    riskHint: "待确认：曲线数据量、聚合粒度、导出格式和性能要求。",
  }),
  createPlaceholderPage({
    id: "station-finance-results",
    name: "电站财务结果页",
    position: 6,
    subtitle: "电站财务测算结果与收益指标展示",
    moduleBTitle: "B. 财务指标区域",
    moduleBDescription: "占位区域，后续定义 IRR、LCOE、投资回收期、现金流等财务指标。",
    moduleCTitle: "C. 财务明细区域",
    moduleCDescription: "占位区域，后续定义现金流、成本收益拆分和敏感性分析。",
    endpointMethod: "GET",
    endpointPath: "/api/station-finance/results",
    endpointName: "获取财务结果",
    endpointDescription: "占位接口，后续用于返回财务指标、现金流和成本收益明细。",
    mockHint: "待补充：财务指标、现金流、成本拆分、收益拆分样例。",
    fieldHint: "待补充：财务结果页字段表。",
    ruleHint: "待补充：IRR、LCOE、回收期、现金流和单位口径规则。",
    stateHint: "待补充：加载态、计算中、无财务结果、导出中、错误态。",
    riskHint: "待确认：财务模型口径、价格假设、税费规则和敏感性分析范围。",
  }),
  createPlaceholderPage({
    id: "dataset",
    name: "数据集页",
    position: 7,
    subtitle: "数据集管理、预览、生成与引用",
    moduleBTitle: "B. 数据集列表区域",
    moduleBDescription: "占位区域，后续定义数据集列表、筛选、预览和引用动作。",
    moduleCTitle: "C. 数据集预览区域",
    moduleCDescription: "占位区域，后续定义表格预览、曲线预览和数据质量说明。",
    endpointMethod: "GET",
    endpointPath: "/api/datasets",
    endpointName: "获取数据集列表",
    endpointDescription: "占位接口，后续用于返回数据集元数据、预览信息和可引用状态。",
    mockHint: "待补充：8760 曲线、发电曲线、电价曲线、负荷曲线、气象数据样例。",
    fieldHint: "待补充：数据集页字段表。",
    ruleHint: "待补充：上传、生成、预览、引用、数据校验和版本规则。",
    stateHint: "待补充：加载态、上传中、解析中、预览失败、空态、错误态。",
    riskHint: "待确认：文件格式、数据量、解析性能、数据质量校验和引用链路。",
  }),
].sort((a, b) => a.position - b.position);

pages.find((page) => page.id === "workspace").views = Object.fromEntries(
  Object.entries(buildViews()).map(([roleId, view]) => [
    roleId,
    {
      ...view,
      modules: view.modules.filter((blockId) => blockId !== "info_module"),
      designs: view.designs.filter((blockId) => blockId !== "design_info"),
    },
  ])
);

const PROJECT_OVERVIEW = {
  id: "project-overview",
  name: "项目总览",
  subtitle: "综合规划平台的项目级说明、用户流程和交付关注点",
  chips: ["项目级", "产品 / 技术 / 测试共用", "本期前端写死或接口固定 JSON"],
  sections: [
    {
      id: "project-intro",
      title: "项目介绍",
      cards: [
        { title: "项目目标", description: "展示标杆项目，供给模板，并承接后续规划工作区。" },
        { title: "业务背景", description: "帮助方案设计、售前和研发快速复用能源项目经验，减少从零搭建方案的成本。" },
        { title: "服务对象", description: "产品、UI/UX、前端、后端、算法、测试、管理评审等协作角色。" },
        { title: "核心价值", description: "把页面、字段、接口、mock、设计稿和验收要求统一沉淀到一个可评审工作台。" },
      ],
    },
    {
      id: "project-flow",
      title: "项目级用户流程",
      items: [
        "进入项目总览，理解本期范围、业务对象和技术边界。",
        "进入探索页，浏览标杆项目案例，搜索目标场景并引用模板。",
        "进入电站规划页，承接模板参数并进行规划配置（当前占位）。",
        "进入电站运行动画页，查看运行过程和调度动作（当前占位）。",
        "进入电站运行结果页，查看运行指标、曲线和明细（当前占位）。",
        "进入电站财务结果页，查看财务测算和收益指标（当前占位）。",
        "进入数据集页，管理、预览和引用数据集（当前占位）。",
        "进入工作区页面，查看资产组合规模、经济性表现和绿色价值。",
        "基于模板进入后续规划流程，并在评审、联调、测试阶段复用字段和接口契约。",
      ],
    },
    {
      id: "page-map",
      title: "页面地图",
      cards: [
        { title: "探索页", description: "展示标杆项目案例、案例卡片、信息区和模板引用入口。" },
        { title: "电站规划页", description: "承接模板引用和工作区入口，后续用于电站方案规划与结果展示。" },
        { title: "电站运行动画页", description: "展示电站运行过程、能量流和调度动作。" },
        { title: "电站运行结果页", description: "展示运行指标、曲线、明细和异常说明。" },
        { title: "电站财务结果页", description: "展示财务测算结果、现金流和收益指标。" },
        { title: "数据集页", description: "管理、预览、生成和引用曲线及气象等数据集。" },
        { title: "工作区页面", description: "展示项目管理中心、资产组合概览和电站卡片。" },
        { title: "后续扩展", description: "项目详情页、审批/评审页等。" },
      ],
    },
    {
      id: "business-objects",
      title: "核心业务对象",
      items: [
        "标杆项目模板、案例卡片、电站项目、设备 icon、mode、metrics。",
        "mock 数据、字段定义、接口契约、设计稿资源。",
        "亮点指标、单位、枚举、状态、兜底规则。",
      ],
    },
    {
      id: "product-scope",
      title: "产品范围",
      items: [
        "本期做：项目总览、探索页、工作区页面、电站规划页、电站运行动画页、电站运行结果页、电站财务结果页、数据集页占位、角色视图、字段表、mock 可视化、接口嵌入占位。",
        "本期不做：外部情报自动抓取、真实推荐服务、完整规划流程。",
        "实现口径：本期前端写死，或接口固定 JSON。",
      ],
    },
    {
      id: "tech-focus",
      title: "技术关注点",
      items: [
        "静态前端原型：HTML、CSS、原生 JavaScript。",
        "配置驱动：页面、角色视图、字段表、mock 数据和接口卡都由结构化数据渲染。",
        "本地能力：自定义视图保存到 localStorage，字段支持复制 Markdown、下载 CSV / Excel。",
        "外部嵌入：Swagger / Apifox 通过 iframe 预览，并保留外部打开兜底。",
      ],
    },
    {
      id: "data-strategy",
      title: "接口与数据策略",
      items: [
        "mock 数据来自本地 Markdown，并在页面外层做可视化摘要。",
        "字段定义明确类型、单位、必填、来源、示例、展示规则、校验规则和兜底。",
        "接口模板按 Swagger / Apifox / OpenAPI 链接管理；未配置时显示接口清单占位。",
      ],
    },
    {
      id: "quality",
      title: "质量与验收",
      items: [
        "页面级验收：摘要、页面区域、设计稿、接口、资源、详情区可完整浏览。",
        "数据级验收：字段单位、枚举、空值、异常值和导出内容正确。",
        "交互验收：搜索、筛选、图片预览、Markdown 弹窗、字段导出、iframe 兜底可用。",
      ],
    },
    {
      id: "project-risks",
      title: "风险与依赖",
      items: [
        "Apifox / Swagger 可能禁止 iframe 嵌入，需要保留外部打开。",
        "mock 数据和接口字段可能不一致，需要以字段定义表作为对齐基准。",
        "指标口径、单位和枚举变化会影响前端展示、测试用例和接口契约。",
      ],
    },
  ],
};

const TECH_INFO = {
  id: "tech-info",
  name: "技术信息",
  subtitle: "项目环境、服务连接与联调配置",
  chips: ["项目级", "技术配置", "敏感信息"],
  sections: [
    {
      id: "mysql-service",
      title: "MySQL 服务配置",
      description: "当前用于联调和数据服务连接的 MySQL 配置。该信息包含账号密码，不应暴露到公开环境。",
      rows: [
        { label: "MYSQL_SERVICE_HOST", value: "172.22.3.128" },
        { label: "MYSQL_SERVICE_DB_NAME", value: "sgls" },
        { label: "MYSQL_SERVICE_USER", value: "czywhcdbuser" },
        { label: "MYSQL_SERVICE_PASSWORD", value: "g6427fgUs#G", sensitive: true },
      ],
    },
  ],
};

const state = {
  surface: "project",
  pageId: pages[0].id,
  roleId: "full",
  customViews: loadCustomViews(),
};

const fieldTableRegistry = new Map();

const appLayoutEl = document.getElementById("app-layout");
const sidebarToggleEl = document.getElementById("sidebar-toggle");
const projectTabsEl = document.getElementById("project-tabs");
const pageTabsEl = document.getElementById("page-tabs");
const roleTabsEl = document.getElementById("role-tabs");
const rolePanelEl = roleTabsEl.closest(".panel");
const inPageNavEl = document.getElementById("in-page-nav");
const pageHeaderEl = document.getElementById("page-header");
const viewToolbarEl = document.getElementById("view-toolbar");
const mainSectionsEl = document.getElementById("main-sections");
const customEditorPanelEl = document.getElementById("custom-editor-panel");
const customEditorEl = document.getElementById("custom-editor");
const imageViewerEl = document.getElementById("image-viewer");
const imageViewerImageEl = document.getElementById("image-viewer-img");
const imageViewerTitleEl = document.getElementById("image-viewer-title");
const imageViewerScaleEl = document.getElementById("image-scale");
const imageViewerLinkEl = document.getElementById("open-origin-link");
const zoomInBtnEl = document.getElementById("zoom-in-btn");
const zoomOutBtnEl = document.getElementById("zoom-out-btn");
const imageViewerCanvasEl = document.getElementById("image-viewer-canvas");
const markdownViewerEl = document.getElementById("markdown-viewer");
const markdownViewerTitleEl = document.getElementById("markdown-viewer-title");
const markdownViewerContentEl = document.getElementById("markdown-viewer-content");

const IMAGE_SCALE_MIN = 0.5;
const IMAGE_SCALE_MAX = 3;
const IMAGE_SCALE_STEP = 0.25;

let currentImageScale = 1;

function loadCustomViews() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCustomViews() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.customViews));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRoleLabel(roleId) {
  return ROLE_OPTIONS.find((role) => role.id === roleId)?.label ?? roleId;
}

function getSectionTitle(section) {
  if (section.key === "focus") {
    return `${getRoleLabel(state.roleId)}关注重点`;
  }
  return section.title;
}

function getCurrentPage() {
  return pages.find((page) => page.id === state.pageId) ?? pages[0];
}

function getFallbackView(page) {
  return deepClone(page.views.frontend ?? page.views.product);
}

function normalizeCustomView(page, view) {
  const fallback = getFallbackView(page);
  const legacyResources = Array.isArray(view?.resources) ? view.resources : [];
  const normalized = SECTION_META.reduce((nextView, section) => {
    if (section.key === "designs") {
      nextView[section.key] = Array.isArray(view?.designs)
        ? [...view.designs]
        : legacyResources.filter((blockId) => page.blocks[blockId]?.kind === "design");
      return nextView;
    }

    if (section.key === "apis") {
      nextView[section.key] = Array.isArray(view?.apis)
        ? [...view.apis]
        : legacyResources.filter((blockId) => page.blocks[blockId]?.kind === "api" || page.blocks[blockId]?.id === "api_template");
      return nextView;
    }

    if (section.key === "resources") {
      const sourceResources = Array.isArray(view?.resources) ? view.resources : legacyResources;
      nextView[section.key] = sourceResources.filter((blockId) => {
        const block = page.blocks[blockId];
        return block?.kind === "resource" && block.id !== "api_template";
      });
      return nextView;
    }

    if (Array.isArray(view?.[section.key])) {
      nextView[section.key] = [...view[section.key]];
      return nextView;
    }

    nextView[section.key] = Array.isArray(fallback[section.key]) ? [...fallback[section.key]] : [];
    return nextView;
  }, {});
  return normalized;
}

function ensureCustomView(page) {
  if (!state.customViews[page.id]) {
    state.customViews[page.id] = getFallbackView(page);
    saveCustomViews();
  } else {
    state.customViews[page.id] = normalizeCustomView(page, state.customViews[page.id]);
  }
  return state.customViews[page.id];
}

function getCurrentView(page) {
  if (state.roleId === "full") {
    return buildFullView(page);
  }
  if (state.roleId === "custom") {
    return ensureCustomView(page);
  }
  return page.views[state.roleId] ?? page.views.product;
}

function buildFullView(page) {
  return SECTION_META.reduce((view, section) => {
    view[section.key] = getSectionCandidates(page, section.key, []);
    return view;
  }, {});
}

function getBlock(page, blockId, sectionKey) {
  const block = page.blocks[blockId];
  if (block) {
    return block;
  }
  const fallbackKind = sectionKey === "details" ? "detail" : "resource";
  return {
    id: blockId,
    kind: fallbackKind,
    title: `${blockId}（未提供）`,
    status: "missing",
    items: ["未提供 / 待补充"],
  };
}

function getBadge(block) {
  if (block.status === "missing") {
    return '<span class="badge missing">未提供</span>';
  }
  return '<span class="badge ok">已配置</span>';
}

function renderList(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return '<ul class="card-list"><li>未提供 / 待补充</li></ul>';
  }
  return `<ul class="card-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderSummary(page) {
  const summary = getBlock(page, "summary", "focus");
  if (Array.isArray(summary.summaryCards)) {
    return `
      <section id="section-summary" class="section-block summary-block">
        <div class="summary-heading">
          <h2 class="section-title">${escapeHtml(summary.title)}</h2>
          <span>${escapeHtml(page.name)} · ${escapeHtml(page.subtitle)}</span>
        </div>
        <div class="summary-card-grid">
          ${summary.summaryCards
            .map(
              (card) => `
                <article class="summary-card ${card.tone === "muted" ? "muted" : ""}">
                  <span>${escapeHtml(card.label)}</span>
                  <strong>${escapeHtml(card.value)}</strong>
                  <p>${escapeHtml(card.detail)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  return `
    <section id="section-summary" class="section-block">
      <h2 class="section-title">${escapeHtml(summary.title)}</h2>
      ${renderList(summary.items)}
    </section>
  `;
}

function renderPills(values, className = "mock-pill") {
  return values.map((value) => `<span class="${className}">${escapeHtml(value)}</span>`).join("");
}

function renderMockSummary(visual) {
  return `
    <div class="mock-summary-grid">
      ${visual.summary
        .map(
          (item) => `
            <div class="mock-stat">
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderWorkspaceMockVisual(visual) {
  return `
    ${renderMockSummary(visual)}
    <div class="mock-template-grid">
      ${visual.templates
        .map(
          (template) => `
            <article class="mock-template-card">
              <h4>${escapeHtml(template.title)}</h4>
              <div class="mock-flow">${renderPills(template.components, "mock-flow-node")}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderExploreMockVisual(visual) {
  return `
    ${renderMockSummary(visual)}
    <div class="mock-layout-preview">
      ${visual.layoutRows
        .map(
          (row, rowIndex) => `
            <div class="mock-layout-row">
              <span class="mock-row-label">第 ${rowIndex + 1} 行</span>
              ${row.map((item) => `<span class="mock-layout-cell">${escapeHtml(item)}</span>`).join("")}
            </div>
          `
        )
        .join("")}
    </div>
    <div class="mock-case-grid">
      ${visual.cases
        .map(
          (item) => `
            <article class="mock-case-card">
              <header>
                <h4>${escapeHtml(item.title)}</h4>
                <div class="mock-mode-row">${renderPills(item.mode, "mock-mode")}</div>
              </header>
              <div class="mock-icon-row">${renderPills(item.icons)}</div>
              <div class="mock-metric-row">${item.metrics.map((metric) => `<strong>${escapeHtml(metric)}</strong>`).join("")}</div>
              <div class="mock-tag-row">${renderPills(item.tags, "mock-tag")}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMockDataCard(block, title, badge) {
  const visual = block.visual;
  const visualHtml = block.visualType === "exploreMock"
    ? renderExploreMockVisual(visual)
    : renderWorkspaceMockVisual(visual);

  return `
    <article class="card mock-card">
      <header class="card-header">
        <div>
          <h3 class="card-title">${title}</h3>
          <p class="card-description">来源：${escapeHtml(block.source ?? visual.source)}</p>
        </div>
        ${badge}
      </header>
      ${visualHtml}
      <button
        class="card-link markdown-open-btn"
        type="button"
        data-action="open-markdown"
        data-markdown-title="${escapeHtml(block.title)}"
        data-markdown="${escapeHtml(block.markdown ?? "")}"
      >
        查看完整 Markdown
      </button>
    </article>
  `;
}

function renderEndpointRows(endpoints) {
  return endpoints
    .map(
      (endpoint) => `
        <tr>
          <td><span class="method-badge">${escapeHtml(endpoint.method)}</span></td>
          <td><code>${escapeHtml(endpoint.path)}</code></td>
          <td>${escapeHtml(endpoint.name)}</td>
          <td>${escapeHtml(endpoint.description)}</td>
          <td><span class="api-status-pill">${escapeHtml(endpoint.status)}</span></td>
        </tr>
      `
    )
    .join("");
}

function renderApiEmbed(block) {
  const embed = block.embed ?? {};
  if (embed.url) {
    return `
      <iframe
        class="api-embed-frame"
        src="${escapeHtml(embed.url)}"
        title="${escapeHtml(embed.provider || block.title)}"
        loading="lazy"
        referrerpolicy="no-referrer"
      ></iframe>
    `;
  }

  return `
    <iframe
      class="api-embed-frame"
      title="${escapeHtml(block.title)}嵌入预览"
      srcdoc="${escapeHtml(`
        <!doctype html>
        <html lang='zh-CN'>
          <head>
            <meta charset='UTF-8'>
            <style>
              body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; color: #0f172a; }
              .wrap { padding: 20px; }
              .bar { display: flex; gap: 8px; margin-bottom: 16px; }
              .dot { width: 10px; height: 10px; border-radius: 999px; background: #94a3b8; }
              h1 { margin: 0 0 8px; font-size: 20px; }
              p { margin: 0 0 14px; color: #475569; line-height: 1.6; }
              .card { border: 1px solid #e2e8f0; background: white; border-radius: 10px; padding: 14px; }
              code { color: #1d4ed8; }
            </style>
          </head>
          <body>
            <div class='wrap'>
              <div class='bar'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>
              <h1>${block.title}嵌入预览</h1>
              <p>这里会嵌入 Swagger 或 Apifox。当前还没有配置平台 URL，所以先展示接口清单占位。</p>
              <div class='card'><code>${(block.endpoints ?? []).map((item) => `${item.method} ${item.path}`).join('<br>')}</code></div>
            </div>
          </body>
        </html>
      `)}"
    ></iframe>
  `;
}

function renderApiCard(block, title, badge) {
  const links = block.platformLinks ?? [];
  const endpoints = block.endpoints ?? [];
  const configuredLinks = links.filter((link) => link.url);

  return `
    <article class="card api-card">
      <header class="card-header">
        <div>
          <h3 class="card-title">${title}</h3>
          <p class="card-description">接口状态：${escapeHtml(block.apiStatus ?? "待定义")} · 负责人：${escapeHtml(block.owner ?? "待补充")} · 更新时间：${escapeHtml(block.updatedAt ?? "待补充")}</p>
        </div>
        ${badge}
      </header>
      <div class="api-actions">
        ${links
          .map((link) =>
            link.url
              ? `<a class="card-link primary" target="_blank" rel="noreferrer" href="${escapeHtml(link.url)}">打开 ${escapeHtml(link.label)}</a>`
              : `<span class="api-disabled-link">${escapeHtml(link.label)} 未配置</span>`
          )
          .join("")}
      </div>
      <details class="api-embed" open>
        <summary>嵌入预览${configuredLinks.length === 0 ? "（待配置平台链接）" : ""}</summary>
        ${renderApiEmbed(block)}
      </details>
      <div class="api-table-scroll">
        <table class="api-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Path</th>
              <th>接口名称</th>
              <th>说明</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>${renderEndpointRows(endpoints)}</tbody>
        </table>
      </div>
    </article>
  `;
}

function renderModulePrdCard(block, title, description, badge) {
  const pageContent = renderList(block.contentItems ?? block.items);
  const interactionItems = getInteractionItems(block);
  const interactionLogic = interactionItems.length
    ? renderList(interactionItems)
    : '<p class="card-description">暂无交互逻辑，后续补充用户动作、状态流转和验收规则。</p>';

  return `
    <article class="card module-prd-card">
      <header class="card-header">
        <div>
          <h3 class="card-title">${title}</h3>
          ${description}
        </div>
        ${badge}
      </header>
      <div class="module-prd-switch" role="group" aria-label="页面区域内容切换">
        <button type="button" class="module-prd-toggle active" data-action="switch-prd" data-target="content">页面内容</button>
        <button type="button" class="module-prd-toggle" data-action="switch-prd" data-target="interaction">交互逻辑</button>
      </div>
      <div class="module-prd-pane" data-prd-pane="content">
        ${pageContent}
      </div>
      <div class="module-prd-pane hidden" data-prd-pane="interaction">
        ${interactionLogic}
      </div>
    </article>
  `;
}

function getInteractionItems(block) {
  if (Array.isArray(block.interactionItems)) {
    return block.interactionItems;
  }
  if (!Array.isArray(block.prdDetailed)) {
    return [];
  }
  const interactionSections = block.prdDetailed.filter((section) => /流程|交互|状态|验收|边界/.test(section.title));
  return interactionSections.flatMap((section) => section.items ?? []);
}

function renderFieldTable(block, tableId) {
  return `
    <div class="field-table-wrap">
      ${block.fieldGroups
        .map((group, groupIndex) => {
          const groupId = `${tableId}-${groupIndex}`;
          fieldTableRegistry.set(groupId, {
            title: `${block.title}_${group.title}`,
            columns: FIELD_COLUMNS,
            rows: group.rows.map((row) => ({ ...row, group: group.title })),
          });

          const rows = group.rows
            .map((row, rowIndex) => {
              const rowId = `${tableId}-${groupIndex}-${rowIndex}`;
              fieldTableRegistry.set(rowId, {
                title: `${block.title}_${row.name}`,
                columns: FIELD_COLUMNS,
                rows: [{ ...row, group: group.title }],
              });

              return `
                <tr>
                  ${FIELD_COLUMNS.map((column) => `<td>${escapeHtml(row[column.key] ?? "")}</td>`).join("")}
                  <td>
                    <div class="field-row-actions">
                      <button type="button" class="field-action-btn" data-action="copy-field-md" data-field-table-id="${escapeHtml(rowId)}">复制</button>
                      <button type="button" class="field-action-btn" data-action="download-field-csv" data-field-table-id="${escapeHtml(rowId)}">CSV</button>
                      <button type="button" class="field-action-btn" data-action="download-field-xls" data-field-table-id="${escapeHtml(rowId)}">Excel</button>
                    </div>
                  </td>
                </tr>
              `;
            })
            .join("");

          return `
            <section class="field-group">
              <header class="field-group-header">
                <h4>${escapeHtml(group.title)}</h4>
                <div class="field-row-actions">
                  <button type="button" class="field-action-btn" data-action="copy-field-md" data-field-table-id="${escapeHtml(groupId)}">复制本组</button>
                  <button type="button" class="field-action-btn" data-action="download-field-csv" data-field-table-id="${escapeHtml(groupId)}">本组 CSV</button>
                  <button type="button" class="field-action-btn" data-action="download-field-xls" data-field-table-id="${escapeHtml(groupId)}">本组 Excel</button>
                </div>
              </header>
              <div class="field-table-scroll">
                <table class="field-table">
                  <thead>
                    <tr>
                      ${FIELD_COLUMNS.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>${rows}</tbody>
                </table>
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCard(block) {
  const title = escapeHtml(block.title);
  const description = block.description ? `<p class="card-description">${escapeHtml(block.description)}</p>` : "";
  const badge = getBadge(block);

  if (block.visualType && block.visual && block.markdown) {
    return renderMockDataCard(block, title, badge);
  }

  if (block.kind === "api") {
    return renderApiCard(block, title, badge);
  }

  if (block.kind === "module") {
    return renderModulePrdCard(block, title, description, badge);
  }

  if (block.kind === "design") {
    const viewerLink = block.link ?? block.image ?? "";
    const image = block.image
      ? `<img class="design-image" src="${escapeHtml(block.image)}" alt="${title}" loading="lazy" data-viewer-link="${escapeHtml(viewerLink)}">`
      : `<div class="card-description">未提供设计稿预览图</div>`;
    const caption = block.caption ? `<p class="card-description">${escapeHtml(block.caption)}</p>` : "";
    const link = block.link
      ? `
        <div class="design-actions">
          <a class="card-link primary" target="_blank" rel="noreferrer" href="${escapeHtml(block.designUrl ?? block.link)}">导航到设计稿</a>
          <a class="card-link" target="_blank" rel="noreferrer" href="${escapeHtml(block.link)}">打开原图 / 原型</a>
        </div>
      `
      : "";
    return `
      <article class="card">
        <header class="card-header">
          <h3 class="card-title">${title}</h3>
          ${badge}
        </header>
        ${image}
        ${caption}
        ${link}
      </article>
    `;
  }

  const list = renderList(block.items);
  return `
    <article class="card">
      <header class="card-header">
        <h3 class="card-title">${title}</h3>
        ${badge}
      </header>
      ${description}
      ${list}
    </article>
  `;
}

function renderDetail(block, tableId) {
  const title = escapeHtml(block.title);
  const badge = getBadge(block);
  const content = Array.isArray(block.fieldGroups) ? renderFieldTable(block, tableId) : renderList(block.items);
  return `
    <details class="detail-item">
      <summary>
        <span>${title}</span>
        ${badge}
      </summary>
      <div class="detail-content">${content}</div>
    </details>
  `;
}

function renderSection(page, view, section) {
  const blockIds = Array.isArray(view[section.key]) ? view[section.key] : [];
  if (blockIds.length === 0) {
    return "";
  }

  if (section.key === "details") {
    return `
      <section id="section-${section.anchor}" class="section-block section-${section.key}">
        <h2 class="section-title">${escapeHtml(getSectionTitle(section))}</h2>
        <div class="detail-list">
          ${blockIds.map((blockId) => renderDetail(getBlock(page, blockId, section.key), `${page.id}-${blockId}`)).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section id="section-${section.anchor}" class="section-block section-${section.key}">
      <h2 class="section-title">${escapeHtml(getSectionTitle(section))}</h2>
      <div class="cards-grid">
        ${blockIds.map((blockId) => renderCard(getBlock(page, blockId, section.key))).join("")}
      </div>
    </section>
  `;
}

function getVisibleSections(page, view) {
  return SECTION_META.filter((section) => {
    const blockIds = Array.isArray(view[section.key]) ? view[section.key] : [];
    return blockIds.length > 0;
  });
}

function renderProjectTab() {
  projectTabsEl.innerHTML = `
    <button class="tab-btn project-entry-card ${state.surface === "project" ? "active" : ""}" data-action="open-project-overview" type="button">
      <span class="project-entry-icon" aria-hidden="true">◎</span>
      <span class="project-entry-body">
        <span class="project-entry-title">
          <span>${escapeHtml(PROJECT_OVERVIEW.name)}</span>
          <span class="project-entry-badge">项目级</span>
        </span>
        <span class="project-entry-desc">范围、流程、交付关注点</span>
      </span>
    </button>
    <button class="tab-btn project-entry-card ${state.surface === "tech" ? "active" : ""}" data-action="open-tech-info" type="button">
      <span class="project-entry-icon db" aria-hidden="true">DB</span>
      <span class="project-entry-body">
        <span class="project-entry-title">
          <span>${escapeHtml(TECH_INFO.name)}</span>
          <span class="project-entry-badge warning">敏感</span>
        </span>
        <span class="project-entry-desc">环境、服务、联调配置</span>
      </span>
    </button>
  `;

  projectTabsEl.querySelector('button[data-action="open-project-overview"]')?.addEventListener("click", () => {
    if (state.surface === "project") {
      return;
    }
    state.surface = "project";
    render();
  });

  projectTabsEl.querySelector('button[data-action="open-tech-info"]')?.addEventListener("click", () => {
    if (state.surface === "tech") {
      return;
    }
    state.surface = "tech";
    render();
  });
}

function renderPageTabs() {
  pageTabsEl.innerHTML = pages
    .map(
      (page) => `
        <button class="tab-btn page-tab-card ${state.surface === "page" && page.id === state.pageId ? "active" : ""}" data-page-id="${escapeHtml(page.id)}" type="button">
          <span class="page-tab-title">
            <span>${escapeHtml(page.name)}</span>
            <span class="page-tab-status ${escapeHtml(getPageStatusClass(page))}">${escapeHtml(getPageStatusLabel(page))}</span>
          </span>
          <span class="page-tab-desc">${escapeHtml(page.subtitle)}</span>
          <span class="page-tab-meta">
            <span>${escapeHtml(getPageModuleLabel(page))}</span>
            <span>${escapeHtml(getPageApiLabel(page))}</span>
          </span>
        </button>
      `
    )
    .join("");

  pageTabsEl.querySelectorAll("button[data-page-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const pageId = button.dataset.pageId;
      if (!pageId || pageId === state.pageId) {
        if (state.surface !== "page") {
          state.surface = "page";
          render();
        }
        return;
      }
      state.surface = "page";
      state.pageId = pageId;
      render();
    });
  });
}

function getPageStatusLabel(page) {
  return PAGE_STATUS_OPTIONS[getPageStatus(page)] ?? PAGE_STATUS_OPTIONS.incomplete;
}

function getPageStatusClass(page) {
  return `status-${getPageStatus(page).replaceAll("_", "-")}`;
}

function getPageStatus(page) {
  return page.status ?? "incomplete";
}

function getPageModuleLabel(page) {
  return Number.isFinite(page.modules_count) ? `${page.modules_count} 个区域` : "区域待补充";
}

function getPageApiLabel(page) {
  return page.api_focus ? `接口 ${page.api_focus}` : "接口待补充";
}

function getRoleAvatarUrl(seed) {
  const encodedSeed = encodeURIComponent(seed);
  return `https://api.dicebear.com/9.x/personas/svg?seed=${encodedSeed}&backgroundColor=f8fafc,dbeafe,ccfbf1&radius=50`;
}

function renderRoleTabs() {
  roleTabsEl.innerHTML = ROLE_OPTIONS.map(
    (role) => `
      <button class="tab-btn role-tab-btn ${role.id === state.roleId ? "active" : ""}" data-role-id="${escapeHtml(role.id)}" type="button">
        <span class="role-avatar-wrap" aria-hidden="true">
          <img class="role-avatar" src="${escapeHtml(getRoleAvatarUrl(role.seed))}" alt="" loading="lazy">
          <span class="role-cue">${escapeHtml(role.cue)}</span>
        </span>
        <span class="role-label">${escapeHtml(role.label)}</span>
      </button>
    `
  ).join("");

  roleTabsEl.querySelectorAll("button[data-role-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const roleId = button.dataset.roleId;
      if (!roleId || roleId === state.roleId) {
        return;
      }
      state.roleId = roleId;
      render();
    });
  });
}

function renderInPageNav(page, view) {
  const links = [
    { id: "section-summary", title: "页面摘要" },
    ...getVisibleSections(page, view).map((section) => ({
      id: `section-${section.anchor}`,
      title: getSectionTitle(section),
    })),
  ];

  inPageNavEl.innerHTML = links
    .map((link, index) => `<a href="#${escapeHtml(link.id)}"><span class="nav-index">${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(link.title)}</span></a>`)
    .join("");
}

function kindMatchesSection(kind, sectionKey) {
  if (sectionKey === "focus") {
    return kind === "focus";
  }
  if (sectionKey === "modules") {
    return kind === "module";
  }
  if (sectionKey === "designs") {
    return kind === "design";
  }
  if (sectionKey === "apis") {
    return kind === "api";
  }
  if (sectionKey === "resources") {
    return kind === "resource";
  }
  return kind === "detail";
}

function getSectionCandidates(page, sectionKey, selectedIds) {
  const candidates = Object.values(page.blocks)
    .filter((block) => {
      if (!kindMatchesSection(block.kind, sectionKey)) {
        return false;
      }
      if (sectionKey === "apis") {
        return block.kind === "api";
      }
      if (sectionKey === "resources") {
        return block.id !== "api_template";
      }
      return true;
    })
    .map((block) => block.id);
  selectedIds.forEach((id) => {
    if (!candidates.includes(id)) {
      candidates.push(id);
    }
  });
  return candidates;
}

function getBlockTitle(page, blockId) {
  return page.blocks[blockId]?.title ?? `${blockId}（未提供）`;
}

function getViewBlockIds(view) {
  return SECTION_META.flatMap((section) => (Array.isArray(view[section.key]) ? view[section.key] : []));
}

function getDeliveryStats(page, view) {
  const uniqueIds = [...new Set(getViewBlockIds(view))];
  const missing = uniqueIds.filter((blockId) => getBlock(page, blockId).status === "missing").length;
  return {
    total: uniqueIds.length,
    ready: uniqueIds.length - missing,
    missing,
  };
}

function renderCustomEditor(page) {
  if (state.roleId !== "custom") {
    customEditorPanelEl.classList.add("hidden");
    customEditorEl.innerHTML = "";
    return;
  }

  customEditorPanelEl.classList.remove("hidden");
  const customView = ensureCustomView(page);

  customEditorEl.innerHTML = SECTION_META.map((section) => {
    const selected = Array.isArray(customView[section.key]) ? customView[section.key] : [];
    const candidates = getSectionCandidates(page, section.key, selected);

    const rows = candidates
      .map((blockId) => {
        const checked = selected.includes(blockId);
        const index = selected.indexOf(blockId);
        const canMoveUp = checked && index > 0;
        const canMoveDown = checked && index >= 0 && index < selected.length - 1;

        return `
          <div class="custom-row">
            <label>
              <input
                type="checkbox"
                data-action="toggle-block"
                data-section="${escapeHtml(section.key)}"
                data-block-id="${escapeHtml(blockId)}"
                ${checked ? "checked" : ""}
              >
              <span>${escapeHtml(getBlockTitle(page, blockId))}</span>
            </label>
            <div class="custom-actions">
              <button
                type="button"
                class="icon-btn"
                data-action="move-block"
                data-direction="-1"
                data-section="${escapeHtml(section.key)}"
                data-block-id="${escapeHtml(blockId)}"
                ${canMoveUp ? "" : "disabled"}
              >↑</button>
              <button
                type="button"
                class="icon-btn"
                data-action="move-block"
                data-direction="1"
                data-section="${escapeHtml(section.key)}"
                data-block-id="${escapeHtml(blockId)}"
                ${canMoveDown ? "" : "disabled"}
              >↓</button>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="custom-section">
        <h3>${escapeHtml(section.title)}</h3>
        ${rows || '<p class="panel-hint">该分区暂无可选交付块。</p>'}
      </div>
    `;
  }).join("");

  customEditorEl.querySelectorAll('input[data-action="toggle-block"]').forEach((input) => {
    input.addEventListener("change", () => {
      const section = input.dataset.section;
      const blockId = input.dataset.blockId;
      if (!section || !blockId) {
        return;
      }

      const view = ensureCustomView(page);
      const list = Array.isArray(view[section]) ? [...view[section]] : [];
      const index = list.indexOf(blockId);

      if (input.checked && index < 0) {
        list.push(blockId);
      }
      if (!input.checked && index >= 0) {
        list.splice(index, 1);
      }

      view[section] = list;
      state.customViews[page.id] = view;
      saveCustomViews();
      render();
    });
  });

  customEditorEl.querySelectorAll('button[data-action="move-block"]').forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;
      const blockId = button.dataset.blockId;
      const direction = Number(button.dataset.direction);
      if (!section || !blockId || Number.isNaN(direction)) {
        return;
      }

      const view = ensureCustomView(page);
      const list = Array.isArray(view[section]) ? [...view[section]] : [];
      const index = list.indexOf(blockId);
      const nextIndex = index + direction;

      if (index < 0 || nextIndex < 0 || nextIndex >= list.length) {
        return;
      }

      [list[index], list[nextIndex]] = [list[nextIndex], list[index]];
      view[section] = list;
      state.customViews[page.id] = view;
      saveCustomViews();
      render();
    });
  });
}

function renderHeader(page) {
  const view = getCurrentView(page);
  const stats = getDeliveryStats(page, view);
  pageHeaderEl.innerHTML = `
    <div class="page-title-wrap">
      <h2>${escapeHtml(page.name)}</h2>
      <p>${escapeHtml(page.subtitle)}</p>
    </div>
    <div class="meta-chips">
      <span class="chip primary">角色：${escapeHtml(getRoleLabel(state.roleId))}</span>
      <span class="chip">区域数：${escapeHtml(page.modules_count)}</span>
      <span class="chip">接口关注度：${escapeHtml(page.api_focus)}</span>
      <span class="chip">风险项：${escapeHtml(page.risks_count)}</span>
      <span class="chip">交付块：${escapeHtml(stats.ready)}/${escapeHtml(stats.total)} 已配置</span>
      <span class="chip ${stats.missing > 0 ? "warning" : "success"}">缺失：${escapeHtml(stats.missing)}</span>
    </div>
  `;
}

function renderMain(page, view) {
  fieldTableRegistry.clear();
  const sections = [
    renderSummary(page),
    ...SECTION_META.map((section) => renderSection(page, view, section)),
  ].join("");
  mainSectionsEl.innerHTML = sections;
}

function renderProjectOverview() {
  fieldTableRegistry.clear();
  rolePanelEl.classList.remove("hidden");
  customEditorPanelEl.classList.add("hidden");
  customEditorEl.innerHTML = "";
  viewToolbarEl.classList.add("hidden");

  pageHeaderEl.innerHTML = `
    <div class="page-title-wrap">
      <h2>${escapeHtml(PROJECT_OVERVIEW.name)}</h2>
      <p>${escapeHtml(PROJECT_OVERVIEW.subtitle)}</p>
    </div>
    <div class="meta-chips">
      ${PROJECT_OVERVIEW.chips.map((chip, index) => `<span class="chip ${index === 0 ? "primary" : ""}">${escapeHtml(chip)}</span>`).join("")}
    </div>
  `;

  inPageNavEl.innerHTML = PROJECT_OVERVIEW.sections
    .map((section, index) => `<a href="#${escapeHtml(section.id)}"><span class="nav-index">${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(section.title)}</span></a>`)
    .join("");

  mainSectionsEl.innerHTML = PROJECT_OVERVIEW.sections
    .map((section) => {
      const cards = Array.isArray(section.cards)
        ? `
          <div class="cards-grid">
            ${section.cards
              .map(
                (card) => `
                  <article class="card">
                    <h3 class="card-title">${escapeHtml(card.title)}</h3>
                    <p class="card-description">${escapeHtml(card.description)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        `
        : "";
      const items = Array.isArray(section.items) ? renderList(section.items) : "";
      return `
        <section id="${escapeHtml(section.id)}" class="section-block">
          <h2 class="section-title">${escapeHtml(section.title)}</h2>
          ${cards}
          ${items}
        </section>
      `;
    })
    .join("");
}

function renderTechInfo() {
  fieldTableRegistry.clear();
  rolePanelEl.classList.remove("hidden");
  customEditorPanelEl.classList.add("hidden");
  customEditorEl.innerHTML = "";
  viewToolbarEl.classList.add("hidden");

  pageHeaderEl.innerHTML = `
    <div class="page-title-wrap">
      <h2>${escapeHtml(TECH_INFO.name)}</h2>
      <p>${escapeHtml(TECH_INFO.subtitle)}</p>
    </div>
    <div class="meta-chips">
      ${TECH_INFO.chips.map((chip, index) => `<span class="chip ${index === 0 ? "primary" : ""}">${escapeHtml(chip)}</span>`).join("")}
    </div>
  `;

  inPageNavEl.innerHTML = TECH_INFO.sections
    .map((section, index) => `<a href="#${escapeHtml(section.id)}"><span class="nav-index">${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(section.title)}</span></a>`)
    .join("");

  mainSectionsEl.innerHTML = TECH_INFO.sections
    .map(
      (section) => `
        <section id="${escapeHtml(section.id)}" class="section-block">
          <h2 class="section-title">${escapeHtml(section.title)}</h2>
          <p class="section-lead">${escapeHtml(section.description)}</p>
          <div class="tech-config-card">
            ${section.rows
              .map(
                (row) => `
                  <div class="tech-config-row ${row.sensitive ? "sensitive" : ""}">
                    <span class="tech-config-key">${escapeHtml(row.label)}</span>
                    <code class="tech-config-value">${escapeHtml(row.value)}</code>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function initSidebarToggle() {
  if (!appLayoutEl || !sidebarToggleEl) {
    return;
  }

  sidebarToggleEl.addEventListener("click", () => {
    const collapsed = appLayoutEl.classList.toggle("sidebar-collapsed");
    sidebarToggleEl.textContent = collapsed ? "›" : "‹";
    sidebarToggleEl.setAttribute("aria-expanded", String(!collapsed));
    sidebarToggleEl.setAttribute("aria-label", collapsed ? "展开侧边栏" : "收起侧边栏");
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isImageViewerOpen() {
  return imageViewerEl && !imageViewerEl.classList.contains("hidden");
}

function setImageScale(scale) {
  if (!imageViewerImageEl || !imageViewerScaleEl) {
    return;
  }
  currentImageScale = clamp(scale, IMAGE_SCALE_MIN, IMAGE_SCALE_MAX);
  imageViewerImageEl.style.transform = `scale(${currentImageScale})`;
  imageViewerScaleEl.textContent = `${Math.round(currentImageScale * 100)}%`;
}

function openImageViewer({ src, title, link }) {
  if (!imageViewerEl || !imageViewerImageEl || !src) {
    return;
  }

  imageViewerImageEl.src = src;
  imageViewerImageEl.alt = title || "原型图放大预览";
  if (imageViewerTitleEl) {
    imageViewerTitleEl.textContent = title || "原型图预览";
  }

  if (imageViewerLinkEl) {
    if (link) {
      imageViewerLinkEl.href = link;
      imageViewerLinkEl.classList.remove("hidden");
    } else {
      imageViewerLinkEl.removeAttribute("href");
      imageViewerLinkEl.classList.add("hidden");
    }
  }

  setImageScale(1);
  imageViewerEl.classList.remove("hidden");
  imageViewerEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("viewer-open");
}

function closeImageViewer() {
  if (!imageViewerEl || !imageViewerImageEl) {
    return;
  }

  imageViewerEl.classList.add("hidden");
  imageViewerEl.setAttribute("aria-hidden", "true");
  imageViewerImageEl.removeAttribute("src");
  document.body.classList.remove("viewer-open");
}

function isMarkdownViewerOpen() {
  return markdownViewerEl && !markdownViewerEl.classList.contains("hidden");
}

function openMarkdownViewer({ title, content }) {
  if (!markdownViewerEl || !markdownViewerContentEl) {
    return;
  }

  if (markdownViewerTitleEl) {
    markdownViewerTitleEl.textContent = title || "完整 Markdown";
  }
  markdownViewerContentEl.textContent = content || "未提供 Markdown 内容。";
  markdownViewerEl.classList.remove("hidden");
  markdownViewerEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("viewer-open");
}

function closeMarkdownViewer() {
  if (!markdownViewerEl || !markdownViewerContentEl) {
    return;
  }

  markdownViewerEl.classList.add("hidden");
  markdownViewerEl.setAttribute("aria-hidden", "true");
  markdownViewerContentEl.textContent = "";
  document.body.classList.remove("viewer-open");
}

function escapeMarkdownCell(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\n", "<br>");
}

function buildMarkdownTable(table) {
  const header = `| ${table.columns.map((column) => escapeMarkdownCell(column.label)).join(" | ")} |`;
  const separator = `| ${table.columns.map(() => "---").join(" | ")} |`;
  const rows = table.rows.map((row) => `| ${table.columns.map((column) => escapeMarkdownCell(row[column.key])).join(" | ")} |`);
  return [header, separator, ...rows].join("\n");
}

function escapeCsvCell(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

function buildCsv(table) {
  const header = table.columns.map((column) => escapeCsvCell(column.label)).join(",");
  const rows = table.rows.map((row) => table.columns.map((column) => escapeCsvCell(row[column.key])).join(","));
  return [header, ...rows].join("\n");
}

function buildExcelHtml(table) {
  const head = table.columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("");
  const body = table.rows
    .map((row) => `<tr>${table.columns.map((column) => `<td>${escapeHtml(row[column.key] ?? "")}</td>`).join("")}</tr>`)
    .join("");
  return `<!doctype html><html><head><meta charset="UTF-8"></head><body><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></body></html>`;
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getFieldTableFromButton(button) {
  const tableId = button.dataset.fieldTableId;
  return tableId ? fieldTableRegistry.get(tableId) : null;
}

function initImageViewer() {
  if (!mainSectionsEl || !imageViewerEl) {
    return;
  }

  mainSectionsEl.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const markdownButton = target.closest('button[data-action="open-markdown"]');
    if (markdownButton instanceof HTMLButtonElement) {
      openMarkdownViewer({
        title: markdownButton.dataset.markdownTitle || "完整 Markdown",
        content: markdownButton.dataset.markdown || "",
      });
      return;
    }

    const fieldButton = target.closest("button[data-field-table-id]");
    if (fieldButton instanceof HTMLButtonElement) {
      const table = getFieldTableFromButton(fieldButton);
      if (!table) {
        return;
      }

      if (fieldButton.dataset.action === "copy-field-md") {
        const originalText = fieldButton.textContent;
        copyText(buildMarkdownTable(table));
        fieldButton.textContent = "已复制";
        window.setTimeout(() => {
          fieldButton.textContent = originalText || "复制";
        }, 1400);
        return;
      }

      const safeTitle = table.title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9_-]/g, "_");
      if (fieldButton.dataset.action === "download-field-csv") {
        downloadBlob(`\uFEFF${buildCsv(table)}`, `${safeTitle}.csv`, "text/csv;charset=utf-8");
        return;
      }
      if (fieldButton.dataset.action === "download-field-xls") {
        downloadBlob(`\uFEFF${buildExcelHtml(table)}`, `${safeTitle}.xls`, "application/vnd.ms-excel;charset=utf-8");
        return;
      }
    }

    const prdButton = target.closest('button[data-action="switch-prd"]');
    if (prdButton instanceof HTMLButtonElement) {
      const card = prdButton.closest(".module-prd-card");
      const targetPane = prdButton.dataset.target;
      if (!card || !targetPane) {
        return;
      }

      card.querySelectorAll(".module-prd-toggle").forEach((button) => {
        button.classList.toggle("active", button === prdButton);
      });
      card.querySelectorAll(".module-prd-pane").forEach((pane) => {
        if (!(pane instanceof HTMLElement)) {
          return;
        }
        pane.classList.toggle("hidden", pane.dataset.prdPane !== targetPane);
      });
      return;
    }

    const imageEl = target.closest(".design-image");
    if (!(imageEl instanceof HTMLImageElement)) {
      return;
    }
    openImageViewer({
      src: imageEl.currentSrc || imageEl.src,
      title: imageEl.alt || "原型图预览",
      link: imageEl.dataset.viewerLink || imageEl.currentSrc || imageEl.src,
    });
  });

  imageViewerEl.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.dataset.action === "close-image-viewer") {
      closeImageViewer();
    }
  });

  markdownViewerEl?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.dataset.action === "close-markdown-viewer") {
      closeMarkdownViewer();
    }
  });

  zoomInBtnEl?.addEventListener("click", () => {
    if (!isImageViewerOpen()) {
      return;
    }
    setImageScale(currentImageScale + IMAGE_SCALE_STEP);
  });

  zoomOutBtnEl?.addEventListener("click", () => {
    if (!isImageViewerOpen()) {
      return;
    }
    setImageScale(currentImageScale - IMAGE_SCALE_STEP);
  });

  imageViewerCanvasEl?.addEventListener(
    "wheel",
    (event) => {
      if (!isImageViewerOpen()) {
        return;
      }
      event.preventDefault();
      const delta = event.deltaY < 0 ? IMAGE_SCALE_STEP : -IMAGE_SCALE_STEP;
      setImageScale(currentImageScale + delta);
    },
    { passive: false }
  );

  document.addEventListener("keydown", (event) => {
    if (isMarkdownViewerOpen() && event.key === "Escape") {
      closeMarkdownViewer();
      return;
    }
    if (!isImageViewerOpen()) {
      return;
    }
    if (event.key === "Escape") {
      closeImageViewer();
      return;
    }
    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      setImageScale(currentImageScale + IMAGE_SCALE_STEP);
      return;
    }
    if (event.key === "-" || event.key === "_") {
      event.preventDefault();
      setImageScale(currentImageScale - IMAGE_SCALE_STEP);
    }
  });
}

function render() {
  renderProjectTab();
  renderPageTabs();
  renderRoleTabs();

  if (state.surface === "project") {
    renderProjectOverview();
    return;
  }

  if (state.surface === "tech") {
    renderTechInfo();
    return;
  }

  rolePanelEl.classList.remove("hidden");
  viewToolbarEl.classList.add("hidden");
  const page = getCurrentPage();
  const view = getCurrentView(page);
  renderInPageNav(page, view);
  renderHeader(page);
  renderMain(page, view);
  renderCustomEditor(page);
}

initSidebarToggle();
initImageViewer();
render();
