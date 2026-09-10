export default function OccasionIcon({ type }) {
  const drawings = {
    wedding: <><circle cx="32" cy="38" r="18" /><path d="m25 10 4-4h6l4 4-7 10-7-10Zm0 0h14M29 6l3 14 3-14" /></>,
    outdoor: <><path d="M10 56V30L32 12l22 18v26M32 10v28M10 30l8 8h28l8-8M18 56V38m28 0v18M32 12v-3" /></>,
    corporate: <><path d="M7 56h50M12 56V32h12m0 24V12h22v44m0-24h8v24M32 56v-9h6v9" /><path d="M30 18h2m6 0h2M30 25h2m6 0h2M30 32h2m6 0h2M30 39h2m6 0h2M18 39v3m0 5v3m32-11v3m0 5v3" /></>,
    brand: <><path d="M14 31h36v25H14zM12 25h40v9H12zM32 25v31" /><path d="M32 25C14 25 16 9 23 14c6 3 9 11 9 11Zm0 0c18 0 16-16 9-11-6 3-9 11-9 11Z" /></>,
    private: <><circle cx="32" cy="18" r="8" /><circle cx="13" cy="25" r="6" /><circle cx="51" cy="25" r="6" /><path d="M17 55V43a15 15 0 0 1 30 0v12M2 55V44a11 11 0 0 1 17-9m26 0a11 11 0 0 1 17 9v11" /></>,
  };
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[type]}</svg>;
}
