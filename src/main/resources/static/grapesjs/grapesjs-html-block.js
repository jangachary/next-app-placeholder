grapesjs.plugins.add("html-block", function (editor, options) {
  options = options || {};

  addHTMLCodeEditor();
  addHTMLCodeComponent();
  addHTMLCodeBlock();

  function addHTMLCodeEditor() {
    editor.Commands.add("open-html-code-editor", {
      run: function (editor, sender, data) {
        var component = editor.getSelected();

        var codeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
        codeViewer.set({
          codeName: "htmlmixed",
          theme: "hopscotch",
          readOnly: false,
        });
        var modalContent = document.createElement("div");
        var editorTextArea = document.createElement("textarea");
        var saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";
        saveButton.className = "gjs-btn-prim";
        saveButton.style = "margin-top: 8px;";
        saveButton.onclick = function () {
          component.set("content", "");
          component.components(codeViewer.editor.getValue());
          editor.Modal.close();
        };

        modalContent.appendChild(editorTextArea);
        modalContent.appendChild(saveButton);
        codeViewer.init(editorTextArea);
        var htmlContent = document.createElement("div");
        htmlContent.innerHTML = component.toHTML();
        htmlContent = htmlContent.firstChild.innerHTML;
        codeViewer.setContent(htmlContent);
        editor.Modal.setTitle("Edit HTML").setContent(modalContent).open();
        codeViewer.editor.refresh();
      },
    });
  }

  function addHTMLCodeComponent() {
    var defaultType = editor.DomComponents.getType("default");
    var _initToolbar = defaultType.model.prototype.initToolbar;
    ["pre", "default"].map((t) => {
      let type = t.id;
      try {
        editor.DomComponents.addType(type, {
          model: defaultType.model.extend(
            {
              initToolbar(args) {
                let command = "open-html-code-editor";
                _initToolbar.apply(this, args);
                var toolbar = this.get("toolbar");
                let existingTB = toolbar.find((t) => {
                  return t.command == command;
                });
                if (!existingTB) {
                  toolbar.push({
                    attributes: { class: "fa fa-code" },
                    command,
                  });
                }
                this.set("toolbar", toolbar);
              },
            },
            {
              isComponent: function (el) {
                if (
                  typeof el.hasAttribute == "function" &&
                  el.hasAttribute("data-gjs-type") &&
                  el.getAttribute("data-gjs-type") == type
                ) {
                  return { type };
                }
              },
            }
          ),
          view: defaultType.view,
        });
      } catch (e) {
        console.log("errro in map ", e);
      }
    });
    editor.DomComponents.addType("html-code", {
      model: defaultType.model.extend(
        {
          initToolbar(args) {
            _initToolbar.apply(this, args);
            var toolbar = this.get("toolbar");
            let command = "open-html-code-editor";
            let existingTB = toolbar.find((t) => {
              return t.command == command;
            });
            if (!existingTB) {
              toolbar.push({
                attributes: { class: "fa fa-code" },
                command,
              });
            }

            this.set("toolbar", toolbar);
          },
        },
        {
          isComponent: function (el) {
            if (
              typeof el.hasAttribute == "function" &&
              el.hasAttribute("data-html-code")
            ) {
              return { type: "html-code" };
            }
          },
        }
      ),
      view: defaultType.view,
    });
  }

  function addHTMLCodeBlock() {
    editor.BlockManager.add("html-code", {
      attributes: { class: "" },
      label: "HTML Code",
      category: "Basic",
      content: "<div data-html-code>Edit HTML content</div>",
    });
  }
});
