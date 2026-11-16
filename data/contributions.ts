// Curated upstream status, checked November 16, 2026. No runtime GitHub requests.
export const contributions = [
  {
    id: '3972',
    title: 'Bounded exploration in inference routing',
    status: 'Merged',
    url: 'https://github.com/llm-d/llm-d-router/pull/3972',
    summary: 'Added an opt-in exploration budget to llm-d-router’s weighted endpoint picker while preserving default routing behavior.',
    detail: 'One probability decision per returned list bounds zero-score exploration independently of candidate count. Go statistical, configuration and concurrency regressions check the selection contract; they do not measure production serving performance.',
    technology: 'Go · Weighted sampling · Scheduling plugins',
  },
  {
    id: '3965',
    title: 'Capacity guards across Prefill and Decode',
    status: 'Open proposal',
    url: 'https://github.com/llm-d/llm-d-router/pull/3965',
    summary: 'Proposed checking capacity across configured roles before selecting a model revision in disaggregated inference.',
    detail: 'Extends revision eligibility and guard dependencies while retaining legacy configuration. Race-enabled integration tests use simulated backends. This work is not merged; observed capacity is not an atomic reservation.',
    technology: 'Go · Kubernetes envtest · gRPC',
  },
];
