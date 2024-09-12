export function createElement(tag, classes = [], attributes = {}) {
  const element = document.createElement(tag);

  if (typeof classes === "string") {
    classes = classes.split(" ");
  }

  if (classes.length) {
    element.classList.add(...classes);
  }

  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr])
  );

  return element;
}
