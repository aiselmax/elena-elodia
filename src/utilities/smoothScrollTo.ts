export function smoothScrollTo(element: HTMLElement) {
  // Get the current scroll position of the window.
  const startPosition = window.scrollY;
  // Calculate the target position.
  const targetPosition = element.offsetTop;
  // Calculate the distance to scroll.
  const distance = targetPosition - startPosition;

  // Set the duration of the scrolling in milliseconds.
  const duration = 1000;

  // Set the start time of the scrolling.
  let startTime: number | null = null;

  // The easing function.
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2; // Normalize the animation progress.
    if (t < 1) return (c / 2) * t * t + b; // Easing function for the first half of the animation (acceleration).
    t--; // Decrease the progress by 1 to handle the second half of the animation.
    return (-c / 2) * (t * (t - 2) - 1) + b; // Easing function for the second half of the animation (deceleration).
  }

  // The animation loop.
  function scrollAnimation(currentTime: number) {
    if (startTime === null) startTime = currentTime; // Set the start time if it's not set yet.
    const timeElapsed = currentTime - startTime; // Calculate the time elapsed since scrolling started.
    const scrollY = ease(timeElapsed, startPosition, distance, duration); // Calculate the current scroll position based on the easing function.
    window.scrollTo(0, scrollY); // Scroll to the calculated scroll value.
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation); // If the duration is not reached yet, call the animation again.
  }

  // Start the animation by calling the scrollAnimation function with requestAnimationFrame.
  requestAnimationFrame(scrollAnimation);
}
