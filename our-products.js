const content_for_path = [
    "Data as a Service (DaaS) is a complex approach aimed at monetization of MNO’s Big Data relying on advanced techniques in analyzing telco usage. A user-friendly and fast ecosystem is built for various providers of goods and services be equipped with access to valuable data for making lending decisions.",
    "Using variety of accessible data, decision is made on eligibility of any given individual independent on whether they have or not credit history. Complex product system is built with scoring engine and loan management platform as core components.",
    "Enabling embedded finance to all credit-invisible customer segments of a bank – via using sophisticated scoring engine and state-of-the-art loan management platform. Our solution greatly reduces cost of the lending process as well as efficiently managing risks of the same.",
    "Enabling embedded finance to all customer segments of a mobile wallet passing through creditworthiness assessment based on AI/ML driven scoring algorithms. Loan servicing module presents as well.",
    "Buy Now Pay Later solution technically integrated into any ecosystem featuring e-commerce, marketplace etc. for transparent access allowing the end-users to take advantage of making installment-based purchases.",
    "Lending an airtime to MNO customers on the premise that they will pay back with a bit of premium. Built-in machine learning system provides for maximum profitability of the business model.",
    "While scoring engine and set of algorithms are core of all Simbrella’s solutions, it is possible to implement scoring as a standalone component should such a need arise at any of our potential clients – banks, MNO’s, mobile wallets etc.",
    "Worried about protection of sensitive data? We created data anonymizer solution for this particular purpose – it’ll help to carry on all scoring and lending activities in any customer base without disclosing actual customer information.",
  ];
  let all_products = document.querySelectorAll(
    ".products__wrapper__rounds__item"
  );
  let product_wrapper_a = document.querySelectorAll(
    ".products__wrapper__rounds__item__link"
  );
  let text = document.querySelector(
    ".products__wrapper__rounds__p-box__content-of-product"
  );
  all_products.forEach((item, index, array) => {
    item.addEventListener("mouseenter", (e) => {
      text.innerText = content_for_path[index];
      all_products.forEach((item, otherIndex, array) => {
        if (otherIndex != index) {
          product_wrapper_a[index].classList.add("color-hover");
          item.classList.add("for-hover");
        }
      });
    });
    item.addEventListener("mouseleave", (e) => {
      text.innerText = "";
      all_products.forEach((item, otherIndex, array) => {
        if (otherIndex != index) {
          product_wrapper_a[index].classList.remove("color-hover");
          item.classList.remove("for-hover");
        }
      });
    });
  });