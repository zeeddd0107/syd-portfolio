export function handleSpotlightMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();

  event.currentTarget.style.setProperty(
    "--mouse-x",
    `${event.clientX - rect.left}px`
  );

  event.currentTarget.style.setProperty(
    "--mouse-y",
    `${event.clientY - rect.top}px`
  );
}