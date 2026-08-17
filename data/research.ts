import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'meshstake',
    title: 'MeshStake: Evidence-First AI Research Referee',
    typeOrVenue: 'Research software · May 2026 - Present',
    summary:
      'A safety-constrained AI system for verified public-company analysis: a pinned LLM proposes structured claims, while deterministic software alone evaluates evidence and composes the publication verdict.',
    tags: ['AI Reliability', 'LLM Evaluation', 'Retrieval Grounding', 'AWS'],
    featured: true,
    links: {
      demo: 'https://app.meshstake.com/'
    },
    highlights: `
- Built a 45.6K-LOC evidence-first system spanning 128 Python modules across 9 domain subpackages; deterministic verification produces 1 of 5 scoped publication verdicts rather than treating fluent model output as evidence.
- Implemented 5-field exact-fact retrieval, typed grounding, warrant and counterevidence checks, and 3 independently versioned hashes per result; validated failure paths with 816 test functions across 135 Python test files.
- Built a safety-constrained FastAPI/AWS core and an IAM-only asynchronous pilot; replayed a terminal journaled message without state or audit drift while keeping the pilot outside public-scale claims.
`
  },
  {
    id: 'memtrace',
    title: 'MEMTRACE: Memory-Safety Evaluation for Tool-Using Agents',
    typeOrVenue: 'Research software · Jan. 2026 - May 2026',
    summary:
      'A trace-level Python evaluation framework that separates delayed prompt-injection risk across retrieval exposure, memory admission, planning, policy diagnostics, and tool execution.',
    tags: ['LLM Agents', 'Evaluation', 'Memory Safety', 'Pydantic'],
    featured: true,
    highlights: `
- Generated 396 trace records across 12 synthetic enterprise-assistant tasks; permissive admission stored poisoned facts in 6/72 stateful attacks, while provenance-aware admission stored 0/72.
- Built deterministic tool stubs, Pydantic trace schemas, JSONL records, causal-chain scorers, Wilson intervals, audit manifests, and no-inference metric regeneration.
`
  },
  {
    id: 'rl-inverse-design',
    title: 'RL-Aligned Conditional Diffusion Transformer for Targeted Generation',
    typeOrVenue: 'Research Assistant, UW-Madison · Sept. 2025 - Mar. 2026',
    summary:
      'A target-conditioned discrete diffusion pipeline that turns reverse diffusion into a reward-optimized policy with trajectory replay, KL control, PPO, GRPO, and DPO comparisons.',
    tags: ['Diffusion', 'Post-Training', 'Reinforcement Learning', 'PyTorch'],
    featured: true,
    highlights: `
- Built a reproducible PyTorch target-conditioned generation pipeline for 1,250 target configurations under 7D conditions, using a 10.9M masked DiT, checkpoints, batch inference, and structured metrics.
- Raised discovery hit rate from a 93.2% supervised conditional-DiT baseline to 98.9% with policy-aligned variants while tracking validity, novelty, class matching, feasibility, quota fill, and macro target success.
`
  },
  {
    id: 'maxionbench',
    title: 'MaxionBench: Agent-Memory Retrieval Decision Benchmark',
    typeOrVenue: 'Research software · Sept. 2025 - Feb. 2026',
    summary:
      'A conformance-gated benchmark for choosing retrieval infrastructure used as agent operational memory under quality, latency, freshness, context-cost, and budget constraints.',
    tags: ['Retrieval', 'Vector Search', 'FAISS', 'Qdrant'],
    featured: true,
    highlights: `
- Built a conformance-gated Python package with CLI workflows, typed schemas, dataset loaders, Docker-backed services, and FAISS/LanceDB/pgvector/Qdrant adapters behind one contract.
- Validated 72 strict-schema run directories with 0 errors and selected FAISS CPU/bge-small at 0.852 HotpotQA coverage@10 and 22.8-ms max p99 under a 200-ms policy.
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
- Scaled denoisers from 10.9M to 681.1M parameters; evaluated 200,000 generated samples and reached 1.0 validity, 0.943 held-out R^2, 0.903 diversity, and 62.18 valid samples/s.
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
- Benchmarked nine UQ methods on 15,334 samples across Tg, Eg, Tm, and Td with Optuna tuning, R^2, Spearman correlation, and calibration metrics.
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
