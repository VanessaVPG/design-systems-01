import{I as p,r as k,a as h,j as d}from"./index-8a44494e.js";import{R as e,a as y}from"./index-d6cadd51.js";import"./_commonjsHelpers-725317a4.js";var n=new Map;n.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});n.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});n.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});n.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});n.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});n.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var g=function(c,u){return k(c,u,n)},m=y.forwardRef(function(r,c){return e.createElement(p,Object.assign({ref:c},r,{renderPath:g}))});m.displayName="ArrowRight";const f=m,j={title:"Form/Button",component:h,args:{variant:"primary",children:"Send"},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["small","medium"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{actions:"clicked"}}},t={},o={args:{variant:"primary",children:"Small Button",size:"small"}},a={args:{variant:"secondary",children:"Create"}},s={args:{variant:"tertiary",children:"Cancel"}},i={args:{children:d.jsxs(d.Fragment,{children:["Próximo passo",d.jsx(f,{weight:"bold"})]})}},l={args:{disabled:!0,children:"Desabilitado"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Small Button',
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Desabilitado'
  }
}`,...l.parameters?.docs?.source}}};const W=["Primary","Small","Secondary","Tertiary","WithIcon","Disabled"];export{l as Disabled,t as Primary,a as Secondary,o as Small,s as Tertiary,i as WithIcon,W as __namedExportsOrder,j as default};
