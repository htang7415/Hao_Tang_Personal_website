import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'r1',
    title: 'Generative AI for Functional Polymer Inverse Design',
    typeOrVenue: 'Research Assistant, UW–Madison, 2025–present',
    summary:
      'Developing diffusion- and transformer-based generative models with LLM-based fragment encoders for inverse design of functional polymers under validity, uniqueness, and synthetic feasibility constraints.',
    tags: ['Generative Models', 'Diffusion', 'AI for Science'],
    links: {
      code: 'https://github.com/htang7415/PolyDiffusion'
    },
    featured: true,
    highlights: `
- Built Diffusion Transformer (DiT) and transformer-based inverse design models across polymer representations (SMILES, SELFIES, Group SELFIES, and graph tokens), enabling controllable sampling with constraints on connectivity, validity, uniqueness, and synthetic feasibility.
- Designed multimodal tokenizers and embedding spaces, training LLM-based fragment encoders and graph-aware embeddings to align sequence- and structure-level representations, improving chemical grammar learning and downstream property prediction.
- Developed property- and function-guided generation for single- and multi-objective targets (e.g., resistance, solubility, stability, functional-group constraints), combining DiT sampling with reinforcement learning and Bayesian optimization for structure refinement.
- Built an AI-agent-driven generation loop to orchestrate prompting, sampling, scoring, and iterative refinement, automating evaluation and reducing manual screening via validity/novelty/goal-satisfaction metrics.
- Ran systematic representation and scaling comparisons, benchmarking tokenizer choices and DiT/transformer scaling behavior, and showed multimodal transformer embeddings outperform traditional feature engineering for inverse design and property prediction tasks.
`
  },
  {
    id: 'r2',
    title: 'Machine Learning for Water-Soluble Polymer Discovery',
    typeOrVenue: 'Research Assistant, UW–Madison, 2024–2025',
    summary:
      'Combines high-throughput simulation, physics-informed neural networks, and Bayesian optimization to discover synthesizable water-soluble polymers at scale.',
    tags: ['Machine Learning', 'Bayesian Optimization', 'HPC'],
    links: {
      code: 'https://github.com/htang7415/Water_soluble_polymer_discovery',
      demo: 'https://polymer-prediction-platform-ht.streamlit.app/'
    },
    featured: true,
    highlights: `
- Built an HPC data-generation pipeline using MPI and Slurm to process 14.8M+ candidate polymers, accelerating screening and reducing compute latency.
- Developed PINNs and transfer-learning models that achieve 0.98 R² and 97% classification accuracy for molecular property prediction.
- Implemented Bayesian optimization over LogP and Flory–Huggins χ to prioritize promising candidates and reduce evaluation time.
- Deployed a web-based prediction platform with Streamlit (Polymer-Discovery-Platform) for interactive model inference and visualization.
`
  },
  {
    id: 'r3',
    title: 'Uncertainty Quantification in Machine Learning for Polymer Informatics',
    typeOrVenue: 'Research Assistant, UW–Madison, 2023–2024',
    summary:
      'Designs an ML infrastructure and uncertainty-aware evaluation framework for robust polymer property prediction across in- and out-of-distribution regimes.',
    tags: ['Uncertainty Quantification', 'Machine learning', 'AI for Science'],
    links: {
      pdf: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.5c00550',
      code: 'https://github.com/htang7415/Uncertianty_quantification_Polymer_informatics'
    },
    featured: true,
    highlights: `
- Designed a modular ML infrastructure in PyTorch and scikit-learn for large-scale polymer property prediction.
- Benchmarked 9 uncertainty quantification methods to improve reliability on both in-distribution and out-of-distribution datasets.
- Automated evaluation pipelines with R², Spearman’s ρ, and calibration metrics, significantly reducing manual analysis effort.
- Containerized end-to-end workflows with Docker and optimized job scheduling using Slurm to enable reproducible, scalable HPC training.
`
  },
  {
    id: 'r4',
    title: 'Stochastic Isogeometric Buckling Analysis of Composite Shells with Multiple Uncertainties',
    typeOrVenue: 'Research Assistant, Dalian University of Technology, 2021–2022',
    summary:
      'Introduces a stochastic isogeometric analysis framework for composite shells to quantify probabilistic buckling behavior under multiple sources of uncertainty.',
    tags: ['Isogeometric Analysis', 'Stochastic Modeling', 'Composite Structures'],
    links: {
      pdf: 'https://www.sciencedirect.com/science/article/pii/S0951832022005270'
    },
    featured: true,
    highlights: `
- Built an isogeometric analysis framework in MATLAB/C++ that integrates uncertainty and reliability evaluation for shell structures.
- Modeled spatially varying randomness using Karhunen–Loève expansions for stochastic representation of material and geometric properties.
- Predicted probabilistic buckling behavior and assessed structural safety using perturbation-based stochastic methods.
`
  },
  {
    id: 'r5',
    title: 'NURBS-Based Degenerated Stiffener Element for Isogeometric Static and Buckling Analysis',
    typeOrVenue: 'Research Assistant, Dalian University of Technology, 2021',
    summary:
      'Develops a NURBS-based degenerated stiffener element to enable accurate and efficient static and buckling analysis of stiffened shell structures.',
    tags: ['Isogeometric Analysis', 'NURBS', 'Structural Mechanics'],
    links: {
      pdf: '#'
    },
    featured: false,
    highlights: `
- Proposed a stiffener design strategy based on main stress-line analysis to guide optimal reinforcement layouts in stiffened shells.
- Designed thin-walled stiffeners via isogeometric analysis (IGA), improving load transfer efficiency in complex shell geometries.
- Verified stiffener accuracy and design efficiency through Abaqus finite element simulations.
`
  },
  {
    id: 'r6',
    title: 'Modal Analysis of Pipe Structures Considering Fluid-Structure Interaction',
    typeOrVenue: 'Research Assistant, Dalian University of Technology, 2020–2021',
    summary:
      'Modal and acoustic analysis of pipe structures under fluid–structure interaction using CAD modeling and finite element simulations, validated against experiments.',
    tags: ['Fluid–Structure Interaction', 'Modal Analysis', 'FEA'],
    links: {
      pdf: '#'
    },
    featured: false,
    highlights: `
  - Modeled and assembled a water tunnel pipe structure in UG CAD, producing simulation-ready 3D geometry.
  - Performed acoustic and pre-stress modal analysis in ANSYS Workbench to capture coupled fluid–structure effects.
  - Validated simulation results against experiments, reducing error to below 10% and ensuring predictive accuracy.
  `
  },
  {
    id: 'r7',
    title: 'Computational Mechanics & Structural Optimization Studies',
    typeOrVenue: 'Research Assistant, Dalian University of Technology, 2021–2022',
    summary:
      'A series of projects on fluid-structure interaction, modal analysis, and lightweight structural design using CAD/FEA tools and genetic algorithms.',
    tags: ['Computational Mechanics', 'FEA', 'Genetic Algorithms'],
    links: {
      pdf: '#'
    },
    featured: false,
    highlights: `
- Modeled and assembled water tunnel pipe structures in UG CAD and performed acoustic and pre-stress modal analysis in ANSYS Workbench.
- Validated simulation results against experiments, reducing error to below 10% and ensuring predictive accuracy.
- Built parametric CAD and finite element models (UG, Creo, Abaqus) for lightweight aerospace structures.
- Applied genetic algorithm optimization in MATLAB to increase satellite capsule frequency by 30% and improve structural reliability under varied loads.
`
  }
];



