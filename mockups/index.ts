window.onload = () => main();

function main() {
  document.querySelectorAll<HTMLDivElement>('.mockup').forEach(mockup => {
    mockup.style.height = `${window.innerHeight - 20}px`;
  });
}
