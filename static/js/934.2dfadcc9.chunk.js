"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[934],{5934:function(s,e,t){t.r(e),t.d(e,{default:function(){return O}});var i=t(8683),n=t(5671),r=t(3144),o=t(136),a=t(516),l=t(2791),c=t(6868),d={postsBlock:"MyPosts_postsBlock__xF1+G",friends:"MyPosts_friends__dywE1",friendsbox:"MyPosts_friendsbox__FJC6N",borderbox:"MyPosts_borderbox__j7y2-",friendsnamebox:"MyPosts_friendsnamebox__t1ziq",frienditem:"MyPosts_frienditem__6EIMP",friendsname:"MyPosts_friendsname__Ysmqr",posts:"MyPosts_posts__qWDsY",text:"MyPosts_text__cxPI9",textarea:"MyPosts_textarea__AEFx4",btn:"MyPosts_btn__nbjZD",newposts:"MyPosts_newposts__qpA5E"},u=t(184),p=function(s){return(0,u.jsxs)("div",{className:d.frienditem,children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:s.img,alt:""})}),(0,u.jsx)("div",{className:d.friendsname,children:s.name})]})},f=t(6112),h={item:"Post_item__4hswY",postblock:"Post_postblock__txAsz",message:"Post_message__KWIv7",like:"Post_like__+NVet",date:"Post_date__+k-1Q"},x=function(s){return s.profile?(0,u.jsxs)("div",{className:h.item,children:[(0,u.jsx)("div",{className:h.box,children:(0,u.jsx)("img",{src:s.profile.photos.small})}),(0,u.jsxs)("div",{className:h.postblock,children:[(0,u.jsx)("p",{children:s.profile.fullName}),(0,u.jsx)("div",{className:h.message,children:s.message}),(0,u.jsxs)("div",{className:h.like,children:[(0,u.jsx)("div",{className:h.date,children:"Date&&&"}),(0,u.jsxs)("span",{children:["Like: ",s.likesCount]})]})]})]}):(0,u.jsx)(f.Z,{})},m=t(6139),_=t(704),j=t(8951),v=t(9377),P=function(s){(0,o.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){var s=this,e=this.props.friends.map((function(s){return(0,u.jsx)(p,{name:s.name,img:s.img})})),t=this.props.posts.map((function(e){return(0,u.jsx)(x,{message:e.message,likesCount:e.likesCount,profile:s.props.profile})}));return(0,u.jsxs)("div",{className:d.postsBlock,children:[(0,u.jsxs)("div",{className:d.friends,children:[(0,u.jsxs)("div",{className:d.friendsbox,children:[(0,u.jsx)("div",{className:d.borderbox,children:(0,u.jsx)("h4",{children:"Murad's friends"})}),(0,u.jsx)("div",{className:d.friendsnamebox,children:e})]}),(0,u.jsx)("div",{})]}),(0,u.jsxs)("div",{className:d.posts,children:[(0,u.jsx)("div",{className:d.text,children:(0,u.jsx)("h2",{children:"My posts"})}),(0,u.jsx)(N,{onSubmit:function(e){s.props.addPost(e.post)}}),(0,u.jsx)("div",{className:d.newposts,children:(0,u.jsx)("h4",{children:"New posts"})}),(0,u.jsx)("div",{className:d.postselements,children:t})]})]})}}]),t}(l.PureComponent),g=(0,v.W)("textarea"),N=((0,j.D)(10),(0,_.Z)({form:"post"})((function(s){return(0,u.jsxs)("form",{className:d.textarea,onSubmit:s.handleSubmit,children:[(0,u.jsx)(m.Z,{name:"post",placeholder:"Add new post...",component:g}),(0,u.jsx)("div",{className:d.btn,children:(0,u.jsx)("button",{children:"Add post"})})]})}))),b=P,k=t(8687),Z=(0,k.$j)((function(s){return{newPostText:s.profilePage.newPostText,posts:s.profilePage.posts,friends:s.dialogsPage.dialogs,avapost:s.profilePage.avaData,profile:s.profilePage.profile}}),(function(s){return{addPost:function(e){s((0,c.Wl)(e))}}}))(b),y="Profile_content__mO3zk",I="ProfileInfo_box__ra4SQ",M="ProfileInfo_boxname__Ntfuj",S="ProfileInfo_boxlink__wZwSZ",w="ProfileInfo_descriptionBlock__GfYXV",C="ProfileInfo_info__8bHrK",A="ProfileInfo_name__fVCoU",D="ProfileInfo_city__pVxUy",q="ProfileInfo_age__5Ptqx",U="ProfileInfo_photoslink__lsoJ4",z="ProfileInfo_photos__LGhY2",B="ProfileInfo_photoblock__pLD8O",E=function(s){return(0,u.jsx)("div",{className:B,children:(0,u.jsx)("img",{src:s.img,alt:""})})},F=(t(3710),t(9439)),W=function(s){var e=(0,l.useState)(!1),t=(0,F.Z)(e,2),i=t[0],n=t[1],r=(0,l.useState)(s.status),o=(0,F.Z)(r,2),a=o[0],c=o[1];(0,l.useEffect)((function(){c(s.status)}),[s.status]);return(0,u.jsxs)("div",{children:[!i&&(0,u.jsx)("div",{children:(0,u.jsx)("span",{onDoubleClick:function(){n(!0)},children:s.status||"-----"})}),i&&(0,u.jsx)("div",{children:(0,u.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),s.updateStatus(a)},onChange:function(s){c(s.currentTarget.value)},value:a})})]})},Y=function(s){var e=s.img.map((function(s){return(0,u.jsx)(E,{img:s.img})}));return s.profile?(0,u.jsxs)("div",{className:I,children:[(0,u.jsxs)("div",{className:M,children:[(0,u.jsx)("h4",{children:s.profile.fullName}),(0,u.jsx)("div",{}),(0,u.jsx)("div",{className:S,children:"\u0412 \u0441\u0435\u0442\u0438"})]}),(0,u.jsxs)("div",{className:w,children:[(0,u.jsx)("img",{src:s.profile.photos.large}),(0,u.jsxs)("div",{className:C,children:[(0,u.jsx)("div",{className:A,children:s.profile.fullName}),(0,u.jsx)("div",{className:D,children:(0,u.jsx)(W,{status:s.status,updateStatus:s.updateStatus})}),(0,u.jsxs)("div",{className:q,children:[(0,u.jsx)("div",{children:(0,u.jsx)("h5",{children:"Age:"})}),(0,u.jsx)("p",{children:"xx"})]}),(0,u.jsx)("div",{className:U,children:(0,u.jsx)("h5",{children:"Murad's photos"})}),(0,u.jsxs)("div",{className:z,children:[(0,u.jsx)("p",{children:"Watch all"}),e]})]})]})]}):(0,u.jsx)(f.Z,{})},T=function(s){return(0,u.jsxs)("div",{className:y,children:[(0,u.jsx)(Y,{profile:s.profile,img:s.img,status:s.status,updateStatus:s.updateStatus}),(0,u.jsx)(Z,{})]})},V=t(7689),$=t(7781),G=t(7193),L=function(s){(0,o.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){var s=this.props.router.params.userId;s||(s=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,u.jsx)(T,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(l.Component);var O=(0,$.qC)((0,k.$j)((function(s){return{status:s.profilePage.status,profile:s.profilePage.profile,img:s.profilePage.imgData,autorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{setUserProfile:c.$l,getProfile:c.Ai,getStatus:c.lR,updateStatus:c.Nf}),(function(s){return function(e){var t=(0,V.TH)(),n=(0,V.s0)(),r=(0,V.UO)();return(0,u.jsx)(s,(0,i.Z)((0,i.Z)({},e),{},{router:{location:t,navigate:n,params:r}}))}}),G.D)(L)},7193:function(s,e,t){t.d(e,{D:function(){return f}});var i=t(8683),n=t(5671),r=t(3144),o=t(136),a=t(516),l=t(2791),c=t(7689),d=t(8687),u=t(184),p=function(s){return{isAuth:s.auth.isAuth}},f=function(s){var e=function(e){(0,o.Z)(l,e);var t=(0,a.Z)(l);function l(){return(0,n.Z)(this,l),t.apply(this,arguments)}return(0,r.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,u.jsx)(s,(0,i.Z)({},this.props)):(0,u.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,d.$j)(p)(e)}}}]);
//# sourceMappingURL=934.2dfadcc9.chunk.js.map