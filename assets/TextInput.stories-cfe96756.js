import{c as o,j as a,B as n,T as c}from"./index-8a44494e.js";import"./index-d6cadd51.js";import"./_commonjsHelpers-725317a4.js";const p={title:"Form/Text Input",component:o,args:{placeholder:"Type something..."}},e={decorators:[t=>a.jsxs(n,{tag:"label",className:"flex flex-col gap-2",children:[a.jsx(c,{variants:"sm",children:"Email address"}),t()]})]},r={args:{disabled:!0}},s={args:{prefix:"devanessa.com/"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Box tag={'label'} className="flex flex-col gap-2">
          <Text variants="sm">Email address</Text>
          {Story()}
        </Box>;
  }]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'devanessa.com/'
  }
}`,...s.parameters?.docs?.source}}};const l=["Primary","Disabled","WithPrefix"];export{r as Disabled,e as Primary,s as WithPrefix,l as __namedExportsOrder,p as default};
