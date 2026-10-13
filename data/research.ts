import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'memtrace',
    title: 'MEMTRACE: LLM Agent Serving and KV-Cache Research Platform',
    typeOrVenue: 'Research platform · Sept. 2025 - Oct. 2026',
    summary:
      'A platform for measuring how serving decisions (engine, routing, context, KV-cache tier) decide whether an LLM agent\'s history stays cached. vLLM and llama.cpp run behind llm-d on Kubernetes with a Go gateway in front, and every result is labeled real or simulated.',
    tags: ['LLM Serving', 'vLLM', 'llm-d', 'KV Cache', 'Go', 'Kubernetes'],
    links: {
      code: 'https://github.com/htang7415/MEMTRACE'
    },
    featured: true,
    highlights: `
- Cache-aware context management in the Go gateway cut prefill recompute 14-39% on 4 paired GitHub Copilot replays, and Gemini prompt tokens 50% over 100 paired tasks with no detectable accuracy loss.
- A real SSD KV-offload tier (one replica, Qwen3-0.6B, 3 paired repeats, pre-registered rules) cut the prefix recomputed by calls returning after a pause from 33-43% to 2-15%, and their TTFT p95 by 41-53%; the median barely moved.
- Cache-aware llm-d routing reached 1.8-2.3× random routing's throughput on 4 simulated replicas calibrated to vLLM; a KV-cache simulator matched a real engine's prefix reuse within 0.7 points.
`
  },
  {
    id: 'rl-inverse-design',
    title: 'RL-Aligned Conditional Diffusion Transformer for Targeted Generation',
    typeOrVenue: 'Research Assistant, UW-Madison · Sept. 2025 - Mar. 2026',
    summary:
      'Treats reverse diffusion as a policy: a conditional masked Diffusion Transformer is aligned to a multi-constraint reward with PPO, GRPO, and DPO under KL control.',
    tags: ['Diffusion', 'Post-Training', 'Reinforcement Learning', 'PyTorch'],
    featured: true,
    highlights: `
- A 10.9M-parameter conditional DiT trained on 1,250 labeled condition rows raised discovery hit rate from 66.9% (frozen guidance) to 93.2%.
- RL alignment raised it further: 98.9% with PPO (79.7% quota fill) and 98.2% with GRPO (93.5% fill).
`
  },
  {
    id: 'polydit',
    title: 'PolyDiT: Scalable Multi-Representation Diffusion Transformers',
    typeOrVenue: 'Research Assistant, UW-Madison · Sept. 2024 - Aug. 2025',
    summary:
      'Masked discrete Diffusion Transformers across five representations (character, BPE, constrained tokens, fragments, graphs), testing how representation and model size shape generation and learned features.',
    tags: ['Diffusion Models', 'Transformers', 'Distributed Training'],
    links: {
      code: 'https://github.com/htang7415/PolyDiffusion'
    },
    featured: true,
    highlights: `
- Trained 10.9M-681.1M-parameter denoisers on 19.3M training objects with PyTorch DDP (NCCL, BF16) on 2 nodes × 4 H100 GPUs.
- Evaluated 200,000 generations: no single representation won both validity and property prediction; best held-out R^2 0.943 and up to 62.18 valid samples/s.
`
  },
  {
    id: 'uq-benchmark',
    title: 'Uncertainty-Aware ML Model Selection Benchmark',
    typeOrVenue: 'Nov. 2023 - Apr. 2024 · JCIM, 2025',
    summary:
      'A benchmark for choosing uncertainty-aware models for property prediction across in-distribution, out-of-distribution, high-Tg, and polymer-family settings.',
    tags: ['Uncertainty Quantification', 'Bayesian ML', 'Calibration'],
    links: {
      pdf: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.5c00550',
      code: 'https://github.com/htang7415/Uncertianty_quantification_Polymer_informatics'
    },
    featured: true,
    highlights: `
- Designed the methodology and implemented the evaluation framework: nine UQ methods on 15,334 samples (Tg, Eg, Tm, Td), scored on R^2, Spearman error ranking, and calibration area.
- No method wins everywhere: Ensemble led in-distribution, BNN-MCMC gave the best OOD balance, and NGBoost ranked first on 442 high-Tg polymers.
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
- Kept buckling-statistic errors below 1.5% against 10,000-sample Monte Carlo (SFEM reached 6.72%), and matched SFEM's reliability accuracy in 11 s instead of 515 s.
`
  }
];
