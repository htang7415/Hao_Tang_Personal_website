import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'polydit',
    title: 'PolyDiT: Five-Representation Diffusion Transformer',
    typeOrVenue: 'Research Assistant, UW-Madison, 2025-present',
    summary:
      'A five-view Diffusion Transformer framework for polymer generation, property prediction, inverse design, retrieval, OOD analysis, and reranking.',
    tags: ['Diffusion Models', 'Transformers', 'Polymer Informatics'],
    links: {
      code: 'https://github.com/htang7415/PolyDiffusion'
    },
    featured: true,
    highlights: `
- Built p-SMILES, BPE p-SMILES, SELFIES, Group SELFIES, and graph-token DiT pipelines with shared generation and evaluation workflows.
- Benchmarked 20 model-size/view runs across 200,000 generated polymers and reached holdout-test R2 up to 0.919 across eight property-prediction tasks.
`
  },
  {
    id: 'uq-benchmark',
    title: 'Uncertainty Quantification for Polymer Property Prediction',
    typeOrVenue: 'Journal of Chemical Information and Modeling, 2025',
    summary:
      'A systematic benchmark of uncertainty methods for polymer-property prediction under in-distribution, OOD, high-Tg, and class-specific evaluation settings.',
    tags: ['Uncertainty Quantification', 'Bayesian ML', 'Calibration'],
    links: {
      pdf: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.5c00550',
      code: 'https://github.com/htang7415/Uncertianty_quantification_Polymer_informatics'
    },
    featured: true,
    highlights: `
- Benchmarked nine UQ methods across Tg, Eg, Tm, and Td using 5-fold cross-validation, Optuna tuning, R2, Spearman correlation, and calibration area.
- Evaluated 240 experimental OOD Tg samples, 566 MD-derived OOD Tg samples, 442 high-Tg candidates, and nine structural classes.
`
  },
  {
    id: 'rl-inverse-design',
    title: 'RL-Guided Water-Miscible Inverse Design',
    typeOrVenue: 'Research Assistant, UW-Madison, 2026',
    summary:
      'A target-conditioned diffusion workflow for constrained water-miscible polymer design with CFG, best-of-k guidance, PPO, GRPO, DPO, and RL alignment.',
    tags: ['Inverse Design', 'Reinforcement Learning', 'Diffusion'],
    featured: true,
    highlights: `
- Built condition bundles, classifier-free guidance, family-aware decode priors, and gates for validity, novelty, solubility, chi bounds, class match, and synthetic accessibility.
- Compared S0-S4 methods across four target settings; supervised S2 reached 93.2% mean discovery hit rate and aligned S4 variants reached 96.7%-98.9%.
`
  },
  {
    id: 'maxionbench',
    title: 'MaxionBench: Retrieval Infrastructure Decision Audits',
    typeOrVenue: 'Research software, 2026',
    summary:
      'A reproducible Python benchmark for comparing vector retrieval engines as operational-memory candidates under explicit quality, latency, context-cost, and conformance constraints.',
    tags: ['Retrieval', 'Benchmarking', 'FAISS', 'Qdrant'],
    featured: true,
    highlights: `
- Built engine adapters and a shared contract for FAISS, LanceDB, pgvector, and Qdrant across lifecycle, CRUD, filtering, query, batch query, flush, compaction, and stats operations.
- Validated 72 archived run directories with 0 strict-schema errors and reported objective-sensitive decisions instead of a single universal ranking.
`
  },
  {
    id: 'memtrace',
    title: 'MEMTRACE: Persistent-Memory Risk in Tool-Using Agents',
    typeOrVenue: 'Research software, 2026',
    summary:
      'A Python/MLX benchmark for tracing delayed memory risk in tool-using agents from retrieval exposure through memory admission, planning, policy diagnostics, and tool execution.',
    tags: ['LLM Agents', 'Memory', 'Evaluation', 'MLX'],
    featured: true,
    highlights: `
- Produced a 324-trace audited pilot across three memory-system variants plus a 72-trace oracle-retrieved-memory calibration packet.
- Implemented Pydantic trace schemas, deterministic tool stubs, causal-chain scoring, Wilson intervals, no-inference metric regeneration, and pytest-covered validation.
`
  },
  {
    id: 'siga',
    title: 'Stochastic Isogeometric Buckling Analysis of Composite Shells',
    typeOrVenue: 'Reliability Engineering & System Safety, 2023',
    summary:
      'A stochastic isogeometric analysis framework for composite-shell buckling under thickness, material-property, and fiber-angle uncertainty.',
    tags: ['Stochastic Modeling', 'Reliability', 'Isogeometric Analysis'],
    links: {
      pdf: 'https://www.sciencedirect.com/science/article/pii/S0951832022005270'
    },
    featured: true,
    highlights: `
- Modeled thickness, material-property, and fiber-angle uncertainty as spatial random fields using Karhunen-Loeve expansion and isogeometric Galerkin projection.
- Validated probabilistic buckling and reliability estimates against SFEM and MCS, with tested response errors below 1.5% and probability-of-failure errors below 5%.
`
  }
];
