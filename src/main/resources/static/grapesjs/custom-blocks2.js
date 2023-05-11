const CustomBlocks = {
  h1: {
    name: "h1",
    type: "bs-h1",
    block: {
      category: "Bootstrap",
      label: '<i class="fas fa-heading"></i><br/>Heading',
      // attributes: { class: "fas fa-heading" },
      content: `<h1>h1. Bootstrap heading</h1>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },

  card2: {
    name: "card2",
    type: "card2-with-js",
    block: {
      category: "Bootstrap",
      label: "card",
      attributes: { class: "fas fa-address-card" },
      content: `<div class="parent">
      <div class="card">
        </div></div>
    </div>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  alert: {
    name: "pz-alert",
    type: "alert",
    block: {
      category: "Bootstrap",
      label: "alert",
      attributes: { class: "" },
      content: `<div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  dropdown: {
    name: "pz-dropdown",
    type: "dropdown",
    block: {
      category: "Bootstrap",
      label: `<i class="far fa-caret-square-down fa-2x" ></i><br/>dropdown`,
      attributes: { class: "" },
      content: `<div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  list_group: {
    name: "pz-list-group",
    type: "list-group",
    block: {
      category: "Bootstrap",
      label: "list-group",
      attributes: { class: "" },
      content: `<ul class="list-group">
      <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  navbar: {
    name: "pz-navbar",
    type: "navbar",
    block: {
      category: "Bootstrap",
      label: "navbar",
      attributes: { class: "gg-menu-boxed" },
      content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  modal: {
    name: "pz-modal",
    type: "modal",
    block: {
      category: "Bootstrap",
      label: "modal",
      attributes: { class: "" },
      content: `<!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  carousel: {
    name: "pz-carousel",
    type: "carousel",
    block: {
      category: "Bootstrap",
      label: `<i class="far fa-images"></i><br/>carousel`,
      attributes: { class: "" },
      content: `<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://dummyimage.com/800x500/999/222" class="d-block w-100" alt="alt text">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
        <img src="https://dummyimage.com/800x500/999/222" class="d-block w-100" alt="alt text">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
        <img src="https://dummyimage.com/800x500/999/222" class="d-block w-100" alt="alt text">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  form2: {
    name: "form2",
    type: "form-with-js",
    block: {
      category: "Bootstrap",
      label: "form",
      attributes: { class: "fa fa-form" },
      content: `<form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>`,
    },
    style: {
      width: "100px",
      height: "100px",
      background: "red",
    },
    script: function () {
      console.log("the element", this);
    },
  },
  "col-3": {
    name: "col-3",
    type: "col-3",
    block: {
      category: "Bootstrap",
      label: "col-3",
      attributes: { class: "" },
      content: `<div class="container">
      <div class="row align-items-start">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
    </div>`,
    },
    style: {},
    script: function () {
      console.log("the element", this);
    },
  },
  column1: {
    name: "column1",
    type: "column1",
    block: {
      label: "1 Column",
      content:
        '<div  class="row" data-gjs-droppable=".cell" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}\' data-gjs-name="Row">\n        <div  class="cell" data-gjs-draggable=".row" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"keyWidth":"flex-basis"}\' data-gjs-name="Cell" data-gjs-unstylable=\'["width"]\' data-gjs-stylable-require=\'["flex-basis"]\'></div>\n      </div>\n      <style>\n          \n    .row {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .row {\n        flex-wrap: wrap;\n      }\n    }\n          \n    .cell {\n      min-height: 75px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }\n        </style>',
      media: "",
      category: "Basic",
      attributes: {
        class: "",
      },
    },
  },
  column2: {
    name: "column2",
    type: "column2",
    block: {
      label: "2 Column",
      content:
        '<div  class="row" data-gjs-droppable=".cell" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":0,"bl":0,"br":0,"minDim":1}\' data-gjs-name="Row">\n        <div  class="cell" data-gjs-draggable=".row" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"keyWidth":"flex-basis"}\' data-gjs-name="Cell" data-gjs-unstylable=\'["width"]\' data-gjs-stylable-require=\'["flex-basis"]\'></div>\n        <div  class="cell" data-gjs-draggable=".row" data-gjs-resizable=\'{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"keyWidth":"flex-basis"}\' data-gjs-name="Cell" data-gjs-unstylable=\'["width"]\' data-gjs-stylable-require=\'["flex-basis"]\'></div>\n      </div>\n      <style>\n          \n    .row {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .row {\n        flex-wrap: wrap;\n      }\n    }\n          \n    .cell {\n      min-height: 75px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }\n        </style>',
      media: "",
      category: "Basic",
      attributes: {
        class: "",
      },
    },
  },
  column3: {
    name: "column3",
    type: "column3",
    block: {
      label: "3 Column",
      content: ` <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>`,
      media: "",
      category: "layout",
      attributes: {
        class: "",
      },
    },
  },
  container_with_col: {
    name: "container_with_col",
    type: "container_with_col",
    block: {
      label: "container with col",
      content: ` <div class="container">
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
      </div>
      </div>`,
      media: "",
      category: "Bootstrap",
      attributes: {
        class: "",
      },
    },
  },
};

export default CustomBlocks;
