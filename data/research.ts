import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'memtrace',
    title: 'MEMTRACE: LLM-Agent Memory-Safety Evaluation Harness',
    typeOrVenue: 'Research software · Jan. 2026 - May 2026',
    summary:
      'A Python/MLX harness for tracing persistent-memory risk from retrieval exposure through memory admission, planning, policy diagnostics, and tool execution.',
    tags: ['LLM Agents', 'Evaluation', 'Memory Safety', 'MLX'],
    featured: true,
    highlights: `
- Produced 396 trace records across 12 synthetic enterprise tasks; permissive memory stored poisoned facts in 6/72 cases, while provenance-aware memory stored 0/72.
- Built Pydantic trace schemas, deterministic tools, causal-chain scorers, Wilson intervals, no-inference metric regeneration, and pytest-covered validation gates.
`
  },
  {
    id: 'rl-inverse-design',
    title: 'RL-Aligned Conditional Diffusion Transformer',
    typeOrVenue: 'Research Assistant, UW-Madison · Sept. 2025 - Mar. 2026',
    summary:
      'A target-conditioned discrete diffusion system for constrained generation with classifier-free guidance, oracle-guided sampling, reward shaping, PPO, GRPO, and DPO.',
    tags: ['Diffusion', 'Post-Training', 'Reinforcement Learning', 'PyTorch'],
    featured: true,
    highlights: `
- Built a 10.9M-parameter masked Diffusion Transformer with 1,250 target configurations, 7-dimensional conditions, checkpointed GPU training, and batch inference.
- Raised discovery hit rate from a 93.2% supervised baseline to 98.9% after RL-style alignment while tracking validity, novelty, feasibility, and target bounds.
`
  },
  {
    id: 'maxionbench',
    title: 'MaxionBench: Vector Retrieval Benchmark for Agentic Memory',
    typeOrVenue: 'Research software · Sept. 2025 - Feb. 2026',
    summary:
      'A reproducible benchmark for choosing retrieval engines under conformance, quality, latency, context-cost, and budget constraints.',
    tags: ['Retrieval', 'Vector Search', 'FAISS', 'Qdrant'],
    featured: true,
    highlights: `
- Built shared adapters for FAISS, LanceDB, pgvector, and Qdrant across lifecycle, CRUD, filtering, batch query, flush, compaction, and stats operations.
- Validated 72 archived run directories with 0 strict-schema errors and selected FAISS CPU/bge-small for 0.852 evidence coverage at 22.8 ms max p99 latency.
`
  },
  {
    id: 'polydit',
    title: 'PolyDiT: Scalable Multi-Representation Diffusion Transformers',
    typeOrVenue: 'Research Assistant, UW-Madison · Sept. 2024 - Aug. 2025',
    summary:
      'A masked discrete Diffusion Transformer stack across character, BPE, constrained-token, fragment, and graph representations.',
    tags: ['Diffusion Models', 'Transformers', 'Distributed Training'],
    links: {
      code: 'https://github.com/htang7415/PolyDiffusion'
    },
    featured: true,
    highlights: `
- Built a PyTorch DiT training stack over 19.3M train and 1.0M validation objects with reproducible tokenization, BF16 DDP, and 8-GPU/2-node launch support.
- Scaled denoisers from 10.9M to 681.1M parameters; evaluated 200K generated samples and reached 1.0 validity, 0.943 held-out R-squared, and 0.903 diversity.
`
  },
  {
    id: 'uq-benchmark',
    title: 'Uncertainty-Aware ML Model Selection Benchmark',
    typeOrVenue: 'Nov. 2023 - Apr. 2024 · JCIM, 2025',
    summary:
      'A model-selection benchmark for uncertainty-aware property prediction under in-distribution, OOD, high-Tg, and family-specific settings.',
    tags: ['Uncertainty Quantification', 'Bayesian ML', 'Calibration'],
    links: {
      pdf: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.5c00550',
      code: 'https://github.com/htang7415/Uncertianty_quantification_Polymer_informatics'
    },
    featured: true,
    highlights: `
- Benchmarked nine UQ methods on 15,334 samples across Tg, Eg, Tm, and Td with Optuna tuning, R-squared, Spearman correlation, and calibration metrics.
- Evaluated 240 experimental OOD Tg samples, 566 MD-derived OOD Tg samples, 442 high-Tg candidates, and nine structural families to guide model choice.
`
  },
  {
    id: 'siga',
    title: 'Stochastic Isogeometric Reliability Modeling',
    typeOrVenue: 'Sept. 2020 - Mar. 2022 · Reliability Engineering & System Safety, 2023',
    summary:
      'A stochastic isogeometric analysis framework for composite-shell buckling under thickness, material-property, and fiber-angle uncertainty.',
    tags: ['Stochastic Modeling', 'Reliability', 'Isogeometric Analysis'],
    links: {
      pdf: 'https://www.sciencedirect.com/science/article/pii/S0951832022005270'
    },
    featured: true,
    highlights: `
- Modeled thickness, material-property, and fiber-angle uncertainty as spatial random fields using Karhunen-Loeve expansion and isogeometric Galerkin projection.
- Validated probabilistic buckling against SFEM and 10,000-sample MCS, reducing tested response error below 1.5% and runtime from 515 s to 11 s.
`
  }
];
