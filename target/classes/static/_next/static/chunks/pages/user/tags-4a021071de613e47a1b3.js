(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{41592:function(a,e,n){"use strict";n.r(e);var s=n(67294),t=n(32561),i=n(18828),d=n(33810),l=n(38130),o=n(39249),r=(n(7276),n(70592),n(94649)),c=n(42153),m=n(85893);e.default=function(a){var e=a.isModal,n=void 0!==e&&e,u=(a.postTags,a.onAdded,(0,s.useContext)(i.j)),b=u.userInfo;return u.updateUserInfo,(0,s.useEffect)((function(){}),[]),n?(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{type:"button",className:"btn btn-primary position-absolute top-50 start-50 translate-middle","data-bs-toggle":"modal","data-bs-target":"#tagAddModal",children:(0,m.jsx)("i",{className:"fas fa-plus-circle"})}),(0,m.jsx)("div",{className:"modal fade",id:"tagAddModal",tabIndex:-1,"aria-labelledby":"tagAddModalLabel","aria-hidden":"true",children:(0,m.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,m.jsx)(r.J9,{initialValues:{name:"",description:""},validate:function(a){var e={};return a.name?a.name.length<2&&(e.name="Name must be minimum 3 chars"):e.name="Name required",a.description||(e.name="description required"),e},onSubmit:function(a,e){var n=e.setSubmitting;setTimeout((function(){var e;e=a,(0,c.hd)("/saveTag",{data:e,cb:function(a){a.data.tag;var e=a.data.message;o.Am.info(e)}}),n(!1)}),400)},children:function(a){var e=a.values,n=a.errors,s=a.touched,t=a.handleChange,i=a.handleBlur,d=a.handleSubmit,l=a.isSubmitting;return(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",id:"tagAddModalLabel",children:"Add Tags"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)("form",{onSubmit:d,children:[(0,m.jsxs)("div",{className:"form-floating mb-3",children:[(0,m.jsx)("input",{name:"name",onChange:t,onBlur:i,value:e.name,type:"name",className:"form-control",id:"floatingName",placeholder:"name@example.com"}),(0,m.jsx)("label",{htmlFor:"floatingName",children:"Name"})]}),n.name&&s.name&&n.name,(0,m.jsxs)("div",{className:"form-floating",children:[(0,m.jsx)("input",{name:"description",onChange:t,onBlur:i,value:e.description,className:"form-control",id:"floatingDescription",placeholder:"Password"}),(0,m.jsx)("label",{htmlFor:"floatingDescription",children:"Description"})]}),n.description&&s.description&&n.description]})}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:d,disabled:l,children:"Add"}),(0,m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:d,disabled:l,"data-bs-dismiss":"modal",children:"Add & close"})]})]})}})})})]}):(0,m.jsx)(d.Z,{children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("main",{children:[(0,m.jsx)("h1",{className:"title",children:"Tags Page"}),(0,t.xb)(b)?(0,m.jsx)(l.Z,{}):(0,m.jsx)(m.Fragment,{})]})})})}},78540:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/tags",function(){return n(41592)}])}},function(a){a.O(0,[774,142,235,959,966,46,888,179],(function(){return e=78540,a(a.s=e);var e}));var e=a.O();_N_E=e}]);