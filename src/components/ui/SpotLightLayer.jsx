function SpotlightLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-3 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgb(225,250,240),transparent_40%)]" />
  );
}

export default SpotlightLayer;
