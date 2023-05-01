function selectInit(elem, params) {
  // Todo: Сделать кастомный селект
  // Todo: 1. Получить параметры селект +
  let selectParams = params || {};
  selectParams.selectClassName = params?.selectClassName || "customSelect";
  selectParams.optionClassName =
    params?.optionClassName || "customSelect__option";
  selectParams.parentSelectClassName = "customSelectParent";
  // Todo: 2. Получить нативный селект с его опциями +
  let nativeSelects = document.querySelectorAll(elem);
  console.log(nativeSelects);
  // Todo: 3. Сделать родительский элемент для кастомного селекта +
  nativeSelects.forEach(function (item) {
    let multiselect = [];
    let customSelect = createParentForCustomSelect(
      selectParams.selectClassName
    );
    let customSelectListWrap = createOptionsListWrap();
    let customSelectOutput = createOutputField();
    customSelect.appendChild(customSelectListWrap);
    customSelect.appendChild(customSelectOutput);
    item.parentNode.appendChild(customSelect);
    item.parentNode.classList.add(selectParams.parentSelectClassName);
    // Todo: 2.1 Прятать нативный селект после его получения+
    item.setAttribute("hidden", "");
    let nativeOptions = item.querySelectorAll("option");
    // Todo: 4. Сделать дочерние элементы по количеству опций нативного селекта +
    for (let i = 0; i < nativeOptions.length; i++) {
      // Todo: откорректировать выбор родительского блока +
      item.parentNode
        .querySelector(".customSelect__list")
        .appendChild(
          createOptionForCustomSelect(
            selectParams.optionClassName,
            nativeOptions[i]
          )
        );
    }
    customSelectOutput.innerHTML = item.parentNode.querySelector(
      "." + selectParams.optionClassName
    ).innerHTML;
    item.parentNode.addEventListener("click", function (event) {
      event.preventDefault();
      let target = event.target;
      // Todo: 8. Передавать данные о выборе пользователя в нативный селект+
      if (target.classList.contains(selectParams.optionClassName)) {
        target
          .closest("." + selectParams.parentSelectClassName)
          .querySelector("select").value = target.getAttribute("value");
        multiselect.push(target.innerHTML);
        customSelectOutput.innerHTML = multiselect.join(",");
        customSelect.classList.toggle("--open");
      }

      // Todo: 6. Выпадение списка опций по клику +
      if (target === customSelectOutput) {
        customSelect.classList.toggle("--open");
      }
    });
    // I'm using "click" but it works with any event
    // document.addEventListener("click", (event) => {
    //   const isClickInside = item.contains(event.target);
    //   if (customSelect.classList.contains('--open') && !isClickInside) {
    //       customSelect.classList.remove("--open");
    //
    //   }
    // });
  });

  // Todo: 9. Стилизовать кастомный селект +
  // Todo: 10. Сделать поле для вывода выбранного варианта +

  // Todo: Домашнее задание - 11. Сделать возможность выбрать несколько вариантов из списка
}
document.addEventListener("click", function handleClickOutsideBox(event) {
  const boxes = document.querySelectorAll(".customSelect");
  boxes.forEach((box) => {
    if (!box.contains(event.target)) {
      box.classList.remove("--open");
    }
  });
});

selectInit(".form__input--select", {});

// data-icon - параметр для добавления иконки к опциям, введите путь к иконке

// elem - обязательный параметр с селектором нативного селекта
// params - объект с настройками кастомного селекта
// список доступных настроек
// selectClassName - название класса для кастомного селекта
// optionClassName - название класса для опций кастомного селекта

function createParentForCustomSelect(parentClassName) {
  let parentForCustomSelect = document.createElement("div");
  parentForCustomSelect.classList.add(parentClassName);
  return parentForCustomSelect;
}
function createOptionForCustomSelect(optionClassName, option) {
  let optionForCustomSelect = document.createElement("button");
  optionForCustomSelect.classList.add(optionClassName);
  optionForCustomSelect.appendChild(createIconsForOptions(option));
  optionForCustomSelect.innerHTML += option.innerHTML;
  optionForCustomSelect.value = option.value;
  if (option.disabled) {
    optionForCustomSelect.setAttribute("disabled", "");
  }

  return optionForCustomSelect;
}
function createIconsForOptions(option) {
  let iconForOption = document.createElement("img");
  iconForOption.setAttribute("src", option.getAttribute("data-icon") || "");
  return iconForOption;
}
function createOptionsListWrap() {
  let optionsListWrap = document.createElement("div");
  optionsListWrap.classList.add("customSelect__list");
  return optionsListWrap;
}
function createOutputField() {
  let outputField = document.createElement("div");
  outputField.classList.add("customSelect__output");
  return outputField;
}

// D-R-Y

// K-I-S-S
