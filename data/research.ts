import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'maxionbench',
    title: 'MaxionBench: Retrieval Infrastructure Decision Audits',
    typeOrVenue: 'Research software, 2026',
    summary:
      'A reproducible Python benchmark for evaluating vector retrieval engines as operational memory candidates under explicit conformance, quality, latency, throughput, budget-stability, and context-cost constraints.',
    tags: ['Retrieval', 'Benchmarking', 'FAISS', 'Qdrant'],
    featured: true,
    highlights: `
- Built a Python benchmark package with CLI workflows, typed result schemas, engine adapters, dataset loaders, orchestration, reporting, and archive tooling for FAISS, LanceDB, pgvector, and Qdrant.
- Designed a shared adapter contract covering lifecycle, CRUD, filtering, update/delete semantics, batch query, flush/commit, compaction, and resource stats.
- Implemented B0/B1/B2 orchestration with promotion gates and strict-schema validation; validated 72 archived run directories with 0 schema errors.
- Evaluated static retrieval, streaming memory, and multi-evidence retrieval workloads, reporting objective-sensitive decisions rather than a single universal ranking.
`
  },
  {
    id: 'memtrace',
    title: 'MEMTRACE: Persistent-Memory Risk in Tool-Using Agents',
    typeOrVenue: 'Research software, 2026',
    summary:
      'A Python/MLX benchmark harness that separates retrieval exposure, memory admission, trigger-time retrieval, planner proposals, policy-check diagnostics, unsafe tool execution, and execution-format failures.',
    tags: ['LLM Agents', 'Memory', 'Evaluation', 'MLX'],
    featured: true,
    highlights: `
- Built a trace-level evaluation protocol for delayed memory-mediated risk in tool-using agents with matched clean, one-shot, and stateful attack episodes.
- Produced a 324-trace audited pilot across three memory-system variants, plus a 72-trace oracle-retrieved-memory calibration packet.
- Implemented Pydantic trace schemas, deterministic tool stubs, causal-chain scoring, Wilson intervals, no-inference metric regeneration, and pytest-covered validation.
- Showed why one-shot unsafe execution, poisoned-memory admission, trigger-time retrieval, and delayed unsafe execution need to be measured as separate outcomes.
`
  },
  {
    id: 'polydit',
    title: 'PolyDiT: Five-Representation Diffusion Transformer',
    typeOrVenue: 'Research Assistant, UW-Madison, 2025-present',
    summary:
      'A five-view Diffusion Transformer framework for generation, representation learning, property prediction, retrieval, OOD analysis, and reranking across sequence and graph representations.',
    tags: ['Diffusion Models', 'Transformers', 'Distributed Training'],
    links: {
      code: 'https://github.com/htang7415/PolyDiffusion'
    },
    featured: true,
    highlights: `
- Built Slurm/PyTorch DDP workflows for character p-SMILES, BPE p-SMILES, SELFIES, Group SELFIES, and graph-token DiT pipelines on a 4-node, 16-GPU cluster.
- Benchmarked 20 model-size/view generation runs across 200,000 generated candidates, tracking validity, two-star validity, uniqueness, novelty, diversity, synthetic accessibility, and valid-per-second throughput.
- Achieved up to 99.77% valid two-attachment generation with SELFIES, 89.37% with Graph, and 83.21% with Group SELFIES on 10,000-sample benchmarks.
- Reused pretrained DiT backbones as property predictors across eight tasks, reaching holdout-test R2 up to 0.919 and average best-view R2 of 0.800.
`
  },
  {
    id: 'rl-inverse-design',
    title: 'RL-Guided Water-Miscible Inverse Design',
    typeOrVenue: 'Research Assistant, UW-Madison, 2026',
    summary:
      'A target-conditioned diffusion workflow comparing supervised conditional generation, classifier-free guidance, best-of-k oracle guidance, and PPO/GRPO/DPO/RL alignment for constrained molecular design.',
    tags: ['Inverse Design', 'Reinforcement Learning', 'Diffusion'],
    featured: true,
    highlights: `
- Built the Step 5 inverse-design driver for target-conditioned diffusion, resolving target rows, manifests, validation diagnostics, config snapshots, and enabled S0-S4 runs.
- Implemented 7-dimensional condition bundles, shift-only conditional transformer modulation, classifier-free guidance, family-aware decode priors, and final repair heuristics.
- Evaluated generated candidates with gates for validity, novelty, terminal-star correctness, solubility, chi bounds, class match, and synthetic accessibility.
- Compared S0-S4 methods across four target settings; S2 reached a 93.2% mean discovery hit rate, while aligned S4 variants reached 96.7%-98.9%.
`
  },
  {
    id: 'uq-benchmark',
    title: 'Uncertainty Quantification for ML Property Prediction',
    typeOrVenue: 'Journal of Chemical Information and Modeling, 2025',
    summary:
      'A systematic benchmark of nine uncertainty quantification methods across multiple property targets, OOD data, high-temperature subsets, and structural classes.',
    tags: ['Uncertainty Quantification', 'Bayesian ML', 'Calibration'],
    links: {
      pdf: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.5c00550',
      code: 'https://github.com/htang7415/Uncertianty_quantification_Polymer_informatics'
    },
    featured: true,
    highlights: `
- Benchmarked Ensemble, GPR, MCD, MVE, BNN-VI, BNN-MCMC, EDL, QR, and NGBoost across Tg, Eg, Tm, and Td targets.
- Used 5-fold cross-validation, Optuna tuning, R2, Spearman correlation, and calibration area to evaluate accuracy and uncertainty quality together.
- Evaluated 240 experimental OOD Tg samples, 566 MD-derived OOD Tg samples, 442 high-Tg candidates, and nine structural classes.
- Found context-dependent winners: Ensemble for in-distribution prediction, BNN-MCMC for OOD Tg, NGBoost for high-Tg candidates, and BNN-VI across structural classes.
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
- Developed a SIGA framework for composite-shell buckling, representing uncertain thickness, material properties, and fiber angles as spatial random fields.
- Discretized Gaussian random fields with Karhunen-Loeve expansion and isogeometric Galerkin projection, then derived first-order perturbation terms.
- Validated probabilistic buckling estimates against SFEM and MCS, keeping free-form-shell response errors below 1.5% in tested cases.
- Matched reliability-analysis probability-of-failure estimates with relative errors below 5% for tested cases while reducing computational cost versus SFEM and MCS.
`
  }
];
