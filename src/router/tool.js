const ToolSchema = r => require.ensure([], () => r(require('../views/tool/schemaDeduction/schema')), 'ToolSchema')

export default [
  {
    path: 'toolschema',
    name: 'toolschema',
    component: ToolSchema,
    meta: { title:"推演", requireAuth: true,permissionName:"" }
  }
];
