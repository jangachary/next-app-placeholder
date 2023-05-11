const CustomBlocks = {
  container_with_col: {
    label: "container with col",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    script: null,
    content: `<div class="container">
    <div class="row align-items-start">
      <div class="col">
      <p>One of three columns</p>
      </div>
      <div class="col">
      <p>One of three columns</p>
      </div>
      <div class="col">
          <p>One of three columns</p>
      </div>
    </div></div></div>`,
    styles: "",
  },
  p: {
    label: "p",
    category: "Basic",
    attributes: {
      class: "",
    },
    script: null,
    content: `<p>paragraph</p>`,
    styles: "",
  },
  span: {
    label: "span",
    category: "Basic",
    attributes: {
      class: "",
    },
    script: null,
    content: `<span>span</span>`,
    styles: "",
  },
  div: {
    label: "div",
    category: "Basic",
    attributes: {
      class: "",
    },
    script: null,
    content: `<div>div content</div>`,
    styles: "",
  },

  "comp-h2": {
    label: "comp-h2",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content: `<h2 class="cmp-css">this is h2</h2><style>.cmp-css {
      color: red;
    }
    .cmp-css-a {
      color: green;
    }
    .cmp-css-b {
      color: blue;
    }
    @media (max-width: 992px) {
      .cmp-css {
        color: darkred;
      }
      .cmp-css-a {
        color: darkgreen;
      }
      .cmp-css-b {
        color: darkblue;
      }
    }
    </style>`,
    styles: "",
  },
  separator: {
    label: "separator",
    category: "Basic",
    attributes: {
      class: "",
    },
    content: '<div class="container__separator"></div>',
    script: null,
    styles:
      " .container__separator {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n      height: 1px;\n      width: 100%;\n  }",
  },
  h1: {
    label: "Heading 1",
    category: "Basic",
    media: '<i class="ri-h-1 ri-2x"></i>',
    attributes: {
      class: "",
    },
    content: "<h1>h1 heading</h1>",
    script: null,
    styles: "",
  },
  "bs-h2": {
    label: "Heading 2",
    category: "Basic",
    attributes: {
      class: "",
    },
    media: '<i class="ri-h-2 ri-2x"></i>',
    content: "<h2>h2 heading</h2>",
    script: null,

    styles: "",
  },
  "bs-h3": {
    label: "Heading 3",
    category: "Basic",
    attributes: {
      class: "",
    },
    content: "<h3>h3 heading</h3>",
    media: '<i class="ri-h-3 ri-2x"></i>',
    script: null,
    styles: "",
  },
  "bs-h4": {
    label: "Heading 4",
    category: "Basic",
    attributes: {
      class: "",
    },
    media: '<i class="ri-h-4 ri-2x"></i>',
    content: "<h4>h4 heading</h4>",
    script: null,
    styles: "",
  },
  "bs-h5": {
    label: "Heading 5",
    category: "Basic",
    attributes: {
      class: "",
    },
    media: '<i class="ri-h-5 ri-2x"></i>',
    content: "<h5>h5 heading</h5>",
    script: null,
    styles: "",
  },
  "bs-h6": {
    label: "Heading 6",
    category: "Basic",
    attributes: {
      class: "",
    },
    media: '<i class="ri-h-6 ri-2x"></i>',
    content: "<h6>h6 heading</h6>",
    script: null,
    styles: "",
  },
  /*  bs_card: {
    label: "Card",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<div class="card">\n    <img src="..." class="card-img-top" alt="...">\n    <div class="card-body">\n      <h5 class="card-title">Card title</h5>\n      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n    </div>\n    <ul class="list-group list-group-flush">\n      <li class="list-group-item">An item</li>\n      <li class="list-group-item">A second item</li>\n      <li class="list-group-item">A third item</li>\n    </ul>\n    <div class="card-body">\n      <a href="#" class="card-link">Card link</a>\n      <a href="#" class="card-link">Another link</a>\n    </div>\n  </div>',
    script: null,
    styles: "",
  },*/
  alert: {
    label: "alert",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<div class="alert alert-primary" role="alert">\n      A simple primary alert—check it out!\n      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n    </div>',
    styles: {},
  },
  dropdown: {
    label: "dropdown",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<div class="dropdown">\n      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">\n        Dropdown button\n      </button>\n      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">\n        <li><a class="dropdown-item" href="#">Action</a></li>\n        <li><a class="dropdown-item" href="#">Another action</a></li>\n        <li><a class="dropdown-item" href="#">Something else here</a></li>\n      </ul>\n    </div>',
    styles: {},
  },
  "bs-list-group": {
    label: "list-group",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<ul class="list-group">\n      <li class="list-group-item" aria-disabled="true">A disabled item</li>\n      <li class="list-group-item">A second item</li>\n      <li class="list-group-item">A third item</li>\n      <li class="list-group-item">A fourth item</li>\n      <li class="list-group-item">And a fifth one</li>\n    </ul>',
    styles: {},
  },
  "bs-navbar": {
    label: "navbar",
    category: "Bootstrap",
    attributes: {
      class: "gg-menu-boxed",
    },
    content:
      '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n      <div class="container-fluid">\n        <a class="navbar-brand" href="#">Navbar</a>\n        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n          <ul class="navbar-nav me-auto mb-2 mb-lg-0">\n            <li class="nav-item">\n              <a class="nav-link active" aria-current="page" href="#">Home</a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link" href="#">Link</a>\n            </li>\n            <li class="nav-item dropdown">\n              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                Dropdown\n              </a>\n              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n                <li><a class="dropdown-item" href="#">Action</a></li>\n                <li><a class="dropdown-item" href="#">Another action</a></li>\n                <li><hr class="dropdown-divider"></li>\n                <li><a class="dropdown-item" href="#">Something else here</a></li>\n              </ul>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\n            </li>\n          </ul>\n          <form class="d-flex">\n            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\n            <button class="btn btn-outline-success" type="submit">Search</button>\n          </form>\n        </div>\n      </div>\n    </nav>',
    styles: {},
  },
  "bs-modal": {
    label: "modal",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<!-- Button trigger modal -->\n      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">\n        Launch demo modal\n      </button>\n      \n      <!-- Modal -->\n      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n        <div class="modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>\n              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n              ...\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n              <button type="button" class="btn btn-primary">Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>',
    styles: {},
  },
  "bs-carousel": {
    label: "carousel",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">\n      <div class="carousel-indicators">\n        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>\n        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>\n        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>\n      </div>\n      <div class="carousel-inner">\n        <div class="carousel-item active">\n          <img src="https://dummyimage.com/800x500/999/222" class="d-block w-100" alt="alt text">\n          <div class="carousel-caption d-none d-md-block">\n            <h5>First slide label</h5>\n            <p>Some representative placeholder content for the first slide.</p>\n          </div>\n        </div>\n        <div class="carousel-item">\n        <img src="https://dummyimage.com/800x500/999/222" class="d-block w-100" alt="alt text">\n          <div class="carousel-caption d-none d-md-block">\n            <h5>Second slide label</h5>\n            <p>Some representative placeholder content for the second slide.</p>\n          </div>\n        </div>\n        <div class="carousel-item">\n        <img src="https://dummyimage.com/800x500/999/222" class="d-block w-100" alt="alt text">\n          <div class="carousel-caption d-none d-md-block">\n            <h5>Third slide label</h5>\n            <p>Some representative placeholder content for the third slide.</p>\n          </div>\n        </div>\n      </div>\n      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">\n        <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n        <span class="visually-hidden">Previous</span>\n      </button>\n      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">\n        <span class="carousel-control-next-icon" aria-hidden="true"></span>\n        <span class="visually-hidden">Next</span>\n      </button>\n    </div>',
    styles: {},
  },
  form2: {
    label: "form",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<form>\n      <div class="mb-3">\n        <label for="exampleInputEmail1" class="form-label">Email address</label>\n        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">\n        <div id="emailHelp" class="form-text">We\'ll never share your email with anyone else.</div>\n      </div>\n      <div class="mb-3">\n        <label for="exampleInputPassword1" class="form-label">Password</label>\n        <input type="password" class="form-control" id="exampleInputPassword1">\n      </div>\n      <div class="mb-3 form-check">\n        <input type="checkbox" class="form-check-input" id="exampleCheck1">\n        <label class="form-check-label" for="exampleCheck1">Check me out</label>\n      </div>\n      <button type="submit" class="btn btn-primary">Submit</button>\n    </form>',
    styles: {
      width: "100px",
      height: "100px",
      background: "red",
    },
  },
  "col-3": {
    label: "col-3",
    category: "Bootstrap",
    attributes: {
      class: "",
    },
    content:
      '<div class="container">\n      <div class="row align-items-start">\n        <div class="col">\n          One of three columns\n        </div>\n        <div class="col">\n          One of three columns\n        </div>\n        <div class="col">\n          One of three columns\n        </div>\n      </div>\n      <div class="row align-items-center">\n        <div class="col">\n          One of three columns\n        </div>\n        <div class="col">\n          One of three columns\n        </div>\n        <div class="col">\n          One of three columns\n        </div>\n      </div>\n      <div class="row align-items-end">\n        <div class="col">\n          One of three columns\n        </div>\n        <div class="col">\n          One of three columns\n        </div>\n        <div class="col">\n          One of three columns\n        </div>\n      </div>\n    </div>',
    styles: {},
  },
  column1: {
    label: "1 Column",
    category: "Basic",
    attributes: {
      class: "",
    },
    content:
      '<div  class="row" data-gjs-droppable=".cell" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}\' data-gjs-name="Row">\n        <div  class="cell" data-gjs-draggable=".row" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"keyWidth":"flex-basis"}\' data-gjs-name="Cell" data-gjs-unstylable=\'["width"]\' data-gjs-stylable-require=\'["flex-basis"]\'></div>\n      </div>\n      <style>\n          \n    .row {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .row {\n        flex-wrap: wrap;\n      }\n    }\n          \n    .cell {\n      min-height: 75px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }\n        </style>',
  },
  column2: {
    label: "Column 2",
    category: "Basic",
    attributes: {
      class: "",
    },
    media: `<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4.5437 4.5595v14.881h14.913v-14.881zm2.5597 3.1127h3.671v9.2793h-3.671zm6.2527 0h3.671v9.2793h-3.671z" fill="currentColor" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".1189" style="paint-order:markers stroke fill"/>
   </svg>
   `,
    content:
      '<div  class="row" data-gjs-droppable=".cell" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}\' data-gjs-name="Row">\n        <div  class="cell" data-gjs-draggable=".row" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"keyWidth":"flex-basis"}\' data-gjs-name="Cell" data-gjs-unstylable=\'["width"]\' data-gjs-stylable-require=\'["flex-basis"]\'></div>\n        <div  class="cell" data-gjs-draggable=".row" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"keyWidth":"flex-basis"}\' data-gjs-name="Cell" data-gjs-unstylable=\'["width"]\' data-gjs-stylable-require=\'["flex-basis"]\'></div>\n      </div>\n      <style>\n          \n    .row {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .row {\n        flex-wrap: wrap;\n      }\n    }\n          \n    .cell {\n      min-height: 75px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }\n        </style>',
  },
  column3: {
    label: "3 Column",
    category: "layout",
    attributes: {
      class: "",
    },
    content:
      ' <div class="col">\n        One of three columns\n      </div>\n      <div class="col">\n        One of three columns\n      </div>\n      <div class="col">\n        One of three columns\n      </div>',
  },
  "pz-iframe": {
    label: "iframe",
    category: "Embed",
    attributes: {
      class: "",
    },
    content:
      '<div class="ratio ratio-21x9"><iframe src="https://codesandbox.io/embed/sleepy-bardeen-4tl0y?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" title="Code sanbox example" allowfullscreen></iframe></div>',
  },
  "pz-qna": {
    label: "Q&A",
    category: "PZ",
    attributes: {
      class: "",
    },
    styles: ``,
    content: `<div class="" >
      <p>sample</p>
      <p>answers</p>
    </div>`,
  },

  li: {
    label: "li",
    category: "Basic",
    attributes: {
      class: "",
    },
    styles: ``,
    media: `<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <style/>
    <path d="m4.7571 5.0222v15h15v-15zm2.454 6.2692h1.8256v1.8256h-1.8256zm2.5832 0.03974h7.469v1.7462h-7.469z" fill="currentColor" stroke-width="0" style="paint-order:markers stroke fill"/>
   </svg>`,
    content: `<li>li</li>`,
  },
  ul: {
    label: "un ordered list",
    category: "Basic",
    attributes: {
      class: "",
    },
    styles: ``,
    media: `<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <style/>
    <path d="m4.5 4.5v15h15v-15zm2.454 3.7258h1.8256v1.8256h-1.8256zm2.5832 0.039741h7.4688v1.7461h-7.4688zm-2.5832 2.5037h1.8256v1.8256h-1.8256zm2.5832 0.03974h7.4688v1.7461h-7.4688zm-2.5832 2.5037h1.8256v1.8256h-1.8256zm2.5832 0.03974h7.4688v1.7461h-7.4688z" fill="currentColor" stroke-width="0" style="paint-order:markers stroke fill"/>
   </svg>
   `,
    content: `<ul><li>ul</li></ul>`,
  },
  ol: {
    label: `<div>Ordered list</di>`,
    category: "Basic",
    attributes: {
      class: "",
    },
    styles: ``,
    media: `<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4.3646 3.8493v15h15v-15zm2.454 3.7258h1.8256v1.8256h-1.8256zm2.5832 0.039741h7.4688v1.7461h-7.4688zm-1.7288 0.38251c-0.00166 0.026908-0.00869 0.048435-0.019871 0.064578-0.010763 0.015731-0.025667 0.029392-0.044709 0.039741-0.015317 0.00828-0.037258 0.014075-0.067064 0.018629-0.029806 0.00414-0.05837 0.00621-0.084449 0.00621v0.084449h0.19249v0.61972h-0.19249v0.094387h0.50049v-0.094387h-0.18877v-0.8333h-0.095627zm-0.85447 2.1212h1.8256v1.8256h-1.8256zm2.5832 0.03974h7.4688v1.7461h-7.4688zm-1.7337 0.36636c-0.045951 0-0.093561 0.0066-0.14282 0.01863-0.048849 0.012-0.088588 0.02525-0.11798 0.03974v0.1304h0.00621c0.041811-0.02732 0.085276-0.04761 0.12916-0.06085 0.043881-0.01324 0.084036-0.01987 0.12171-0.01987 0.056714 0 0.10143 0.01366 0.13288 0.04098 0.031876 0.02691 0.047193 0.06375 0.047193 0.11177 0 0.05257-0.014075 0.10225-0.043467 0.14779-0.029392 0.04512-0.084449 0.10557-0.16393 0.18256-0.037672 0.03684-0.07783 0.07452-0.12171 0.11177l-0.1304 0.11177v0.12916h0.62593v-0.10557h-0.49801c0.040983-0.03477 0.085695-0.07244 0.13288-0.11301 0.047193-0.04098 0.092315-0.08321 0.13661-0.12668 0.031048-0.03022 0.057956-0.05837 0.079483-0.08321 0.02194-0.02484 0.040983-0.05009 0.057128-0.07576 0.017387-0.02732 0.029806-0.05547 0.0385-0.08569 0.00911-0.03064 0.013661-0.06417 0.013661-0.09935 0-0.07824-0.026908-0.13951-0.080723-0.18505-0.053816-0.04595-0.1275-0.06955-0.2223-0.06955zm-0.84945 2.1373h1.8256v1.8256h-1.8256zm2.5832 0.03974h7.4688v1.7461h-7.4688zm-1.7262 0.36636c-0.045951 0-0.093561 0.0062-0.14282 0.01863-0.048849 0.012-0.088588 0.02525-0.11798 0.03974v0.1304h0.00621c0.039327-0.02566 0.081136-0.04553 0.12544-0.05961 0.044295-0.01408 0.086108-0.02111 0.12544-0.02111 0.025667 0 0.049263 0.0021 0.069551 0.0062 0.020285 0.0041 0.039327 0.01159 0.057128 0.02236 0.016973 0.01076 0.03022 0.02401 0.039741 0.04098 0.00952 0.01656 0.013661 0.03601 0.013661 0.05837 0 0.05051-0.018215 0.089-0.055887 0.1155-0.037258 0.02608-0.087349 0.03974-0.15027 0.03974h-0.043467v0.10308h0.055887c0.030634 0 0.059198 0.0025 0.085695 0.0074 0.026494 0.0046 0.048435 0.01325 0.067064 0.02608 0.018629 0.01242 0.033118 0.02898 0.043467 0.05092 0.010763 0.02152 0.016145 0.04885 0.016145 0.08197 0 0.03353-0.00414 0.06127-0.013661 0.08321-0.00911 0.02194-0.023182 0.04264-0.042225 0.06085-0.018215 0.01697-0.042639 0.0298-0.072031 0.0385s-0.057128 0.01242-0.083209 0.01242c-0.044295 0-0.090248-7e-3 -0.13786-0.02236-0.047607-0.01532-0.089002-0.03519-0.12419-0.05837h-0.00869v0.1304c0.031876 0.01449 0.07203 0.02774 0.12171 0.03974 0.049677 0.01242 0.10018 0.01863 0.15151 0.01863 0.050091 0 0.096041-0.0075 0.13786-0.02111 0.042225-0.01408 0.079483-0.0356 0.11053-0.06458 0.027736-0.02608 0.049263-0.05671 0.064578-0.0919 0.015317-0.03519 0.022354-0.07327 0.022354-0.1155-1e-7 -0.04264-0.0058-0.07741-0.018629-0.10432-0.012833-0.02691-0.029806-0.04926-0.049677-0.06706-0.017801-0.01573-0.038914-0.02939-0.064578-0.03974-0.025667-0.01076-0.048435-0.0178-0.068304-0.02111v-0.0087c0.049263-0.0099 0.091901-0.03395 0.12792-0.07203 0.03643-0.0385 0.054645-0.0828 0.054645-0.13413 0-0.03768-0.00828-0.0712-0.023596-0.09935-0.015317-0.02815-0.037258-0.05216-0.067064-0.07203-0.027736-0.01822-0.058784-0.03146-0.093141-0.03974-0.034359-0.0083-0.074103-0.01242-0.11922-0.01242z" fill="currentColor" stroke-width="0" style="paint-order:markers stroke fill"/>
   </svg>
   `,

    content: `<ol><li>ol</li></ol>`,
  },
  pre: {
    label: "pre",
    category: "Basic",
    attributes: {
      class: "",
      type: "pre",
    },
    styles: ``,
    script: () => {
      console.log("pre");
    },
    content: `<pre class="language-javascript"><code>commands.add("empty-editor", {
      run(editor) {
        editor.setComponents();
      },
    });</code></pre>`,
  },
};

export default CustomBlocks;
