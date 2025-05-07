function main() {
  const $appBlocks = document.querySelectorAll('[data-type="app-embed-block"]');

  Array.from($appBlocks).forEach(($appBlock) => {
    const blockId = $appBlock.dataset.id;
    initAppBlockInstance($appBlock, blockId);
  });

  function initAppBlockInstance($el, blockId) {
    const $button = $el.querySelector('.app-embed-block__button');

    if ($button) {
      $button.addEventListener('click', () => {
        $button.style.color = 'red';
        console.log('Clicked Me! blockId is ', blockId);
      });
    }
  }
}

main();
