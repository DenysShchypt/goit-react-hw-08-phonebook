"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[208],{8208:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,i,o=r(2715),a=r(1413),s=r(5705),u=r(8007),c=r(9434),l=r(3634),d=r(6916),m=function(n){return n.contacts.items},x=function(n){return n.contacts.isLoading},f=(0,d.P1)([m,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return""===e.trim()?n:n.name.toLowerCase().includes(e.toLowerCase())}))})),h=r(824),p=r(5350),g=r(7438),j=r(7236),b=r(3004),v=r(9055),w=r(184),y=u.Ry().shape({name:u.Z_().min(2,"Too Short!").max(30,"Too Long!").required("This name is required"),number:u.Z_().matches(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,"It`s wrong phone!").min(5,"Too Short!").max(15,"Too Long!").required("This number is required")}),I=function(){var n=(0,c.I0)(),e=(0,c.v9)(m);return(0,w.jsx)(s.J9,{initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(r,t){e.some((function(n){return n.name.trim()===r.name.trim()}))?alert("".concat(r.name," is already in contacts")):n((0,l.uK)(r)),t.resetForm()},children:function(n){return(0,w.jsx)(h.xu,{w:"50%",marginLeft:"auto",marginRight:"auto",paddingTop:"40px",children:(0,w.jsxs)(s.l0,{children:[(0,w.jsx)(s.gN,{name:"name",children:function(n){var e=n.field,r=n.form;return(0,w.jsxs)(p.NI,{isInvalid:r.errors.name&&r.touched.name,children:[(0,w.jsx)(g.l,{children:"Name"}),(0,w.jsx)(j.I,(0,a.Z)((0,a.Z)({},e),{},{type:"text",name:"name",borderRadius:"full",focusBorderColor:"black"})),(0,w.jsx)(b.J1,{children:r.errors.name})]})}}),(0,w.jsx)(s.gN,{name:"number",children:function(n){var e=n.field,r=n.form;return(0,w.jsxs)(p.NI,{isInvalid:r.errors.number&&r.touched.number,children:[(0,w.jsx)(g.l,{children:"Number"}),(0,w.jsx)(j.I,(0,a.Z)((0,a.Z)({},e),{},{type:"tel",name:"number",borderRadius:"full",focusBorderColor:"black"})),(0,w.jsx)(b.J1,{children:r.errors.number})]})}}),(0,w.jsx)(v.z,{marginTop:"3",colorScheme:"teal",variant:"outline",type:"submit",children:"Add contact"})]})})}})},k=r(6895),C=r(9589),Z=r(168),L=r(6487),T=L.ZP.ul(t||(t=(0,Z.Z)(["\n list-style: none;\n display:flex;\n flex-wrap:wrap;\n gap: 20px;\n justify-content:center;\n margin-top:30px;\n "]))),S=L.ZP.li(i||(i=(0,Z.Z)(["\ndisplay:flex;\ntext-align:center;\nalign-items:center;\nwidth:400px;\npadding:6px 10px;\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\nborder-radius: ",";\nborder: 1px solid ",";\nfont-weight: 500;\nfont-size: 16px;\nline-height: 1;\nletter-spacing: 0.02em;\nmargin-bottom: 10px;\n "])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.black})),R=function(){var n=(0,c.I0)(),e=(0,c.v9)(f);return(0,w.jsx)(T,{children:e.map((function(e){return(0,w.jsxs)(S,{children:[(0,w.jsxs)(o.x,{as:"b",fontSize:"22px",children:[e.name,": ",e.number," "]}),(0,w.jsx)(v.z,{marginLeft:"auto",colorScheme:"teal",variant:"outline",type:"button",onClick:function(){return n((0,l.GK)(e.id))},children:"Delete"})]},e.id)}))})},q=function(){var n=(0,c.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(h.xu,{w:"60%",marginLeft:"auto",marginRight:"auto",paddingTop:"30px",children:[(0,w.jsx)(C.X,{fontSize:"40px",textAlign:"center",children:"Contacts"}),(0,w.jsx)(g.l,{children:"Find contacts by name"}),(0,w.jsx)(j.I,{focusBorderColor:"black",borderRadius:"full",type:"text",onChange:function(e){return n((0,k.e)(e.target.value))}})]}),(0,w.jsx)(R,{})]})},N=r(2791),_=r(4270);function z(){var n=(0,c.I0)(),e=(0,c.v9)(x);return(0,N.useEffect)((function(){n((0,l.yF)())}),[n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_.q,{children:(0,w.jsx)("title",{children:"Your contacts"})}),(0,w.jsx)(I,{}),(0,w.jsx)(o.x,{as:"b",marginLeft:"30px",children:e&&"Request in progress..."}),(0,w.jsx)(q,{})]})}}}]);
//# sourceMappingURL=208.f1a9f367.chunk.js.map