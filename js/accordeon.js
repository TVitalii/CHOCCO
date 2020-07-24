const mesureWidth = (item) => {
  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".accordeon__list");
  const titlesBlocks = container.find(".accordeon__trigger");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find(".accordeon__content");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 500;
  }
 return {
   container: reqItemWidth,
   textContainer: reqItemWidth - paddingLeft - paddingRight
 }

};

const closeEveryItemInContainer = container => {
  const items = container.find(".accordeon__item");
  const content = container.find(".accordeon__wrap");

  items.removeClass("active");
  content.width(0);
};


const opensItem = item => {
  const hiddenContent = item.find(".accordeon__wrap");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find("accordeon__content");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".accordeon__trigger").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".accordeon__item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".accordeon__list");

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    opensItem(item);
  }

});

$(".accordeon__close").on("click", e => {
  e.preventDefault();

  closeEveryItemInContainer($('.accordeon__list'))
})


/*
const mesureWidth = (item) => {
  const screenWidth = $(window).width();
  const container = item.closest("accordeon__list");
  const titlesBlocks = container.find(".accordeon__trigger");
  const titleWidth = titlesBlocks.width() * titlesBlocks.length;
  const reqWidth = mesureWidth(item);

  const isMobile = window.matchMedia("(mas-width: 768px)").matches;

  if (isMobile) {
    return screenWidth - titlesWidth;
  } else {
    return 500;
  }
};

/*
function Accordeon(selector) {
  const acco = document.querySelector(selector);
  const items = acco.querySelector('[data-list]').children;

  acco.addEventListener('click', function (event) {
    const target = event.target.closest('[data-trigger]');

    if (!target) return;

    event.preventDefault();
    const activeClass = target.dataset.trigger;
    const item = target.parentNode;

    if (item.classList.contains(activeClass)) {
      item.classList.remove(activeClass);
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove(activeClass);
      }

      item.classList.add(activeClass);
    }
  });
}

new Accordeon('#acc-menu');
*/