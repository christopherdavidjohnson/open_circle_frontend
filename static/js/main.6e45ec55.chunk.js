(this.webpackJsonpopen_circle_frontend=this.webpackJsonpopen_circle_frontend||[]).push([[0],{36:function(e,t,n){},55:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(30),a=n.n(c),i=(n(36),n(14)),o=n(4),l=n(5),d=n(7),h=n(6),j=n(11),u=n(2),p=n(16),b=n.n(p),O=(n(55),n(0)),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"home_header",children:" Welcome to the homepage!"}),Object(O.jsx)(j.b,{to:"/login",children:"Log In"}),Object(O.jsx)(j.b,{to:"/signup",children:"Sign Up"})]})}}]),n}(s.Component),m=n(15),g=(n(65),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,r=t.value;s.setState(Object(m.a)({},n,r))},s.handleSubmit=function(e){e.preventDefault();var t=s.state,n={email:t.email,password:t.password};b.a.post("https://open-circle-server.herokuapp.com/login",{user:n},{withCredentials:!0}).then((function(e){e.data.logged_in?(s.props.handleLogin(e.data),s.redirect()):s.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},s.redirect=function(){s.props.history.push("/feed")},s.handleErrors=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{children:s.state.errors.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})})},s.state={email:"",password:"",errors:""},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"home_header",children:" Welcome to the Login page!"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{placeholder:"email",type:"text",name:"email",value:t,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"password",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(O.jsx)("button",{placeholder:"submit",type:"submit",children:"Log In"}),Object(O.jsxs)("div",{children:["or ",Object(O.jsx)(j.b,{to:"/signup",children:"Not a member? Sign up!"})]})]}),Object(O.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})}}]),n}(s.Component)),x=(n(66),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,r=t.value;s.setState(Object(m.a)({},n,r))},s.handleSubmit=function(e){e.preventDefault();var t=s.state,n={email:t.email,password:t.password,password_confirmation:t.password_confirmation};b.a.post("https://open-circle-server.herokuapp.com/users",{user:n},{withCredentials:!0}).then((function(e){"created"===e.data.status?(s.props.handleLogin(e.data),s.redirect()):s.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},s.redirect=function(){s.props.history.push("/feed")},s.handleErrors=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{children:s.state.errors.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})})},s.state={email:"",password:"",password_confirmation:"",errors:""},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,s=e.password_confirmation;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Welcome to the Signup page!"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{placeholder:"email",type:"text",name:"email",value:t,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"password",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"password confirmation",type:"password",name:"password_confirmation",value:s,onChange:this.handleChange}),Object(O.jsx)("button",{placeholder:"submit",type:"submit",children:"Sign Up"})]}),Object(O.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})}}]),n}(s.Component)),v=(n(67),n.p+"static/media/banner.9b8039ad.png"),C=(n.p,n.p,n.p,n.p+"static/media/profile_placeholder.06ab9570.png"),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("div",{class:"profile-top",children:Object(O.jsxs)("div",{class:"name-and-picture",children:[Object(O.jsx)("div",{class:"banner-picture-div",children:Object(O.jsx)("img",{class:"banner-picture",src:v,alt:"banner"})}),Object(O.jsx)("img",{class:"profile-picture",src:C,alt:"profile"}),Object(O.jsx)("p",{class:"profile-name",children:"Person 1"})]})}),Object(O.jsxs)("div",{class:"profile-bottom",children:[Object(O.jsxs)("div",{class:"profile-left",children:[Object(O.jsx)("div",{class:"profile-intro profile-box",children:Object(O.jsx)("p",{class:"profile-header",children:"Intro"})}),Object(O.jsx)("div",{class:"profile-photos profile-box",children:Object(O.jsx)("p",{class:"profile-header",children:"Photos"})})]}),Object(O.jsx)("div",{class:"profile-right",children:Object(O.jsx)("div",{class:"profile-posts profile-box",children:Object(O.jsx)("p",{class:"profile-header",children:"Posts"})})})]})]})}}]),n}(s.Component),y=(n(68),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("h1",{className:"home_header",children:" Welcome to the Circles page!"})}}]),n}(s.Component)),S=(n(69),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("h1",{className:"home_header",children:" Welcome to the Messages page!"})}}]),n}(s.Component)),L=(n(70),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{class:"feed-bottom",children:[Object(O.jsx)("div",{class:"feed-left",children:Object(O.jsx)("div",{class:"feed-posts feed-box",children:Object(O.jsx)("p",{class:"feed-header",children:"Posts"})})}),Object(O.jsxs)("div",{class:"feed-right",children:[Object(O.jsx)("div",{class:"feed-intro feed-box",children:Object(O.jsx)("p",{class:"feed-header",children:"Members"})}),Object(O.jsx)("div",{class:"feed-photos feed-box",children:Object(O.jsx)("p",{class:"feed-header",children:"Photos"})})]})]})}}]),n}(s.Component)),_=(n(71),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).loginStatus=function(){b.a.get("https://open-circle-server.herokuapp.com/logged_in",{withCredentials:!0}).then((function(e){e.data.logged_in?s.handleLogin(e):s.handleLogout()})).catch((function(e){return console.log("api errors:",e)}))},s.handleLogin=function(e){s.setState({isLoggedIn:!0,user:e.user})},s.handleLogout=function(){s.setState({isLoggedIn:!1,user:{}})},s.state={isLoggedIn:!1,user:{}},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var e=this;return Object(O.jsx)(j.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsx)("div",{className:"nav",children:Object(O.jsx)(j.b,{to:"/homepage",children:"Home"})}),Object(O.jsx)("div",{className:"nav",children:Object(O.jsx)(j.b,{to:"/profile",children:"Profile"})}),Object(O.jsx)("div",{className:"nav",children:Object(O.jsx)(j.b,{to:"/circles",children:"Circles"})}),Object(O.jsx)("div",{className:"nav",children:Object(O.jsx)(j.b,{to:"/messages",children:"Messages"})}),Object(O.jsx)("div",{className:"nav",children:Object(O.jsx)(j.b,{to:"/feed",children:"Feed"})})]}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/profile",component:w}),";",Object(O.jsx)(u.a,{path:"/circles",component:y}),";",Object(O.jsx)(u.a,{path:"/messages",component:S}),";",Object(O.jsx)(u.a,{path:"/feed",component:L}),";",Object(O.jsx)(u.a,{path:"/login",render:function(t){return Object(O.jsx)(g,Object(i.a)(Object(i.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),Object(O.jsx)(u.a,{path:"/signup",render:function(t){return Object(O.jsx)(x,Object(i.a)(Object(i.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),Object(O.jsx)(u.a,{path:"/",render:function(t){return Object(O.jsx)(f,Object(i.a)(Object(i.a)({},t),{},{loggedInStatus:e.state.isLoggedIn}))}}),";"]})]})})}}]),n}(s.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.6e45ec55.chunk.js.map